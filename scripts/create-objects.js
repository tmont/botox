'use strict';

const fs = require('fs');
const path = require('path');
const async = require('async');
const inflection = require('inflection');

const rootDir = path.resolve(__dirname, '..');
const genDir = path.join(rootDir, 'src', 'gen');
const indexFile = path.join(rootDir, 'index.js');
const context = {};
const sugarCache = {
	template: 1,
	parameter: 1,
	output: 1,
	condition: 1,

	join: 1,
	base64: 1,
	select: 1,
	findInMap: 1,
	getAZs: 1,

	and: 1,
	or: 1,
	equals: 1,
	not: 1,
	$if: 1,

	region: 1,
	accountId: 1,
	notificationARNs: 1,
	noValue: 1,
	stackId: 1,
	stackName: 1
};

function camelize(str) {
	return str.replace(/^[A-Z]+/, (match) => {
		if (match.length === str.length || match.length === 1) {
			return match.toLowerCase();
		}

		return match.substring(0, match.length - 1).toLowerCase() + match.charAt(match.length - 1);
	});
}

function addSugarToIndex(things, type, trailingComma, callback) {
	console.log(` generating ${type} syntax sugar index`);

	const params = type === 'resource' ? 'name' : '';
	const paramComment = params ? '\t * @param {String} name\n' : '';
	const code = things.map((thing) => {
		return `
	/**
	 * ${thing.description}
${paramComment}\t * @returns {${thing.className}}
	 */
	${thing.prop}: function(${params}) {
		return new ${thing.jsClassName}(${params});
	}`;
	}).join(',\n') + (trailingComma ? ',' : '');

	fs.readFile(indexFile, {encoding: 'utf8'}, (err, contents) => {
		if (err) {
			next(err);
			return;
		}

		const regex = new RegExp(`(//@@start ${type} sugar)[\\s\\S]+(//@@end ${type} sugar)`);
		contents = contents.replace(regex, (_, start, end) => {
			return start + '\n' + code + '\n\t' + end;
		});

		fs.writeFile(indexFile, contents, callback);
	});
}

