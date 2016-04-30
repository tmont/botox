var PropertyType = require('../../property-type');

/**
 * BootstrapActionConfig is a property of the AWS::EMR::Cluster resource that specifies bootstrap actions that Amazon Elastic MapReduce (Amazon EMR) runs before it installs applications on the cluster nodes.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-bootstrapactionconfig.html}
 * @constructor
 */
function ElasticMapReduceClusterBootstrapActionConfig() {
	PropertyType.call(this);
}

ElasticMapReduceClusterBootstrapActionConfig.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the bootstrap action to add to your cluster.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticMapReduceClusterBootstrapActionConfig}
 */
ElasticMapReduceClusterBootstrapActionConfig.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The script that the bootstrap action runs.
 *
 * Required: true
 *
 * @param {ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig} value
 * @returns {ElasticMapReduceClusterBootstrapActionConfig}
 */
ElasticMapReduceClusterBootstrapActionConfig.prototype.scriptBootstrapAction = function(value) {
	return this.set('ScriptBootstrapAction', value);
};

module.exports = ElasticMapReduceClusterBootstrapActionConfig;
