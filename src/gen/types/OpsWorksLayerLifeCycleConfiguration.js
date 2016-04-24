var PropertyType = require('../../property-type');

/**
 * LifeCycleConfiguration is property of the AWS::OpsWorks::Layer resource that specifies the lifecycle event configuration for the layer.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-lifecycleeventconfiguration.html}
 * @constructor
 */
function OpsWorksLayerLifeCycleConfiguration() {
	PropertyType.call(this);
}

Object.setPrototypeOf(OpsWorksLayerLifeCycleConfiguration, PropertyType);

OpsWorksLayerLifeCycleConfiguration.prototype = {
	
	/**
	 * Specifies the shutdown event configuration for a layer.
	 *
	 * Required: false
	 *
	 * @param {OpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration} value
	 * @return {OpsWorksLayerLifeCycleConfiguration}
	 */
	shutdownEventConfiguration: function(value) {
		return this.set('ShutdownEventConfiguration', value);
	}
};

module.exports = OpsWorksLayerLifeCycleConfiguration;
