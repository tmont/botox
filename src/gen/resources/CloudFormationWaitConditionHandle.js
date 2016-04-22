var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::CloudFormation::WaitConditionHandle - Important
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFormationWaitConditionHandle(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

CloudFormationWaitConditionHandle.prototype = {
	

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::CloudFormation::WaitConditionHandle has no attributes');
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

module.exports = CloudFormationWaitConditionHandle;
