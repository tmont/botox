var Resource = require('../../resource');

/**
 * AWS::OpsWorks::ElasticLoadBalancerAttachment - Attaches an Elastic Load Balancing load balancer to an AWS OpsWorks layer that you specify.
 * @constructor
 * @param {String} name Name of the resource
 */
function OpsWorksElasticLoadBalancerAttachment(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(OpsWorksElasticLoadBalancerAttachment, Resource);

OpsWorksElasticLoadBalancerAttachment.prototype = {
	
	
	/**
	 * Elastic Load Balancing load balancer name.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksElasticLoadBalancerAttachment}
	 */
	elasticLoadBalancerName: function(value) {
		return this.set('ElasticLoadBalancerName', value);
	},

	/**
	 * The AWS OpsWorks layer ID that the Elastic Load Balancing load balancer will be attached to.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksElasticLoadBalancerAttachment}
	 */
	layerId: function(value) {
		return this.set('LayerId', value);
	}
};

module.exports = OpsWorksElasticLoadBalancerAttachment;
