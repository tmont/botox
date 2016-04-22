var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ECS::Cluster - The AWS::ECS::Cluster resource creates an Amazon EC2 Container Service (Amazon ECS) cluster. This resource has no properties; use the Amazon ECS container agent to connect to the cluster. For more information, see Amazon ECS Container Agent in the Amazon EC2 Container Service Developer Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function ECSCluster(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

ECSCluster.prototype = {
	

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ECS::Cluster has no attributes');
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

module.exports = ECSCluster;
