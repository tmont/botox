var TemplateItemTrait = require('../template-item-trait');

/**
 * Returns the value corresponding to keys in a two-level map that is
 * declared in the Mappings section
 * @constructor
 * @implements TemplateItemTrait
 * @param {String|Attribute|Join|Reference} mapName
 * @param {String|Attribute|Join|Reference} topLevelKey
 * @param {String|Attribute|Join|Reference} secondLevelKey
 */
function FindInMap(mapName, topLevelKey, secondLevelKey) {
	if (!mapName) {
		throw new Error('mapName is required');
	}
	if (!topLevelKey) {
		throw new Error('topLevelKey is required');
	}
	if (!secondLevelKey) {
		throw new Error('secondLevelKey is required');
	}

	this.mapName = mapName;
	this.topLevelKey = topLevelKey;
	this.secondLevelKey = secondLevelKey;
}

Object.assign(FindInMap.prototype, TemplateItemTrait.prototype, {
	toJSON: function() {
		return {
			'Fn::FindInMap': [ this.mapName, this.topLevelKey, this.secondLevelKey ]
		};
	}
});

module.exports = FindInMap;
