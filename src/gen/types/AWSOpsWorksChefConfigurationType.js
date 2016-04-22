/**
 * Describes the Chef configuration for the AWS::OpsWorks::Stack resource type. For more information, see ChefConfiguration in the AWS OpsWorks API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-chefconfiguration.html}
 * @constructor
 */
function AWSOpsWorksChefConfigurationType() {
	this.data = {};
}

AWSOpsWorksChefConfigurationType.prototype = {
	
	/**
	 * The Berkshelf version.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSOpsWorksChefConfigurationType}
	 */
	berkshelfVersion: function(value) {
		return this.set('BerkshelfVersion', value);
	},

	/**
	 * Whether to enable Berkshelf.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {AWSOpsWorksChefConfigurationType}
	 */
	manageBerkshelf: function(value) {
		return this.set('ManageBerkshelf', value);
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

module.exports = AWSOpsWorksChefConfigurationType;
