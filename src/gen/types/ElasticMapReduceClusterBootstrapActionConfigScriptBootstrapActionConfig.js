var PropertyType = require('../../property-type');

/**
 * ScriptBootstrapActionConfig is a property of the Amazon Elastic MapReduce Cluster BootstrapActionConfig property that specifies the arguments and location of the bootstrap script that Amazon Elastic MapReduce (Amazon EMR) runs before it installs applications on the cluster nodes.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-bootstrapactionconfig-scriptbootstrapactionconfig.html}
 * @constructor
 */
function ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig() {
	PropertyType.call(this);
}

ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig.prototype = Object.create(PropertyType.prototype);

/**
 * A list of command line arguments to pass to the bootstrap action script.
 *
 * Required: false
 *
 * @param {String[]} value
 * @returns {ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig}
 */
ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig.prototype.args = function(value) {
	return this.set('Args', value);
};

/**
 * The location of the script that Amazon EMR runs during a bootstrap action. Specify a location in an S3 bucket or your local file system.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig}
 */
ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig.prototype.path = function(value) {
	return this.set('Path', value);
};

module.exports = ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig;
