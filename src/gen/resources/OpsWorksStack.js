var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::OpsWorks::Stack - Creates an AWS OpsWorks stack. An AWS OpsWorks stack represents a set of instances that you want to manage collectively, typically because they have a common purpose such as serving PHP applications.
 * @constructor
 * @param {String} name Name of the resource
 */
function OpsWorksStack(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

OpsWorksStack.prototype = {
	
	/**
	 * The AWS OpsWorks agent version that you want to use. The agent communicates with the service and handles tasks such as initiating Chef runs in response to lifecycle events. For valid values, see the AgentVersion parameter for the CreateStack action in the AWS OpsWorks API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksStack}
	 */
	agentVersion: function(value) {
		return this.set('AgentVersion', value);
	},

	/**
	 * One or more user-defined key-value pairs to be added to the stack attributes bag.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {key[]} value
	 * @return {OpsWorksStack}
	 */
	attributes: function(value) {
		return this.set('Attributes', value);
	},

	/**
	 * Describes the Chef configuration. For more information, see the CreateStack ChefConfiguration parameter in the AWS OpsWorks API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSOpsWorksChefConfigurationType} value
	 * @return {OpsWorksStack}
	 */
	chefConfiguration: function(value) {
		return this.set('ChefConfiguration', value);
	},

	/**
	 * Describes the configuration manager. When you create a stack, you use the configuration manager to specify the Chef version. For supported Chef versions, see the CreateStack ConfigurationManager parameter in the AWS OpsWorks API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSOpsWorksStackConfigurationManagerType} value
	 * @return {OpsWorksStack}
	 */
	configurationManager: function(value) {
		return this.set('ConfigurationManager', value);
	},

	/**
	 * Contains the information required to retrieve a cookbook from a repository.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSOpsWorksSourceType} value
	 * @return {OpsWorksStack}
	 */
	customCookbooksSource: function(value) {
		return this.set('CustomCookbooksSource', value);
	},

	/**
	 * A user-defined custom JSON object. The custom JSON is used to override the corresponding default stack configuration JSON values. For more information, see CreateStack in the AWS OpsWorks API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {JSONobject} value
	 * @return {OpsWorksStack}
	 */
	customJson: function(value) {
		return this.set('CustomJson', value);
	},

	/**
	 * The stack's default Availability Zone, which must be in the specified region.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksStack}
	 */
	defaultAvailabilityZone: function(value) {
		return this.set('DefaultAvailabilityZone', value);
	},

	/**
	 * The Amazon Resource Name (ARN) of an IAM instance profile that is the default profile for all of the stack's Amazon EC2 instances.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksStack}
	 */
	defaultInstanceProfileArn: function(value) {
		return this.set('DefaultInstanceProfileArn', value);
	},

	/**
	 * The stack's default operating system. For more information, see CreateStack in the AWS OpsWorks API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksStack}
	 */
	defaultOs: function(value) {
		return this.set('DefaultOs', value);
	},

	/**
	 * The default root device type. This value is used by default for all instances in the stack, but you can override it when you create an instance. For more information, see CreateStack in the AWS OpsWorks API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksStack}
	 */
	defaultRootDeviceType: function(value) {
		return this.set('DefaultRootDeviceType', value);
	},

	/**
	 * A default SSH key for the stack instances. You can override this value when you create or update an instance.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksStack}
	 */
	defaultSshKeyName: function(value) {
		return this.set('DefaultSshKeyName', value);
	},

	/**
	 * The stack's default subnet ID. All instances are launched into this subnet unless you specify another subnet ID when you create the instance.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksStack}
	 */
	defaultSubnetId: function(value) {
		return this.set('DefaultSubnetId', value);
	},

	/**
	 * The stack's host name theme, with spaces replaced by underscores. The theme is used to generate host names for the stack's instances. For more information, see CreateStack in the AWS OpsWorks API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksStack}
	 */
	hostnameTheme: function(value) {
		return this.set('HostnameTheme', value);
	},

	/**
	 * The name of the AWS OpsWorks stack.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksStack}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The AWS Identity and Access Management (IAM) role that AWS OpsWorks uses to work with AWS resources on your behalf. You must specify an Amazon Resource Name (ARN) for an existing IAM role.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {OpsWorksStack}
	 */
	serviceRoleArn: function(value) {
		return this.set('ServiceRoleArn', value);
	},

	/**
	 * Whether the stack uses custom cookbooks.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {OpsWorksStack}
	 */
	useCustomCookbooks: function(value) {
		return this.set('UseCustomCookbooks', value);
	},

	/**
	 * Whether to associate the AWS OpsWorks built-in security groups with the stack's layers.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {OpsWorksStack}
	 */
	useOpsworksSecurityGroups: function(value) {
		return this.set('UseOpsworksSecurityGroups', value);
	},

	/**
	 * The ID of the VPC that the stack is to be launched into, which must be in the specified region. All instances are launched into this VPC. If you specify this property, you must specify the DefaultSubnetId property.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {OpsWorksStack}
	 */
	vpcId: function(value) {
		return this.set('VpcId', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::OpsWorks::Stack has no attributes');
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

module.exports = OpsWorksStack;
