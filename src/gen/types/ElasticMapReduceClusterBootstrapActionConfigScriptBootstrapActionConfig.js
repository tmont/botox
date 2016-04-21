/**
 * ScriptBootstrapActionConfig is a property of the Amazon Elastic MapReduce Cluster BootstrapActionConfig property that specifies the arguments and location of the bootstrap script that Amazon Elastic MapReduce (Amazon EMR) runs before it installs applications on the cluster nodes.
 * @constructor
 */
function ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig(initialData) {
	this.data = initialData || {};
}

ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig.prototype = {
	
	/**
	 * A list of command line arguments to pass to the bootstrap action script.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig}
	 */
	args: function(value) {
		return this.set('Args', value);
	},

	/**
	 * The location of the script that Amazon EMR runs during a bootstrap action. Specify a location in an S3 bucket or your local file system.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig}
	 */
	path: function(value) {
		return this.set('Path', value);
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

module.exports = ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig;
