var PropertyType = require('../../property-type');

/**
 * ContainerDefinitions is a property of the AWS::ECS::TaskDefinition resource that describes the configuration of a container. The container definitions are passed to the Docker daemon.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinitions.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionContainerDefinitions() {
	PropertyType.call(this);
}

Object.setPrototypeOf(EC2ContainerServiceTaskDefinitionContainerDefinitions, PropertyType);

EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype = {
	
	/**
	 * The CMD value to pass to the container. For more information about the Docker CMD parameter, see https://docs.docker.com/reference/builder/#cmd.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitions}
	 */
	command: function(value) {
		return this.set('Command', value);
	},

	/**
	 * The minimum number of CPU units to reserve for the container. Containers share unallocated CPU units with other containers on the instance by using the same ratio as their allocated CPU units.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitions}
	 */
	cpu: function(value) {
		return this.set('Cpu', value);
	},

	/**
	 * The ENTRYPOINT value to pass to the container. For more information about the Docker ENTRYPOINT parameter, see https://docs.docker.com/reference/builder/#entrypoint.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitions}
	 */
	entryPoint: function(value) {
		return this.set('EntryPoint', value);
	},

	/**
	 * The environment variables to pass to the container.
	 *
	 * Required: false
	 *
	 * @param {EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment[]} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitions}
	 */
	environment: function(value) {
		return this.set('Environment', value);
	},

	/**
	 * Indicates whether the task stops if this container fails. If you specify true and the container fails, all other containers in the task stop. If you specify false and the container fails, none of the other containers in the task are affected. This value is true by default.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitions}
	 */
	essential: function(value) {
		return this.set('Essential', value);
	},

	/**
	 * The image to use for a container, which is passed directly to the Docker daemon. You can use images in the Docker Hub registry or specify other repositories (repository-url/image:tag).
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitions}
	 */
	image: function(value) {
		return this.set('Image', value);
	},

	/**
	 * The name of another container to connect to. With links, containers can communicate with each other without using port mappings.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitions}
	 */
	links: function(value) {
		return this.set('Links', value);
	},

	/**
	 * The number of MiB of memory to reserve for the container. If your container attempts to exceed the allocated memory, the container is killed.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitions}
	 */
	memory: function(value) {
		return this.set('Memory', value);
	},

	/**
	 * The mount points for data volumes in the container.
	 *
	 * Required: false
	 *
	 * @param {EC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoint[]} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitions}
	 */
	mountPoints: function(value) {
		return this.set('MountPoints', value);
	},

	/**
	 * A name for the container.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitions}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * A mapping of the container port to a host port. Port mappings enable containers to access ports on the host container instance to send or receive traffic.
	 *
	 * Required: false
	 *
	 * @param {EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMapping[]} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitions}
	 */
	portMappings: function(value) {
		return this.set('PortMappings', value);
	},

	/**
	 * Data volumes to mount from another container.
	 *
	 * Required: false
	 *
	 * @param {EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom[]} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitions}
	 */
	volumesFrom: function(value) {
		return this.set('VolumesFrom', value);
	}
};

module.exports = EC2ContainerServiceTaskDefinitionContainerDefinitions;
