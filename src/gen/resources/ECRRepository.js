var Resource = require('../../resource');

/**
 * AWS::ECR::Repository - The AWS::ECR::Repository resource creates an Amazon EC2 Container Registry (Amazon ECR) repository, where users can push and pull Docker images. For more information, see Amazon ECR Repositories in the Amazon EC2 Container Registry User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ECRRepository(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ECRRepository, Resource);

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
	 * @param {Object} value
	 * @return {ECRRepository}
	 */
	repositoryPolicyText: function(value) {
		return this.set('RepositoryPolicyText', value);
	}
};

module.exports = ECRRepository;
