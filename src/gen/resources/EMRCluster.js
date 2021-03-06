var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::EMR::Cluster - The AWS::EMR::Cluster resource creates an Amazon Elastic MapReduce (Amazon EMR) cluster, which is a collection of EC2 instances on which you can run big data frameworks to process and analyze vast amounts of data. For more information, see Plan an Amazon EMR Cluster in the Amazon Elastic MapReduce Management Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EMRCluster(name) {
	Resource.call(this, name, 'AWS::EMR::Cluster');
}

EMRCluster.prototype = Object.create(Resource.prototype);

/**
 * Additional features that you want to select.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {Object|Attribute|Reference} value
 * @returns {EMRCluster}
 */
EMRCluster.prototype.additionalInfo = function(value) {
	return this.set('AdditionalInfo', value);
};

/**
 * The software applications to deploy on the cluster, and the arguments that Amazon EMR passes to those applications.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {ElasticMapReduceClusterApplication[]|Attribute|Reference} value List of Amazon Elastic MapReduce Cluster Application
 * @returns {EMRCluster}
 */
EMRCluster.prototype.applications = function(value) {
	return this.set('Applications', value);
};

/**
 * A list of bootstrap actions that Amazon EMR runs before starting applications on the cluster.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {ElasticMapReduceClusterBootstrapActionConfig[]|Attribute|Reference} value List of Amazon Elastic MapReduce Cluster BootstrapActionConfig
 * @returns {EMRCluster}
 */
EMRCluster.prototype.bootstrapActions = function(value) {
	return this.set('BootstrapActions', value);
};

/**
 * The software configuration of the Amazon EMR cluster.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {ElasticMapReduceClusterConfiguration[]|Attribute|Reference} value List of Amazon Elastic MapReduce Cluster Configuration
 * @returns {EMRCluster}
 */
EMRCluster.prototype.configurations = function(value) {
	return this.set('Configurations', value);
};

/**
 * Configures the EC2 instances that will run jobs in the Amazon EMR cluster.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {ElasticMapReduceClusterJobFlowInstancesConfig|Attribute|Reference} value Amazon Elastic MapReduce Cluster JobFlowInstancesConfig
 * @returns {EMRCluster}
 */
EMRCluster.prototype.instances = function(value) {
	return this.set('Instances', value);
};

/**
 * An AWS Identity and Access Management (IAM) role for an Amazon EMR cluster. All EC2 instances in the cluster assume this role, which instances use to access AWS services and resources to complete a job. For more information, see Configure IAM Roles for Amazon EMR in the Amazon Elastic MapReduce Management Guide.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EMRCluster}
 */
EMRCluster.prototype.jobFlowRole = function(value) {
	return this.set('JobFlowRole', value);
};

/**
 * An S3 bucket location to which Amazon EMR writes logs files from a job flow. If you don't specify a value, Amazon EMR doesn't write any log files.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EMRCluster}
 */
EMRCluster.prototype.logUri = function(value) {
	return this.set('LogUri', value);
};

/**
 * A name for the Amazon EMR cluster.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EMRCluster}
 */
EMRCluster.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The Amazon EMR software release label. A release is a set of software applications and components that you can install and configure on an Amazon EMR cluster. For more information, see About Amazon EMR Releases in the Amazon Elastic MapReduce Release Guide.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EMRCluster}
 */
EMRCluster.prototype.releaseLabel = function(value) {
	return this.set('ReleaseLabel', value);
};

/**
 * The IAM role that Amazon EMR assumes to access AWS resources on your behalf. For more information, see Configure IAM Roles for Amazon EMR in the Amazon Elastic MapReduce Management Guide.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EMRCluster}
 */
EMRCluster.prototype.serviceRole = function(value) {
	return this.set('ServiceRole', value);
};

/**
 * An arbitrary set of tags (key–value pairs) to help you identify the Amazon EMR cluster.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @returns {EMRCluster}
 */
EMRCluster.prototype.tags = function(value) {
	return this.set('Tags', value);
};

/**
 * Indicates whether the instances in the cluster are visible to all IAM users in the AWS account. If you specify true, all IAM users can view and (if they have permissions) manage the instances. If you specify false, only the IAM user that created the cluster can view and manage it. By default, AWS CloudFormation sets this property to false.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {EMRCluster}
 */
EMRCluster.prototype.visibleToAllUsers = function(value) {
	return this.set('VisibleToAllUsers', value);
};

/**
 * AWS::EMR::Cluster attributes
 * @constructor
 * @param {Resource} resource
 */
function EMRClusterAttributes(resource) {
	this.resource = resource;
}
EMRClusterAttributes.prototype = {
	/**
	 * The public DNS name of the master node (instance), such as ec2-12-123-123-123.us-west-2.compute.amazonaws.com.
	 * @type {Attribute}
	 */
	get masterPublicDNS() {
		return new Attribute(this.resource, 'MasterPublicDNS');
	}
};

/**
 * Gets attribute map for AWS::EMR::Cluster
 * @returns {EMRClusterAttributes}
 */
EMRCluster.prototype.attr = function() {
	return new EMRClusterAttributes(this);
};

module.exports = EMRCluster;
