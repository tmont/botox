var PropertyType = require('../../property-type');

/**
 * MethodSetting is a property of the Amazon API Gateway Deployment StageDescription property that configures settings for all methods in an Amazon API Gateway (API Gateway) stage.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-deployment-stagedescription-methodsetting.html}
 * @constructor
 */
function APIGatewayDeploymentStageDescriptionMethodSetting() {
	PropertyType.call(this);
}

APIGatewayDeploymentStageDescriptionMethodSetting.prototype = Object.create(PropertyType.prototype);

/**
 * Indicates whether the cached responses are encrypted.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {APIGatewayDeploymentStageDescriptionMethodSetting}
 */
APIGatewayDeploymentStageDescriptionMethodSetting.prototype.cacheDataEncrypted = function(value) {
	return this.set('CacheDataEncrypted', value);
};

/**
 * The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {APIGatewayDeploymentStageDescriptionMethodSetting}
 */
APIGatewayDeploymentStageDescriptionMethodSetting.prototype.cacheTtlInSeconds = function(value) {
	return this.set('CacheTtlInSeconds', value);
};

/**
 * Indicates whether responses are cached and returned for requests. You must enable a cache cluster on the stage to cache responses. For more information, see Enable API Gateway Caching in a Stage to Enhance API Performance in the API Gateway Developer Guide.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {APIGatewayDeploymentStageDescriptionMethodSetting}
 */
APIGatewayDeploymentStageDescriptionMethodSetting.prototype.cachingEnabled = function(value) {
	return this.set('CachingEnabled', value);
};

/**
 * Indicates whether data trace logging is enabled for methods in the stage. API Gateway pushes these logs to Amazon CloudWatch Logs.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {APIGatewayDeploymentStageDescriptionMethodSetting}
 */
APIGatewayDeploymentStageDescriptionMethodSetting.prototype.dataTraceEnabled = function(value) {
	return this.set('DataTraceEnabled', value);
};

/**
 * The HTTP method.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayDeploymentStageDescriptionMethodSetting}
 */
APIGatewayDeploymentStageDescriptionMethodSetting.prototype.httpMethod = function(value) {
	return this.set('HttpMethod', value);
};

/**
 * The logging level for this method.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayDeploymentStageDescriptionMethodSetting}
 */
APIGatewayDeploymentStageDescriptionMethodSetting.prototype.loggingLevel = function(value) {
	return this.set('LoggingLevel', value);
};

/**
 * Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {APIGatewayDeploymentStageDescriptionMethodSetting}
 */
APIGatewayDeploymentStageDescriptionMethodSetting.prototype.metricsEnabled = function(value) {
	return this.set('MetricsEnabled', value);
};

/**
 * The resource path for this method.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayDeploymentStageDescriptionMethodSetting}
 */
APIGatewayDeploymentStageDescriptionMethodSetting.prototype.resourcePath = function(value) {
	return this.set('ResourcePath', value);
};

/**
 * The number of burst requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account. For more information, see Manage API Request Throttling in the API Gateway Developer Guide.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {APIGatewayDeploymentStageDescriptionMethodSetting}
 */
APIGatewayDeploymentStageDescriptionMethodSetting.prototype.throttlingBurstLimit = function(value) {
	return this.set('ThrottlingBurstLimit', value);
};

/**
 * The number of steady-state requests per second that API Gateway permits across all APIs, stages, and methods in your AWS account. For more information, see Manage API Request Throttling in the API Gateway Developer Guide.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {APIGatewayDeploymentStageDescriptionMethodSetting}
 */
APIGatewayDeploymentStageDescriptionMethodSetting.prototype.throttlingRateLimit = function(value) {
	return this.set('ThrottlingRateLimit', value);
};

module.exports = APIGatewayDeploymentStageDescriptionMethodSetting;
