var PropertyType = require('../../property-type');

/**
 * Environment is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies environment variables for a container.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinitions-environment.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment() {
	PropertyType.call(this);
}

EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the environment variable.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The value of the environment variable.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment.prototype.value = function(value) {
	return this.set('Value', value);
};

module.exports = EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment;
