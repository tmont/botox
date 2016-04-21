/**
 * S3Location is a property of the AWS::ApiGateway::RestApi resource that specifies the Amazon Simple Storage Service (Amazon S3) location of a Swagger file that defines a set of RESTful APIs in JSON or YAML for an Amazon API Gateway (API Gateway) RestApi.
 * @constructor
 */
function APIGatewayRestApiS3Location(initialData) {
	this.data = initialData || {};
}

APIGatewayRestApiS3Location.prototype = {
	
	/**
	 * The name of the S3 bucket where the Swagger file is stored.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayRestApiS3Location}
	 */
	bucket: function(value) {
		return this.set('Bucket', value);
	},

	/**
	 * The Amazon S3 ETag (a file checksum) of the Swagger file. If you don't specify a value, API Gateway skips ETag validation of your Swagger file.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayRestApiS3Location}
	 */
	etag: function(value) {
		return this.set('ETag', value);
	},

	/**
	 * The file name of the application revision (Amazon S3 object name).
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayRestApiS3Location}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * For versioning-enabled buckets, a specific version of the Swagger file.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayRestApiS3Location}
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

module.exports = APIGatewayRestApiS3Location;
