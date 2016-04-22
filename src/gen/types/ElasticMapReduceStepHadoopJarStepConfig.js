/**
 * HadoopJarStepConfig is a property of the AWS::EMR::Step resource that specifies a JAR file and runtime settings that Amazon Elastic MapReduce (Amazon EMR) executes.
 * @constructor
 */
function ElasticMapReduceStepHadoopJarStepConfig() {
	this.data = {};
}

ElasticMapReduceStepHadoopJarStepConfig.prototype = {
	
	/**
	 * A list of command line arguments passed to the JAR file's main function when the function is executed.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceStepHadoopJarStepConfig}
	 */
	args: function(value) {
		return this.set('Args', value);
	},

	/**
	 * A path to the JAR file that Amazon EMR runs for the job flow step.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceStepHadoopJarStepConfig}
	 */
	jar: function(value) {
		return this.set('Jar', value);
	},

	/**
	 * The name of the main class in the specified JAR file. If you don't specify a value, you must specify a main class in the JAR file's manifest file.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceStepHadoopJarStepConfig}
	 */
	mainClass: function(value) {
		return this.set('MainClass', value);
	},

	/**
	 * A list of Java properties that are set when the job flow step runs. You can use these properties to pass key-value pairs to your main function in the JAR file.
	 *
	 * Required: false
	 *
	 * @param {ElasticMapReduceStepHadoopJarStepConfigKeyValue[]} value
	 * @return {ElasticMapReduceStepHadoopJarStepConfig}
	 */
	stepProperties: function(value) {
		return this.set('StepProperties', value);
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

module.exports = ElasticMapReduceStepHadoopJarStepConfig;
