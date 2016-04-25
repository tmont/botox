var TemplateItemTrait = require('../template-item-trait');

/**
 * You can use the users key to create Linux/UNIX users on the EC2 instance. The users key is not supported for Windows systems.
 *
 * Users are created as non-interactive system users with a shell of /sbin/nologin. This is by design and cannot be modified.
 * @param {String} name
 * @constructor
 * @implements TemplateItemTrait
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html#aws-resource-init-users)
 */
function User(name) {
	this.name = name;
	this.data = {};
}

User.prototype = {
	/**
	 * A user ID. The creation process fails if the user name exists with a different user ID. If the user ID is already assigned to an existing user the operating system may reject the creation request.
	 * @param {String|Number} userId
	 * @returns {User}
	 */
	uid: function(userId) {
		return this.set('uid', userId);
	},
	/**
	 * A list of group names. The user will be added to each group in the list.
	 * @param {String[]} groupNames
	 * @returns {User}
	 */
	groups: function(groupNames) {
		return this.set('groups', groupNames);
	},
	/**
	 * The user's home directory
	 * @param {String} dir
	 * @returns {User}
	 */
	homeDir: function(dir) {
		return this.set('homeDir', dir);
	},

	/**
	 * @returns {User}
	 */
	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	}
};

Object.assign(User.prototype, TemplateItemTrait.prototype);

module.exports = User;
