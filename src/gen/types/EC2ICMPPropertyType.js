var PropertyType = require('../../property-type');

/**
 * The EC2 ICMP property is an embedded property of the AWS::EC2::NetworkAclEntry type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-icmp.html}
 * @constructor
 */
function EC2ICMPPropertyType() {
	PropertyType.call(this);
}

EC2ICMPPropertyType.prototype = Object.create(PropertyType.prototype);

module.exports = EC2ICMPPropertyType;
