var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Elasticsearch::Domain - The AWS::Elasticsearch::Domain resource creates an Amazon Elasticsearch Service (Amazon ES) domain that encapsulates the Amazon ES engine instances. For more information, see CreateElasticsearchDomain in the Amazon Elasticsearch Service Developer Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function ElasticsearchDomain(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

ElasticsearchDomain.prototype = {
	
	/**
	 * An AWS Identity and Access Management (IAM) policy document that specifies who can access the Amazon ES domain and their permissions. For more information, see Configuring Access Policies in the Amazon Elasticsearch Service Developer Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {JSONobject} value
	 * @return {ElasticsearchDomain}
	 */
	accessPolicies: function(value) {
		return this.set('AccessPolicies', value);
	},

	/**
	 * Additional options to specify for the Amazon ES domain. For more information, see Configuring Advanced Options in the Amazon Elasticsearch Service Developer Guide.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {AJSONobjectconsistingofastringkeyvaluepairsuchas} value
	 * @return {ElasticsearchDomain}
	 */
	advancedOptions: function(value) {
		return this.set('AdvancedOptions', value);
	},

	/**
	 * A name for the Amazon ES domain. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the domain name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElasticsearchDomain}
	 */
	domainName: function(value) {
		return this.set('DomainName', value);
	},

	/**
	 * The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in the Amazon ES domain. For more information, see Configuring EBS-based Storage in the Amazon Elasticsearch Service Developer Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {ElasticsearchServiceDomainEBSOptions} value
	 * @return {ElasticsearchDomain}
	 */
	ebsoptions: function(value) {
		return this.set('EBSOptions', value);
	},

	/**
	 * The cluster configuration for the Amazon ES domain. You can specify options such as the instance type and the number of instances. For more information, see Configuring Amazon ES Domains in the Amazon Elasticsearch Service Developer Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {ElasticsearchServiceDomainElasticsearchClusterConfig} value
	 * @return {ElasticsearchDomain}
	 */
	elasticsearchClusterConfig: function(value) {
		return this.set('ElasticsearchClusterConfig', value);
	},

	/**
	 * The automated snapshot configuration for the Amazon ES domain indices.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {ElasticsearchServiceDomainSnapshotOptions} value
	 * @return {ElasticsearchDomain}
	 */
	snapshotOptions: function(value) {
		return this.set('SnapshotOptions', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) to associate with the Amazon ES domain.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {ElasticsearchDomain}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::Elasticsearch::Domain has no attributes');
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

module.exports = ElasticsearchDomain;
