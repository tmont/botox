var PropertyType = require('../../property-type');

/**
 * Describes parameters for the AWS::Redshift::ClusterParameterGroup resource type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-property-redshift-clusterparametergroup-parameter.html}
 * @constructor
 */
function RedshiftParameterType() {
	PropertyType.call(this);
}

Object.setPrototypeOf(RedshiftParameterType, PropertyType);

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
	}
};

module.exports = RedshiftParameterType;
