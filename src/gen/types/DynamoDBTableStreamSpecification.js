var PropertyType = require('../../property-type');

/**
 * StreamSpecification is a property of the AWS::DynamoDB::Table resource that defines the settings of a DynamoDB table's stream.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-streamspecification.html}
 * @constructor
 */
function DynamoDBTableStreamSpecification() {
	PropertyType.call(this);
}

Object.setPrototypeOf(DynamoDBTableStreamSpecification, PropertyType);

DynamoDBTableStreamSpecification.prototype = {
	
	/**
	 * Determines the information that the stream captures when an item in the table is modified. For valid values, see StreamSpecification in the Amazon DynamoDB API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {DynamoDBTableStreamSpecification}
	 */
	streamViewType: function(value) {
		return this.set('StreamViewType', value);
	}
};

module.exports = DynamoDBTableStreamSpecification;
