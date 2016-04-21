var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Kinesis::Stream - Creates an Amazon Kinesis stream that captures and transports data records that are emitted from data sources. For specific information about creating streams, see CreateStream in the Amazon Kinesis API Reference.
 * @constructor
 */
function KinesisStream(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

KinesisStream.prototype = {
	
	/**
	 * The number of shards that the stream uses. For greater provisioned throughput, increase the number of shards.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {Integer} value
	 * @return {KinesisStream}
	 */
	shardCount: function(value) {
		return this.set('ShardCount', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) to associate with the Amazon Kinesis stream.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {KinesisStream}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::Kinesis::Stream has no attributes');
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

module.exports = KinesisStream;
