var ResourceAttribute = require('../../resource-attribute');

/**
 * Use the UpdatePolicy attribute to specify how AWS CloudFormation handles updates to the AWS::AutoScaling::AutoScalingGroup resource. AWS CloudFormation invokes one of three update policies depending on the type of change you make or on whether a scheduled action is associated with the Auto Scaling group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html}
 * @constructor
 */
function UpdatePolicy() {
	ResourceAttribute.call(this);
}

UpdatePolicy.prototype = Object.create(ResourceAttribute.prototype);

module.exports = UpdatePolicy;
