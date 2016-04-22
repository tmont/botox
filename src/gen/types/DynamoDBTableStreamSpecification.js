/**
 * StreamSpecification is a property of the AWS::DynamoDB::Table resource that defines the settings of a DynamoDB table's stream.
 * @constructor
 */
function DynamoDBTableStreamSpecification() {
	this.data = {};
}

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

module.exports = DynamoDBTableStreamSpecification;
