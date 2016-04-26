var Resource = require('../../resource');

/**
 * AWS::OpsWorks::Layer - Creates an AWS OpsWorks layer. A layer defines, for example, which packages and applications are installed and how they are configured.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function OpsWorksLayer(name) {
	Resource.call(this, name, 'AWS::OpsWorks::Layer');
}

OpsWorksLayer.prototype = Object.create(Resource.prototype);

/**
 * One or more user-defined key-value pairs to be added to the stack attributes bag.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {key[]|Attribute|Reference} value A list of key-value pairs
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.attributes = function(value) {
	return this.set('Attributes', value);
};

/**
 * Whether to automatically assign an Elastic IP address to Amazon EC2 instances in this layer.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.autoAssignElasticIps = function(value) {
	return this.set('AutoAssignElasticIps', value);
};

/**
 * For AWS OpsWorks stacks that are running in a VPC, whether to automatically assign a public IP address to Amazon EC2 instances in this layer.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.autoAssignPublicIps = function(value) {
	return this.set('AutoAssignPublicIps', value);
};

/**
 * The Amazon Resource Name (ARN) of an IAM instance profile that is to be used for the Amazon EC2 instances in this layer.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.customInstanceProfileArn = function(value) {
	return this.set('CustomInstanceProfileArn', value);
};

/**
 * Custom event recipes for this layer.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {OpsWorksRecipesType|Attribute|Reference} value AWS OpsWorks Recipes Type
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.customRecipes = function(value) {
	return this.set('CustomRecipes', value);
};

/**
 * Custom security group IDs for this layer.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {string[]|Attribute|Reference} value
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.customSecurityGroupIds = function(value) {
	return this.set('CustomSecurityGroupIds', value);
};

/**
 * Whether to automatically heal Amazon EC2 instances that have become disconnected or timed out.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.enableAutoHealing = function(value) {
	return this.set('EnableAutoHealing', value);
};

/**
 * Whether to install operating system and package updates when the instance boots.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.installUpdatesOnBoot = function(value) {
	return this.set('InstallUpdatesOnBoot', value);
};

/**
 * The lifecycle events for the AWS OpsWorks layer.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {OpsWorksLayerLifeCycleConfiguration|Attribute|Reference} value AWS OpsWorks Layer LifeCycleConfiguration
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.lifecycleEventConfiguration = function(value) {
	return this.set('LifecycleEventConfiguration', value);
};

/**
 * The load-based scaling configuration for the AWS OpsWorks layer.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {OpsWorksLoadBasedAutoScalingType|Attribute|Reference} value AWS OpsWorks LoadBasedAutoScaling Type
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.loadBasedAutoScaling = function(value) {
	return this.set('LoadBasedAutoScaling', value);
};

/**
 * The AWS OpsWorks layer name.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The packages for this layer.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {string[]|Attribute|Reference} value
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.packages = function(value) {
	return this.set('Packages', value);
};

/**
 * The layer short name, which is used internally by AWS OpsWorks and by Chef recipes. The short name is also used as the name for the directory where your app files are installed.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.shortname = function(value) {
	return this.set('Shortname', value);
};

/**
 * The ID of the AWS OpsWorks stack that this layer will be associated with.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.stackId = function(value) {
	return this.set('StackId', value);
};

/**
 * The layer type. A stack cannot have more than one layer of the same type, except for the custom type. You can have any number of custom types. For more information, see CreateLayer in the AWS OpsWorks API Reference.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.type = function(value) {
	return this.set('Type', value);
};

/**
 * Describes the Amazon EBS volumes for this layer.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {OpsWorksVolumeConfigurationType[]|Attribute|Reference} value A list of AWS OpsWorks VolumeConfiguration Type
 * @return {OpsWorksLayer}
 */
OpsWorksLayer.prototype.volumeConfigurations = function(value) {
	return this.set('VolumeConfigurations', value);
};

module.exports = OpsWorksLayer;
