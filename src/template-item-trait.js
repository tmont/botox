/**
 * @interface
 */
function TemplateItemTrait() {

}

TemplateItemTrait.prototype = {
	getTemplateJson: function() {
		return JSON.parse(this.toString());
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = TemplateItemTrait;
