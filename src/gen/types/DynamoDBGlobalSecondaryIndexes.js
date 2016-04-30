var PropertyType = require('../../property-type');

/**
 * Describes global secondary indexes for the AWS::DynamoDB::Table resource.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-gsi.html}
 * @constructor
 */
function DynamoDBGlobalSecondaryIndexes() {
	PropertyType.call(this);
}

DynamoDBGlobalSecondaryIndexes.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the global secondary index. The index name can be 3 – 255 characters long and have no character restrictions.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {DynamoDBGlobalSecondaryIndexes}
 */
DynamoDBGlobalSecondaryIndexes.prototype.indexName = function(value) {
	return this.set('IndexName', value);
};

/**
 * The complete index key schema for the global secondary index, which consists of one or more pairs of attribute names and key types.
 *
 * Required: true
 *
 * @param {DynamoDBKeySchema} value
 * @returns {DynamoDBGlobalSecondaryIndexes}
 */
DynamoDBGlobalSecondaryIndexes.prototype.keySchema = function(value) {
	return this.set('KeySchema', value);
};

/**
 * Attributes that are copied (projected) from the source table into the index. These attributes are in addition to the primary key attributes and index key attributes, which are automatically projected.
 *
 * Required: true
 *
 * @param {DynamoDBProjectionObject} value
 * @returns {DynamoDBGlobalSecondaryIndexes}
 */
DynamoDBGlobalSecondaryIndexes.prototype.projection = function(value) {
	return this.set('Projection', value);
};

/**
 * The provisioned throughput settings for the index.
 *
 * Required: true
 *
 * @param {DynamoDBProvisionedThroughput} value
 * @returns {DynamoDBGlobalSecondaryIndexes}
 */
DynamoDBGlobalSecondaryIndexes.prototype.provisionedThroughput = function(value) {
	return this.set('ProvisionedThroughput', value);
};

module.exports = DynamoDBGlobalSecondaryIndexes;