function createResources(next) {
	console.log('creating resources...');
	function readFiles(next) {
		const dir = path.join(__dirname, 'scrapers', 'resources');
		console.log(` reading files in ${dir}`);
		fs.readdir(dir, (err, files) => {
			files = (files || []).map((file) => {
				return path.join(dir, file);
			});

			console.log(`  found ${files.length} files`);
			next(err, files);
		});
	}

	function createClasses(files, next) {
		console.log(` generating classes from ${files.length} files`);
		const objDir = path.join(genDir, 'resources');
		const resourceMap = context.resourceMap = {};
		context.resources = [];

		function createResource(file, next) {
			const json = require(file);
			const className = json.category + json.name;
			const propertyPrefix = `${className}.prototype`;

			const methods = json.properties.map((prop) => {
				const types = [ prop.type, 'Attribute', 'Reference'].filter(Boolean);
				if (prop.type === 'String') {
					types.push('Join');
				}

				const typeDesc = prop.typeDescription.length > 20 && prop.typeDescription !== prop.type ?
					' ' + prop.typeDescription :
					'';

				return `
/**
 * ${prop.description}
 *
 * Required: ${prop.required}
 * Update requires: ${prop.update}
 *
 * @param {${types.join('|')}} value${typeDesc}
 * @returns {${className}}
 */
${propertyPrefix}.${camelize(prop.name)} = function(value) {
	return this.set('${prop.name}', value);
};`;
			}).join('\n');

			const attributes = json.attributes
				.sort((a, b) => {
					return a.name.localeCompare(b.name);
				})
				.map((attr) => {
					const propName = camelize(attr.name.replace(/\W/g, ''));
					return `
	/**
	 * ${attr.description}
	 * @type {Attribute}
	 */
	get ${propName}() {
		return new Attribute(this.resource, '${attr.name}');
	}`;
				})
				.join(',\n');

			let attributeStuff = '';
			if (attributes) {
				attributeStuff = `
/**
 * ${json.fullName} attributes
 * @constructor
 * @param {Resource} resource
 */
function ${className}Attributes(resource) {
	this.resource = resource;
}
${className}Attributes.prototype = {
	${attributes.trim()}
};

/**
 * Gets attribute map for ${json.fullName}
 * @returns {${className}Attributes}
 */
${className}.prototype.attr = function() {
	return new ${className}Attributes(this);
};

`;
			}

			const needsCreationPolicy = {
				'AWS::AutoScaling::AutoScalingGroup': 1,
				'AWS::EC2::Instance': 1,
				'AWS::CloudFormation::WaitCondition': 1
			}[json.fullName];

			const needsUpdatePolicy = {
				'AWS::AutoScaling::AutoScalingGroup': 1
			}[json.fullName];

			const creationPolicyMethod = !needsCreationPolicy ? '' : `
/**
 * Sets a CreationPolicy for this resource
 * @param {CreationPolicy} creationPolicy
 * @returns {${className}}
 */
${className}.prototype.creationPolicy = function(creationPolicy) {
	return this.setResourceAttribute('CreationPolicy', creationPolicy);
};`;

			const updatePolicyMethod = !needsUpdatePolicy ? '' : `
/**
 * Sets an UpdatePolicy for this resource
 * @param {UpdatePolicy} updatePolicy
 * @returns {${className}}
 */
${className}.prototype.updatePolicy = function(updatePolicy) {
	return this.setResourceAttribute('UpdatePolicy', updatePolicy);
};`;

			const attributeRequire = attributeStuff ? 'var Attribute = require(\'../../fun/attribute\');' : '';
			const code = `var Resource = require('../../resource');
${attributeRequire}

/**
 * ${json.fullName} - ${json.description}
 * @see {@link ${json.referenceUrl}}
 * @constructor
 * @param {String} name Name of the resource
 */
function ${className}(name) {
	Resource.call(this, name, '${json.fullName}');
}

${className}.prototype = Object.create(Resource.prototype);
${methods}
${creationPolicyMethod}
${updatePolicyMethod}
${attributeStuff}

module.exports = ${className};
`.replace(/\n{3,}/g, '\n\n');

			const targetFile = path.join(objDir, className + '.js');
			if (!resourceMap[json.category]) {
				resourceMap[json.category] = [];
			}
			resourceMap[json.category].push({file: targetFile, obj: json, name: json.name});
			context.resources.push({ obj: json, file: targetFile });
			fs.writeFile(targetFile, code, next);
		}

		async.each(files, createResource, (err) => {
			next(err);
		});
	}

	function createIndex(next) {
		console.log(' generating index');
		const resourceMap = context.resourceMap;
		const indexFile = path.join(genDir, 'resources', 'index.js');
		const categories = Object.keys(resourceMap).sort();
		const resourceProps = categories.map((category) => {
			const resources = resourceMap[category].sort((a, b) => {
				return a.name.localeCompare(b.name);
			});

			const requires = resources.map((resource) => {
				const file = '.' + resource.file.substring(path.dirname(indexFile).length);
				return `${resource.name}: require('${file}')`;
			});

			return `${category}: {\n\t\t` + requires.join(',\n\t\t') + '\n\t}';
		}).join(',\n\t');

		const code = `module.exports = {
	${resourceProps}
};
`;

		console.log(`  writing to ${indexFile}`);
		fs.writeFile(indexFile, code, next);
	}

	function createSyntaxSugarIndex(next) {
		const resources = context.resources
			.map((resource) => {
				let prop = camelize(resource.obj.name);
				if (sugarCache[prop]) {
					prop = camelize(resource.obj.category + resource.obj.name);
				}

				sugarCache[prop] = 1;

				return {
					file: resource.file,
					description: resource.obj.description,
					prop: prop,
					fullName: resource.obj.fullName,
					className: resource.obj.category + resource.obj.name,
					jsClassName: 'Resources.' + resource.obj.category + '.' + resource.obj.name
				};
			})
			.sort((a, b) => {
				return a.prop.localeCompare(b.prop);
			});

		addSugarToIndex(resources, 'resource', true, next);
	}

	async.waterfall([ readFiles, createClasses, createIndex, createSyntaxSugarIndex ], next);
}

