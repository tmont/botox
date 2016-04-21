var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::OpsWorks::ElasticLoadBalancerAttachment - Attaches an Elastic Load Balancing load balancer to an AWS OpsWorks layer that you specify.
 * @constructor
 */
function OpsWorksElasticLoadBalancerAttachment(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::OpsWorks::ElasticLoadBalancerAttachment has no attributes');
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = OpsWorksElasticLoadBalancerAttachment;
