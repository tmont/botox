var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::IAM::Group - The AWS::IAM::Group type creates an Identity and Access Management (IAM) group.
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMGroup(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

IAMGroup.prototype = {
	
	/**
	 * One or more managed policy ARNs to attach to this group.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {IAMGroup}
	 */
	managedPolicyArns: function(value) {
		return this.set('ManagedPolicyArns', value);
	},

	/**
	 * The path to the group. For more information about paths, see Identifiers for IAM Entities in Using IAM.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {IAMGroup}
	 */
	path: function(value) {
		return this.set('Path', value);
	},

	/**
	 * The policies to associate with this group. For information about policies, see Overview of Policies in Using IAM.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {IAMPolicy[]} value
	 * @return {IAMGroup}
	 */
	policies: function(value) {
		return this.set('Policies', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var resourceName = this.name;
		return {
			
			/**
			 * Returns the Amazon Resource Name (ARN) for the AWS::IAM::Group resource. For example: arn:aws:iam::123456789012:group/mystack-mygroup-1DZETITOWEKVO.
			 */
			arn: function() {
				return new Attribute(resourceName, 'Arn');
			}
		};
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = IAMGroup;
