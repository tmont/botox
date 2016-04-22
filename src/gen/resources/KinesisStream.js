var Resource = require('../../resource');

/**
 * AWS::Kinesis::Stream - Creates an Amazon Kinesis stream that captures and transports data records that are emitted from data sources. For specific information about creating streams, see CreateStream in the Amazon Kinesis API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function KinesisStream(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(KinesisStream, Resource);

KinesisStream.prototype = {
	
	
	/**
	 * The number of shards that the stream uses. For greater provisioned throughput, increase the number of shards.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {Number} value
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
	}
};

module.exports = KinesisStream;
