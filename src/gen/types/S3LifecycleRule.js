var PropertyType = require('../../property-type');

/**
 * Describes lifecycle rules for the Amazon S3 Lifecycle Configuration property.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig-rule.html}
 * @constructor
 */
function S3LifecycleRule() {
	PropertyType.call(this);
}

Object.setPrototypeOf(S3LifecycleRule, PropertyType);

S3LifecycleRule.prototype = {
	
	/**
	 * Indicates when objects are deleted from Amazon S3 and Amazon Glacier. The date value must be in ISO 8601 format. The time is always midnight UTC. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3LifecycleRule}
	 */
	expirationDate: function(value) {
		return this.set('ExpirationDate', value);
	},

	/**
	 * Indicates the number of days after creation when objects are deleted from Amazon S3 and Amazon Glacier. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {S3LifecycleRule}
	 */
	expirationInDays: function(value) {
		return this.set('ExpirationInDays', value);
	},

	/**
	 * A unique identifier for this rule. The value cannot be more than 255 characters.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3LifecycleRule}
	 */
	id: function(value) {
		return this.set('Id', value);
	},

	/**
	 * For buckets with versioning enabled (or suspended), specifies the time, in days, between when a new version of the object is uploaded to the bucket and when old versions of the object expire. When object versions expire, Amazon S3 permanently deletes them. If you specify a transition and expiration time, the expiration time must be later than the transition time.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {S3LifecycleRule}
	 */
	noncurrentVersionExpirationInDays: function(value) {
		return this.set('NoncurrentVersionExpirationInDays', value);
	},

	/**
	 * For buckets with versioning enabled (or suspended), specifies when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the NoncurrentVersionTransitions property. (deprecated)
	 *
	 * Required: false
	 *
	 * @param {S3LifecycleRuleNoncurrentVersionTransition} value
	 * @return {S3LifecycleRule}
	 */
	noncurrentVersionTransition: function(value) {
		return this.set('NoncurrentVersionTransition', value);
	},

	/**
	 * For buckets with versioning enabled (or suspended), one or more transition rules that specify when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the NoncurrentVersionTransition property.
	 *
	 * Required: false
	 *
	 * @param {S3LifecycleRuleNoncurrentVersionTransition[]} value
	 * @return {S3LifecycleRule}
	 */
	noncurrentVersionTransitions: function(value) {
		return this.set('NoncurrentVersionTransitions', value);
	},

	/**
	 * Object key prefix that identifies one or more objects to which this rule applies.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3LifecycleRule}
	 */
	prefix: function(value) {
		return this.set('Prefix', value);
	},

	/**
	 * Specify either Enabled or Disabled. If you specify Enabled, Amazon S3 executes this rule as scheduled. If you specify Disabled, Amazon S3 ignores this rule.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {S3LifecycleRule}
	 */
	status: function(value) {
		return this.set('Status', value);
	},

	/**
	 * Specifies when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the Transitions property. (deprecated)
	 *
	 * Required: false
	 *
	 * @param {S3LifecycleRuleTransition} value
	 * @return {S3LifecycleRule}
	 */
	transition: function(value) {
		return this.set('Transition', value);
	},

	/**
	 * One or more transition rules that specify when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the Transition property.
	 *
	 * Required: false
	 *
	 * @param {S3LifecycleRuleTransition[]} value
	 * @return {S3LifecycleRule}
	 */
	transitions: function(value) {
		return this.set('Transitions', value);
	}
};

module.exports = S3LifecycleRule;
