var Resource = require('../../resource');

/**
 * AWS::SDB::Domain - The AWS::SDB::Domain type does not have any properties.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-simpledb.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function SDBDomain(name) {
	Resource.call(this, name, 'AWS::SDB::Domain');
}

SDBDomain.prototype = Object.create(Resource.prototype);



module.exports = SDBDomain;
