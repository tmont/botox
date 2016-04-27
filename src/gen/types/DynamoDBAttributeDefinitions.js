var PropertyType = require('../../property-type');

/**
 * A list of attribute definitions for the AWS::DynamoDB::Table resource. Each element is composed of an AttributeName and AttributeType.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-attributedef.html}
 * @constructor
 */
function DynamoDBAttributeDefinitions() {
	PropertyType.call(this);
}

DynamoDBAttributeDefinitions.prototype = Object.create(PropertyType.prototype);

/**
 * The name of an attribute. Attribute names can be 1 – 255 characters long and have no character restrictions.
 *
 * Required: true
 *
 * @param {String} value
 * @return {DynamoDBAttributeDefinitions}
 */
DynamoDBAttributeDefinitions.prototype.attributeName = function(value) {
	return this.set('AttributeName', value);
};

/**
 * The data type for the attribute. You can specify S for string data, N for numeric data, or B for binary data.
 *
 * Required: true
 *
 * @param {String} value
 * @return {DynamoDBAttributeDefinitions}
 */
DynamoDBAttributeDefinitions.prototype.attributeType = function(value) {
	return this.set('AttributeType', value);
};

module.exports = DynamoDBAttributeDefinitions;
