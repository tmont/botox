var PropertyType = require('../../property-type');

/**
 * ContainerDefinitions is a property of the AWS::ECS::TaskDefinition resource that describes the configuration of an Amazon EC2 Container Service (Amazon ECS) container. The container definitions are passed to the Docker daemon.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinitions.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionContainerDefinitions() {
	PropertyType.call(this);
}

EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype = Object.create(PropertyType.prototype);

/**
 * The CMD value to pass to the container. For more information about the Docker CMD parameter, see https://docs.docker.com/reference/builder/#cmd.
 *
 * Required: false
 *
 * @param {String[]} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.command = function(value) {
	return this.set('Command', value);
};

/**
 * The minimum number of CPU units to reserve for the container. Containers share unallocated CPU units with other containers on the instance by using the same ratio as their allocated CPU units. For more information, see the cpu content for the ContainerDefinition data type in the Amazon EC2 Container Service API Reference.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.cpu = function(value) {
	return this.set('Cpu', value);
};

/**
 * Indicates whether networking is disabled within the container.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.disableNetworking = function(value) {
	return this.set('DisableNetworking', value);
};

/**
 * A list of DNS search domains that are provided to the container. The domain names that the DNS logic looks up when a process attempts to access a bare unqualified hostname.
 *
 * Required: false
 *
 * @param {String[]} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.dnsSearchDomains = function(value) {
	return this.set('DnsSearchDomains', value);
};

/**
 * A list of DNS servers that Amazon ECS provides to the container.
 *
 * Required: false
 *
 * @param {String[]} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.dnsServers = function(value) {
	return this.set('DnsServers', value);
};

/**
 * A key-value map of labels for the container.
 *
 * Required: false
 *
 * @param {Object} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.dockerLabels = function(value) {
	return this.set('DockerLabels', value);
};

/**
 * A list of custom labels for SELinux and AppArmor multi-level security systems. For more information, see the dockerSecurityOptions content for the ContainerDefinition data type in the Amazon EC2 Container Service API Reference.
 *
 * Required: false
 *
 * @param {String[]} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.dockerSecurityOptions = function(value) {
	return this.set('DockerSecurityOptions', value);
};

/**
 * The ENTRYPOINT value to pass to the container. For more information about the Docker ENTRYPOINT parameter, see https://docs.docker.com/reference/builder/#entrypoint.
 *
 * Required: false
 *
 * @param {String[]} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.entryPoint = function(value) {
	return this.set('EntryPoint', value);
};

/**
 * The environment variables to pass to the container.
 *
 * Required: false
 *
 * @param {EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment[]} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.environment = function(value) {
	return this.set('Environment', value);
};

/**
 * Indicates whether the task stops if this container fails. If you specify true and the container fails, all other containers in the task stop. If you specify false and the container fails, none of the other containers in the task is affected. This value is true by default.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.essential = function(value) {
	return this.set('Essential', value);
};

/**
 * A list of hostnames and IP address mappings to append to the /etc/hosts file on the container.
 *
 * Required: false
 *
 * @param {EC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry[]} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.extraHosts = function(value) {
	return this.set('ExtraHosts', value);
};

/**
 * The name that Docker will use for the container's hostname.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.hostname = function(value) {
	return this.set('Hostname', value);
};

/**
 * The image to use for a container, which is passed directly to the Docker daemon. You can use images in the Docker Hub registry or specify other repositories (repository-url/image:tag).
 *
 * Required: true
 *
 * @param {String} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.image = function(value) {
	return this.set('Image', value);
};

/**
 * The name of another container to connect to. With links, containers can communicate with each other without using port mappings.
 *
 * Required: false
 *
 * @param {String[]} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.links = function(value) {
	return this.set('Links', value);
};

/**
 * Configures a custom log driver for the container. For more information, see the logConfiguration content for the ContainerDefinition data type in the Amazon EC2 Container Service API Reference.
 *
 * Required: false
 *
 * @param {EC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.logConfiguration = function(value) {
	return this.set('LogConfiguration', value);
};

/**
 * The number of MiB of memory to reserve for the container. If your container attempts to exceed the allocated memory, the container is terminated.
 *
 * Required: true
 *
 * @param {Number} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.memory = function(value) {
	return this.set('Memory', value);
};

/**
 * The mount points for data volumes in the container.
 *
 * Required: false
 *
 * @param {EC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints[]} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.mountPoints = function(value) {
	return this.set('MountPoints', value);
};

/**
 * A name for the container.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * A mapping of the container port to a host port. Port mappings enable containers to access ports on the host container instance to send or receive traffic.
 *
 * Required: false
 *
 * @param {EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings[]} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.portMappings = function(value) {
	return this.set('PortMappings', value);
};

/**
 * Indicates whether the container is given full access to the host container instance.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.privileged = function(value) {
	return this.set('Privileged', value);
};

/**
 * Indicates whether the container's root file system is mounted as read only.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.readonlyRootFilesystem = function(value) {
	return this.set('ReadonlyRootFilesystem', value);
};

/**
 * A list of ulimits to set in the container. The ulimits set constraints on how much resources a container can consume so that it doesn't deplete all available resources on the host.
 *
 * Required: false
 *
 * @param {EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit[]} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.ulimits = function(value) {
	return this.set('Ulimits', value);
};

/**
 * The user name to use inside the container.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.user = function(value) {
	return this.set('User', value);
};

/**
 * The data volumes to mount from another container.
 *
 * Required: false
 *
 * @param {EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom[]} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.volumesFrom = function(value) {
	return this.set('VolumesFrom', value);
};

/**
 * The working directory in the container in which to run commands.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitions.prototype.workingDirectory = function(value) {
	return this.set('WorkingDirectory', value);
};

module.exports = EC2ContainerServiceTaskDefinitionContainerDefinitions;
