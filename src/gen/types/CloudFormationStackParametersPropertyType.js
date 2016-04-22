/**
 * The Parameters type is an embedded property of the AWS::CloudFormation::Stack type.
 * @constructor
 */
function CloudFormationStackParametersPropertyType() {
	this.data = {};
}

CloudFormationStackParametersPropertyType.prototype = {
	

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

module.exports = CloudFormationStackParametersPropertyType;
