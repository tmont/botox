var PropertyType = require('../../property-type');

/**
 * EC2InboundPermission is a property of the AWS::GameLift::Fleet resource that specifies the traffic that is permitted to access your game servers in an Amazon GameLift (GameLift) fleet.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ec2inboundpermission.html}
 * @constructor
 */
function GameLiftFleetEC2InboundPermission() {
	PropertyType.call(this);
}

GameLiftFleetEC2InboundPermission.prototype = Object.create(PropertyType.prototype);

/**
 * The starting value for a range of allowed port numbers. This value must be lower than the ToPort value.
 *
 * Required: true
 *
 * @param {Number} value
 * @return {GameLiftFleetEC2InboundPermission}
 */
GameLiftFleetEC2InboundPermission.prototype.fromPort = function(value) {
	return this.set('FromPort', value);
};

/**
 * The range of allowed IP addresses in CIDR notation.
 *
 * Required: true
 *
 * @param {String} value
 * @return {GameLiftFleetEC2InboundPermission}
 */
GameLiftFleetEC2InboundPermission.prototype.ipRange = function(value) {
	return this.set('IpRange', value);
};

/**
 * The network communication protocol that is used by the fleet. For valid values, see the IpPermission data type in the Amazon GameLift API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @return {GameLiftFleetEC2InboundPermission}
 */
GameLiftFleetEC2InboundPermission.prototype.protocol = function(value) {
	return this.set('Protocol', value);
};

/**
 * The ending value for a range of allowed port numbers. This value must be higher than the FromPort value.
 *
 * Required: true
 *
 * @param {Number} value
 * @return {GameLiftFleetEC2InboundPermission}
 */
GameLiftFleetEC2InboundPermission.prototype.toPort = function(value) {
	return this.set('ToPort', value);
};

module.exports = GameLiftFleetEC2InboundPermission;
