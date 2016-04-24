var Resource = require('../../resource');

/**
 * AWS::ECS::TaskDefinition - The AWS::ECS::TaskDefinition resource describes the container and volume definitions of an Amazon EC2 Container Service (Amazon ECS) task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ECSTaskDefinition(name) {
	Resource.call(this, name, 'AWS::ECS::TaskDefinition');
}

ECSTaskDefinition.prototype = Object.create(Resource.prototype);


/**
 * A list of container definitions in JSON format that describe the containers that make up your task.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {EC2ContainerServiceTaskDefinitionContainerDefinitions[]|Attribute|Reference} value List of Amazon EC2 Container Service TaskDefinition ContainerDefinitions
 * @return {ECSTaskDefinition}
 */
ECSTaskDefinition.prototype.containerDefinitions = function(value) {
	return this.set('ContainerDefinitions', value);
};

/**
 * A list of volume definitions in JSON format for volumes that you can use in your container definitions.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {EC2ContainerServiceTaskDefinitionVolumes[]|Attribute|Reference} value List of Amazon EC2 Container Service TaskDefinition Volumes
 * @return {ECSTaskDefinition}
 */
ECSTaskDefinition.prototype.volumes = function(value) {
	return this.set('Volumes', value);
};

module.exports = ECSTaskDefinition;
