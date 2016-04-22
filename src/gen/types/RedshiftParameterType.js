/**
 * Describes parameters for the AWS::Redshift::ClusterParameterGroup resource type.
 * @constructor
 */
function RedshiftParameterType() {
	this.data = {};
}

RedshiftParameterType.prototype = {
	
	/**
	 * The name of the parameter.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {RedshiftParameterType}
	 */
	parameterName: function(value) {
		return this.set('ParameterName', value);
	},

	/**
	 * The value of the parameter.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {RedshiftParameterType}
	 */
	parameterValue: function(value) {
		return this.set('ParameterValue', value);
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

module.exports = RedshiftParameterType;
