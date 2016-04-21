var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::CloudFormation::Authentication - Use the AWS::CloudFormation::Authentication resource to specify authentication credentials for files or sources that you specify with the AWS::CloudFormation::Init resource.
 * @constructor
 */
function CloudFormationAuthentication(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

CloudFormationAuthentication.prototype = {
	
	/**
	 * Specifies the access key ID for S3 authentication.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {CloudFormationAuthentication}
	 */
	accessKeyId: function(value) {
		return this.set('accessKeyId', value);
	},

	/**
	 * A comma-delimited list of Amazon S3 buckets to be associated with the S3 authentication credentials.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {string[]} value
	 * @return {CloudFormationAuthentication}
	 */
	buckets: function(value) {
		return this.set('buckets', value);
	},

	/**
	 * Specifies the password for basic authentication.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {CloudFormationAuthentication}
	 */
	password: function(value) {
		return this.set('password', value);
	},

	/**
	 * Specifies the secret key for S3 authentication.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {CloudFormationAuthentication}
	 */
	secretKey: function(value) {
		return this.set('secretKey', value);
	},

	/**
	 * Specifies whether the authentication scheme uses a user name and password ("basic") or an access key ID and secret key ("S3").
	 *
	 * Required: true
	 * Update requires: undefined
	 *
	 * @param {StringValidvaluesarebasicorS3} value
	 * @return {CloudFormationAuthentication}
	 */
	type: function(value) {
		return this.set('type', value);
	},

	/**
	 * A comma-delimited list of URIs to be associated with the basic authentication credentials. The authorization applies to the specified URIs and any more specific URI. For example, if you specify http://www.example.com, the authorization will also apply to http://www.example.com/test.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {string[]} value
	 * @return {CloudFormationAuthentication}
	 */
	uris: function(value) {
		return this.set('uris', value);
	},

	/**
	 * Specifies the user name for basic authentication.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {CloudFormationAuthentication}
	 */
	username: function(value) {
		return this.set('username', value);
	},

	/**
	 * Describes the role for role-based authentication.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {CloudFormationAuthentication}
	 */
	roleName: function(value) {
		return this.set('roleName', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::CloudFormation::Authentication has no attributes');
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

module.exports = CloudFormationAuthentication;
