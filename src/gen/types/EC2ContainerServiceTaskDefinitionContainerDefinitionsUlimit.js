var PropertyType = require('../../property-type');

/**
 * Ulimit is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies resource limits for an Amazon EC2 Container Service (Amazon ECS) container.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinitions-ulimit.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit() {
	PropertyType.call(this);
}

Object.setPrototypeOf(EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit, PropertyType);

EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit.prototype = {
	
	/**
	 * The hard limit for the ulimit type.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit}
	 */
	hardLimit: function(value) {
		return this.set('HardLimit', value);
	},

	/**
	 * The type of ulimit. For valid values, see the name content for the Ulimit data type in the Amazon EC2 Container Service API Reference.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The soft limit for the ulimit type.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit}
	 */
	softLimit: function(value) {
		return this.set('SoftLimit', value);
	}
};

module.exports = EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit;
