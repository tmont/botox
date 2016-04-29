var PropertyType = require('../../property-type');

/**
 * RoutingStrategy is a property of the AWS::GameLift::Alias resource that configures the routing strategy for an Amazon GameLift (GameLift) alias. For more information, see the RoutingStrategy data type in the Amazon GameLift API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html}
 * @constructor
 */
function GameLiftAliasRoutingStrategy() {
	PropertyType.call(this);
}

GameLiftAliasRoutingStrategy.prototype = Object.create(PropertyType.prototype);

/**
 * A unique identifier of a GameLift fleet to associate with the alias.
 *
 * Required: false
 *
 * @param {String} value
 * @return {GameLiftAliasRoutingStrategy}
 */
GameLiftAliasRoutingStrategy.prototype.fleetId = function(value) {
	return this.set('FleetId', value);
};

/**
 * A text message that GameLift displays for the Terminal routing type.
 *
 * Required: false
 *
 * @param {String} value
 * @return {GameLiftAliasRoutingStrategy}
 */
GameLiftAliasRoutingStrategy.prototype.message = function(value) {
	return this.set('Message', value);
};

/**
 * The type of routing strategy. For the SIMPLE type, traffic is routed to an active GameLift fleet. For the Terminal type, GameLift returns an exception with the message that you specified in the Message property.
 *
 * Required: true
 *
 * @param {String} value
 * @return {GameLiftAliasRoutingStrategy}
 */
GameLiftAliasRoutingStrategy.prototype.type = function(value) {
	return this.set('Type', value);
};

module.exports = GameLiftAliasRoutingStrategy;
