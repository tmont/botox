/**
 * The AccessLoggingPolicy property describes where and how access logs are stored for the AWS::ElasticLoadBalancing::LoadBalancer resource.
 * @constructor
 */
function ElasticLoadBalancingAccessLoggingPolicy() {
	this.data = {};
}

ElasticLoadBalancingAccessLoggingPolicy.prototype = {
	
	/**
	 * The interval for publishing access logs in minutes. You can specify an interval of either 5 minutes or 60 minutes.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {ElasticLoadBalancingAccessLoggingPolicy}
	 */
	emitInterval: function(value) {
		return this.set('EmitInterval', value);
	},

	/**
	 * Whether logging is enabled for the load balancer.
	 *
	 * Required: true
	 *
	 * @param {Boolean} value
	 * @return {ElasticLoadBalancingAccessLoggingPolicy}
	 */
	enabled: function(value) {
		return this.set('Enabled', value);
	},

	/**
	 * The name of an Amazon S3 bucket where access log files are stored.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingAccessLoggingPolicy}
	 */
	s3BucketName: function(value) {
		return this.set('S3BucketName', value);
	},

	/**
	 * A prefix for the all log object keys, such as my-load-balancer-logs/prod. If you store log files from multiple sources in a single bucket, you can use a prefix to distinguish each log file and its source.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingAccessLoggingPolicy}
	 */
	s3BucketPrefix: function(value) {
		return this.set('S3BucketPrefix', value);
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

module.exports = ElasticLoadBalancingAccessLoggingPolicy;
