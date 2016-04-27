var PropertyType = require('../../property-type');

/**
 * Environment is a property of the AWS::OpsWorks::App resource that specifies the environment variable to associate with the AWS OpsWorks app.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-environment.html}
 * @constructor
 */
function OpsWorksAppEnvironment() {
	PropertyType.call(this);
}

OpsWorksAppEnvironment.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the environment variable, which can consist of up to 64 characters. You can use upper and lowercase letters, numbers, and underscores (_), but the name must start with a letter or underscore.
 *
 * Required: true
 *
 * @param {String} value
 * @return {OpsWorksAppEnvironment}
 */
OpsWorksAppEnvironment.prototype.key = function(value) {
	return this.set('Key', value);
};

/**
 * Indicates whether the value of the environment variable is concealed, such as with a DescribeApps response. To conceal an environment variable's value, set the value to true.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @return {OpsWorksAppEnvironment}
 */
OpsWorksAppEnvironment.prototype.secure = function(value) {
	return this.set('Secure', value);
};

/**
 * The value of the environment variable, which can be empty. You can specify a value of up to 256 characters.
 *
 * Required: true
 *
 * @param {String} value
 * @return {OpsWorksAppEnvironment}
 */
OpsWorksAppEnvironment.prototype.value = function(value) {
	return this.set('Value', value);
};

module.exports = OpsWorksAppEnvironment;
