var Resource = require('../../resource');

/**
 * AWS::GameLift::Alias - The AWS::GameLift::Alias resource creates an alias for an Amazon GameLift (GameLift) fleet, which you can use to anonymize your fleet. You can reference the alias instead of a specific fleet when you create game sessions. For more information, see the CreateAlias action in the Amazon GameLift API Reference.
 * @constructor
 * @param {String} name Name of the resource
 */
function GameLiftAlias(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(GameLiftAlias, Resource);

GameLiftAlias.prototype = {
	
	
	/**
	 * Information that helps you identify the purpose of this alias.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {GameLiftAlias}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * An identifier to associate with this alias. Alias names don't need to be unique.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {GameLiftAlias}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * A routing configuration that specifies where traffic is directed for this alias, such as to a fleet or to a message.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {GameLiftAliasRoutingStrategy} value
	 * @return {GameLiftAlias}
	 */
	routingStrategy: function(value) {
		return this.set('RoutingStrategy', value);
	}
};

module.exports = GameLiftAlias;
