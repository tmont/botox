var PropertyType = require('../../property-type');

/**
 * Ulimit is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies resource limits for an Amazon EC2 Container Service (Amazon ECS) container.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinitions-ulimit.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit() {
	PropertyType.call(this);
}

EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit.prototype = Object.create(PropertyType.prototype);

/**
 * The hard limit for the ulimit type.
 *
 * Required: true
 *
 * @param {Number} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit.prototype.hardLimit = function(value) {
	return this.set('HardLimit', value);
};

/**
 * The type of ulimit. For valid values, see the name content for the Ulimit data type in the Amazon EC2 Container Service API Reference.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The soft limit for the ulimit type.
 *
 * Required: true
 *
 * @param {Number} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit.prototype.softLimit = function(value) {
	return this.set('SoftLimit', value);
};

module.exports = EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit;
