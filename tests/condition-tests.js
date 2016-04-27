const expect = require('expect.js');
const botox = require('../');
const Condition= botox.Condition;

describe('Condition', () => {
	it('should blow up if no name is given', () => {
		expect(() => { new Condition(); }).to.throwError(/^name must be a non-empty string$/);
	});

	it('should blow up if no conditional is given', () => {
		expect(() => { new Condition('foo'); }).to.throwError(/^conditional is required$/);
	});

	it('should generate json foobie', () => {
		const condition = new Condition('foo', botox.equals('foo', 'bar'));
		const json = condition.getTemplateJson();

		expect(json).to.eql({
			'Fn::Equals': [ 'foo', 'bar' ]
		});
	});
	//
	//it('should blow up if description is longer than 4KB', () => {
	//	const desc = 'x'.repeat(4097);
	//	expect(() => { new Output('foo').description(desc); })
	//		.to
	//		.throwError(/^Output description must be less than 4K in length$/);
	//});
	//
	//it('should set value to string', () => {
	//	const output = new Output('foo');
	//	output.value('foo');
	//	const json = output.getTemplateJson();
	//
	//	expect(json).to.eql({
	//		Description: '',
	//		Value: 'foo'
	//	});
	//});
	//
	//it('should set value to reference', () => {
	//	const output = new Output('foo');
	//	const ref = new botox.fun.Reference({ name: 'bar' });
	//	output.value(ref);
	//	const json = output.getTemplateJson();
	//
	//	expect(json).to.eql({
	//		Description: '',
	//		Value: { Ref: 'bar' }
	//	});
	//});
});
