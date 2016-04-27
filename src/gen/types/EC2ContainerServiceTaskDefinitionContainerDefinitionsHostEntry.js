var PropertyType = require('../../property-type');

/**
 * HostEntry is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies the hostnames and IP address entries to add to the Amazon EC2 Container Service (Amazon ECS) container's /etc/hosts file.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinitions-hostentry.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry() {
	PropertyType.call(this);
}

EC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry.prototype = Object.create(PropertyType.prototype);

/**
 * The hostname to use in the /etc/hosts file.
 *
 * Required: true
 *
 * @param {String} value
 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry.prototype.hostname = function(value) {
	return this.set('Hostname', value);
};

/**
 * The IP address to use in the /etc/hosts file.
 *
 * Required: true
 *
 * @param {String} value
 * @return {EC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry.prototype.ipAddress = function(value) {
	return this.set('IpAddress', value);
};

module.exports = EC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry;
