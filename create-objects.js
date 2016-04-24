'use strict';

const fs = require('fs');
const path = require('path');
const async = require('async');
const inflection = require('inflection');

const context = {};

function camelize(str) {
	return str.replace(/^[A-Z]+/, (match) => {
		if (match.length === str.length || match.length === 1) {
			return match.toLowerCase();
		}

		return match.substring(0, match.length - 1).toLowerCase() + match.charAt(match.length - 1);
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
		const objDir = path.join(__dirname, 'src', 'gen', 'resources');
		const resourceMap = context.resourceMap = {};
		context.resources = [];

		function createResource(file, next) {
			const json = require(file);
			const className = json.category + json.name;
			const propertyPrefix = `${className}.prototype`;

			const methods = json.properties.map((prop) => {
				const types = [prop.type, 'Attribute', 'Reference'];
				if (prop.type === 'String') {
					types.push('Join');
				}

				return `
/**
 * ${prop.description}
 *
 * Required: ${prop.required}
 * Update requires: ${prop.update}
 *
 * @param {${types.join('|')}} value
 * @return {${className}}
 */
${propertyPrefix}.${camelize(prop.name)} = function(value) {
	return this.set('${prop.name}', value);
};`;
			}).join('\n');

			const attrTypeDefs = [];
			const attributes = json.attributes
				.sort((a, b) => {
					return a.name.localeCompare(b.name);
				})
				.map((attr) => {
					const propName = camelize(attr.name.replace(/\W/g, ''));
					attrTypeDefs.push(` * @property {Attribute} ${propName} ${attr.description}`);
					return `
			/**
			 * ${attr.description}
			 * @return {Attribute}
			 */
			get ${propName}() {
				return createAttribute('${attr.name}');
			}`;
				})
				.join(',\n');

			let attributeProp = '';
			if (attributes) {
				attributeProp = `
/**
 * ${json.fullName} attribute map
 * @typedef {Object} ${className}AttributeMap
${attrTypeDefs.join('\n')}
 */
Object.defineProperty(${propertyPrefix}, 'attr', {
	/**
	 * @return {${className}AttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			${attributes}
		};
	}
});`;
			}

			const code = `var Resource = require('../../resource');

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
${attributeProp}
${methods}

module.exports = ${className};
`;

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
		const indexFile = path.join(__dirname, 'src', 'gen', 'resources', 'index.js');
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
		console.log(' generating syntax sugar index');

		const cache = {
			template: 1,
			join: 1,
			base64: 1,
			resources: 1,
			types: 1,
			fun: 1
		};
		const resources = context.resources
			.map((resource) => {
				let prop = camelize(resource.obj.name);
				if (cache[prop]) {
					prop = camelize(resource.obj.category + resource.obj.name);
				}

				cache[prop] = 1;

				return {
					file: resource.file,
					description: resource.obj.description,
					prop: prop,
					fullName: resource.obj.fullName,
					className: resource.obj.category + resource.obj.name,
					jsClassName: resource.obj.category + '.' +  resource.obj.name
				};
			})
			.sort((a, b) => {
				return a.prop.localeCompare(b.prop);
			});

		const indexFile = path.join(__dirname, 'index.js');
		const code = resources.map((resource) => {
			return `
	/**
	 * ${resource.description}
	 *
	 * @param {String} name Name of the resource
	 * @return {${resource.className}}
	 */
	${resource.prop}: function(name) {
		return new Resources.${resource.jsClassName}(name);
	}`;
		}).join(',\n');

		fs.readFile(indexFile, { encoding: 'utf8' }, (err, contents) => {
			if (err) {
				next(err);
				return;
			}

			contents = contents.replace(/(\/\/@@start sugar)[\s\S]+(\/\/@@end sugar)/, (_, start, end) => {
				return start + '\n' + code + '\n\t' + end;
			});

			fs.writeFile(indexFile, contents, next);
		});
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
		const objDir = path.join(__dirname, 'src', 'gen', 'types');

		function createType(file, next) {
			const json = require(file);
			const className = json.name;
			//console.log(`  generating ${className}`);

			const methods = json.properties.map((prop) => {
				return `
	/**
	 * ${prop.description}
	 *
	 * Required: ${prop.required}
	 *
	 * @param {${prop.type}} value
	 * @return {${className}}
	 */
	${camelize(prop.name)}: function(value) {
		return this.set('${prop.name}', value);
	}`;
			}).join(',\n');

			const code = `var PropertyType = require('../../property-type');

/**
 * ${json.description}
 * @see {@link ${json.referenceUrl}}
 * @constructor
 */
function ${className}() {
	PropertyType.call(this);
}

Object.setPrototypeOf(${className}, PropertyType);

${className}.prototype = {
	${methods}
};

module.exports = ${className};
`;

			const targetFile = path.join(objDir, className + '.js');
			typeMap.push({ file: targetFile, obj: json, name: json.name });
			fs.writeFile(targetFile, code, next);
		}

		async.each(files, createType, next);
	}

	function createIndex(next) {
		console.log(' creating index');
		const typeMap = context.typeMap;
		const indexFile = path.join(__dirname, 'src', 'gen', 'types', 'index.js');
		const typeProps = typeMap.sort().map((type) => {
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

	async.waterfall([readFiles, createClasses, createIndex], next);
}

async.series([ createResources, createTypes ], (err) => {
	console.log('all done!');
	err && console.error(err);
	process.exit(err ? 1 : 0);
});
