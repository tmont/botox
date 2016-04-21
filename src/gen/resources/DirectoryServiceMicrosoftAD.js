var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::DirectoryService::MicrosoftAD - The AWS::DirectoryService::MicrosoftAD resource creates a Microsoft Active Directory in AWS so that your directory users and groups can access the AWS Management Console and AWS applications using their existing credentials. For more information, see What Is AWS Directory Service? in the AWS Directory Service Administration Guide.
 * @constructor
 */
function DirectoryServiceMicrosoftAD(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

DirectoryServiceMicrosoftAD.prototype = {
	
	/**
	 * A unique alias to assign to the Microsoft Active Directory in AWS. AWS Directory Service uses the alias to construct the access URL for the directory, such as http://alias.awsapps.com. By default, AWS CloudFormation does not create an alias.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {Boolean} value
	 * @return {DirectoryServiceMicrosoftAD}
	 */
	createAlias: function(value) {
		return this.set('CreateAlias', value);
	},

	/**
	 * Whether to enable single sign-on for a Microsoft Active Directory in AWS. Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately. If you don't specify a value, AWS CloudFormation disables single sign-on by default.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {DirectoryServiceMicrosoftAD}
	 */
	enableSso: function(value) {
		return this.set('EnableSso', value);
	},

	/**
	 * The fully qualified name for the Microsoft Active Directory in AWS, such as corp.example.com. The name doesn't need to be publicly resolvable; it will resolve inside your VPC only.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {DirectoryServiceMicrosoftAD}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The password for the default administrative user, Admin.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {DirectoryServiceMicrosoftAD}
	 */
	password: function(value) {
		return this.set('Password', value);
	},

	/**
	 * The NetBIOS name for your domain, such as CORP. If you don't specify a value, AWS Directory Service uses the first part of your directory DNS server name. For example, if your directory DNS server name is corp.example.com, AWS Directory Service specifies CORP for the NetBIOS name.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {DirectoryServiceMicrosoftAD}
	 */
	shortName: function(value) {
		return this.set('ShortName', value);
	},

	/**
	 * Specifies the VPC settings of the Microsoft Active Directory server in AWS.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {AWSDirectoryServiceMicrosoftADVpcSettings} value
	 * @return {DirectoryServiceMicrosoftAD}
	 */
	vpcSettings: function(value) {
		return this.set('VpcSettings', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var resourceName = this.name;
		return {
			
			/**
			 * The alias for a directory. For example: d-12373a053a or alias4-mydirectory-12345abcgmzsk (if you have the CreateAlias property set to true).
			 */
			alias: function() {
				return new Attribute(resourceName, 'Alias');
			},

			/**
			 * The IP addresses of the DNS servers for the directory, such as [ "192.0.2.1", "192.0.2.2" ].
			 */
			dnsIpAddresses: function() {
				return new Attribute(resourceName, 'DnsIpAddresses');
			}
		};
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

module.exports = DirectoryServiceMicrosoftAD;
