var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::OpsWorks::Layer - Creates an AWS OpsWorks layer. A layer defines, for example, which packages and applications are installed and how they are configured.
 * @constructor
 */
function OpsWorksLayer(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

OpsWorksLayer.prototype = {
	
	/**
	 * One or more user-defined key-value pairs to be added to the stack attributes bag.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {key[]} value
	 * @return {OpsWorksLayer}
	 */
	attributes: function(value) {
		return this.set('Attributes', value);
	},

	/**
	 * Whether to automatically assign an Elastic IP address to Amazon EC2 instances in this layer.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {OpsWorksLayer}
	 */
	autoAssignElasticIps: function(value) {
		return this.set('AutoAssignElasticIps', value);
	},

	/**
	 * For AWS OpsWorks stacks that are running in a VPC, whether to automatically assign a public IP address to Amazon EC2 instances in this layer.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {OpsWorksLayer}
	 */
	autoAssignPublicIps: function(value) {
		return this.set('AutoAssignPublicIps', value);
	},

	/**
	 * The Amazon Resource Name (ARN) of an IAM instance profile that is to be used for the Amazon EC2 instances in this layer.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksLayer}
	 */
	customInstanceProfileArn: function(value) {
		return this.set('CustomInstanceProfileArn', value);
	},

	/**
	 * Custom event recipes for this layer.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSOpsWorksRecipesType} value
	 * @return {OpsWorksLayer}
	 */
	customRecipes: function(value) {
		return this.set('CustomRecipes', value);
	},

	/**
	 * Custom security group IDs for this layer.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {OpsWorksLayer}
	 */
	customSecurityGroupIds: function(value) {
		return this.set('CustomSecurityGroupIds', value);
	},

	/**
	 * Whether to automatically heal Amazon EC2 instances that have become disconnected or timed out.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {OpsWorksLayer}
	 */
	enableAutoHealing: function(value) {
		return this.set('EnableAutoHealing', value);
	},

	/**
	 * Whether to install operating system and package updates when the instance boots.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {OpsWorksLayer}
	 */
	installUpdatesOnBoot: function(value) {
		return this.set('InstallUpdatesOnBoot', value);
	},

	/**
	 * The lifecycle events for the AWS OpsWorks layer.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSOpsWorksLayerLifeCycleConfiguration} value
	 * @return {OpsWorksLayer}
	 */
	lifecycleEventConfiguration: function(value) {
		return this.set('LifecycleEventConfiguration', value);
	},

	/**
	 * The load-based scaling configuration for the AWS OpsWorks layer.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSOpsWorksLoadBasedAutoScalingType} value
	 * @return {OpsWorksLayer}
	 */
	loadBasedAutoScaling: function(value) {
		return this.set('LoadBasedAutoScaling', value);
	},

	/**
	 * The AWS OpsWorks layer name.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksLayer}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The packages for this layer.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {OpsWorksLayer}
	 */
	packages: function(value) {
		return this.set('Packages', value);
	},

	/**
	 * The layer short name, which is used internally by AWS OpsWorks and by Chef recipes. The short name is also used as the name for the directory where your app files are installed.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksLayer}
	 */
	shortname: function(value) {
		return this.set('Shortname', value);
	},

	/**
	 * The ID of the AWS OpsWorks stack that this layer will be associated with.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {OpsWorksLayer}
	 */
	stackId: function(value) {
		return this.set('StackId', value);
	},

	/**
	 * The layer type. A stack cannot have more than one layer of the same type, except for the custom type. You can have any number of custom types. For more information, see CreateLayer in the AWS OpsWorks API Reference.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {OpsWorksLayer}
	 */
	type: function(value) {
		return this.set('Type', value);
	},

	/**
	 * Describes the Amazon EBS volumes for this layer.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {AWSOpsWorksVolumeConfigurationType[]} value
	 * @return {OpsWorksLayer}
	 */
	volumeConfigurations: function(value) {
		return this.set('VolumeConfigurations', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::OpsWorks::Layer has no attributes');
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

module.exports = OpsWorksLayer;