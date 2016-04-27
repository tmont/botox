var PropertyType = require('../../property-type');

/**
 * Describes a set of provisioned throughput values for an AWS::DynamoDB::Table resource. DynamoDB uses these capacity units to allocate sufficient resources to provide the requested throughput.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-provisionedthroughput.html}
 * @constructor
 */
function DynamoDBProvisionedThroughput() {
	PropertyType.call(this);
}

DynamoDBProvisionedThroughput.prototype = Object.create(PropertyType.prototype);

/**
 * Sets the desired minimum number of consistent reads of items (up to 1KB in size) per second for the specified table before Amazon DynamoDB balances the load.
 *
 * Required: true
 *
 * @param {Number} value
 * @return {DynamoDBProvisionedThroughput}
 */
DynamoDBProvisionedThroughput.prototype.readCapacityUnits = function(value) {
	return this.set('ReadCapacityUnits', value);
};

/**
 * Sets the desired minimum number of consistent writes of items (up to 1KB in size) per second for the specified table before Amazon DynamoDB balances the load.
 *
 * Required: true
 *
 * @param {Number} value
 * @return {DynamoDBProvisionedThroughput}
 */
DynamoDBProvisionedThroughput.prototype.writeCapacityUnits = function(value) {
	return this.set('WriteCapacityUnits', value);
};

module.exports = DynamoDBProvisionedThroughput;
