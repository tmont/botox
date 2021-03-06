var PropertyType = require('../../property-type');

/**
 * ConnectionSettings is a property of the AWS::ElasticLoadBalancing::LoadBalancer resource that describes how long the front-end and back-end connections of your load balancer can remain idle. For more information, see Configure Idle Connection Timeout in the Elastic Load Balancing Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-connectionsettings.html}
 * @constructor
 */
function ElasticLoadBalancingConnectionSettings() {
	PropertyType.call(this);
}

ElasticLoadBalancingConnectionSettings.prototype = Object.create(PropertyType.prototype);

/**
 * The time (in seconds) that a connection to the load balancer can remain idle, which means no data is sent over the connection. After the specified time, the load balancer closes the connection.
 *
 * Required: true
 *
 * @param {Number} value
 * @returns {ElasticLoadBalancingConnectionSettings}
 */
ElasticLoadBalancingConnectionSettings.prototype.idleTimeout = function(value) {
	return this.set('IdleTimeout', value);
};

module.exports = ElasticLoadBalancingConnectionSettings;
