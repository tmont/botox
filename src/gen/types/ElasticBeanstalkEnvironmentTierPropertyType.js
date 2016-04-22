/**
 * Describes the environment tier for an AWS::ElasticBeanstalk::Environment resource. For more information, see Environment Tiers in the AWS Elastic Beanstalk Developer Guide.
 * @constructor
 */
function ElasticBeanstalkEnvironmentTierPropertyType() {
	this.data = {};
}

ElasticBeanstalkEnvironmentTierPropertyType.prototype = {
	
	/**
	 * The name of the environment tier. You can specify WebServer or Worker.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkEnvironmentTierPropertyType}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The type of this environment tier. You can specify Standard for the WebServer tier or SQS/HTTP for the Worker tier.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkEnvironmentTierPropertyType}
	 */
	type: function(value) {
		return this.set('Type', value);
	},

	/**
	 * The version of this environment tier.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkEnvironmentTierPropertyType}
	 */
	version: function(value) {
		return this.set('Version', value);
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

module.exports = ElasticBeanstalkEnvironmentTierPropertyType;
