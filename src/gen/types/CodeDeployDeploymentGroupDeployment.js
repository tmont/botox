var PropertyType = require('../../property-type');

/**
 * Deployment is a property of the AWS::CodeDeploy::DeploymentGroup resource that specifies the AWS CodeDeploy application revision that will be deployed to the deployment group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment.html}
 * @constructor
 */
function CodeDeployDeploymentGroupDeployment() {
	PropertyType.call(this);
}

Object.setPrototypeOf(CodeDeployDeploymentGroupDeployment, PropertyType);

CodeDeployDeploymentGroupDeployment.prototype = {
	
	/**
	 * A description about this deployment.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CodeDeployDeploymentGroupDeployment}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * Whether to continue the deployment if the ApplicationStop deployment lifecycle event fails. If you want AWS CodeDeploy to continue the deployment lifecycle even if the ApplicationStop event fails on an instance, specify true. The deployment continues to the BeforeInstall deployment lifecycle event. If you want AWS CodeDeploy to stop deployment on the instance if the ApplicationStop event fails, specify false or do not specify a value.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {CodeDeployDeploymentGroupDeployment}
	 */
	ignoreApplicationStopFailures: function(value) {
		return this.set('IgnoreApplicationStopFailures', value);
	},

	/**
	 * The location of the application revision to deploy.
	 *
	 * Required: true
	 *
	 * @param {CodeDeployDeploymentGroupDeploymentRevision} value
	 * @return {CodeDeployDeploymentGroupDeployment}
	 */
	revision: function(value) {
		return this.set('Revision', value);
	}
};

module.exports = CodeDeployDeploymentGroupDeployment;
