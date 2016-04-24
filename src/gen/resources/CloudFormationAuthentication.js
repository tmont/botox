var Resource = require('../../resource');

/**
 * AWS::CloudFormation::Authentication - Use the AWS::CloudFormation::Authentication resource to specify authentication credentials for files or sources that you specify with the AWS::CloudFormation::Init resource.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-authentication.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFormationAuthentication(name) {
	Resource.call(this, name, 'AWS::CloudFormation::Authentication');
}

CloudFormationAuthentication.prototype = Object.create(Resource.prototype);


/**
 * Specifies the access key ID for S3 authentication.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudFormationAuthentication}
 */
CloudFormationAuthentication.prototype.accessKeyId = function(value) {
	return this.set('accessKeyId', value);
};

/**
 * A comma-delimited list of Amazon S3 buckets to be associated with the S3 authentication credentials.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {string[]|Attribute|Reference} value
 * @return {CloudFormationAuthentication}
 */
CloudFormationAuthentication.prototype.buckets = function(value) {
	return this.set('buckets', value);
};

/**
 * Specifies the password for basic authentication.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudFormationAuthentication}
 */
CloudFormationAuthentication.prototype.password = function(value) {
	return this.set('password', value);
};

/**
 * Specifies the secret key for S3 authentication.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudFormationAuthentication}
 */
CloudFormationAuthentication.prototype.secretKey = function(value) {
	return this.set('secretKey', value);
};

/**
 * Specifies whether the authentication scheme uses a user name and password ("basic") or an access key ID and secret key ("S3").
 *
 * Required: true
 * Update requires: undefined
 *
 * @param {String|Attribute|Reference|Join} value String Valid values are "basic" or "S3"
 * @return {CloudFormationAuthentication}
 */
CloudFormationAuthentication.prototype.type = function(value) {
	return this.set('type', value);
};

/**
 * A comma-delimited list of URIs to be associated with the basic authentication credentials. The authorization applies to the specified URIs and any more specific URI. For example, if you specify http://www.example.com, the authorization will also apply to http://www.example.com/test.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {string[]|Attribute|Reference} value
 * @return {CloudFormationAuthentication}
 */
CloudFormationAuthentication.prototype.uris = function(value) {
	return this.set('uris', value);
};

/**
 * Specifies the user name for basic authentication.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudFormationAuthentication}
 */
CloudFormationAuthentication.prototype.username = function(value) {
	return this.set('username', value);
};

/**
 * Describes the role for role-based authentication.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudFormationAuthentication}
 */
CloudFormationAuthentication.prototype.roleName = function(value) {
	return this.set('roleName', value);
};

module.exports = CloudFormationAuthentication;
