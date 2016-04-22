var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ECR::Repository - The AWS::ECR::Repository resource creates an Amazon EC2 Container Registry (Amazon ECR) repository, where users can push and pull Docker images. For more information, see Amazon ECR Repositories in the Amazon EC2 Container Registry User Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function ECRRepository(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

ECRRepository.prototype = {
	
	/**
	 * A name for the image repository. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the repository name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ECRRepository}
	 */
	repositoryName: function(value) {
		return this.set('RepositoryName', value);
	},

	/**
	 * A policy that controls who has access to the repository and which actions they can perform on it. For more information, see Amazon ECR Repository Policies in the Amazon EC2 Container Registry User Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {JSONobject} value
	 * @return {ECRRepository}
	 */
	repositoryPolicyText: function(value) {
		return this.set('RepositoryPolicyText', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ECR::Repository has no attributes');
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

module.exports = ECRRepository;
