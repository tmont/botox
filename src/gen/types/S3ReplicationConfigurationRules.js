/**
 * Rules is a property of the Amazon S3 ReplicationConfiguration property that specifies which Amazon Simple Storage Service (Amazon S3) objects to replicate and where to store them.
 * @constructor
 */
function S3ReplicationConfigurationRules() {
	this.data = {};
}

S3ReplicationConfigurationRules.prototype = {
	
	/**
	 * Defines the destination where Amazon S3 stores replicated objects.
	 *
	 * Required: true
	 *
	 * @param {S3ReplicationConfigurationRulesDestination} value
	 * @return {S3ReplicationConfigurationRules}
	 */
	destination: function(value) {
		return this.set('Destination', value);
	},

	/**
	 * A unique identifier for the rule. If you don't specify a value, AWS CloudFormation generates a random ID.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3ReplicationConfigurationRules}
	 */
	id: function(value) {
		return this.set('Id', value);
	},

	/**
	 * An object prefix. This rule applies to all Amazon S3 objects with this prefix. To specify all objects in an S3 bucket, specify an empty string.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {S3ReplicationConfigurationRules}
	 */
	prefix: function(value) {
		return this.set('Prefix', value);
	},

	/**
	 * Whether the rule is enabled. For valid values, see the Status element of the PUT Bucket replication action in the Amazon Simple Storage Service API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {S3ReplicationConfigurationRules}
	 */
	status: function(value) {
		return this.set('Status', value);
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

module.exports = S3ReplicationConfigurationRules;
