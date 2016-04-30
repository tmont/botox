var PropertyType = require('../../property-type');

/**
 * MethodSetting is a property of the AWS::ApiGateway::Stage resource that configures settings for all methods in an Amazon API Gateway (API Gateway) stage.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-stage-methodsetting.html}
 * @constructor
 */
function APIGatewayStageMethodSetting() {
	PropertyType.call(this);
}

APIGatewayStageMethodSetting.prototype = Object.create(PropertyType.prototype);

/**
 * Indicates whether the cached responses are encrypted.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {APIGatewayStageMethodSetting}
 */
APIGatewayStageMethodSetting.prototype.cacheDataEncrypted = function(value) {
	return this.set('CacheDataEncrypted', value);
};

/**
 * The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {APIGatewayStageMethodSetting}
 */
APIGatewayStageMethodSetting.prototype.cacheTtlInSeconds = function(value) {
	return this.set('CacheTtlInSeconds', value);
};

/**
 * Indicates whether responses are cached and returned for requests. You must enable a cache cluster on the stage to cache responses.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {APIGatewayStageMethodSetting}
 */
APIGatewayStageMethodSetting.prototype.cachingEnabled = function(value) {
	return this.set('CachingEnabled', value);
};

/**
 * Indicates whether data trace logging is enabled for methods in the stage. API Gateway pushes these logs to Amazon CloudWatch Logs.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {APIGatewayStageMethodSetting}
 */
APIGatewayStageMethodSetting.prototype.dataTraceEnabled = function(value) {
	return this.set('DataTraceEnabled', value);
};

/**
 * The HTTP method.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayStageMethodSetting}
 */
APIGatewayStageMethodSetting.prototype.httpMethod = function(value) {
	return this.set('HttpMethod', value);
};

/**
 * The logging level for this method.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayStageMethodSetting}
 */
APIGatewayStageMethodSetting.prototype.loggingLevel = function(value) {
	return this.set('LoggingLevel', value);
};

/**
 * Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {APIGatewayStageMethodSetting}
 */
APIGatewayStageMethodSetting.prototype.metricsEnabled = function(value) {
	return this.set('MetricsEnabled', value);
};

/**
 * The resource path for this method.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayStageMethodSetting}
 */
APIGatewayStageMethodSetting.prototype.resourcePath = function(value) {
	return this.set('ResourcePath', value);
};

/**
 * The number of burst requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {APIGatewayStageMethodSetting}
 */
APIGatewayStageMethodSetting.prototype.throttlingBurstLimit = function(value) {
	return this.set('ThrottlingBurstLimit', value);
};

/**
 * The number of steady-state requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {APIGatewayStageMethodSetting}
 */
APIGatewayStageMethodSetting.prototype.throttlingRateLimit = function(value) {
	return this.set('ThrottlingRateLimit', value);
};

module.exports = APIGatewayStageMethodSetting;
