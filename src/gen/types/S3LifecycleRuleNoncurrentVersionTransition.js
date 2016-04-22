/**
 * NoncurrentVersionTransition is a property of the Amazon S3 Lifecycle Rule property that describes when noncurrent objects transition to a specified storage class.
 * @constructor
 */
function S3LifecycleRuleNoncurrentVersionTransition() {
	this.data = {};
}

S3LifecycleRuleNoncurrentVersionTransition.prototype = {
	
	/**
	 * The storage class to which you want the object to transition, such as GLACIER. For valid values, see the StorageClass request element of the PUT Bucket lifecycle action in the Amazon Simple Storage Service API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {S3LifecycleRuleNoncurrentVersionTransition}
	 */
	storageClass: function(value) {
		return this.set('StorageClass', value);
	},

	/**
	 * The number of days between the time that a new version of the object is uploaded to the bucket and when old versions of the object are transitioned to the specified storage class.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {S3LifecycleRuleNoncurrentVersionTransition}
	 */
	transitionInDays: function(value) {
		return this.set('TransitionInDays', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = S3LifecycleRuleNoncurrentVersionTransition;
