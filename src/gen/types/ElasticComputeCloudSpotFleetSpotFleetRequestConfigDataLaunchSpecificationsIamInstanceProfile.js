/**
 * IamInstanceProfile is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that specifies the IAM instance profile to associate with the instances.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-iaminstanceprofile.html}
 * @constructor
 */
function ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile() {
	this.data = {};
}

ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile.prototype = {
	
	/**
	 * The Amazon Resource Name (ARN) of the instance profile to associate with the instances. The instance profile contains the IAM role that is associated with the instances.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile}
	 */
	arn: function(value) {
		return this.set('Arn', value);
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

module.exports = ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile;
