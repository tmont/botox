var Resource = require('../../resource');

/**
 * AWS::CodeDeploy::Application - The AWS::CodeDeploy::Application resource creates an AWS CodeDeploy application. An application revision, deployment configuration, and deployment group must all be included in an AWS CodeDeploy application. For more information, see AWS CodeDeploy Deployments in the AWS CodeDeploy User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CodeDeployApplication(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(CodeDeployApplication, Resource);

CodeDeployApplication.prototype = {
	
	
	/**
	 * A name for the application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {CodeDeployApplication}
	 */
	applicationName: function(value) {
		return this.set('ApplicationName', value);
	}
};

module.exports = CodeDeployApplication;
