var Reference = require('./fun/reference'),
	Attribute = require('./fun/attribute'),
	TemplateItemTrait = require('./template-item-trait');

/**
 * Base class for CloudFormation resources
 * @param {String} name
 * @param {String} type
 * @constructor
 * @implements TemplateItemTrait
 */
function Resource(name, type) {
	if (!name || typeof(name) !== 'string') {
		throw new Error('name must be a non-empty string');
	}
	if (!type || typeof(type) !== 'string') {
		throw new Error('type must be a non-empty string');
	}

	Object.defineProperty(this, '$data', {
		value: {}
	});

	Object.defineProperty(this, 'ref', {
		value: new Reference(this)
	});

	Object.defineProperty(this, '$name', {
		value: name
	});

	Object.defineProperty(this, '$type', {
		value: type
	});

	Object.defineProperty(this, '$attributes', {
		value: {}
	});
}

Resource.prototype = {
	get attr() {
		throw new Error('This resource has no attributes');
	},

	/**
	 * With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted. You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy attribute, AWS CloudFormation deletes the resource by default.
	 *
	 * To keep a resource when its stack is deleted, specify Retain for that resource. You can use retain for any resource. For example, you can retain a nested stack, S3 bucket, or EC2 instance so that you can continue to use or modify those resources after you delete their stacks.
	 *
	 * For resources that support snapshots, such as AWS::RDS::DBInstance and AWS::EC2::Volume, you can specify Snapshot to have AWS CloudFormation create a snapshot before deleting the resource.
	 * @param {String} deletionPolicy "Delete", "Retain" or "Snapshot"
	 * @returns {Resource}
	 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html}
	 */
	deletionPolicy: function(deletionPolicy) {
		return this.setResourceAttribute('DeletionPolicy', deletionPolicy);
	},

	/**
	 * With the DependsOn attribute you can specify that the creation of a specific resource follows another. When you add a DependsOn attribute to a resource, that resource is created only after the creation of the resource specified in the DependsOn attribute.
	 * @param {String[]} resources
	 * @returns {Resource}
	 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html}
	 */
	dependsOn: function(resources) {
		return this.setResourceAttribute('DependsOn', resources);
	},

	/**
	 * The Metadata attribute enables you to associate structured data with a resource. By adding a Metadata attribute to a resource, you can add data in JSON format to the resource declaration. In addition, you can use intrinsic functions (such as GetAtt and Ref), parameters, and pseudo parameters within the Metadata attribute to add those interpreted values.
	 * @param {Object} json
	 * @returns {Resource}
	 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-metadata.html}
	 */
	metadata: function(json) {
		return this.setResourceAttribute('Metadata', json);
	},

	set: function(key, value) {
		this.$data[key] = value;
		return this;
	},

	setResourceAttribute: function(key, value) {
		this.$attributes[key] = value;
		return this;
	},

	createAttribute: function(name) {
		return new Attribute(this, name);
	},

	toJSON: function() {
		var json = {};
		if (this.$type === 'AWS::CloudFormation::Authentication') {
			//hardcoding this is probably not ideal, but i'm too lazy for anything else
			json[this.$name] = this.$data;
		} else {
			json = {
				Type: this.$type,
				Properties: this.$data
			};
			Object.assign(json, this.$attributes);
		}

		return json;
	}
};

Object.assign(Resource.prototype, TemplateItemTrait.prototype);

module.exports = Resource;
