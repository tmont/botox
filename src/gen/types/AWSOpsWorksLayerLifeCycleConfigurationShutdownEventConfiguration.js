/**
 * ShutdownEventConfiguration is a property of the AWS OpsWorks Layer LifeCycleConfiguration property that specifies the shutdown event configuration for a lifecycle event.
 * @constructor
 */
function AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration(initialData) {
	this.data = initialData || {};
}

AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration.prototype = {
	
	/**
	 * Indicates whether to wait for connections to drain from the Elastic Load Balancing load balancers.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration}
	 */
	delayUntilElbConnectionsDrained: function(value) {
		return this.set('DelayUntilElbConnectionsDrained', value);
	},

	/**
	 * The time, in seconds, that AWS OpsWorks waits after a shutdown event has been triggered before shutting down an instance.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration}
	 */
	executionTimeout: function(value) {
		return this.set('ExecutionTimeout', value);
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

module.exports = AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration;
