var PropertyType = require('../../property-type');

/**
 * IamInstanceProfile is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that specifies the IAM instance profile to associate with the instances.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-iaminstanceprofile.html}
 * @constructor
 */
function ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile() {
	PropertyType.call(this);
}

ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile.prototype = Object.create(PropertyType.prototype);

/**
 * The Amazon Resource Name (ARN) of the instance profile to associate with the instances. The instance profile contains the IAM role that is associated with the instances.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile.prototype.arn = function(value) {
	return this.set('Arn', value);
};

module.exports = ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile;
