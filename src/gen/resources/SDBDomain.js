var Resource = require('../../resource');

/**
 * AWS::SDB::Domain - The AWS::SDB::Domain type does not have any properties.
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
