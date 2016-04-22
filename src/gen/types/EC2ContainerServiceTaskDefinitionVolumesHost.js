/**
 * Host is a property of the Amazon EC2 Container Service TaskDefinition Volumes property that specifies the data volume path on the host container instance.
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionVolumesHost() {
	this.data = {};
}

EC2ContainerServiceTaskDefinitionVolumesHost.prototype = {
	
	/**
	 * The data volume path on the host container instance.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {EC2ContainerServiceTaskDefinitionVolumesHost}
	 */
	sourcePath: function(value) {
		return this.set('SourcePath', value);
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

module.exports = EC2ContainerServiceTaskDefinitionVolumesHost;
