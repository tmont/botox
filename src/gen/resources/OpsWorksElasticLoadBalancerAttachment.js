var Resource = require('../../resource');

/**
 * AWS::OpsWorks::ElasticLoadBalancerAttachment - Attaches an Elastic Load Balancing load balancer to an AWS OpsWorks layer that you specify.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elbattachment.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function OpsWorksElasticLoadBalancerAttachment(name) {
	Resource.call(this, name, 'AWS::OpsWorks::ElasticLoadBalancerAttachment');
}

OpsWorksElasticLoadBalancerAttachment.prototype = Object.create(Resource.prototype);

/**
 * Elastic Load Balancing load balancer name.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {OpsWorksElasticLoadBalancerAttachment}
 */
OpsWorksElasticLoadBalancerAttachment.prototype.elasticLoadBalancerName = function(value) {
	return this.set('ElasticLoadBalancerName', value);
};

/**
 * The AWS OpsWorks layer ID that the Elastic Load Balancing load balancer will be attached to.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {OpsWorksElasticLoadBalancerAttachment}
 */
OpsWorksElasticLoadBalancerAttachment.prototype.layerId = function(value) {
	return this.set('LayerId', value);
};

module.exports = OpsWorksElasticLoadBalancerAttachment;
