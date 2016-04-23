var Resource = require('../../resource');

/**
 * AWS::DirectoryService::SimpleAD - The AWS::DirectoryService::SimpleAD resource creates an AWS Directory Service Simple Active Directory (Simple AD) in AWS so that your directory users and groups can access the AWS Management Console and AWS applications using their existing credentials. Simple AD is a Microsoft Active Directory–compatible directory. For more information, see What Is AWS Directory Service? in the AWS Directory Service Administration Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function DirectoryServiceSimpleAD(name) {
	Resource.call(this, name, 'AWS::DirectoryService::SimpleAD');
}

DirectoryServiceSimpleAD.prototype = Object.create(Resource.prototype);

/**
 * AWS::DirectoryService::SimpleAD attribute map
 * @typedef {Object} DirectoryServiceSimpleADAttributeMap
 * @property {Attribute} alias The alias for a directory. For example: d-12373a053a or alias4-mydirectory-12345abcgmzsk (if you have the CreateAlias property set to true).
 * @property {Attribute} dnsIpAddresses The IP addresses of the DNS servers for the directory, such as [ "172.31.3.154", "172.31.63.203" ].
 */
Object.defineProperty(DirectoryServiceSimpleAD.prototype, 'attr', {
	/**
	 * @return {DirectoryServiceSimpleADAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * The alias for a directory. For example: d-12373a053a or alias4-mydirectory-12345abcgmzsk (if you have the CreateAlias property set to true).
			 * @return {Attribute}
			 */
			get alias() {
				return createAttribute('Alias');
			},

			/**
			 * The IP addresses of the DNS servers for the directory, such as [ "172.31.3.154", "172.31.63.203" ].
			 * @return {Attribute}
			 */
			get dnsIpAddresses() {
				return createAttribute('DnsIpAddresses');
			}
		};
	}
});

/**
 * A unique alias to assign to the directory. AWS Directory Service uses the alias to construct the access URL for the directory, such as http://alias.awsapps.com. By default, AWS CloudFormation does not create an alias.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {DirectoryServiceSimpleAD}
 */
DirectoryServiceSimpleAD.prototype.createAlias = function(value) {
	return this.set('CreateAlias', value);
};

/**
 * A description of the directory.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {DirectoryServiceSimpleAD}
 */
DirectoryServiceSimpleAD.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * Whether to enable single sign-on for a directory. If you don't specify a value, AWS CloudFormation disables single sign-on by default.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {DirectoryServiceSimpleAD}
 */
DirectoryServiceSimpleAD.prototype.enableSso = function(value) {
	return this.set('EnableSso', value);
};

/**
 * The fully qualified name for the directory, such as corp.example.com.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {DirectoryServiceSimpleAD}
 */
DirectoryServiceSimpleAD.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The password for the directory administrator. AWS Directory Service creates a directory administrator account with the user name Administrator and this password.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {DirectoryServiceSimpleAD}
 */
DirectoryServiceSimpleAD.prototype.password = function(value) {
	return this.set('Password', value);
};

/**
 * The NetBIOS name of the on-premises directory, such as CORP.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {DirectoryServiceSimpleAD}
 */
DirectoryServiceSimpleAD.prototype.shortName = function(value) {
	return this.set('ShortName', value);
};

/**
 * The size of the directory. For valid values, see CreateDirectory in the AWS Directory Service API Reference.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {DirectoryServiceSimpleAD}
 */
DirectoryServiceSimpleAD.prototype.size = function(value) {
	return this.set('Size', value);
};

/**
 * Specifies the VPC settings of the directory server.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {AWSDirectoryServiceSimpleADVpcSettings|Attribute|Reference} value
 * @return {DirectoryServiceSimpleAD}
 */
DirectoryServiceSimpleAD.prototype.vpcSettings = function(value) {
	return this.set('VpcSettings', value);
};

module.exports = DirectoryServiceSimpleAD;
