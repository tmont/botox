/**
 * MethodSetting is a property of the Amazon API Gateway Deployment StageDescription property that configures settings for all methods in an Amazon API Gateway (API Gateway) stage.
 * @constructor
 */
function APIGatewayDeploymentStageDescriptionMethodSetting(initialData) {
	this.data = initialData || {};
}

APIGatewayDeploymentStageDescriptionMethodSetting.prototype = {
	
	/**
	 * Indicates whether the cached responses are encrypted.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {APIGatewayDeploymentStageDescriptionMethodSetting}
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
	 * @return {APIGatewayDeploymentStageDescriptionMethodSetting}
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
	 * @return {APIGatewayDeploymentStageDescriptionMethodSetting}
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
	 * @return {APIGatewayDeploymentStageDescriptionMethodSetting}
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
	 * @return {APIGatewayDeploymentStageDescriptionMethodSetting}
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
	 * @return {APIGatewayDeploymentStageDescriptionMethodSetting}
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
	 * @return {APIGatewayDeploymentStageDescriptionMethodSetting}
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
	 * @return {APIGatewayDeploymentStageDescriptionMethodSetting}
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
	 * @return {APIGatewayDeploymentStageDescriptionMethodSetting}
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
	 * @return {APIGatewayDeploymentStageDescriptionMethodSetting}
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

module.exports = APIGatewayDeploymentStageDescriptionMethodSetting;
