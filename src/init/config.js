var TemplateItemTrait = require('../template-item-trait');

/**
 * cfn-init configuration
 * @param {String} [name] Key of the config object
 * @constructor
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html}
 */
function Config(name) {
	if (name === 'configSets') {
		throw new Error('Cannot name a config "configSets"');
	}

	this.name = name || 'config';
	this.commands = {};
	this.files = {};
	this.groups = {};
	this.packages = {};
	this.services = {};
	this.sources = {};
	this.users = {};
}

Config.prototype = {
	/**
	 * You can use the commands key to execute commands on the EC2 instance. The commands are processed in alphabetical order by name.
	 * @param {Command} command
	 * @returns {Config}
	 */
	command: function(command) {
		this.commands[command.name] = command;
		return this;
	},
	/**
	 * You can use the files key to create files on the EC2 instance. The content can be either inline in the template or the content can be pulled from a URL. The files are written to disk in lexicographic order.
	 * @param {File} file
	 * @returns {Config}
	 */
	file: function(file) {
		this.files[file.name] = file;
		return this;
	},
	/**
	 * You can use the groups key to create Linux/UNIX groups and to assign group IDs. The groups key is not supported for Windows systems.
	 * @param {Group} group
	 * @returns {Config}
	 */
	group: function(group) {
		this.groups[group.name] = group;
		return this;
	},
	/**
	 * You can use the packages key to download and install pre-packaged applications and components. On Windows systems, the packages key supports only the MSI installer.
	 * @param {Package} pkg
	 * @returns {Config}
	 */
	package: function(pkg) {
		this.packages[pkg.name] = pkg;
		return this;
	},
	/**
	 * You can use the services key to define which services should be enabled or disabled when the instance is launched. On Linux systems, this key is supported by using sysvinit. On Windows systems, it is supported by using the Windows service manager.
	 * @param {String} type Either "sysvinit" or "windows"
	 * @param {Service} service
	 * @returns {Config}
	 */
	service: function(type, service) {
		if (type !== 'sysvinit' && type !== 'windows') {
			throw new Error('serviceType must be either "sysvinit" or "windows"');
		}

		if (!this.services[type]) {
			this.services[type] = {};
		}

		this.services[type][service.name] = service;
		return this;
	},
	/**
	 * You can use the sources key to download an archive file and unpack it in a target directory on the EC2 instance. This key is fully supported for both Linux and Windows systems.
	 * @param {String} path
	 * @param {String} url Supported formats are tar, tar+gzip, tar+bz2 and zip.
	 * @returns {Config}
	 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html#aws-resource-init-sources}
	 */
	source: function(path, url) {
		this.sources[path] = url;
		return this;
	},
	/**
	 * You can use the users key to create Linux/UNIX users on the EC2 instance. The users key is not supported for Windows systems.
	 * @param {User} user
	 * @returns {Config}
	 */
	user: function(user) {
		this.users[user.name] = user;
		return this;
	},

	toJSON: function() {
		var json = {};
		var keys = [ 'commands', 'files', 'groups', 'packages', 'services', 'sources', 'users' ];
		var self = this;

		keys.forEach(function(key) {
			var values = self[key];
			if (!Object.keys(values).length) {
				return;
			}

			json[key] = values;
		});

		return json;
	}
};

Object.assign(Config.prototype, TemplateItemTrait.prototype);

module.exports = Config;
