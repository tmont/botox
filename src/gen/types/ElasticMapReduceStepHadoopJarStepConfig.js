var PropertyType = require('../../property-type');

/**
 * HadoopJarStepConfig is a property of the AWS::EMR::Step resource that specifies a JAR file and runtime settings that Amazon Elastic MapReduce (Amazon EMR) executes.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-step-hadoopjarstepconfig.html}
 * @constructor
 */
function ElasticMapReduceStepHadoopJarStepConfig() {
	PropertyType.call(this);
}

ElasticMapReduceStepHadoopJarStepConfig.prototype = Object.create(PropertyType.prototype);

/**
 * A list of command line arguments passed to the JAR file's main function when the function is executed.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticMapReduceStepHadoopJarStepConfig}
 */
ElasticMapReduceStepHadoopJarStepConfig.prototype.args = function(value) {
	return this.set('Args', value);
};

/**
 * A path to the JAR file that Amazon EMR runs for the job flow step.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticMapReduceStepHadoopJarStepConfig}
 */
ElasticMapReduceStepHadoopJarStepConfig.prototype.jar = function(value) {
	return this.set('Jar', value);
};

/**
 * The name of the main class in the specified JAR file. If you don't specify a value, you must specify a main class in the JAR file's manifest file.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticMapReduceStepHadoopJarStepConfig}
 */
ElasticMapReduceStepHadoopJarStepConfig.prototype.mainClass = function(value) {
	return this.set('MainClass', value);
};

/**
 * A list of Java properties that are set when the job flow step runs. You can use these properties to pass key-value pairs to your main function in the JAR file.
 *
 * Required: false
 *
 * @param {ElasticMapReduceStepHadoopJarStepConfigKeyValue[]} value
 * @returns {ElasticMapReduceStepHadoopJarStepConfig}
 */
ElasticMapReduceStepHadoopJarStepConfig.prototype.stepProperties = function(value) {
	return this.set('StepProperties', value);
};

module.exports = ElasticMapReduceStepHadoopJarStepConfig;
