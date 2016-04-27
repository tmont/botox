var PropertyType = require('../../property-type');

/**
 * The EC2 PortRange property is an embedded property of the AWS::EC2::NetworkAclEntry type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-port-range.html}
 * @constructor
 */
function EC2PortRangePropertyType() {
	PropertyType.call(this);
}

EC2PortRangePropertyType.prototype = Object.create(PropertyType.prototype);

module.exports = EC2PortRangePropertyType;
