const expect = require('expect.js');
const botox = require('../');
const Reference = require('../src/fun/reference');
const Resource = require('../src/resource');

describe('Output', () => {
	it('should blow up if no name is given', () => {
		expect(() => { botox.output(); }).to.throwError(/^name must be a non-empty string$/);
	});

	it('should set description', () => {
		const output = botox.output('foo');
		output.description('foo');
		const json = output.getTemplateJson();

		expect(json).to.eql({
			Description: 'foo',
			Value: ''
		});
	});

	it('should blow up if description is longer than 4KB', () => {
		const desc = 'x'.repeat(4097);
		expect(() => { botox.output('foo').description(desc); })
			.to
			.throwError(/^Output description must be less than 4K in length$/);
	});

	it('should set value to string', () => {
		const output = botox.output('foo');
		output.value('foo');
		const json = output.getTemplateJson();

		expect(json).to.eql({
			Description: '',
			Value: 'foo'
		});
	});

	it('should set value to reference', () => {
		const output = botox.output('foo');
		const ref = new Reference(new Resource('bar', 'asdf'));
		output.value(ref);
		const json = output.getTemplateJson();

		expect(json).to.eql({
			Description: '',
			Value: { Ref: 'bar' }
		});
	});
});
