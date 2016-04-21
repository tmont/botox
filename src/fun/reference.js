/**
 * Creates a reference to a resource/parameter/condition/etc.
 * @param {Object} object The resource/parameter/condition instance to reference
 * @constructor
 */
function Reference(object) {
	if (!object) {
		throw new Error('object is required');
	}
	this.ref = object;
}

Reference.prototype = {
	toJSON: function() {
		return {
			Ref: this.ref.name
		};
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = Reference;
