/**
 * StorageLocation is a property of the AWS::GameLift::Build resource that specifies the location of an Amazon GameLift (GameLift) build package files, such as the game server binaries. For more information, see Uploading a Build to Amazon GameLift in the Amazon GameLift Developer Guide.
 * @constructor
 */
function GameLiftBuildStorageLocation() {
	this.data = {};
}

GameLiftBuildStorageLocation.prototype = {
	
	/**
	 * The S3 bucket where the GameLift build package files are stored.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {GameLiftBuildStorageLocation}
	 */
	bucket: function(value) {
		return this.set('Bucket', value);
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

module.exports = GameLiftBuildStorageLocation;
