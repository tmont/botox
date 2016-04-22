var Resource = require('../../resource');

/**
 * AWS::SDB::Domain - The AWS::SDB::Domain type does not have any properties.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-simpledb.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function SDBDomain(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(SDBDomain, Resource);

SDBDomain.prototype = {
	
	
};

module.exports = SDBDomain;
