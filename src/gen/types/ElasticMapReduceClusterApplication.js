var PropertyType = require('../../property-type');

/**
 * Application is a property of the AWS::EMR::Cluster resource that adds an Amazon Elastic MapReduce (Amazon EMR) application bundle or third-party software to an Amazon EMR cluster.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-application.html}
 * @constructor
 */
function ElasticMapReduceClusterApplication() {
	PropertyType.call(this);
}

ElasticMapReduceClusterApplication.prototype = Object.create(PropertyType.prototype);

/**
 * Metadata about third-party applications that third-party vendors use for testing purposes.
 *
 * Required: false
 *
 * @param {Object} value
 * @return {ElasticMapReduceClusterApplication}
 */
ElasticMapReduceClusterApplication.prototype.additionalInfo = function(value) {
	return this.set('AdditionalInfo', value);
};

/**
 * Arguments that Amazon EMR passes to the application.
 *
 * Required: false
 *
 * @param {string[]} value
 * @return {ElasticMapReduceClusterApplication}
 */
ElasticMapReduceClusterApplication.prototype.args = function(value) {
	return this.set('Args', value);
};

/**
 * The name of the application to add to your cluster, such as Hadoop or Hive. For valid values, see the Applications parameter in the Amazon Elastic MapReduce API Reference.
 *
 * Required: false
 *
 * @param {String} value
 * @return {ElasticMapReduceClusterApplication}
 */
ElasticMapReduceClusterApplication.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The version of the application.
 *
 * Required: false
 *
 * @param {String} value
 * @return {ElasticMapReduceClusterApplication}
 */
ElasticMapReduceClusterApplication.prototype.version = function(value) {
	return this.set('Version', value);
};

module.exports = ElasticMapReduceClusterApplication;
