var PropertyType = require('../../property-type');

/**
 * Configuration is a property of the AWS::EMR::Cluster resource that specifies the software configuration of an Amazon Elastic MapReduce (Amazon EMR) cluster. For example configurations, see Amazon EMR Configurations in the Amazon Elastic MapReduce API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-configuration.html}
 * @constructor
 */
function ElasticMapReduceClusterConfiguration() {
	PropertyType.call(this);
}

ElasticMapReduceClusterConfiguration.prototype = Object.create(PropertyType.prototype);

/**
 * The name of an application-specific configuration file. For more information see, Configuring Applications in the Amazon Elastic MapReduce Release Guide.
 *
 * Required: false
 *
 * @param {String} value
 * @return {ElasticMapReduceClusterConfiguration}
 */
ElasticMapReduceClusterConfiguration.prototype.classification = function(value) {
	return this.set('Classification', value);
};

/**
 * The settings that you want to change in the application-specific configuration file. For more information see, Configuring Applications in the Amazon Elastic MapReduce Release Guide.
 *
 * Required: false
 *
 * @param {Object} value
 * @return {ElasticMapReduceClusterConfiguration}
 */
ElasticMapReduceClusterConfiguration.prototype.configurationProperties = function(value) {
	return this.set('ConfigurationProperties', value);
};

/**
 * A list of configurations to apply to this configuration. You can nest configurations so that a single configuration can have its own configurations. In other words, you can configure a configuration. For more information see, Configuring Applications in the Amazon Elastic MapReduce Release Guide.
 *
 * Required: false
 *
 * @param {ElasticMapReduceClusterConfiguration[]} value
 * @return {ElasticMapReduceClusterConfiguration}
 */
ElasticMapReduceClusterConfiguration.prototype.configurations = function(value) {
	return this.set('Configurations', value);
};

module.exports = ElasticMapReduceClusterConfiguration;
