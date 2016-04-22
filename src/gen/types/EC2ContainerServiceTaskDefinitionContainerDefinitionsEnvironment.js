/**
 * Environment is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies environment variables for a container.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinitions-environment.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment() {
	this.data = {};
}

EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment.prototype = {
	
	/**
	 * The name of the environment variable.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The value of the environment variable.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment}
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

module.exports = EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment;
