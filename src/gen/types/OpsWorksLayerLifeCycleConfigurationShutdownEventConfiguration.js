var PropertyType = require('../../property-type');

/**
 * ShutdownEventConfiguration is a property of the AWS OpsWorks Layer LifeCycleConfiguration property that specifies the shutdown event configuration for a lifecycle event.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-lifecycleeventconfiguration-shutdowneventconfiguration.html}
 * @constructor
 */
function OpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration() {
	PropertyType.call(this);
}

OpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration.prototype = Object.create(PropertyType.prototype);

/**
 * Indicates whether to wait for connections to drain from the Elastic Load Balancing load balancers.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {OpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration}
 */
OpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration.prototype.delayUntilElbConnectionsDrained = function(value) {
	return this.set('DelayUntilElbConnectionsDrained', value);
};

/**
 * The time, in seconds, that AWS OpsWorks waits after a shutdown event has been triggered before shutting down an instance.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {OpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration}
 */
OpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration.prototype.executionTimeout = function(value) {
	return this.set('ExecutionTimeout', value);
};

module.exports = OpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration;
