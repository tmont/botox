var PropertyType = require('../../property-type');

/**
 * Attributes that are copied (projected) from the source table into the index. These attributes are additions to the primary key attributes and index key attributes, which are automatically projected.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-projectionobject.html}
 * @constructor
 */
function DynamoDBProjectionObject() {
	PropertyType.call(this);
}

DynamoDBProjectionObject.prototype = Object.create(PropertyType.prototype);

/**
 * The non-key attribute names that are projected into the index.
 *
 * Required: false
 *
 * @param {string[]} value
 * @return {DynamoDBProjectionObject}
 */
DynamoDBProjectionObject.prototype.nonKeyAttributes = function(value) {
	return this.set('NonKeyAttributes', value);
};

/**
 * The set of attributes that are projected into the index:
 *
 * Required: false
 *
 * @param {String} value
 * @return {DynamoDBProjectionObject}
 */
DynamoDBProjectionObject.prototype.projectionType = function(value) {
	return this.set('ProjectionType', value);
};

module.exports = DynamoDBProjectionObject;
