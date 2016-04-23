var PropertyType = require('../../property-type');

/**
 * For some resources, you can specify a custom name. By default, AWS CloudFormation generates a unique physical ID to name a resource. For example, AWS CloudFormation might name an Amazon S3 bucket with the following physical ID stack123123123123-s3bucket-abcdefghijk1. With custom names, you can specify a name that's easier to read and identify, such as production-app-logs or business-metrics.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html}
 * @constructor
 */
function NameType() {
	PropertyType.call(this);
}

Object.setPrototypeOf(NameType, PropertyType);

NameType.prototype = {
	
};

module.exports = NameType;
