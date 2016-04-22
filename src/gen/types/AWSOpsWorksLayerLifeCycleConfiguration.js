/**
 * LifeCycleConfiguration is property of the AWS::OpsWorks::Layer resource that specifies the lifecycle event configuration for the layer.
 * @constructor
 */
function AWSOpsWorksLayerLifeCycleConfiguration() {
	this.data = {};
}

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

module.exports = AWSOpsWorksLayerLifeCycleConfiguration;
