/**
 * PlacementType is a property of the Amazon Elastic MapReduce Cluster JobFlowInstancesConfig property that specifies the Availability Zone (AZ) in which the job flow runs.
 * @constructor
 */
function ElasticMapReduceClusterJobFlowInstancesConfigPlacementType() {
	this.data = {};
}

ElasticMapReduceClusterJobFlowInstancesConfigPlacementType.prototype = {
	
	/**
	 * The Amazon Elastic Compute Cloud (Amazon EC2) AZ for the job flow. For more information, see http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html in the Amazon EC2 User Guide for Linux Instances.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceClusterJobFlowInstancesConfigPlacementType}
	 */
	availabilityZone: function(value) {
		return this.set('AvailabilityZone', value);
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

module.exports = ElasticMapReduceClusterJobFlowInstancesConfigPlacementType;
