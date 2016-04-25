var TemplateItemTrait = require('../template-item-trait');

/**
 * You can use the packages key to download and install pre-packaged applications and components. On Windows systems, the packages key supports only the MSI installer.
 *
 * The cfn-init script currently supports the following package formats: apt, msi, python, rpm, rubygems, and yum. Packages are processed in the following order: rpm, yum/apt, and then rubygems and python. There is no ordering between rubygems and python, and packages within each package manager are not guaranteed to be installed in any order.
 * @param {String} type One of "apt", "msi", "python", "rpm", "rubygems" or "yum"
 * @constructor
 * @implements TemplateItemTrait
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html#aws-resource-init-packages}
 */
function Package(type) {
	switch (type) {
		case 'apt':
		case 'msi':
		case 'python':
		case 'rpm':
		case 'rubygems':
		case 'yum':
			break;
		default:
			throw new Error('Invalid package type');
	}

	this.name = type;
	this.data = {};
}

Package.prototype = {
	/**
	 * Adds a package
	 *
	 * Within each package manager, each package is specified as a package name and a list of versions. The version can be a string, a list of versions, or an empty string or list. An empty string or list indicates that you want the latest version. For rpm manager, the version is specified as a path to a file on disk or a URL.
	 *
	 * If you specify a version of a package, cfn-init will attempt to install that version even if a newer version of the package is already installed on the instance. Some package managers support multiple versions, but others may not. Please check the documentation for your package manager for more information. If you do not specify a version and a version of the package is already installed, the cfn-init script will not install a new version—it will assume that you want to keep and use the existing version.
	 * @param {String} packageName Name of the package to install (e.g. nginx)
	 * @param {String|String[]|FindInMap|Join|Reference} [versions] The versions to install. If not specified, defaults to the latest package.
	 * @returns {Package}
	 */
	add: function(packageName, versions) {
		if (!versions) {
			versions = [];
		}

		return this.set(packageName, versions);
	},

	/**
	 * @returns {Package}
	 */
	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	}
};

Object.assign(Package.prototype, TemplateItemTrait.prototype);

module.exports = Package;
