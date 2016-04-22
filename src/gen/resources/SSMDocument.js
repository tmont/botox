var Resource = require('../../resource');

/**
 * AWS::SSM::Document - The AWS::SSM::Document resource creates an Amazon EC2 Simple Systems Manager (SSM) document that describes an instance configuration, which you can use to set up and run commands on your instances.
 * @constructor
 * @param {String} name Name of the resource
 */
function SSMDocument(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(SSMDocument, Resource);

SSMDocument.prototype = {
	
	
	/**
	 * A JSON object that describes an instance configuration. For more information, see SSM Documents in the Amazon EC2 Simple Systems Manager API Reference.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {JSONobject} value
	 * @return {SSMDocument}
	 */
	content: function(value) {
		return this.set('Content', value);
	}
};

module.exports = SSMDocument;
