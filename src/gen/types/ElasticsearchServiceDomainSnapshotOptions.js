var PropertyType = require('../../property-type');

/**
 * SnapshotOptions is a property of the the section called “AWS::Elasticsearch::Domain” resource that configures the automated snapshot of Amazon Elasticsearch Service (Amazon ES) domain indices.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-snapshotoptions.html}
 * @constructor
 */
function ElasticsearchServiceDomainSnapshotOptions() {
	PropertyType.call(this);
}

ElasticsearchServiceDomainSnapshotOptions.prototype = Object.create(PropertyType.prototype);

/**
 * The hour in UTC during which the service takes an automated daily snapshot of the indices in the Amazon ES domain. For example, if you specify 0, Amazon ES takes an automated snapshot everyday between midnight and 1 am. You can specify a value between 0 and 23.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {ElasticsearchServiceDomainSnapshotOptions}
 */
ElasticsearchServiceDomainSnapshotOptions.prototype.automatedSnapshotStartHour = function(value) {
	return this.set('AutomatedSnapshotStartHour', value);
};

module.exports = ElasticsearchServiceDomainSnapshotOptions;
