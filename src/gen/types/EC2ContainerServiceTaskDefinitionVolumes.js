var PropertyType = require('../../property-type');

/**
 * Volumes is a property of the AWS::ECS::TaskDefinition resource that specifies a list of data volumes, which your containers can then access.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volumes.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionVolumes() {
	PropertyType.call(this);
}

EC2ContainerServiceTaskDefinitionVolumes.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the volume. To specify mount points in your container definitions, use the value of this property.
 *
 * Required: true
 *
 * @param {String} value
 * @return {EC2ContainerServiceTaskDefinitionVolumes}
 */
EC2ContainerServiceTaskDefinitionVolumes.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * Determines whether your data volume persists on the host container instance and at the location where it is stored.
 *
 * Required: false
 *
 * @param {EC2ContainerServiceTaskDefinitionVolumesHost} value
 * @return {EC2ContainerServiceTaskDefinitionVolumes}
 */
EC2ContainerServiceTaskDefinitionVolumes.prototype.host = function(value) {
	return this.set('Host', value);
};

module.exports = EC2ContainerServiceTaskDefinitionVolumes;
