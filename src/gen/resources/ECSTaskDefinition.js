var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ECS::TaskDefinition - The AWS::ECS::TaskDefinition resource describes the container and volume definitions of an Amazon EC2 Container Service (Amazon ECS) task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
 * @constructor
 */
function ECSTaskDefinition(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

ECSTaskDefinition.prototype = {
	
	/**
	 * A list of container definitions in JSON format that describe the containers that make up your task.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {EC2ContainerServiceTaskDefinitionContainerDefinition[]} value
	 * @return {ECSTaskDefinition}
	 */
	containerDefinitions: function(value) {
		return this.set('ContainerDefinitions', value);
	},

	/**
	 * A list of volume definitions in JSON format for volumes that you can use in your container definitions.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {EC2ContainerServiceTaskDefinitionVolume[]} value
	 * @return {ECSTaskDefinition}
	 */
	volumes: function(value) {
		return this.set('Volumes', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ECS::TaskDefinition has no attributes');
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = ECSTaskDefinition;
