var PropertyType = require('../../property-type');

/**
 * DeploymentConfiguration is a property of the AWS::ECS::Service resource that configures how many tasks run when you update a running Amazon EC2 Container Service (Amazon ECS) service.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentconfiguration.html}
 * @constructor
 */
function EC2ContainerServiceServiceDeploymentConfiguration() {
	PropertyType.call(this);
}

EC2ContainerServiceServiceDeploymentConfiguration.prototype = Object.create(PropertyType.prototype);

/**
 * The maximum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that can run in a service during a deployment. To calculate the maximum number of tasks, Amazon ECS uses this formula: the value of DesiredCount * (the value of the MaximumPercent/100), rounded down to the nearest integer value.
 *
 * Required: false
 *
 * @param {Number} value
 * @return {EC2ContainerServiceServiceDeploymentConfiguration}
 */
EC2ContainerServiceServiceDeploymentConfiguration.prototype.maximumPercent = function(value) {
	return this.set('MaximumPercent', value);
};

/**
 * The minimum number of tasks, specified as a percentage of the Amazon ECS service's DesiredCount value, that must continue to run and remain healthy during a deployment. To calculate the minimum number of tasks, Amazon ECS uses this formula: the value of DesiredCount * (the value of the MinimumHealthyPercent/100), rounded up to the nearest integer value.
 *
 * Required: false
 *
 * @param {Number} value
 * @return {EC2ContainerServiceServiceDeploymentConfiguration}
 */
EC2ContainerServiceServiceDeploymentConfiguration.prototype.minimumHealthyPercent = function(value) {
	return this.set('MinimumHealthyPercent', value);
};

module.exports = EC2ContainerServiceServiceDeploymentConfiguration;
