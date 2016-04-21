/**
 * Describes global secondary indexes for the AWS::DynamoDB::Table resource.
 * @constructor
 */
function DynamoDBGlobalSecondaryIndexes(initialData) {
	this.data = initialData || {};
}

DynamoDBGlobalSecondaryIndexes.prototype = {
	
	/**
	 * The name of the global secondary index. The index name can be 3 – 255 characters long and have no character restrictions.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {DynamoDBGlobalSecondaryIndexes}
	 */
	indexName: function(value) {
		return this.set('IndexName', value);
	},

	/**
	 * The complete index key schema for the global secondary index, which consists of one or more pairs of attribute names and key types.
	 *
	 * Required: true
	 *
	 * @param {DynamoDBKeySchema} value
	 * @return {DynamoDBGlobalSecondaryIndexes}
	 */
	keySchema: function(value) {
		return this.set('KeySchema', value);
	},

	/**
	 * Attributes that are copied (projected) from the source table into the index. These attributes are in addition to the primary key attributes and index key attributes, which are automatically projected.
	 *
	 * Required: true
	 *
	 * @param {DynamoDBProjectionObject} value
	 * @return {DynamoDBGlobalSecondaryIndexes}
	 */
	projection: function(value) {
		return this.set('Projection', value);
	},

	/**
	 * The provisioned throughput settings for the index.
	 *
	 * Required: true
	 *
	 * @param {DynamoDBProvisionedThroughput} value
	 * @return {DynamoDBGlobalSecondaryIndexes}
	 */
	provisionedThroughput: function(value) {
		return this.set('ProvisionedThroughput', value);
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

module.exports = DynamoDBGlobalSecondaryIndexes;