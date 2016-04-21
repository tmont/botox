var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::DynamoDB::Table - Creates a DynamoDB table.
 * @constructor
 */
function DynamoDBTable(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

DynamoDBTable.prototype = {
	
	/**
	 * A list of AttributeName and AttributeType objects that describe the key schema for the table and indexes.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {DynamoDBAttributeDefinition[]} value
	 * @return {DynamoDBTable}
	 */
	attributeDefinitions: function(value) {
		return this.set('AttributeDefinitions', value);
	},

	/**
	 * Global secondary indexes to be created on the table. You can create up to 5 global secondary indexes.
	 *
	 * Required: false
	 * Update requires: Updates are not supported. with the following exceptions:
	 *
	 * @param {DynamoDBGlobalSecondaryIndex[]} value
	 * @return {DynamoDBTable}
	 */
	globalSecondaryIndexes: function(value) {
		return this.set('GlobalSecondaryIndexes', value);
	},

	/**
	 * Specifies the attributes that make up the primary key for the table. The attributes in the KeySchema property must also be defined in the AttributeDefinitions property.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {DynamoDBKeySchema[]} value
	 * @return {DynamoDBTable}
	 */
	keySchema: function(value) {
		return this.set('KeySchema', value);
	},

	/**
	 * Local secondary indexes to be created on the table. You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {DynamoDBLocalSecondaryIndex[]} value
	 * @return {DynamoDBTable}
	 */
	localSecondaryIndexes: function(value) {
		return this.set('LocalSecondaryIndexes', value);
	},

	/**
	 * Throughput for the specified table, consisting of values for ReadCapacityUnits and WriteCapacityUnits. For more information about the contents of a provisioned throughput structure, see DynamoDB Provisioned Throughput.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {DynamoDBProvisionedThroughput} value
	 * @return {DynamoDBTable}
	 */
	provisionedThroughput: function(value) {
		return this.set('ProvisionedThroughput', value);
	},

	/**
	 * The settings for the DynamoDB table stream, which capture changes to items stored in the table.
	 *
	 * Required: false
	 * Update requires: No interruption to the table; however, the stream is replaced.
	 *
	 * @param {DynamoDBTableStreamSpecification} value
	 * @return {DynamoDBTable}
	 */
	streamSpecification: function(value) {
		return this.set('StreamSpecification', value);
	},

	/**
	 * A name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {DynamoDBTable}
	 */
	tableName: function(value) {
		return this.set('TableName', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var resourceName = this.name;
		return {
			
			/**
			 * The Amazon Resource Name (ARN) of the DynamoDB stream, such as arn:aws:dynamodb:us-east-1:123456789012:table/testddbstack-myDynamoDBTable-012A1SL7SMP5Q/stream/2015-11-30T20:10:00.000.
			 */
			streamArn: function() {
				return new Attribute(resourceName, 'StreamArn');
			}
		};
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = DynamoDBTable;
