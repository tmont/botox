var PropertyType = require('../../property-type');

/**
 * The GeoLocation property is part of the AWS::Route53::RecordSet resource that describes how Amazon Route 53 responds to DNS queries based on the geographic location of the query.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geolocation.html}
 * @constructor
 */
function Route53RecordSetGeoLocationProperty() {
	PropertyType.call(this);
}

Route53RecordSetGeoLocationProperty.prototype = Object.create(PropertyType.prototype);

/**
 * All DNS queries from the continent that you specified are routed to this resource record set. If you specify this property, omit the CountryCode and SubdivisionCode properties.
 *
 * Required: false
 *
 * @param {String} value
 * @return {Route53RecordSetGeoLocationProperty}
 */
Route53RecordSetGeoLocationProperty.prototype.continentCode = function(value) {
	return this.set('ContinentCode', value);
};

/**
 * All DNS queries from the country that you specified are routed to this resource record set. If you specify this property, omit the ContinentCode property.
 *
 * Required: false
 *
 * @param {String} value
 * @return {Route53RecordSetGeoLocationProperty}
 */
Route53RecordSetGeoLocationProperty.prototype.countryCode = function(value) {
	return this.set('CountryCode', value);
};

/**
 * If you specified US for the country code, you can specify a state in the United States. All DNS queries from the state that you specified are routed to this resource record set. If you specify this property, you must specify US for the CountryCode and omit the ContinentCode property.
 *
 * Required: false
 *
 * @param {String} value
 * @return {Route53RecordSetGeoLocationProperty}
 */
Route53RecordSetGeoLocationProperty.prototype.subdivisionCode = function(value) {
	return this.set('SubdivisionCode', value);
};

module.exports = Route53RecordSetGeoLocationProperty;
