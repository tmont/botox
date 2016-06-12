var Resource = require('../../resource');

/**
 * AWS::EC2::FlowLog - The AWS::EC2::FlowLog resource creates an Amazon Elastic Compute Cloud (Amazon EC2) flow log that captures IP traffic for a specified network interface, subnet, or VPC. To view the log data, use Amazon CloudWatch Logs (CloudWatch Logs) to help troubleshoot connection issues. For example, you can use a flow log to investigate why certain traffic isn't reaching an instance, which can help you diagnose overly restrictive security group rules. For more information, see VPC Flow Logs in the Amazon VPC User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2FlowLog(name) {
	Resource.call(this, name, 'AWS::EC2::FlowLog');
}

EC2FlowLog.prototype = Object.create(Resource.prototype);

/**
 * The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2FlowLog}
 */
EC2FlowLog.prototype.deliverLogsPermissionArn = function(value) {
	return this.set('DeliverLogsPermissionArn', value);
};

/**
 * The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2FlowLog}
 */
EC2FlowLog.prototype.logGroupName = function(value) {
	return this.set('LogGroupName', value);
};

/**
 * The ID of the subnet, network interface, or VPC for which you want to create a flow log.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2FlowLog}
 */
EC2FlowLog.prototype.resourceId = function(value) {
	return this.set('ResourceId', value);
};

/**
 * The type of resource that you specified in the ResourceId property. For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property. For valid values, see the ResourceType parameter for the CreateFlowLogs action in the Amazon EC2 API Reference.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2FlowLog}
 */
EC2FlowLog.prototype.resourceType = function(value) {
	return this.set('ResourceType', value);
};

/**
 * The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic. For valid values, see the TrafficType parameter for the CreateFlowLogs action in the Amazon EC2 API Reference.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2FlowLog}
 */
EC2FlowLog.prototype.trafficType = function(value) {
	return this.set('TrafficType', value);
};

module.exports = EC2FlowLog;
