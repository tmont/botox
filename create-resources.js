'use strict';

const fs = require('fs');
const path = require('path');
const async = require('async');
const inflection = require('inflection');

function readFiles(next) {
	const dir = path.join(__dirname, 'scrapers', 'resources');
	fs.readdir(dir, (err, files) => {
		files = (files || []).map((file) => {
			return path.join(dir, file);
		});

		next(err, files);
	});
}

function createResources(files, next) {
	const objDir = path.join(__dirname, 'src', 'gen', 'resources');
	const resourceMap = {};

	function camelize(str) {
		return str.replace(/^[A-Z]+/, (match) => {
			return match.toLowerCase();
		});
	}

	function createResource(file, next) {
		const json = require(file);
		const className = json.category + json.name;
		const propertyPrefix = `${className}.prototype`;

		const methods = json.properties.map((prop) => {
			const types = [ prop.type, 'Attribute', 'Reference' ];
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
		resourceMap[json.category].push({ file: targetFile, obj: json, name: json.name });
		fs.writeFile(targetFile, code, next);
	}

	async.each(files, createResource, (err) => {
		next(err, resourceMap);
	});
}

function createIndex(resourceMap, next) {
	const indexFile = path.join(__dirname, 'src', 'resources.js');
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

	fs.writeFile(indexFile, code, next);
}

async.waterfall([ readFiles, createResources, createIndex ], (err) => {
	err && console.error(err);
	process.exit(err ? 1 : 0);
});
