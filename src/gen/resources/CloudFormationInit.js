var Resource = require('../../resource');

/**
 * AWS::CloudFormation::Init - Topics
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFormationInit(name) {
	Resource.call(this, name, 'AWS::CloudFormation::Init');
}

CloudFormationInit.prototype = Object.create(Resource.prototype);

module.exports = CloudFormationInit;
