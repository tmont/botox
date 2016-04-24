var PropertyType = require('../../property-type');

/**
 * The Listener property is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-listener.html}
 * @constructor
 */
function ElasticLoadBalancingListenerPropertyType() {
	PropertyType.call(this);
}

Object.setPrototypeOf(ElasticLoadBalancingListenerPropertyType, PropertyType);

ElasticLoadBalancingListenerPropertyType.prototype = {
	
	/**
	 * Specifies the TCP port on which the instance server is listening. This property cannot be modified for the life of the load balancer.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingListenerPropertyType}
	 */
	instancePort: function(value) {
		return this.set('InstancePort', value);
	},

	/**
	 * Specifies the protocol to use for routing traffic to back-end instances—HTTP, HTTPS, TCP, or SSL. This property cannot be modified for the life of the load balancer.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingListenerPropertyType}
	 */
	instanceProtocol: function(value) {
		return this.set('InstanceProtocol', value);
	},

	/**
	 * Specifies the external load balancer port number. This property cannot be modified for the life of the load balancer.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingListenerPropertyType}
	 */
	loadBalancerPort: function(value) {
		return this.set('LoadBalancerPort', value);
	},

	/**
	 * A list of ElasticLoadBalancing policy names to associate with the listener. Specify only policies that are compatible with listeners. For more information, see DescribeLoadBalancerPolicyTypes in the Elastic Load Balancing API Reference.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {ElasticLoadBalancingListenerPropertyType}
	 */
	policyNames: function(value) {
		return this.set('PolicyNames', value);
	},

	/**
	 * Specifies the load balancer transport protocol to use for routing — HTTP, HTTPS, TCP or SSL. This property cannot be modified for the life of the load balancer.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingListenerPropertyType}
	 */
	protocol: function(value) {
		return this.set('Protocol', value);
	},

	/**
	 * The ARN of the SSL certificate to use. For more information about SSL certificates, see Managing Server Certificates in the AWS Identity and Access Management documentation.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingListenerPropertyType}
	 */
	sslCertificateId: function(value) {
		return this.set('SSLCertificateId', value);
	}
};

module.exports = ElasticLoadBalancingListenerPropertyType;
