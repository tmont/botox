/**
 * ConnectionSettings is a property of the AWS::ElasticLoadBalancing::LoadBalancer resource that describes how long the front-end and back-end connections of your load balancer can remain idle. For more information, see Configure Idle Connection Timeout in the Elastic Load Balancing Developer Guide.
 * @constructor
 */
function ElasticLoadBalancingConnectionSettings() {
	this.data = {};
}

ElasticLoadBalancingConnectionSettings.prototype = {
	
	/**
	 * The time (in seconds) that a connection to the load balancer can remain idle, which means no data is sent over the connection. After the specified time, the load balancer closes the connection.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {ElasticLoadBalancingConnectionSettings}
	 */
	idleTimeout: function(value) {
		return this.set('IdleTimeout', value);
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

module.exports = ElasticLoadBalancingConnectionSettings;
