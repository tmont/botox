var Resource = require('../../resource');

/**
 * AWS::EC2::InternetGateway - Creates a new Internet gateway in your AWS account. After creating the Internet gateway, you then attach it to a VPC.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2InternetGateway(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2InternetGateway, Resource);

EC2InternetGateway.prototype = {
	
	
	/**
	 * An arbitrary set of tags (key–value pairs) for this resource.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {EC2InternetGateway}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	}
};

module.exports = EC2InternetGateway;
