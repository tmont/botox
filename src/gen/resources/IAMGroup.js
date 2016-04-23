var Resource = require('../../resource');

/**
 * AWS::IAM::Group - The AWS::IAM::Group type creates an Identity and Access Management (IAM) group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMGroup(name) {
	Resource.call(this, name, 'AWS::IAM::Group');
}

IAMGroup.prototype = Object.create(Resource.prototype);

/**
 * AWS::IAM::Group attribute map
 * @typedef {Object} IAMGroupAttributeMap
 * @property {Attribute} arn Returns the Amazon Resource Name (ARN) for the AWS::IAM::Group resource. For example: arn:aws:iam::123456789012:group/mystack-mygroup-1DZETITOWEKVO.
 */
Object.defineProperty(IAMGroup.prototype, 'attr', {
	/**
	 * @return {IAMGroupAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * Returns the Amazon Resource Name (ARN) for the AWS::IAM::Group resource. For example: arn:aws:iam::123456789012:group/mystack-mygroup-1DZETITOWEKVO.
			 * @return {Attribute}
			 */
			get arn() {
				return createAttribute('Arn');
			}
		};
	}
});

/**
 * One or more managed policy ARNs to attach to this group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {string[]|Attribute|Reference} value
 * @return {IAMGroup}
 */
IAMGroup.prototype.managedPolicyArns = function(value) {
	return this.set('ManagedPolicyArns', value);
};

/**
 * The path to the group. For more information about paths, see Identifiers for IAM Entities in Using IAM.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {IAMGroup}
 */
IAMGroup.prototype.path = function(value) {
	return this.set('Path', value);
};

/**
 * The policies to associate with this group. For information about policies, see Overview of Policies in Using IAM.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {IAMPolicy[]|Attribute|Reference} value
 * @return {IAMGroup}
 */
IAMGroup.prototype.policies = function(value) {
	return this.set('Policies', value);
};

module.exports = IAMGroup;
