var PropertyType = require('../../property-type');

/**
 * MountPoints is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies the mount points for data volumes in a container.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinitions-mountpoints.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints() {
	PropertyType.call(this);
}

Object.setPrototypeOf(EC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints, PropertyType);

EC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints.prototype = {
	
	/**
	 * The path on the container that indicates where you want to mount the volume.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints}
	 */
	containerPath: function(value) {
		return this.set('ContainerPath', value);
	},

	/**
	 * The name of the volume to mount.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints}
	 */
	sourceVolume: function(value) {
		return this.set('SourceVolume', value);
	},

	/**
	 * Indicates whether the container can write to the volume. If you specify true, the container has read-only access to the volume. If you specify false, the container can write to the volume. By default, the value is false.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints}
	 */
	readOnly: function(value) {
		return this.set('ReadOnly', value);
	}
};

module.exports = EC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints;
