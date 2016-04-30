var PropertyType = require('../../property-type');

/**
 * VolumesFrom is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that mounts data volumes from other containers.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinitions-volumesfrom.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom() {
	PropertyType.call(this);
}

EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the container that has the volumes to mount.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom.prototype.sourceContainer = function(value) {
	return this.set('SourceContainer', value);
};

/**
 * Indicates whether the container can write to the volume. If you specify true, the container has read-only access to the volume. If you specify false, the container can write to the volume. By default, the value is false.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom.prototype.readOnly = function(value) {
	return this.set('ReadOnly', value);
};

module.exports = EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom;
