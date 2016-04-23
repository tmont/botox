function PropertyType() {
	Object.defineProperty(this, 'data', {
		value: {}
	});
}

PropertyType.prototype = {
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

module.exports = PropertyType;
