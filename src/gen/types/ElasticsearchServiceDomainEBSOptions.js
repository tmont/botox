var PropertyType = require('../../property-type');

/**
 * EBSOptions is a property of the the section called “AWS::Elasticsearch::Domain” resource that configures the Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in the Amazon Elasticsearch Service (Amazon ES) domain.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-ebsoptions.html}
 * @constructor
 */
function ElasticsearchServiceDomainEBSOptions() {
	PropertyType.call(this);
}

ElasticsearchServiceDomainEBSOptions.prototype = Object.create(PropertyType.prototype);

/**
 * Specifies whether Amazon EBS volumes are attached to data nodes in the Amazon ES domain.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @return {ElasticsearchServiceDomainEBSOptions}
 */
ElasticsearchServiceDomainEBSOptions.prototype.ebsEnabled = function(value) {
	return this.set('EBSEnabled', value);
};

/**
 * The number of I/O operations per second (IOPS) that the volume supports. This property applies only to the Provisioned IOPS (SSD) EBS volume type.
 *
 * Required: false
 *
 * @param {Number} value
 * @return {ElasticsearchServiceDomainEBSOptions}
 */
ElasticsearchServiceDomainEBSOptions.prototype.iops = function(value) {
	return this.set('Iops', value);
};

/**
 * The size of the EBS volume for each data node. The minimum and maximum size of an EBS volume depends on the EBS volume type and the instance type to which it is attached. For more information, see Configuring EBS-based Storage in the Amazon Elasticsearch Service Developer Guide.
 *
 * Required: false
 *
 * @param {Number} value
 * @return {ElasticsearchServiceDomainEBSOptions}
 */
ElasticsearchServiceDomainEBSOptions.prototype.volumeSize = function(value) {
	return this.set('VolumeSize', value);
};

/**
 * The EBS volume type to use with the Amazon ES domain, such as standard, gp2, or io1. For more information about each type, see Amazon EBS Volume Types in the Amazon EC2 User Guide for Linux Instances.
 *
 * Required: false
 *
 * @param {String} value
 * @return {ElasticsearchServiceDomainEBSOptions}
 */
ElasticsearchServiceDomainEBSOptions.prototype.volumeType = function(value) {
	return this.set('VolumeType', value);
};

module.exports = ElasticsearchServiceDomainEBSOptions;
