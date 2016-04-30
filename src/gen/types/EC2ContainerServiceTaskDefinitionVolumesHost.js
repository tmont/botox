var PropertyType = require('../../property-type');

/**
 * Host is a property of the Amazon EC2 Container Service TaskDefinition Volumes property that specifies the data volume path on the host container instance.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volumes-host.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionVolumesHost() {
	PropertyType.call(this);
}

EC2ContainerServiceTaskDefinitionVolumesHost.prototype = Object.create(PropertyType.prototype);

/**
 * The data volume path on the host container instance.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {EC2ContainerServiceTaskDefinitionVolumesHost}
 */
EC2ContainerServiceTaskDefinitionVolumesHost.prototype.sourcePath = function(value) {
	return this.set('SourcePath', value);
};

module.exports = EC2ContainerServiceTaskDefinitionVolumesHost;
