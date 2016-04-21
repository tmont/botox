/**
 * AssociationParameters is a property of the Amazon EC2 Instance SsmAssociations property that specifies input parameter values for an Amazon EC2 Simple Systems Manager (SSM) document.
 * @constructor
 */
function EC2InstanceSsmAssociationsAssociationParameters(initialData) {
	this.data = initialData || {};
}

EC2InstanceSsmAssociationsAssociationParameters.prototype = {
	
	/**
	 * The name of an input parameter that is in the associated SSM document.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2InstanceSsmAssociationsAssociationParameters}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * The value of an input parameter.
	 *
	 * Required: true
	 *
	 * @param {string[]} value
	 * @return {EC2InstanceSsmAssociationsAssociationParameters}
	 */
	value: function(value) {
		return this.set('Value', value);
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

module.exports = EC2InstanceSsmAssociationsAssociationParameters;
