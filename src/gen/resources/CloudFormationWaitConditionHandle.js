var Resource = require('../../resource');

/**
 * AWS::CloudFormation::WaitConditionHandle - Important
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFormationWaitConditionHandle(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(CloudFormationWaitConditionHandle, Resource);

CloudFormationWaitConditionHandle.prototype = {
	
	
};

module.exports = CloudFormationWaitConditionHandle;
