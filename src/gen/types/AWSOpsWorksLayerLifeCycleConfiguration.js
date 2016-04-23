var PropertyType = require('../../property-type');

/**
 * LifeCycleConfiguration is property of the AWS::OpsWorks::Layer resource that specifies the lifecycle event configuration for the layer.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-lifecycleeventconfiguration.html}
 * @constructor
 */
function AWSOpsWorksLayerLifeCycleConfiguration() {
	PropertyType.call(this);
}

Object.setPrototypeOf(AWSOpsWorksLayerLifeCycleConfiguration, PropertyType);

AWSOpsWorksLayerLifeCycleConfiguration.prototype = {
	
	/**
	 * Specifies the shutdown event configuration for a layer.
	 *
	 * Required: false
	 *
	 * @param {AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration} value
	 * @return {AWSOpsWorksLayerLifeCycleConfiguration}
	 */
	shutdownEventConfiguration: function(value) {
		return this.set('ShutdownEventConfiguration', value);
	}
};

module.exports = AWSOpsWorksLayerLifeCycleConfiguration;
