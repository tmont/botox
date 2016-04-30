var PropertyType = require('../../property-type');

/**
 * Describes parameters for the AWS::Redshift::ClusterParameterGroup resource type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-property-redshift-clusterparametergroup-parameter.html}
 * @constructor
 */
function RedshiftParameterType() {
	PropertyType.call(this);
}

RedshiftParameterType.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the parameter.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {RedshiftParameterType}
 */
RedshiftParameterType.prototype.parameterName = function(value) {
	return this.set('ParameterName', value);
};

/**
 * The value of the parameter.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {RedshiftParameterType}
 */
RedshiftParameterType.prototype.parameterValue = function(value) {
	return this.set('ParameterValue', value);
};

module.exports = RedshiftParameterType;
