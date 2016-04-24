const expect = require('expect.js');
const botox = require('../');
const Parameter = botox.Parameter;

describe('Parameter', () => {
	it('should blow up if no name is given', () => {
		expect(() => { new Parameter(); }).to.throwError(/^name must be a non-empty string$/);
	});

	it('should set description', () => {
		const param = new Parameter('foo');
		param.description('foo');
		const json = param.getTemplateJson();

		expect(json).to.eql({
			Description: 'foo'
		});
	});

	it('should set type', () => {
		const param = new Parameter('foo');
		param.type('String');
		const json = param.getTemplateJson();

		expect(json).to.eql({
			Type: 'String'
		});
	});

	it('should set allowed pattern with RegExp', () => {
		const param = new Parameter('foo');
		param.allowedPattern(/foo/);
		const json = param.getTemplateJson();

		expect(json).to.eql({
			AllowedPattern: 'foo'
		});
	});

	it('should set allowed pattern with RegExp and ignore flags', () => {
		const param = new Parameter('foo');
		param.allowedPattern(/foo/igm);
		const json = param.getTemplateJson();

		expect(json).to.eql({
			AllowedPattern: 'foo'
		});
	});

	it('should set allowed pattern with strings', () => {
		const param = new Parameter('foo');
		param.allowedPattern('[0-9]+');
		const json = param.getTemplateJson();

		expect(json).to.eql({
			AllowedPattern: '[0-9]+'
		});
	});
});
