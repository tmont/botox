var PropertyType = require('../../property-type');

/**
 * LogConfiguration is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that configures a custom log driver for an Amazon EC2 Container Service (Amazon ECS) container.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinitions-logconfiguration.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration() {
	PropertyType.call(this);
}

Object.setPrototypeOf(EC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration, PropertyType);

EC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration.prototype = {
	
	/**
	 * The log driver to use for the container. This parameter requires that your container instance uses Docker Remote API Version 1.18 or greater. For more information, see the logDriver content for the LogConfiguration data type in the Amazon EC2 Container Service API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration}
	 */
	logDriver: function(value) {
		return this.set('LogDriver', value);
	},

	/**
	 * The configuration options to send to the log driver. This parameter requires that your container instance uses Docker Remote API Version 1.18 or greater.
	 *
	 * Required: false
	 *
	 * @param {Object} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration}
	 */
	options: function(value) {
		return this.set('Options', value);
	}
};

module.exports = EC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration;
