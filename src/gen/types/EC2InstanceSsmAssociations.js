/**
 * SsmAssociations is a property of the AWS::EC2::Instance resource that specifies the Amazon EC2 Simple Systems Manager (SSM) document and parameter values to associate with an instance.
 * @constructor
 */
function EC2InstanceSsmAssociations() {
	this.data = {};
}

EC2InstanceSsmAssociations.prototype = {
	
	/**
	 * The input parameter values to use with the associated SSM document.
	 *
	 * Required: false
	 *
	 * @param {EC2InstanceSsmAssociationsAssociationParameter[]} value
	 * @return {EC2InstanceSsmAssociations}
	 */
	associationParameters: function(value) {
		return this.set('AssociationParameters', value);
	},

	/**
	 * The name of an SSM document to associate with the instance.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2InstanceSsmAssociations}
	 */
	documentName: function(value) {
		return this.set('DocumentName', value);
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

module.exports = EC2InstanceSsmAssociations;
