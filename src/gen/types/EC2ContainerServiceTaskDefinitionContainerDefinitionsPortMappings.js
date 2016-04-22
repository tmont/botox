/**
 * PortMappings is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that maps a container port to a host port.
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings(initialData) {
	this.data = initialData || {};
}

EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings.prototype = {
	
	/**
	 * The port number on the container that is bound to the host port.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings}
	 */
	containerPort: function(value) {
		return this.set('ContainerPort', value);
	},

	/**
	 * The host port number on the container instance that you want to reserve for your container. You can specify a non-reserved host port for your container port mapping, or you can omit the host port (or set it to 0). If you specify a container port but no host port, your container port is automatically assigned a host port in the 49153 to 65535 port range.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings}
	 */
	hostPort: function(value) {
		return this.set('HostPort', value);
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

module.exports = EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings;
