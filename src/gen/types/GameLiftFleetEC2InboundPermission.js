var PropertyType = require('../../property-type');

/**
 * EC2InboundPermission is a property of the AWS::GameLift::Fleet resource that specifies the traffic that is permitted to access your game servers in an Amazon GameLift (GameLift) fleet.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ec2inboundpermission.html}
 * @constructor
 */
function GameLiftFleetEC2InboundPermission() {
	PropertyType.call(this);
}

Object.setPrototypeOf(GameLiftFleetEC2InboundPermission, PropertyType);

GameLiftFleetEC2InboundPermission.prototype = {
	
	/**
	 * The starting value for a range of allowed port numbers. This value must be lower than the ToPort value.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {GameLiftFleetEC2InboundPermission}
	 */
	fromPort: function(value) {
		return this.set('FromPort', value);
	}
};

module.exports = GameLiftFleetEC2InboundPermission;
