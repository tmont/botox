var Resource = require('../../resource');

/**
 * AWS::ElasticLoadBalancing::LoadBalancer - The AWS::ElasticLoadBalancing::LoadBalancer type creates a LoadBalancer.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ElasticLoadBalancingLoadBalancer(name) {
	Resource.call(this, name, 'AWS::ElasticLoadBalancing::LoadBalancer');
}

ElasticLoadBalancingLoadBalancer.prototype = Object.create(Resource.prototype);

/**
 * AWS::ElasticLoadBalancing::LoadBalancer attribute map
 * @typedef {Object} ElasticLoadBalancingLoadBalancerAttributeMap
 * @property {Attribute} canonicalHostedZoneName The name of the Amazon Route 53 hosted zone that is associated with the load balancer.ImportantIf you specify internal for the Elastic Load Balancing scheme, use DNSName instead. For an internal scheme, the load balancer doesn't have a CanonicalHostedZoneName value.Example: mystack-myelb-15HMABG9ZCN57-1013119603.us-east-1.elb.amazonaws.com
 * @property {Attribute} canonicalHostedZoneNameID The ID of the Amazon Route 53 hosted zone name that is associated with the load balancer.Example: Z3DZXE0Q79N41H
 * @property {Attribute} dnsName The DNS name for the load balancer.Example: mystack-myelb-15HMABG9ZCN57-1013119603.us-east-1.elb.amazonaws.com
 * @property {Attribute} sourceSecurityGroupGroupName The security group that you can use as part of your inbound rules for your load balancer's back-end Amazon EC2 application instances.Example: amazon-elb
 * @property {Attribute} sourceSecurityGroupOwnerAlias The owner of the source security group.Example: amazon-elb-sg
 */
Object.defineProperty(ElasticLoadBalancingLoadBalancer.prototype, 'attr', {
	/**
	 * @return {ElasticLoadBalancingLoadBalancerAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * The name of the Amazon Route 53 hosted zone that is associated with the load balancer.ImportantIf you specify internal for the Elastic Load Balancing scheme, use DNSName instead. For an internal scheme, the load balancer doesn't have a CanonicalHostedZoneName value.Example: mystack-myelb-15HMABG9ZCN57-1013119603.us-east-1.elb.amazonaws.com
			 * @return {Attribute}
			 */
			get canonicalHostedZoneName() {
				return createAttribute('CanonicalHostedZoneName');
			},

			/**
			 * The ID of the Amazon Route 53 hosted zone name that is associated with the load balancer.Example: Z3DZXE0Q79N41H
			 * @return {Attribute}
			 */
			get canonicalHostedZoneNameID() {
				return createAttribute('CanonicalHostedZoneNameID');
			},

			/**
			 * The DNS name for the load balancer.Example: mystack-myelb-15HMABG9ZCN57-1013119603.us-east-1.elb.amazonaws.com
			 * @return {Attribute}
			 */
			get dnsName() {
				return createAttribute('DNSName');
			},

			/**
			 * The security group that you can use as part of your inbound rules for your load balancer's back-end Amazon EC2 application instances.Example: amazon-elb
			 * @return {Attribute}
			 */
			get sourceSecurityGroupGroupName() {
				return createAttribute('SourceSecurityGroup.GroupName');
			},

			/**
			 * The owner of the source security group.Example: amazon-elb-sg
			 * @return {Attribute}
			 */
			get sourceSecurityGroupOwnerAlias() {
				return createAttribute('SourceSecurityGroup.OwnerAlias');
			}
		};
	}
});

