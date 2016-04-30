var PropertyType = require('../../property-type');

/**
 * Describes when an object transitions to a specified storage class for the Amazon S3 Lifecycle Rule property.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig-rule-transition.html}
 * @constructor
 */
function S3LifecycleRuleTransition() {
	PropertyType.call(this);
}

S3LifecycleRuleTransition.prototype = Object.create(PropertyType.prototype);

/**
 * The storage class to which you want the object to transition, such as GLACIER. For valid values, see the StorageClass request element of the PUT Bucket lifecycle action in the Amazon Simple Storage Service API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {S3LifecycleRuleTransition}
 */
S3LifecycleRuleTransition.prototype.storageClass = function(value) {
	return this.set('StorageClass', value);
};

/**
 * Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {S3LifecycleRuleTransition}
 */
S3LifecycleRuleTransition.prototype.transitionDate = function(value) {
	return this.set('TransitionDate', value);
};

/**
 * Indicates the number of days after creation when objects are transitioned to the specified storage class.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {S3LifecycleRuleTransition}
 */
S3LifecycleRuleTransition.prototype.transitionInDays = function(value) {
	return this.set('TransitionInDays', value);
};

module.exports = S3LifecycleRuleTransition;
