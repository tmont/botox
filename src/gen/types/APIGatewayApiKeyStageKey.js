var PropertyType = require('../../property-type');

/**
 * StageKey is a property of the AWS::ApiGateway::ApiKey resource that specifies the Amazon API Gateway (API Gateway) stage to associate with the API key. This association allows only clients with the key to make requests to methods in that stage.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-apikey-stagekey.html}
 * @constructor
 */
function APIGatewayApiKeyStageKey() {
	PropertyType.call(this);
}

Object.setPrototypeOf(APIGatewayApiKeyStageKey, PropertyType);

APIGatewayApiKeyStageKey.prototype = {
	
	/**
	 * The ID of a RestApi resource that includes the stage with which you want to associate the API key.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayApiKeyStageKey}
	 */
	restApiId: function(value) {
		return this.set('RestApiId', value);
	},

	/**
	 * The name of the stage with which to associate the API key. The stage must be included in the RestApi resource that you specified in the RestApiId property.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayApiKeyStageKey}
	 */
	stageName: function(value) {
		return this.set('StageName', value);
	}
};

module.exports = APIGatewayApiKeyStageKey;
