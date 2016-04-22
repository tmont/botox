var Resource = require('../../resource');

/**
 * AWS::ECS::TaskDefinition - The AWS::ECS::TaskDefinition resource describes the container and volume definitions of an Amazon EC2 Container Service (Amazon ECS) task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ECSTaskDefinition(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ECSTaskDefinition, Resource);

ECSTaskDefinition.prototype = {
	
	
	/**
	 * A list of container definitions in JSON format that describe the containers that make up your task.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {EC2ContainerServiceTaskDefinitionContainerDefinition[]} value
	 * @return {ECSTaskDefinition}
	 */
	containerDefinitions: function(value) {
		return this.set('ContainerDefinitions', value);
	},

	/**
	 * A list of volume definitions in JSON format for volumes that you can use in your container definitions.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {EC2ContainerServiceTaskDefinitionVolume[]} value
	 * @return {ECSTaskDefinition}
	 */
	volumes: function(value) {
		return this.set('Volumes', value);
	}
};

module.exports = ECSTaskDefinition;
