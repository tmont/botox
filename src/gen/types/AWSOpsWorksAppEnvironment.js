/**
 * Environment is a property of the AWS::OpsWorks::App resource that specifies the environment variable to associate with the AWS OpsWorks app.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-environment.html}
 * @constructor
 */
function AWSOpsWorksAppEnvironment() {
	this.data = {};
}

AWSOpsWorksAppEnvironment.prototype = {
	
	/**
	 * The name of the environment variable, which can consist of up to 64 characters. You can use upper and lowercase letters, numbers, and underscores (_), but the name must start with a letter or underscore.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSOpsWorksAppEnvironment}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * Indicates whether the value of the environment variable is concealed, such as with a DescribeApps response. To conceal an environment variable's value, set the value to true.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {AWSOpsWorksAppEnvironment}
	 */
	secure: function(value) {
		return this.set('Secure', value);
	},

	/**
	 * The value of the environment variable, which can be empty. You can specify a value of up to 256 characters.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSOpsWorksAppEnvironment}
	 */
	value: function(value) {
		return this.set('Value', value);
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

module.exports = AWSOpsWorksAppEnvironment;
