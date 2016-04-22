/**
 * Application is a property of the AWS::EMR::Cluster resource that adds an Amazon Elastic MapReduce (Amazon EMR) application bundle or third-party software to an Amazon EMR cluster.
 * @constructor
 */
function ElasticMapReduceClusterApplication() {
	this.data = {};
}

ElasticMapReduceClusterApplication.prototype = {
	
	/**
	 * Metadata about third-party applications that third-party vendors use for testing purposes.
	 *
	 * Required: false
	 *
	 * @param {Stringtostringmap} value
	 * @return {ElasticMapReduceClusterApplication}
	 */
	additionalInfo: function(value) {
		return this.set('AdditionalInfo', value);
	},

	/**
	 * Arguments that Amazon EMR passes to the application.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {ElasticMapReduceClusterApplication}
	 */
	args: function(value) {
		return this.set('Args', value);
	},

	/**
	 * The name of the application to add to your cluster, such as Hadoop or Hive. For valid values, see the Applications parameter in the Amazon Elastic MapReduce API Reference.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceClusterApplication}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The version of the application.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceClusterApplication}
	 */
	version: function(value) {
		return this.set('Version', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = ElasticMapReduceClusterApplication;
