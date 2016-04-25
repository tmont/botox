var TemplateItemTrait = require('../template-item-trait');

/**
 * You can use the groups key to create Linux/UNIX groups and to assign group IDs. The groups key is not supported for Windows systems.
 *
 * To create a group, add a new key-value pair that maps a new group name to an optional group ID. The groups key can contain one or more group names.
 * @param {String} groupName
 * @constructor
 * @implements TemplateItemTrait
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html#aws-resource-init-groups}
 */
function Group(groupName) {
	this.name = groupName;
	this.data = {};
}

Group.prototype = {
	/**
	 * A group ID number.
	 *
	 * If a group ID is specified, and the group already exists by name, the group creation will fail. If another group has the specified group ID, the OS may reject the group creation.
	 * @param {String|Number|FindInMap|Reference} groupId
	 * @returns {File}
	 */
	gid: function(groupId) {
		return this.set('gid', groupId);
	},

	/**
	 * @returns {Group}
	 */
	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	}
};

Object.assign(Group.prototype, TemplateItemTrait.prototype);

module.exports = Group;
