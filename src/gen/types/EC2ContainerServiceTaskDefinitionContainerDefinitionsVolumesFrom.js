/**
 * VolumesFrom is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that mounts data volumes from other containers.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinitions-volumesfrom.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom() {
	this.data = {};
}

EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom.prototype = {
	
	/**
	 * The name of the container that has the volumes to mount.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom}
	 */
	sourceContainer: function(value) {
		return this.set('SourceContainer', value);
	},

	/**
	 * Indicates whether the container can write to the volume. If you specify true, the container has read-only access to the volume. If you specify false, the container can write to the volume. By default, the value is false.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom}
	 */
	readOnly: function(value) {
		return this.set('ReadOnly', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom;
