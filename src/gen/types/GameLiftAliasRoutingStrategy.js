/**
 * RoutingStrategy is a property of the AWS::GameLift::Alias resource that configures the routing strategy for an Amazon GameLift (GameLift) alias. For more information, see the RoutingStrategy data type in the Amazon GameLift API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html}
 * @constructor
 */
function GameLiftAliasRoutingStrategy() {
	this.data = {};
}

GameLiftAliasRoutingStrategy.prototype = {
	
	/**
	 * A unique identifier of a GameLift fleet to associate with the alias.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {GameLiftAliasRoutingStrategy}
	 */
	fleetId: function(value) {
		return this.set('FleetId', value);
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

module.exports = GameLiftAliasRoutingStrategy;
