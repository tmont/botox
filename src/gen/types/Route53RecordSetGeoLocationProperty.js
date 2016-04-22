/**
 * The GeoLocation property is part of the AWS::Route53::RecordSet resource that describes how Amazon Route 53 responds to DNS queries based on the geographic location of the query.
 * @constructor
 */
function Route53RecordSetGeoLocationProperty() {
	this.data = {};
}

Route53RecordSetGeoLocationProperty.prototype = {
	
	/**
	 * All DNS queries from the continent that you specified are routed to this resource record set. If you specify this property, omit the CountryCode and SubdivisionCode properties.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {Route53RecordSetGeoLocationProperty}
	 */
	continentCode: function(value) {
		return this.set('ContinentCode', value);
	},

	/**
	 * All DNS queries from the country that you specified are routed to this resource record set. If you specify this property, omit the ContinentCode property.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {Route53RecordSetGeoLocationProperty}
	 */
	countryCode: function(value) {
		return this.set('CountryCode', value);
	},

	/**
	 * If you specified US for the country code, you can specify a state in the United States. All DNS queries from the state that you specified are routed to this resource record set. If you specify this property, you must specify US for the CountryCode and omit the ContinentCode property.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {Route53RecordSetGeoLocationProperty}
	 */
	subdivisionCode: function(value) {
		return this.set('SubdivisionCode', value);
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

module.exports = Route53RecordSetGeoLocationProperty;
