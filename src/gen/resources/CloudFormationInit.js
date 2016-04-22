var Resource = require('../../resource');

/**
 * AWS::CloudFormation::Init - Topics
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFormationInit(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(CloudFormationInit, Resource);

CloudFormationInit.prototype = {
	
	
};

module.exports = CloudFormationInit;
