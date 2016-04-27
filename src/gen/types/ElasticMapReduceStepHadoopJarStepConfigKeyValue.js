var PropertyType = require('../../property-type');

/**
 * KeyValue is a property of the Amazon Elastic MapReduce Step HadoopJarStepConfig property that specifies key-value pairs, which are passed to a JAR file that Amazon Elastic MapReduce (Amazon EMR) executes.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-step-hadoopjarstepconfig-keyvalue.html}
 * @constructor
 */
function ElasticMapReduceStepHadoopJarStepConfigKeyValue() {
	PropertyType.call(this);
}

ElasticMapReduceStepHadoopJarStepConfigKeyValue.prototype = Object.create(PropertyType.prototype);

/**
 * The unique identifier of a key-value pair.
 *
 * Required: false
 *
 * @param {String} value
 * @return {ElasticMapReduceStepHadoopJarStepConfigKeyValue}
 */
ElasticMapReduceStepHadoopJarStepConfigKeyValue.prototype.key = function(value) {
	return this.set('Key', value);
};

/**
 * The value part of the identified key.
 *
 * Required: false
 *
 * @param {String} value
 * @return {ElasticMapReduceStepHadoopJarStepConfigKeyValue}
 */
ElasticMapReduceStepHadoopJarStepConfigKeyValue.prototype.value = function(value) {
	return this.set('Value', value);
};

module.exports = ElasticMapReduceStepHadoopJarStepConfigKeyValue;
