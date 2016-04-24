var Resource = require('../../resource');

/**
 * AWS::EMR::Step - The AWS::EMR::Step resource creates a unit of work (a job flow step) that you submit to an Amazon Elastic MapReduce (Amazon EMR) cluster. The job flow step contains instructions for processing data on the cluster.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-step.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EMRStep(name) {
	Resource.call(this, name, 'AWS::EMR::Step');
}

EMRStep.prototype = Object.create(Resource.prototype);


/**
 * The action to take if the job flow step fails. Currently, AWS CloudFormation supports CONTINUE and CONTINUE_AND_WAIT. For more information, see Managing Cluster Termination in the Amazon Elastic MapReduce Management Guide.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EMRStep}
 */
EMRStep.prototype.actionOnFailure = function(value) {
	return this.set('ActionOnFailure', value);
};

/**
 * The JAR file that includes the main function that Amazon EMR executes.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {ElasticMapReduceStepHadoopJarStepConfig|Attribute|Reference} value Amazon Elastic MapReduce Step HadoopJarStepConfig
 * @return {EMRStep}
 */
EMRStep.prototype.hadoopJarStep = function(value) {
	return this.set('HadoopJarStep', value);
};

/**
 * The ID of a cluster in which you want to run this job flow step.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EMRStep}
 */
EMRStep.prototype.jobFlowId = function(value) {
	return this.set('JobFlowId', value);
};

/**
 * A name for the job flow step.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EMRStep}
 */
EMRStep.prototype.name = function(value) {
	return this.set('Name', value);
};

module.exports = EMRStep;
