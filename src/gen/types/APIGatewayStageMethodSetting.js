/**
 * MethodSetting is a property of the AWS::ApiGateway::Stage resource that configures settings for all methods in an Amazon API Gateway (API Gateway) stage.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-stage-methodsetting.html}
 * @constructor
 */
function APIGatewayStageMethodSetting() {
	this.data = {};
}

APIGatewayStageMethodSetting.prototype = {
	
	/**
	 * Indicates whether the cached responses are encrypted.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {APIGatewayStageMethodSetting}
	 */
	cacheDataEncrypted: function(value) {
		return this.set('CacheDataEncrypted', value);
	},

	/**
	 * The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {APIGatewayStageMethodSetting}
	 */
	cacheTtlInSeconds: function(value) {
		return this.set('CacheTtlInSeconds', value);
	},

	/**
	 * Indicates whether responses are cached and returned for requests. You must enable a cache cluster on the stage to cache responses.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {APIGatewayStageMethodSetting}
	 */
	cachingEnabled: function(value) {
		return this.set('CachingEnabled', value);
	},

	/**
	 * Indicates whether data trace logging is enabled for methods in the stage. API Gateway pushes these logs to Amazon CloudWatch Logs.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {APIGatewayStageMethodSetting}
	 */
	dataTraceEnabled: function(value) {
		return this.set('DataTraceEnabled', value);
	},

	/**
	 * The HTTP method.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayStageMethodSetting}
	 */
	httpMethod: function(value) {
		return this.set('HttpMethod', value);
	},

	/**
	 * The logging level for this method.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayStageMethodSetting}
	 */
	loggingLevel: function(value) {
		return this.set('LoggingLevel', value);
	},

	/**
	 * Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {APIGatewayStageMethodSetting}
	 */
	metricsEnabled: function(value) {
		return this.set('MetricsEnabled', value);
	},

	/**
	 * The resource path for this method.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayStageMethodSetting}
	 */
	resourcePath: function(value) {
		return this.set('ResourcePath', value);
	},

	/**
	 * The number of burst requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {APIGatewayStageMethodSetting}
	 */
	throttlingBurstLimit: function(value) {
		return this.set('ThrottlingBurstLimit', value);
	},

	/**
	 * The number of steady-state requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {APIGatewayStageMethodSetting}
	 */
	throttlingRateLimit: function(value) {
		return this.set('ThrottlingRateLimit', value);
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

module.exports = APIGatewayStageMethodSetting;
