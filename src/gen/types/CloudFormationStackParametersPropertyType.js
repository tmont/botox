var PropertyType = require('../../property-type');

/**
 * The Parameters type is an embedded property of the AWS::CloudFormation::Stack type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack-parameters.html}
 * @constructor
 */
function CloudFormationStackParametersPropertyType() {
	PropertyType.call(this);
}

Object.setPrototypeOf(CloudFormationStackParametersPropertyType, PropertyType);

CloudFormationStackParametersPropertyType.prototype = {
	
};

module.exports = CloudFormationStackParametersPropertyType;
