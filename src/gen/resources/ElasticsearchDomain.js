var Resource = require('../../resource');

/**
 * AWS::Elasticsearch::Domain - The AWS::Elasticsearch::Domain resource creates an Amazon Elasticsearch Service (Amazon ES) domain that encapsulates the Amazon ES engine instances. For more information, see CreateElasticsearchDomain in the Amazon Elasticsearch Service Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticsearch-domain.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ElasticsearchDomain(name) {
	Resource.call(this, name, 'AWS::Elasticsearch::Domain');
}

ElasticsearchDomain.prototype = Object.create(Resource.prototype);

/**
 * An AWS Identity and Access Management (IAM) policy document that specifies who can access the Amazon ES domain and their permissions. For more information, see Configuring Access Policies in the Amazon Elasticsearch Service Developer Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Object|Attribute|Reference} value
 * @returns {ElasticsearchDomain}
 */
ElasticsearchDomain.prototype.accessPolicies = function(value) {
	return this.set('AccessPolicies', value);
};

/**
 * Additional options to specify for the Amazon ES domain. For more information, see Configuring Advanced Options in the Amazon Elasticsearch Service Developer Guide.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {Object|Attribute|Reference} value A JSON object consisting of a string key-value pair, such as:
 * @returns {ElasticsearchDomain}
 */
ElasticsearchDomain.prototype.advancedOptions = function(value) {
	return this.set('AdvancedOptions', value);
};

/**
 * A name for the Amazon ES domain. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the domain name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElasticsearchDomain}
 */
ElasticsearchDomain.prototype.domainName = function(value) {
	return this.set('DomainName', value);
};

/**
 * The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in the Amazon ES domain. For more information, see Configuring EBS-based Storage in the Amazon Elasticsearch Service Developer Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {ElasticsearchServiceDomainEBSOptions|Attribute|Reference} value Amazon Elasticsearch Service Domain EBSOptions
 * @returns {ElasticsearchDomain}
 */
ElasticsearchDomain.prototype.ebsOptions = function(value) {
	return this.set('EBSOptions', value);
};

/**
 * The cluster configuration for the Amazon ES domain. You can specify options such as the instance type and the number of instances. For more information, see Configuring Amazon ES Domains in the Amazon Elasticsearch Service Developer Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {ElasticsearchServiceDomainElasticsearchClusterConfig|Attribute|Reference} value Amazon Elasticsearch Service Domain ElasticsearchClusterConfig
 * @returns {ElasticsearchDomain}
 */
ElasticsearchDomain.prototype.elasticsearchClusterConfig = function(value) {
	return this.set('ElasticsearchClusterConfig', value);
};

/**
 * The automated snapshot configuration for the Amazon ES domain indices.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {ElasticsearchServiceDomainSnapshotOptions|Attribute|Reference} value Amazon Elasticsearch Service Domain SnapshotOptions
 * @returns {ElasticsearchDomain}
 */
ElasticsearchDomain.prototype.snapshotOptions = function(value) {
	return this.set('SnapshotOptions', value);
};

/**
 * An arbitrary set of tags (key–value pairs) to associate with the Amazon ES domain.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @returns {ElasticsearchDomain}
 */
ElasticsearchDomain.prototype.tags = function(value) {
	return this.set('Tags', value);
};

module.exports = ElasticsearchDomain;
