/**
 * A list of attribute definitions for the AWS::DynamoDB::Table resource. Each element is composed of an AttributeName and AttributeType.
 * @constructor
 */
function DynamoDBAttributeDefinitions() {
	this.data = {};
}

DynamoDBAttributeDefinitions.prototype = {
	
	/**
	 * The name of an attribute. Attribute names can be 1 – 255 characters long and have no character restrictions.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {DynamoDBAttributeDefinitions}
	 */
	attributeName: function(value) {
		return this.set('AttributeName', value);
	},

	/**
	 * The data type for the attribute. You can specify S for string data, N for numeric data, or B for binary data.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {DynamoDBAttributeDefinitions}
	 */
	attributeType: function(value) {
		return this.set('AttributeType', value);
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

module.exports = DynamoDBAttributeDefinitions;
