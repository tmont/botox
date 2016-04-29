var PropertyType = require('../../property-type');

/**
 * StorageLocation is a property of the AWS::GameLift::Build resource that specifies the location of an Amazon GameLift (GameLift) build package files, such as the game server binaries. For more information, see Uploading a Build to Amazon GameLift in the Amazon GameLift Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-build-storagelocation.html}
 * @constructor
 */
function GameLiftBuildStorageLocation() {
	PropertyType.call(this);
}

GameLiftBuildStorageLocation.prototype = Object.create(PropertyType.prototype);

/**
 * The S3 bucket where the GameLift build package files are stored.
 *
 * Required: true
 *
 * @param {String} value
 * @return {GameLiftBuildStorageLocation}
 */
GameLiftBuildStorageLocation.prototype.bucket = function(value) {
	return this.set('Bucket', value);
};

/**
 * The prefix (folder name) where the GameLift build package files are located.
 *
 * Required: true
 *
 * @param {String} value
 * @return {GameLiftBuildStorageLocation}
 */
GameLiftBuildStorageLocation.prototype.key = function(value) {
	return this.set('Key', value);
};

/**
 * An AWS Identity and Access Management (IAM) role Amazon Resource Name (ARN) that GameLift can assume to retrieve the build package files from Amazon Simple Storage Service (Amazon S3).
 *
 * Required: true
 *
 * @param {String} value
 * @return {GameLiftBuildStorageLocation}
 */
GameLiftBuildStorageLocation.prototype.roleArn = function(value) {
	return this.set('RoleArn', value);
};

module.exports = GameLiftBuildStorageLocation;
