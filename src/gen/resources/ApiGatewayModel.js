var Resource = require('../../resource');

/**
 * AWS::ApiGateway::Model - The AWS::ApiGateway::Model resource defines the structure of a request or response payload for an Amazon API Gateway (API Gateway) method.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayModel(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ApiGatewayModel, Resource);

ApiGatewayModel.prototype = {
	
	
	/**
	 * The content type for the model.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ApiGatewayModel}
	 */
	contentType: function(value) {
		return this.set('ContentType', value);
	},

	/**
	 * A description that identifies this model.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayModel}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * A name for the mode. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the model name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ApiGatewayModel}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The ID of a REST API with which to associate this model.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ApiGatewayModel}
	 */
	restApiId: function(value) {
		return this.set('RestApiId', value);
	},

	/**
	 * The schema to use to transform data to one or more output formats.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayModel}
	 */
	schema: function(value) {
		return this.set('Schema', value);
	}
};

module.exports = ApiGatewayModel;
