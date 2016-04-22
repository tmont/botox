var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::GameLift::Build - The AWS::GameLift::Build resource creates a build that includes all of the components to run your game server in an Amazon GameLift (GameLift) fleet.
 * @constructor
 * @param {String} name Name of the resource
 */
function GameLiftBuild(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

GameLiftBuild.prototype = {
	
	/**
	 * An identifier to associate with this build. Build names don't need to be unique.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {GameLiftBuild}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The Amazon Simple Storage Service (Amazon S3) location where your build package files are located.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {GameLiftBuildStorageLocation} value
	 * @return {GameLiftBuild}
	 */
	storageLocation: function(value) {
		return this.set('StorageLocation', value);
	},

	/**
	 * A version to associate with this build. Version is useful if you want to track updates to your build package files. Versions don't need to be unique.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {GameLiftBuild}
	 */
	version: function(value) {
		return this.set('Version', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::GameLift::Build has no attributes');
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = GameLiftBuild;
