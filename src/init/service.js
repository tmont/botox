var TemplateItemTrait = require('../template-item-trait');

/**
 * You can use the services key to define which services should be enabled or disabled when the instance is launched. On Linux systems, this key is supported by using sysvinit. On Windows systems, it is supported by using the Windows service manager.
 *
 * The services key also allows you to specify dependencies on sources, packages and files so that if a restart is needed due to files being installed, cfn-init will take care of the service restart. For example, if you download the Apache HTTP Server package, the package installation will automatically start the Apache HTTP Server during the stack creation process. However, if the Apache HTTP Server configuration is updated later in the stack creation process, the update won't take effect unless the Apache server is restarted. You can use the services key to ensure that the Apache HTTP service is restarted.
 * @param {String} name
 * @constructor
 * @implements TemplateItemTrait
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html#aws-resource-init-services)
 */
function Service(name) {
	this.name = name;
	this.data = {};
}

Service.prototype = {
	/**
	 * Set to true to ensure that the service is running after cfn-init finishes.
	 *
	 * Set to false to ensure that the service is not running after cfn-init finishes.
	 *
	 * Omit this key to make no changes to the service state.
	 * @param {Boolean} shouldBeRunning
	 * @returns {Service}
	 */
	ensureRunning: function(shouldBeRunning) {
		return this.set('content', !!shouldBeRunning);
	},
	/**
	 * Set to true to ensure that the service will be started automatically upon boot.
	 *
	 * Set to false to ensure that the service will not be started automatically upon boot.
	 *
	 * Omit this key to make no changes to this property.
	 * @param {Boolean} shouldBeEnabled
	 * @returns {Service}
	 */
	enabled: function(shouldBeEnabled) {
		return this.set('enabled', !!shouldBeEnabled);
	},
	/**
	 * A list of files. If cfn-init changes one directly via the files block, this service will be restarted
	 * @param {String[]} files
	 * @returns {Service}
	 */
	files: function(files) {
		return this.set('files', files);
	},
	/**
	 * A list of directories. If cfn-init expands an archive into one of these directories, this service will be restarted.
	 * @param {String[]} directories
	 * @returns {Service}
	 */
	sources: function(directories) {
		return this.set('sources', directories);
	},
	/**
	 * A map of package manager to list of package names. If cfn-init installs or updates one of these packages, this service will be restarted.
	 * @param {Object} packages
	 * @returns {Service}
	 */
	packages: function(packages) {
		return this.set('packages', packages);
	},
	/**
	 * A list of command names. If cfn-init runs the specified command, this service will be restarted.
	 * @param {String[]} commands
	 * @returns {Service}
	 */
	commands: function(commands) {
		return this.set('commands', commands);
	},

	/**
	 * @returns {Service}
	 */
	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	}
};

Object.assign(Service.prototype, TemplateItemTrait.prototype);

module.exports = Service;
