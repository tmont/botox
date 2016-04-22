'use strict';

const fs = require('fs');
const path = require('path');
const async = require('async');
const inflection = require('inflection');

function readFiles(next) {
	const dir = path.join(__dirname, 'scrapers', 'types');
	fs.readdir(dir, (err, files) => {
		files = (files || []).map((file) => {
			return path.join(dir, file);
		});

		next(err, files);
	});
}

function createTypes(files, next) {
	const objDir = path.join(__dirname, 'src', 'gen', 'types');

	function camelize(str) {
		return str.replace(/^[A-Z]+/, (match) => {
			return match.toLowerCase();
		});
	}

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
	 * @return {${className}}
	 */
	${camelize(prop.name)}: function(value) {
		return this.set('${prop.name}', value);
	},`;
		}).join('\n');

		const code = `/**
 * ${json.description}
 * @constructor
 */
function ${className}() {
	this.data = {};
}

${className}.prototype = {
	${methods}

	set: function(key, value) {
		this.data[key] = value;
		return this;
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

	async.each(files, createType, next);
}

async.waterfall([readFiles, createTypes], (err) => {
	err && console.error(err);
	process.exit(err ? 1 : 0);
});
