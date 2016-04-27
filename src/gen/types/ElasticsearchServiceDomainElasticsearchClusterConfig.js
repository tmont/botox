var PropertyType = require('../../property-type');

/**
 * ElasticsearchClusterConfig is a property of the the section called “AWS::Elasticsearch::Domain” resource that configures the cluster of an Amazon Elasticsearch Service (Amazon ES) domain.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-elasticsearchclusterconfig.html}
 * @constructor
 */
function ElasticsearchServiceDomainElasticsearchClusterConfig() {
	PropertyType.call(this);
}

ElasticsearchServiceDomainElasticsearchClusterConfig.prototype = Object.create(PropertyType.prototype);

/**
 * The number of instances to use for the master node.
 *
 * Required: false
 *
 * @param {Number} value
 * @return {ElasticsearchServiceDomainElasticsearchClusterConfig}
 */
ElasticsearchServiceDomainElasticsearchClusterConfig.prototype.dedicatedMasterCount = function(value) {
	return this.set('DedicatedMasterCount', value);
};

/**
 * Indicates whether to use a dedicated master node for the Amazon ES domain. A dedicated master node is a cluster node that performs cluster management tasks, but doesn't hold data or respond to data upload requests. Dedicated master nodes offload cluster management tasks to increase the stability of your search clusters.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @return {ElasticsearchServiceDomainElasticsearchClusterConfig}
 */
ElasticsearchServiceDomainElasticsearchClusterConfig.prototype.dedicatedMasterEnabled = function(value) {
	return this.set('DedicatedMasterEnabled', value);
};

/**
 * The hardware configuration of the computer that hosts the dedicated master node, such as m3.medium.elasticsearch. For valid values, see Configuring Amazon ES Domains in the Amazon Elasticsearch Service Developer Guide.
 *
 * Required: false
 *
 * @param {String} value
 * @return {ElasticsearchServiceDomainElasticsearchClusterConfig}
 */
ElasticsearchServiceDomainElasticsearchClusterConfig.prototype.dedicatedMasterType = function(value) {
	return this.set('DedicatedMasterType', value);
};

/**
 * The number of data nodes (instances) to use in the Amazon ES domain.
 *
 * Required: false
 *
 * @param {Number} value
 * @return {ElasticsearchServiceDomainElasticsearchClusterConfig}
 */
ElasticsearchServiceDomainElasticsearchClusterConfig.prototype.instanceCount = function(value) {
	return this.set('InstanceCount', value);
};

/**
 * The instance type for your data nodes, such as m3.medium.elasticsearch. For valid values, see Configuring Amazon ES Domains in the Amazon Elasticsearch Service Developer Guide.
 *
 * Required: false
 *
 * @param {String} value
 * @return {ElasticsearchServiceDomainElasticsearchClusterConfig}
 */
ElasticsearchServiceDomainElasticsearchClusterConfig.prototype.instanceType = function(value) {
	return this.set('InstanceType', value);
};

/**
 * Indicates whether to enable zone awareness for the Amazon ES domain. When you enable zone awareness, Amazon ES allocates the nodes and replica index shards that belong to a cluster across two Availability Zones (AZs) in the same region to prevent data loss and minimize downtime in the event of node or data center failure. Don't enable zone awareness if your cluster has no replica index shards or is a single-node cluster. For more information, see Enabling Zone Awareness in the Amazon Elasticsearch Service Developer Guide.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @return {ElasticsearchServiceDomainElasticsearchClusterConfig}
 */
ElasticsearchServiceDomainElasticsearchClusterConfig.prototype.zoneAwarenessEnabled = function(value) {
	return this.set('ZoneAwarenessEnabled', value);
};

module.exports = ElasticsearchServiceDomainElasticsearchClusterConfig;
