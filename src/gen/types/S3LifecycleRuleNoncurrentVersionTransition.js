var PropertyType = require('../../property-type');

/**
 * NoncurrentVersionTransition is a property of the Amazon S3 Lifecycle Rule property that describes when noncurrent objects transition to a specified storage class.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig-rule-noncurrentversiontransition.html}
 * @constructor
 */
function S3LifecycleRuleNoncurrentVersionTransition() {
	PropertyType.call(this);
}

S3LifecycleRuleNoncurrentVersionTransition.prototype = Object.create(PropertyType.prototype);

/**
 * The storage class to which you want the object to transition, such as GLACIER. For valid values, see the StorageClass request element of the PUT Bucket lifecycle action in the Amazon Simple Storage Service API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @return {S3LifecycleRuleNoncurrentVersionTransition}
 */
S3LifecycleRuleNoncurrentVersionTransition.prototype.storageClass = function(value) {
	return this.set('StorageClass', value);
};

/**
 * The number of days between the time that a new version of the object is uploaded to the bucket and when old versions of the object are transitioned to the specified storage class.
 *
 * Required: true
 *
 * @param {Number} value
 * @return {S3LifecycleRuleNoncurrentVersionTransition}
 */
S3LifecycleRuleNoncurrentVersionTransition.prototype.transitionInDays = function(value) {
	return this.set('TransitionInDays', value);
};

module.exports = S3LifecycleRuleNoncurrentVersionTransition;
