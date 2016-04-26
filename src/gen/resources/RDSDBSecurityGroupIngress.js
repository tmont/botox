var Resource = require('../../resource');

/**
 * AWS::RDS::DBSecurityGroupIngress - The AWS::RDS::DBSecurityGroupIngress type enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the Internet. For more information about DB security groups, see Working with DB security groups
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-security-group-ingress.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function RDSDBSecurityGroupIngress(name) {
	Resource.call(this, name, 'AWS::RDS::DBSecurityGroupIngress');
}

RDSDBSecurityGroupIngress.prototype = Object.create(Resource.prototype);

/**
 * The IP range to authorize.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBSecurityGroupIngress}
 */
RDSDBSecurityGroupIngress.prototype.cidrip = function(value) {
	return this.set('CIDRIP', value);
};

/**
 * The name (ARN) of the AWS::RDS::DBSecurityGroup to which this ingress will be added.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBSecurityGroupIngress}
 */
RDSDBSecurityGroupIngress.prototype.dbSecurityGroupName = function(value) {
	return this.set('DBSecurityGroupName', value);
};

/**
 * The ID of the VPC or EC2 security group to authorize.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBSecurityGroupIngress}
 */
RDSDBSecurityGroupIngress.prototype.eC2SecurityGroupId = function(value) {
	return this.set('EC2SecurityGroupId', value);
};

/**
 * The name of the EC2 security group to authorize.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBSecurityGroupIngress}
 */
RDSDBSecurityGroupIngress.prototype.eC2SecurityGroupName = function(value) {
	return this.set('EC2SecurityGroupName', value);
};

/**
 * The AWS Account Number of the owner of the EC2 security group specified in the EC2SecurityGroupName parameter. The AWS Access Key ID is not an acceptable value.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBSecurityGroupIngress}
 */
RDSDBSecurityGroupIngress.prototype.eC2SecurityGroupOwnerId = function(value) {
	return this.set('EC2SecurityGroupOwnerId', value);
};

module.exports = RDSDBSecurityGroupIngress;
