/**
 * Creates an attribute reference, e.g. Fn::GetAtt
 * @param {String} resourceName Name of the resource
 * @param {String} attribute Name of the attribute
 * @constructor
 */
function Attribute(resourceName, attribute) {
	if (!resourceName) {
		throw new Error('resourceName is required');
	}
	if (!attribute) {
		throw new Error('attribute is required');
	}
	this.resourceName = resourceName;
	this.attribute = attribute;
}

Attribute.prototype = {
	toJSON: function() {
		return {
			'Fn::GetAtt': [ this.resourceName, this.attribute ]
		};
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = Attribute;
