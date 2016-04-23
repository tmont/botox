const expect = require('expect.js');
const Attribute = require('../src/fun/attribute');
const Join = require('../src/fun/join');
const Resource = require('../src/resource');

describe('Functions', () => {
	describe('GetAtt', () => {
		it('should blow up if no resource is given', () => {
			expect(() => { new Attribute(); }).to.throwError(/^resource is required$/);
		});

		it('should blow up if no attribute is given', () => {
			expect(() => { new Attribute({}); }).to.throwError(/^attribute is required$/);
		});

		it('should generate JSON', () => {
			const resource = new Resource('lol', 'type');
			const attr = new Attribute(resource, 'foo');
			const json = attr.getTemplateJson();

			expect(json).to.eql({
				'Fn::GetAtt': [ 'lol', 'foo' ]
			});
		});
	});

	describe('Join', () => {
		it('should blow up if no things are given', () => {
			expect(() => { new Join(); }).to.throwError(/^things is required$/);
		});

		it('should generate JSON from array of strings without a delimiter', () => {
			const join = new Join([ 'foo', 'bar' ]);
			const json = join.getTemplateJson();

			expect(json).to.eql({
				'Fn::Join': [ '', [ 'foo', 'bar' ]]
			});
		});

		it('should generate JSON from array of strings with a delimiter', () => {
			const join = new Join(['foo', 'bar'], 'yarp');
			const json = join.getTemplateJson();

			expect(json).to.eql({
				'Fn::Join': [ 'yarp', [ 'foo', 'bar' ] ]
			});
		});

		it('should generate JSON from resource ref', () => {
			const join = new Join(new Resource('yarp', 'type').ref);
			const json = join.getTemplateJson();

			expect(json).to.eql({
				'Fn::Join': [ '', { Ref: 'yarp' }]
			});
		});
	});
});
