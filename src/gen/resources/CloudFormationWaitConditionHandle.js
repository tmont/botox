var Resource = require('../../resource');

/**
 * AWS::CloudFormation::WaitConditionHandle - Important
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitconditionhandle.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFormationWaitConditionHandle(name) {
	Resource.call(this, name, 'AWS::CloudFormation::WaitConditionHandle');
}

CloudFormationWaitConditionHandle.prototype = Object.create(Resource.prototype);



module.exports = CloudFormationWaitConditionHandle;
