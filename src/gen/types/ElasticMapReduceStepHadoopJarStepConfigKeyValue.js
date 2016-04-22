/**
 * KeyValue is a property of the Amazon Elastic MapReduce Step HadoopJarStepConfig property that specifies key-value pairs, which are passed to a JAR file that Amazon Elastic MapReduce (Amazon EMR) executes.
 * @constructor
 */
function ElasticMapReduceStepHadoopJarStepConfigKeyValue() {
	this.data = {};
}

ElasticMapReduceStepHadoopJarStepConfigKeyValue.prototype = {
	
	/**
	 * The unique identifier of a key-value pair.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceStepHadoopJarStepConfigKeyValue}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * The value part of the identified key.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceStepHadoopJarStepConfigKeyValue}
	 */
	value: function(value) {
		return this.set('Value', value);
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

module.exports = ElasticMapReduceStepHadoopJarStepConfigKeyValue;