/**
 * Captures detailed information for all requests made to your load balancer, such as the time a request was received, client’s IP address, latencies, request path, and server responses.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {ElasticLoadBalancingAccessLoggingPolicy|Attribute|Reference} value Elastic Load Balancing AccessLoggingPolicy
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.accessLoggingPolicy = function(value) {
	return this.set('AccessLoggingPolicy', value);
};

/**
 * Generates one or more stickiness policies with sticky session lifetimes that follow that of an application-generated cookie. These policies can be associated only with HTTP/HTTPS listeners.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {ElasticLoadBalancingAppCookieStickinessPolicyType[]|Attribute|Reference} value A list of AppCookieStickinessPolicy objects.
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.appCookieStickinessPolicy = function(value) {
	return this.set('AppCookieStickinessPolicy', value);
};

/**
 * The Availability Zones in which to create the load balancer. You can specify the AvailabilityZones or Subnets property, but not both.
 *
 * Required: false
 * Update requires: Replacement if you did not have an Availability Zone specified and you are adding one or if you are removing all Availability Zones. Otherwise, update requires no interruption.
 *
 * @param {string[]|Attribute|Reference} value
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.availabilityZones = function(value) {
	return this.set('AvailabilityZones', value);
};

/**
 * Whether deregistered or unhealthy instances can complete all in-flight requests.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {ElasticLoadBalancingConnectionDrainingPolicy|Attribute|Reference} value Elastic Load Balancing ConnectionDrainingPolicy
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.connectionDrainingPolicy = function(value) {
	return this.set('ConnectionDrainingPolicy', value);
};

/**
 * Specifies how long front-end and back-end connections of your load balancer can remain idle.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {ElasticLoadBalancingConnectionSettings|Attribute|Reference} value Elastic Load Balancing ConnectionSettings
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.connectionSettings = function(value) {
	return this.set('ConnectionSettings', value);
};

/**
 * Whether cross-zone load balancing is enabled for the load balancer. With cross-zone load balancing, your load balancer nodes route traffic to the back-end instances across all Availability Zones. By default the CrossZone property is false.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.crossZone = function(value) {
	return this.set('CrossZone', value);
};

/**
 * Application health check for the instances.
 *
 * Required: false
 * Update requires: Replacement if you did not have a health check specified and you are adding one or if you are removing a health check. Otherwise, update requires no interruption.
 *
 * @param {ElasticLoadBalancingHealthCheckType|Attribute|Reference} value ElasticLoadBalancing HealthCheck Type.
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.healthCheck = function(value) {
	return this.set('HealthCheck', value);
};

/**
 * A list of EC2 instance IDs for the load balancer.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {string[]|Attribute|Reference} value
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.instances = function(value) {
	return this.set('Instances', value);
};

/**
 * Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent), or by a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {ElasticLoadBalancingAppCookieStickinessPolicyType[]|Attribute|Reference} value A list of LBCookieStickinessPolicy objects.
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.lbCookieStickinessPolicy = function(value) {
	return this.set('LBCookieStickinessPolicy', value);
};

/**
 * A name for the load balancer. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the load balancer. The name must be unique within your set of load balancers. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.loadBalancerName = function(value) {
	return this.set('LoadBalancerName', value);
};

/**
 * One or more listeners for this load balancer. Each listener must be registered for a specific port, and you cannot have more than one listener for a given port.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {ElasticLoadBalancingListenerPropertyType[]|Attribute|Reference} value A list of ElasticLoadBalancing Listener Property Type objects.
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.listeners = function(value) {
	return this.set('Listeners', value);
};

/**
 * A list of elastic load balancing policies to apply to this elastic load balancer. Specify only back-end server policies. For more information, see DescribeLoadBalancerPolicyTypes in the Elastic Load Balancing API Reference.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {ElasticLoadBalancingPolicyType[]|Attribute|Reference} value A list of ElasticLoadBalancing policy objects.
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.policies = function(value) {
	return this.set('Policies', value);
};

/**
 * For load balancers attached to an Amazon VPC, this parameter can be used to specify the type of load balancer to use. Specify internal to create an internal load balancer with a DNS name that resolves to private IP addresses or internet-facing to create a load balancer with a publicly resolvable DNS name, which resolves to public IP addresses.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.scheme = function(value) {
	return this.set('Scheme', value);
};

/**
 * Required: No
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value A list of security groups assigned to your load balancer within your virtual private cloud (VPC).
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.securityGroups = function(value) {
	return this.set('SecurityGroups', value);
};

/**
 * A list of subnet IDs in your virtual private cloud (VPC) to attach to your load balancer. Do not specify multiple subnets that are in the same Availability Zone. You can specify the AvailabilityZones or Subnets property, but not both.
 *
 * Required: false
 * Update requires: Replacement if you did not have an subnet specified and you are adding one or if you are removing all subnets. Otherwise, update requires no interruption. To update the load balancer to another subnet that is in the same Availability Zone, you must do two updates. You must first update the load balancer to use a subnet in different Availability Zone. After the update is complete, update the load balancer to use the new subnet that is in the original Availability Zone.
 *
 * @param {string[]|Attribute|Reference} value
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.subnets = function(value) {
	return this.set('Subnets', value);
};

/**
 * An arbitrary set of tags (key-value pairs) for this load balancer.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @return {ElasticLoadBalancingLoadBalancer}
 */
ElasticLoadBalancingLoadBalancer.prototype.tags = function(value) {
	return this.set('Tags', value);
};

module.exports = ElasticLoadBalancingLoadBalancer;
