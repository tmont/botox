var TemplateItemTrait = require('../template-item-trait');

/**
 * Returns an array that lists Availability Zones for a specified region
 * @constructor
 * @implements TemplateItemTrait
 * @param {String|Attribute|Join|Reference} region The name of the region for which you want to get the Availability Zones.
 */
function GetAZs(region) {
	if (!region) {
		throw new Error('region is required');
	}

	this.region = region;
}

Object.assign(GetAZs.prototype, TemplateItemTrait.prototype, {
	toJSON: function() {
		return {
			'Fn::GetAZs': this.region
		};
	}
});

module.exports = GetAZs;
