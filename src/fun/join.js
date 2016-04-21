/**
 * Joins a bunch of things on a delimiter
 * @constructor
 */
function Join(things, delimiter) {
	this.delimiter = delimiter || '';
	this.things = things;
}

Join.prototype = {
	toJSON: function() {
		return {
			'Fn::Join': [ this.delimiter, this.things ]
		};
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = Join;
