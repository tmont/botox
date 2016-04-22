var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EMR::Step - The AWS::EMR::Step resource creates a unit of work (a job flow step) that you submit to an Amazon Elastic MapReduce (Amazon EMR) cluster. The job flow step contains instructions for processing data on the cluster.
 * @constructor
 * @param {String} name Name of the resource
 */
function EMRStep(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

EMRStep.prototype = {
	
	/**
	 * The action to take if the job flow step fails. Currently, AWS CloudFormation supports CONTINUE and CONTINUE_AND_WAIT. For more information, see Managing Cluster Termination in the Amazon Elastic MapReduce Management Guide.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EMRStep}
	 */
	actionOnFailure: function(value) {
		return this.set('ActionOnFailure', value);
	},

	/**
	 * The JAR file that includes the main function that Amazon EMR executes.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {ElasticMapReduceStepHadoopJarStepConfig} value
	 * @return {EMRStep}
	 */
	hadoopJarStep: function(value) {
		return this.set('HadoopJarStep', value);
	},

	/**
	 * The ID of a cluster in which you want to run this job flow step.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EMRStep}
	 */
	jobFlowId: function(value) {
		return this.set('JobFlowId', value);
	},

	/**
	 * A name for the job flow step.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EMRStep}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EMR::Step has no attributes');
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

module.exports = EMRStep;
