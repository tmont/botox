var PropertyType = require('../../property-type');

/**
 * Environment is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies environment variables for a container.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinitions-environment.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment() {
	PropertyType.call(this);
}

Object.setPrototypeOf(EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment, PropertyType);

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
	}
};

module.exports = EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment;
