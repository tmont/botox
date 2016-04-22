var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::S3::BucketPolicy - The AWS::S3::BucketPolicy type applies an Amazon S3 bucket policy to an Amazon S3 bucket.
 * @constructor
 * @param {String} name Name of the resource
 */
function S3BucketPolicy(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

S3BucketPolicy.prototype = {
	
	/**
	 * The Amazon S3 bucket that the policy applies to.
	 *
	 * Required: true
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {S3BucketPolicy}
	 */
	bucket: function(value) {
		return this.set('Bucket', value);
	},

	/**
	 * A policy document containing permissions to add to the specified bucket. For more information, see Access Policy Language Overview in the Amazon Simple Storage Service Developer Guide.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {JSONobject} value
	 * @return {S3BucketPolicy}
	 */
	policyDocument: function(value) {
		return this.set('PolicyDocument', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::S3::BucketPolicy has no attributes');
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

module.exports = S3BucketPolicy;
