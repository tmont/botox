const expect = require('expect.js');
const botox = require('../');

describe('Condition', () => {
	it('should blow up if no name is given', () => {
		expect(() => { botox.condition(); }).to.throwError(/^name must be a non-empty string$/);
	});

	it('should blow up if no conditional is given', () => {
		expect(() => { botox.condition('foo'); }).to.throwError(/^conditional is required$/);
	});

	it('should generate json foobie', () => {
		const condition = botox.condition('foo', botox.equals('foo', 'bar'));
		const json = condition.getTemplateJson();

		expect(json).to.eql({
			'Fn::Equals': [ 'foo', 'bar' ]
		});
	});
});
