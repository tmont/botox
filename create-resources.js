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

	function camelize(str) {
		return str.replace(/^[A-Z]+/, (match) => {
			return match.toLowerCase();
		});
	}

	function createResource(file, next) {
		const json = require(file);
		const className = json.category + json.name;

		const methods = json.properties.map((prop) => {
			return `
	/**
	 * ${prop.description}
	 *
	 * Required: ${prop.required}
	 * Update requires: ${prop.update}
	 *
	 * @param {${prop.type}} value
	 * @return {${className}}
	 */
	${camelize(prop.name)}: function(value) {
		return this.set('${prop.name}', value);
	},`;
		}).join('\n');

		const attributes = json.attributes.map((attr) => {
			const methodName = camelize(attr.name.replace(/\W/g, ''));
			return `
			/**
			 * ${attr.description}
			 */
			${methodName}: function() {
				return new Attribute(resourceName, '${attr.name}');
			}`;
		}).join(',\n');

		let attributeBody = `throw new Error('${json.fullName} has no attributes');`;
		if (attributes) {
			attributeBody = `var resourceName = this.name;
		return {
			${attributes}
		};`;
		}

		const code = `var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * ${json.fullName} - ${json.description}
 * @constructor
 * @param {String} name Name of the resource
 */
function ${className}(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

${className}.prototype = {
	${methods}

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		${attributeBody}
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = ${className};
`;

		fs.writeFile(path.join(objDir, className + '.js'), code, next);
	}

	async.each(files, createResource, next);
}

async.waterfall([ readFiles, createResources ], (err) => {
	err && console.error(err);
	process.exit(err ? 1 : 0);
});
