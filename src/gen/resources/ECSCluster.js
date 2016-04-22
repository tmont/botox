var Resource = require('../../resource');

/**
 * AWS::ECS::Cluster - The AWS::ECS::Cluster resource creates an Amazon EC2 Container Service (Amazon ECS) cluster. This resource has no properties; use the Amazon ECS container agent to connect to the cluster. For more information, see Amazon ECS Container Agent in the Amazon EC2 Container Service Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ECSCluster(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ECSCluster, Resource);

ECSCluster.prototype = {
	
	
};

module.exports = ECSCluster;
