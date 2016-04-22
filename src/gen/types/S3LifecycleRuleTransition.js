/**
 * Describes when an object transitions to a specified storage class for the Amazon S3 Lifecycle Rule property.
 * @constructor
 */
function S3LifecycleRuleTransition(initialData) {
	this.data = initialData || {};
}

S3LifecycleRuleTransition.prototype = {
	
	/**
	 * The storage class to which you want the object to transition, such as GLACIER. For valid values, see the StorageClass request element of the PUT Bucket lifecycle action in the Amazon Simple Storage Service API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {S3LifecycleRuleTransition}
	 */
	storageClass: function(value) {
		return this.set('StorageClass', value);
	},

	/**
	 * Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3LifecycleRuleTransition}
	 */
	transitionDate: function(value) {
		return this.set('TransitionDate', value);
	},

	/**
	 * Indicates the number of days after creation when objects are transitioned to the specified storage class.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {S3LifecycleRuleTransition}
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

module.exports = S3LifecycleRuleTransition;
