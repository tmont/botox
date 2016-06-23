var Reference = require('./fun/reference'),
	TemplateItemTrait = require('./template-item-trait');

/**
 * Represents a Parameter in CloudFormation
 * @param {String} name
 * @constructor
 * @implements TemplateItemTrait
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html}
 */
function Parameter(name) {
	if (!name || typeof(name) !== 'string') {
		throw new Error('name must be a non-empty string');
	}

	Object.defineProperty(this, 'data', {
		value: {}
	});

	Object.defineProperty(this, 'ref', {
		value: new Reference(this)
	});

	Object.defineProperty(this, '$name', {
		value: name
	});
}

Parameter.prototype = {
	description: function(value) {
		if (typeof(value) !== 'string') {
			throw new Error('Description must be a string');
		}

		return this.set('Description', value);
	},
	allowedPattern: function(value) {
		if (value instanceof RegExp) {
			value = value.source;
		}

		if (typeof(value) !== 'string') {
			throw new Error('Pattern must be a regular expression or a string');
		}

		return this.set('AllowedPattern', value);
	},
	constraintDescription: function(value) {
		if (typeof(value) !== 'string') {
			throw new Error('Constraint description must be a string');
		}

		return this.set('ConstraintDescription', value);
	},
	maxLength: function(value) {
		if (typeof(value) !== 'number') {
			throw new Error('Max length must be an integer');
		}

		return this.set('MaxLength', value);
	},
	minLength: function(value) {
		if (typeof(value) !== 'number') {
			throw new Error('Min length must be an integer');
		}

		return this.set('MinLength', value);
	},
	maxValue: function(value) {
		if (typeof(value) !== 'number') {
			throw new Error('Max value must be a number');
		}

		return this.set('MaxValue', value);
	},
	minValue: function(value) {
		if (typeof(value) !== 'number') {
			throw new Error('Min value must be a number');
		}

		return this.set('MinValue', value);
	},
	noEcho: function(value) {
		if (typeof(value) !== 'boolean') {
			throw new Error('No echo must be a boolean');
		}

		return this.set('NoEcho', value);
	},
	type: function(value) {
		var listableKeys = {
			Number: 1,
			'AWS::Route53::HostedZone::Id': 1,
			'AWS::EC2::VPC::Id': 1,
			'AWS::EC2::Volume::Id': 1,
			'AWS::EC2::Subnet::Id': 1,
			'AWS::EC2::SecurityGroup::Id': 1,
			'AWS::EC2::SecurityGroup::GroupName': 1,
			'AWS::EC2::KeyPair::KeyName': 1,
			'AWS::EC2::Instance::Id': 1,
			'AWS::EC2::Image::Id': 1,
			'AWS::EC2::AvailabilityZone::Name': 1
		};

		if (value !== 'String' && value !== 'CommaDelimitedList' && !listableKeys[value]) {
			if (!Object.keys(listableKeys).some(function(key) { return value === 'List<' + key + '>'; })) {
				throw new Error('Invalid value for parameter type');
			}
		}

		return this.set('Type', value);
	},
	defaultValue: function(value) {
		if (typeof(value) !== 'string') {
			throw new Error('Default value must be a string');
		}
		return this.set('Default', value);
	},
	allowedValues: function(values) {
		if (!Array.isArray(values)) {
			throw new Error('Allowed values must be an array');
		}

		return this.set('AllowedValues', values);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	}
};

Object.assign(Parameter.prototype, TemplateItemTrait.prototype);

module.exports = Parameter;
