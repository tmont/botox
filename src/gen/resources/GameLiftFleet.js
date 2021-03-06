var Resource = require('../../resource');

/**
 * AWS::GameLift::Fleet - The AWS::GameLift::Fleet resource creates an Amazon GameLift (GameLift) fleet to host game servers. A fleet is a set of EC2 instances, each of which is a host in the fleet. For more information, see the CreateFleet action in the Amazon GameLift API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function GameLiftFleet(name) {
	Resource.call(this, name, 'AWS::GameLift::Fleet');
}

GameLiftFleet.prototype = Object.create(Resource.prototype);

/**
 * The unique identifier for the build that you want to use with this fleet.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {GameLiftFleet}
 */
GameLiftFleet.prototype.buildId = function(value) {
	return this.set('BuildId', value);
};

/**
 * Information that helps you identify the purpose of this fleet.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {GameLiftFleet}
 */
GameLiftFleet.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * The number of EC2 instances that you want in this fleet.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @returns {GameLiftFleet}
 */
GameLiftFleet.prototype.desiredEC2Instances = function(value) {
	return this.set('DesiredEC2Instances', value);
};

/**
 * The incoming traffic, expressed as IP ranges and port numbers, that is permitted to access the game server. If you don't specify values, no traffic is permitted to your game servers.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {GameLiftFleetEC2InboundPermission[]|Attribute|Reference} value List of Amazon GameLift Fleet EC2InboundPermission
 * @returns {GameLiftFleet}
 */
GameLiftFleet.prototype.eC2InboundPermissions = function(value) {
	return this.set('EC2InboundPermissions', value);
};

/**
 * The type of EC2 instances that the fleet uses. EC2 instance types define the CPU, memory, storage, and networking capacity of the fleet's hosts. For more information about the instance types that are supported by GameLift, see the EC2InstanceType parameter in the Amazon GameLift API Reference.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {GameLiftFleet}
 */
GameLiftFleet.prototype.eC2InstanceType = function(value) {
	return this.set('EC2InstanceType', value);
};

/**
 * The path to game-session log files that are generated by your game server, with the slashes (\) escaped. After a game session has been terminated, GameLift captures and stores the logs in an S3 bucket.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {GameLiftFleet}
 */
GameLiftFleet.prototype.logPaths = function(value) {
	return this.set('LogPaths', value);
};

/**
 * The maximum number of EC2 instances that you want to allow in this fleet. By default, AWS CloudFormation, sets this property to 1.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @returns {GameLiftFleet}
 */
GameLiftFleet.prototype.maxSize = function(value) {
	return this.set('MaxSize', value);
};

/**
 * The minimum number of EC2 instances that you want to allow in this fleet. By default, AWS CloudFormation, sets this property to 0.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @returns {GameLiftFleet}
 */
GameLiftFleet.prototype.minSize = function(value) {
	return this.set('MinSize', value);
};

/**
 * An identifier to associate with this fleet. Fleet names don't need to be unique.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {GameLiftFleet}
 */
GameLiftFleet.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The parameters that are required to launch your game server. Specify these parameters as a string of command-line parameters, such as +sv_port 33435 +start_lobby.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {GameLiftFleet}
 */
GameLiftFleet.prototype.serverLaunchParameters = function(value) {
	return this.set('ServerLaunchParameters', value);
};

/**
 * The location of your game server that GameLift launches. You must escape the slashes (\) and use the following pattern: C:\\game\\launchpath. For example, if your game server files are in the MyGame folder, the path should be C:\\game\\MyGame\\server.exe.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {GameLiftFleet}
 */
GameLiftFleet.prototype.serverLaunchPath = function(value) {
	return this.set('ServerLaunchPath', value);
};

module.exports = GameLiftFleet;
