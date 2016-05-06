var TemplateItemTrait = require('../template-item-trait');

/**
 * You can use the files key to create files on the EC2 instance. The content can be either inline in the template or the content can be pulled from a URL. The files are written to disk in lexicographic order.
 * @param {String} filePath
 * @constructor
 * @implements TemplateItemTrait
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html#aws-resource-init-files}
 */
function File(filePath) {
	this.name = filePath;
	this.data = {};
}

File.prototype = {
	/**
	 * Either a string or a properly formatted JSON object. If you use a JSON object as your content, the JSON will be written to a file on disk. Any intrinsic functions such as Fn::GetAtt or Ref are evaluated before the JSON object is written to disk. When you create a symlink, specify the symlink target as the content.
	 * @param {String|Join|Reference|FindInMap|Object} content
	 * @returns {File}
	 */
	content: function(content) {
		return this.set('content', content);
	},
	/**
	 * A URL to load the file from. This option cannot be specified with the content key.
	 * @param {String|Join|Reference|FindInMap} url
	 * @returns {File}
	 */
	source: function(url) {
		return this.set('source', url);
	},
	/**
	 * The encoding format. Only used if the content is a string. Encoding is not applied if you are using a source.
	 * @param {String|Reference} encoding Either "plain" or "base64"
	 * @returns {File}
	 */
	encoding: function(encoding) {
		if (encoding !== 'plain' && encoding !== 'base64') {
			throw new Error('encoding must be one of "plain" or "base64"');
		}

		return this.set('encoding', encoding);
	},
	/**
	 * The name of the owning group for this file. Not supported for Windows systems.
	 * @param {String|Reference|Join|FindInMap} groupName
	 * @returns {File}
	 */
	group: function(groupName) {
		return this.set('group', groupName);
	},
	/**
	 * The name of the owning user for this file. Not supported for Windows systems.
	 * @param {String|Reference|Join|FindInMap} ownerName
	 * @returns {File}
	 */
	owner: function(ownerName) {
		return this.set('owner', ownerName);
	},
	/**
	 * A six-digit octal value representing the mode for this file. Not supported for Windows systems. Use the first three digits for symlinks and the last three digits for setting permissions. To create a symlink, specify 120000. To specify permissions for a file, use the last three digits, such as 000644.
	 * @param {String|Reference|Join|FindInMap} mode
	 * @returns {File}
	 */
	mode: function(mode) {
		if (!/^\d{6}$/.test(mode)) {
			throw new Error('mode must be a six digit octal value');
		}

		return this.set('mode', mode);
	},
	/**
	 * The name of an authentication method to use. This overrides any default authentication. You can use this property to select an authentication method you define with the AWS::CloudFormation::Authentication resource.
	 * @param {String} authName
	 * @returns {File}
	 * @see {CloudFormationAuthentication}
	 */
	authentication: function(authName) {
		return this.set('authentication', authName);
	},
	/**
	 * Specifies a context for files that are to be processed as Mustache templates. To use this key, you must have installed aws-cfn-bootstrap 1.3-11 or later as well as pystache.
	 * @param {Object} context
	 * @returns {File}
	 */
	context: function(context) {
		return this.set('context', context);
	},

	/**
	 * @returns {File}
	 */
	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	}
};

Object.assign(File.prototype, TemplateItemTrait.prototype);

module.exports = File;
