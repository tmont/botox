var TemplateItemTrait = require('../template-item-trait');

/**
 * You can use the commands key to execute commands on the EC2 instance. The commands are processed in alphabetical order by name.
 * @param {String} name
 * @constructor
 * @implements TemplateItemTrait
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html#aws-resource-init-commands}
 */
function Command(name) {
	this.name = name;
	this.data = {};
}

Command.prototype = {
	/**
	 * Required. Either an array or a string specifying the command to run. If you use an array, you do not need to escape space characters or enclose command parameters in quotes.
	 * @param {String} command
	 * @returns {Command}
	 */
	command: function(command) {
		return this.set('command', command);
	},
	/**
	 * Optional. Sets environment variables for the command. This property overwrites, rather than appends, the existing environment.
	 * @param {Object} env
	 * @returns {Command}
	 */
	env: function(env) {
		return this.set('env', env);
	},
	/**
	 * Optional. The working directory
	 * @param {String} cwd
	 * @returns {Command}
	 */
	cwd: function(cwd) {
		return this.set('cwd', cwd);
	},
	/**
	 * Optional. A test command that determines whether cfn-init runs commands that are specified in the command key. The cfn-init script runs the test in a command interpreter, such as Bash or cmd.exe. Whether a test passes depends on the exit code that the interpreter returns.
	 *
	 * For Linux, the test command must return an exit code of 0. For Windows, the test command must return an %ERRORLEVEL% of 0.
	 * @param {String} testCommand
	 * @returns {Command}
	 */
	test: function(testCommand) {
		return this.set('test', testCommand);
	},
	/**
	 * Optional. A Boolean value that determines whether cfn-init continues to run if the command in contained in the command key fails (returns a non-zero value). Set to true if you want cfn-init to continue running even if the command fails. Set to false if you want cfn-init to stop running if the command fails. The default value is false.
	 * @param {Boolean} shouldIgnore
	 * @returns {Command}
	 */
	ignoreErrors: function(shouldIgnore) {
		return this.set('ignoreErrors', !!shouldIgnore);
	},
	/**
	 * Optional. For Windows systems only. Specifies how long to wait (in seconds) after a command has finished in case the command causes a reboot. The default value is 60 seconds and a value of "forever" directs cfn-init to exit and resume only after the reboot is complete.
	 * @param {Number|String} timeInSeconds "forever"
	 * @returns {Command}
	 */
	waitAfterCompletion: function(timeInSeconds) {
		return this.set('waitAfterCompletion', timeInSeconds);
	},

	/**
	 * @returns {Command}
	 */
	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	}
};

Object.assign(Command.prototype, TemplateItemTrait.prototype);

module.exports = Command;
