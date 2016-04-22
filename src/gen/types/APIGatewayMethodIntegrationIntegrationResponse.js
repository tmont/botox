/**
 * IntegrationResponse is a property of the Amazon API Gateway Method Integration property that specifies the response that Amazon API Gateway (API Gateway) sends after a method's back end finishes processing a request.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-method-integration-integrationresponse.html}
 * @constructor
 */
function APIGatewayMethodIntegrationIntegrationResponse() {
	this.data = {};
}

APIGatewayMethodIntegrationIntegrationResponse.prototype = {
	
	/**
	 * The response parameters from the back-end response that API Gateway sends to the method response. Specify response parameters as key-value pairs (string-to-string maps), with a destination as the key and a source as the value.
	 *
	 * Required: false
	 *
	 * @param {key[]} value
	 * @return {APIGatewayMethodIntegrationIntegrationResponse}
	 */
	responseParameters: function(value) {
		return this.set('ResponseParameters', value);
	},

	/**
	 * The templates used to transform the integration response body. Specify templates as key-value pairs (string-to-string maps), with a content type as the key and a template as the value.
	 *
	 * Required: false
	 *
	 * @param {key[]} value
	 * @return {APIGatewayMethodIntegrationIntegrationResponse}
	 */
	responseTemplates: function(value) {
		return this.set('ResponseTemplates', value);
	},

	/**
	 * A regular expression that specifies which error strings or status codes from the back end map to the integration response.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayMethodIntegrationIntegrationResponse}
	 */
	selectionPattern: function(value) {
		return this.set('SelectionPattern', value);
	},

	/**
	 * The status code that API Gateway uses to map the integration response to a MethodResponse status code.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayMethodIntegrationIntegrationResponse}
	 */
	statusCode: function(value) {
		return this.set('StatusCode', value);
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

module.exports = APIGatewayMethodIntegrationIntegrationResponse;
