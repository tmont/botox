/**
 * BootstrapActionConfig is a property of the AWS::EMR::Cluster resource that specifies bootstrap actions that Amazon Elastic MapReduce (Amazon EMR) runs before it installs applications on the cluster nodes.
 * @constructor
 */
function ElasticMapReduceClusterBootstrapActionConfig(initialData) {
	this.data = initialData || {};
}

ElasticMapReduceClusterBootstrapActionConfig.prototype = {
	
	/**
	 * The name of the bootstrap action to add to your cluster.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceClusterBootstrapActionConfig}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The script that the bootstrap action runs.
	 *
	 * Required: true
	 *
	 * @param {ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig} value
	 * @return {ElasticMapReduceClusterBootstrapActionConfig}
	 */
	scriptBootstrapAction: function(value) {
		return this.set('ScriptBootstrapAction', value);
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

module.exports = ElasticMapReduceClusterBootstrapActionConfig;
