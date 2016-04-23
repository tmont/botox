var Resource = require('../../resource');

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
 * AWS::EMR::Cluster attribute map
 * @typedef {Object} EMRClusterAttributeMap
 * @property {Attribute} MasterPublicDNS The public DNS name of the master node (instance), such as ec2-12-123-123-123.us-west-2.compute.amazonaws.com.
 */
Object.defineProperty(EMRCluster.prototype, 'attr', {
	/**
	 * @return {EMRClusterAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * The public DNS name of the master node (instance), such as ec2-12-123-123-123.us-west-2.compute.amazonaws.com.
			 * @return {Attribute}
			 */
			get masterPublicDNS() {
				return createAttribute('MasterPublicDNS');
			}
		};
	}
});

/**
 * Additional features that you want to select.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {Object|Attribute|Reference} value
 * @return {EMRCluster}
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
 * @param {ElasticMapReduceClusterApplication[]|Attribute|Reference} value
 * @return {EMRCluster}
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
 * @param {ElasticMapReduceClusterBootstrapActionConfig[]|Attribute|Reference} value
 * @return {EMRCluster}
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
 * @param {ElasticMapReduceClusterConfiguration[]|Attribute|Reference} value
 * @return {EMRCluster}
 */
EMRCluster.prototype.configurations = function(value) {
	return this.set('Configurations', value);
};

/**
 * Configures Amazon Elastic Block Store (Amazon EBS) storage volumes to attach to your instances.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {ElasticMapReduceEbsConfiguration|Attribute|Reference} value
 * @return {EMRCluster}
 */
EMRCluster.prototype.ebsConfiguration = function(value) {
	return this.set('EbsConfiguration', value);
};

/**
 * Configures the EC2 instances that will run jobs in the Amazon EMR cluster.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {ElasticMapReduceClusterJobFlowInstancesConfig|Attribute|Reference} value
 * @return {EMRCluster}
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
 * @return {EMRCluster}
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
 * @return {EMRCluster}
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
 * @return {EMRCluster}
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
 * @return {EMRCluster}
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
 * @return {EMRCluster}
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
 * @param {AWSCloudFormationResourceTagsType[]|Attribute|Reference} value
 * @return {EMRCluster}
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
 * @return {EMRCluster}
 */
EMRCluster.prototype.visibleToAllUsers = function(value) {
	return this.set('VisibleToAllUsers', value);
};

module.exports = EMRCluster;
