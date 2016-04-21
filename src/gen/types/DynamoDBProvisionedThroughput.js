/**
 * Describes a set of provisioned throughput values for an AWS::DynamoDB::Table resource. DynamoDB uses these capacity units to allocate sufficient resources to provide the requested throughput.
 * @constructor
 */
function DynamoDBProvisionedThroughput(initialData) {
	this.data = initialData || {};
}

DynamoDBProvisionedThroughput.prototype = {
	
	/**
	 * Sets the desired minimum number of consistent reads of items (up to 1KB in size) per second for the specified table before Amazon DynamoDB balances the load.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {DynamoDBProvisionedThroughput}
	 */
	readCapacityUnits: function(value) {
		return this.set('ReadCapacityUnits', value);
	},

	/**
	 * Sets the desired minimum number of consistent writes of items (up to 1KB in size) per second for the specified table before Amazon DynamoDB balances the load.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {DynamoDBProvisionedThroughput}
	 */
	writeCapacityUnits: function(value) {
		return this.set('WriteCapacityUnits', value);
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

module.exports = DynamoDBProvisionedThroughput;
