var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::SSM::Document - The AWS::SSM::Document resource creates an Amazon EC2 Simple Systems Manager (SSM) document that describes an instance configuration, which you can use to set up and run commands on your instances.
 * @constructor
 */
function SSMDocument(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

SSMDocument.prototype = {
	
	/**
	 * A JSON object that describes an instance configuration. For more information, see SSM Documents in the Amazon EC2 Simple Systems Manager API Reference.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {JSONobject} value
	 * @return {SSMDocument}
	 */
	content: function(value) {
		return this.set('Content', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::SSM::Document has no attributes');
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

module.exports = SSMDocument;