function createTypes(next) {
	console.log('creating types...');
	function readFiles(next) {
		const dir = path.join(__dirname, 'scrapers', 'types');
		console.log(` reading files in ${dir}`);
		fs.readdir(dir, (err, files) => {
			files = (files || []).map((file) => {
				return path.join(dir, file);
			});

			console.log(`  found ${files.length} files`);
			next(err, files);
		});
	}

	function createClasses(files, next) {
		console.log(` generating classes from ${files.length} files`);
		const typeMap = context.typeMap = [];
		const objDir = path.join(genDir, 'types');

		function createType(file, next) {
			const json = require(file);
			const className = json.name;

			const methods = json.properties.map((prop) => {
				return `
/**
 * ${prop.description}
 *
 * Required: ${prop.required}
 *
 * @param {${prop.type}} value
 * @returns {${className}}
 */
${className}.prototype.${camelize(prop.name)} = function(value) {
	return this.set('${prop.name}', value);
};`;
			}).join('\n');

			const code = `var PropertyType = require('../../property-type');

/**
 * ${json.description}
 * @see {@link ${json.referenceUrl}}
 * @constructor
 */
function ${className}() {
	PropertyType.call(this);
}

${className}.prototype = Object.create(PropertyType.prototype);

${methods}

module.exports = ${className};
`.replace(/\n{3,}/g, '\n\n');

			const targetFile = path.join(objDir, className + '.js');
			typeMap.push({ file: targetFile, obj: json, name: json.name, className: className });
			fs.writeFile(targetFile, code, next);
		}

		async.each(files, createType, next);
	}

	function createIndex(next) {
		console.log(' creating index');
		const typeMap = context.typeMap.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});

		const indexFile = path.join(genDir, 'types', 'index.js');
		const typeProps = typeMap.map((type) => {
			const file = '.' + type.file.substring(path.dirname(indexFile).length);
			return `${type.name}: require('${file}')`;
		}).join(',\n\t');

		const code = `module.exports = {
	${typeProps}
};
`;

		console.log(`  writing to ${indexFile}`);
		fs.writeFile(indexFile, code, next);
	}

	function createSyntaxSugarIndex(next) {
		const types = context.typeMap
			.map((type) => {
				let prop = camelize(type.name);
				sugarCache[prop] = 1;

				return {
					description: type.obj.description,
					prop: prop,
					className: type.className,
					jsClassName: 'Types.' + type.className
				};
			})
			.sort((a, b) => {
				return a.prop.localeCompare(b.prop);
			});

		addSugarToIndex(types, 'type', true, next);
	}

	async.waterfall([ readFiles, createClasses, createIndex, createSyntaxSugarIndex ], next);
}

function createAttributes(next) {
	console.log('creating resource attributes...');
	function readFiles(next) {
		const dir = path.join(__dirname, 'scrapers', 'attributes');
		console.log(` reading files in ${dir}`);
		fs.readdir(dir, (err, files) => {
			files = (files || []).map((file) => {
				return path.join(dir, file);
			});

			console.log(`  found ${files.length} files`);
			next(err, files);
		});
	}

	function createClasses(files, next) {
		console.log(` generating classes from ${files.length} files`);
		const attrMap = context.attrMap = [];
		const objDir = path.join(genDir, 'attributes');

		function createAttribute(file, next) {
			const json = require(file);
			const className = json.name;

			const methods = json.properties.map((prop) => {
				return `
/**
 * ${prop.description}
 *
 * Required: ${prop.required}
 *
 * @param {${prop.type}} value
 * @returns {${className}}
 */
${className}.prototype.${camelize(prop.name)} = function(value) {
	return this.set('${prop.propertyType}', '${prop.name}', value);
};`;
			}).join('\n');

			const code = `var ResourceAttribute = require('../../resource-attribute');

/**
 * ${json.description}
 * @see {@link ${json.referenceUrl}}
 * @constructor
 */
function ${className}() {
	ResourceAttribute.call(this);
}

${className}.prototype = Object.create(ResourceAttribute.prototype);

${methods}

module.exports = ${className};
`.replace(/\n{3,}/g, '\n\n');

			const targetFile = path.join(objDir, className + '.js');
			attrMap.push({file: targetFile, obj: json, name: json.name, className: className});
			fs.writeFile(targetFile, code, next);
		}

		async.each(files, createAttribute, next);
	}

	function createIndex(next) {
		console.log(' creating index');
		const attrMap = context.attrMap.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});

		const indexFile = path.join(genDir, 'attributes', 'index.js');
		const typeProps = attrMap.map((attr) => {
			const file = '.' + attr.file.substring(path.dirname(indexFile).length);
			return `${attr.name}: require('${file}')`;
		}).join(',\n\t');

		const code = `module.exports = {
	${typeProps}
};
`;

		console.log(`  writing to ${indexFile}`);
		fs.writeFile(indexFile, code, next);
	}

	function createSyntaxSugarIndex(next) {
		const attrs = context.attrMap
			.map((attr) => {
				let prop = camelize(attr.name);
				if (sugarCache[prop]) {
					throw new Error(`Sugar syntax property already exists for ${prop} (${attr.name})`);
				}

				sugarCache[prop] = 1;

				return {
					description: attr.obj.description,
					prop: prop,
					className: attr.className,
					jsClassName: 'Attributes.' + attr.className
				};
			})
			.sort((a, b) => {
				return a.prop.localeCompare(b.prop);
			});

		addSugarToIndex(attrs, 'attr', false, next);
	}

	async.waterfall([readFiles, createClasses, createIndex, createSyntaxSugarIndex], next);
}

async.series([ createResources, createTypes, createAttributes ], (err) => {
	console.log('all done!');
	err && console.error(err);
	err && err.stack && console.error(err.stack);
	process.exit(err ? 1 : 0);
});
