var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::CloudFormation::CustomResource - In an AWS CloudFormation template, you use the AWS::CloudFormation::CustomResource or Custom::String resource type to specify custom resources.
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFormationCustomResource(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

CloudFormationCustomResource.prototype = {
	
	/**
	 * The service token that was given to the template developer by the service provider to access the service, such as an Amazon SNS topic ARN or Lambda function ARN. The service token must be from the same region in which you are creating the stack.
	 *
	 * Required: true
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {CloudFormationCustomResource}
	 */
	serviceToken: function(value) {
		return this.set('ServiceToken', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::CloudFormation::CustomResource has no attributes');
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

module.exports = CloudFormationCustomResource;
