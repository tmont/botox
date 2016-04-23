const Template = require('./src/template');
const Resources = require('./src/resources');

module.exports = {
	Resources: Resources,
	template: (description) => {
		return new Template(description);
	}
};
