var PropertyType = require('../../property-type');

/**
 * JobFlowInstancesConfig is a property of the AWS::EMR::Cluster resource that configures the EC2 instances (nodes) that will run jobs in an Amazon Elastic MapReduce (Amazon EMR) cluster.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html}
 * @constructor
 */
function ElasticMapReduceClusterJobFlowInstancesConfig() {
	PropertyType.call(this);
}

ElasticMapReduceClusterJobFlowInstancesConfig.prototype = Object.create(PropertyType.prototype);

/**
 * A list of additional EC2 security group IDs to assign to the master instance (master node) in your Amazon EMR cluster. Use this property to supplement the rules specified by the Amazon EMR managed master security group.
 *
 * Required: false
 *
 * @param {String[]} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfig.prototype.additionalMasterSecurityGroups = function(value) {
	return this.set('AdditionalMasterSecurityGroups', value);
};

/**
 * A list of additional EC2 security group IDs to assign to the slave instances (slave nodes) in your Amazon EMR cluster. Use this property to supplement the rules specified by the Amazon EMR managed slave security group.
 *
 * Required: false
 *
 * @param {String[]} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfig.prototype.additionalSlaveSecurityGroups = function(value) {
	return this.set('AdditionalSlaveSecurityGroups', value);
};

/**
 * The settings for the core instances in your Amazon EMR cluster.
 *
 * Required: true
 *
 * @param {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfig.prototype.coreInstanceGroup = function(value) {
	return this.set('CoreInstanceGroup', value);
};

/**
 * The name of an Amazon Elastic Compute Cloud (Amazon EC2) key pair, which you can use to access the instances in your Amazon EMR cluster.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfig.prototype.ec2KeyName = function(value) {
	return this.set('Ec2KeyName', value);
};

/**
 * The ID of an Amazon Virtual Private Cloud (Amazon VPC) virtual private cloud (VPC) where you want to launch your instances.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfig.prototype.ec2SubnetId = function(value) {
	return this.set('Ec2SubnetId', value);
};

/**
 * The ID of an EC2 security group (managed by Amazon EMR) that is assigned to the master instance (master node) in your Amazon EMR cluster.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfig.prototype.emrManagedMasterSecurityGroup = function(value) {
	return this.set('EmrManagedMasterSecurityGroup', value);
};

/**
 * The ID of an EC2 security group (managed by Amazon EMR) that is assigned to the slave instances (slave nodes) in your Amazon EMR cluster.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfig.prototype.emrManagedSlaveSecurityGroup = function(value) {
	return this.set('EmrManagedSlaveSecurityGroup', value);
};

/**
 * The Hadoop version for the job flow. For valid values, see the HadoopVersion parameter in the Amazon Elastic MapReduce API Reference.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfig.prototype.hadoopVersion = function(value) {
	return this.set('HadoopVersion', value);
};

/**
 * The settings for the master instance (master node).
 *
 * Required: true
 *
 * @param {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfig.prototype.masterInstanceGroup = function(value) {
	return this.set('MasterInstanceGroup', value);
};

/**
 * The Availability Zone (AZ) in which the job flow runs.
 *
 * Required: false
 *
 * @param {ElasticMapReduceClusterJobFlowInstancesConfigPlacementType} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfig.prototype.placement = function(value) {
	return this.set('Placement', value);
};

/**
 * The ID of an EC2 security group (managed by Amazon EMR) that services use to access clusters in private subnets.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfig.prototype.serviceAccessSecurityGroup = function(value) {
	return this.set('ServiceAccessSecurityGroup', value);
};

/**
 * Indicates whether to prevent the EC2 instances from being terminated by an API call or user intervention. If you want to delete a stack with protected instances, update this value to false before you delete the stack. By default, AWS CloudFormation sets this property to false.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfig.prototype.terminationProtected = function(value) {
	return this.set('TerminationProtected', value);
};

module.exports = ElasticMapReduceClusterJobFlowInstancesConfig;
