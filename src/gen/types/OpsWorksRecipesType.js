var PropertyType = require('../../property-type');

/**
 * Describes custom event recipes for the AWS::OpsWorks::Layer resource type that AWS OpsWorks runs after the standard event recipes. For more information, see AWS OpsWorks Lifecycle Events in the AWS OpsWorks User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-recipes.html}
 * @constructor
 */
function OpsWorksRecipesType() {
	PropertyType.call(this);
}

OpsWorksRecipesType.prototype = Object.create(PropertyType.prototype);

/**
 * Custom recipe names to be run following a Configure event. The event occurs on all of the stack's instances when an instance enters or leaves the online state.
 *
 * Required: false
 *
 * @param {string[]} value
 * @return {OpsWorksRecipesType}
 */
OpsWorksRecipesType.prototype.configure = function(value) {
	return this.set('Configure', value);
};

/**
 * Custom recipe names to be run following a Deploy event. The event occurs when you run a deploy command, typically to deploy an application to a set of application server instances.
 *
 * Required: false
 *
 * @param {string[]} value
 * @return {OpsWorksRecipesType}
 */
OpsWorksRecipesType.prototype.deploy = function(value) {
	return this.set('Deploy', value);
};

/**
 * Custom recipe names to be run following a Setup event. This event occurs on a new instance after it successfully boots.
 *
 * Required: false
 *
 * @param {string[]} value
 * @return {OpsWorksRecipesType}
 */
OpsWorksRecipesType.prototype.setup = function(value) {
	return this.set('Setup', value);
};

/**
 * Custom recipe names to be run following a Shutdown event. This event occurs after you direct AWS OpsWorks to shut an instance down before the associated Amazon EC2 instance is actually terminated.
 *
 * Required: false
 *
 * @param {string[]} value
 * @return {OpsWorksRecipesType}
 */
OpsWorksRecipesType.prototype.shutdown = function(value) {
	return this.set('Shutdown', value);
};

/**
 * Custom recipe names to be run following a Undeploy event. This event occurs when you delete an app or run an undeploy command to remove an app from a set of application server instances.
 *
 * Required: false
 *
 * @param {string[]} value
 * @return {OpsWorksRecipesType}
 */
OpsWorksRecipesType.prototype.undeploy = function(value) {
	return this.set('Undeploy', value);
};

module.exports = OpsWorksRecipesType;
