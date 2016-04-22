/**
 * EC2InboundPermission is a property of the AWS::GameLift::Fleet resource that specifies the traffic that is permitted to access your game servers in an Amazon GameLift (GameLift) fleet.
 * @constructor
 */
function GameLiftFleetEC2InboundPermission(initialData) {
	this.data = initialData || {};
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = GameLiftFleetEC2InboundPermission;
