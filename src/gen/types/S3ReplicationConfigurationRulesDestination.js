var PropertyType = require('../../property-type');

/**
 * Destination is a property of the Amazon S3 ReplicationConfiguration Rules property that specifies which Amazon Simple Storage Service (Amazon S3) bucket to store replicated objects and their storage class.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationconfiguration-rules-destination.html}
 * @constructor
 */
function S3ReplicationConfigurationRulesDestination() {
	PropertyType.call(this);
}

Object.setPrototypeOf(S3ReplicationConfigurationRulesDestination, PropertyType);

S3ReplicationConfigurationRulesDestination.prototype = {
	
	/**
	 * The Amazon resource name (ARN) of an S3 bucket where Amazon S3 stores replicated objects. This destination bucket must be in a different region than your source bucket.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {S3ReplicationConfigurationRulesDestination}
	 */
	bucket: function(value) {
		return this.set('Bucket', value);
	},

	/**
	 * The storage class to use when replicating objects, such as standard or reduced redundancy. By default, Amazon S3 uses the storage class of the source object to create object replica. For valid values, see the StorageClass element of the PUT Bucket replication action in the Amazon Simple Storage Service API Reference.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3ReplicationConfigurationRulesDestination}
	 */
	storageClass: function(value) {
		return this.set('StorageClass', value);
	}
};

module.exports = S3ReplicationConfigurationRulesDestination;
