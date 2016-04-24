var Resource = require('../../resource');

/**
 * AWS::GameLift::Build - The AWS::GameLift::Build resource creates a build that includes all of the components to run your game server in an Amazon GameLift (GameLift) fleet.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function GameLiftBuild(name) {
	Resource.call(this, name, 'AWS::GameLift::Build');
}

GameLiftBuild.prototype = Object.create(Resource.prototype);


/**
 * An identifier to associate with this build. Build names don't need to be unique.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {GameLiftBuild}
 */
GameLiftBuild.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The Amazon Simple Storage Service (Amazon S3) location where your build package files are located.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {GameLiftBuildStorageLocation|Attribute|Reference} value Amazon GameLift Build StorageLocation
 * @return {GameLiftBuild}
 */
GameLiftBuild.prototype.storageLocation = function(value) {
	return this.set('StorageLocation', value);
};

/**
 * A version to associate with this build. Version is useful if you want to track updates to your build package files. Versions don't need to be unique.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {GameLiftBuild}
 */
GameLiftBuild.prototype.version = function(value) {
	return this.set('Version', value);
};

module.exports = GameLiftBuild;
