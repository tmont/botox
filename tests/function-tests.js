const expect = require('expect.js');
const Attribute = require('../src/fun/attribute');
const Join = require('../src/fun/join');
const Resource = require('../src/resource');
const Base64 = require('../src/fun/base64');
const FindInMap = require('../src/fun/find-in-map');
const GetAZs = require('../src/fun/get-azs');
const Reference = require('../src/fun/reference');
const Select = require('../src/fun/select');
const Equals = require('../src/fun/conditional/equals');
const And = require('../src/fun/conditional/and');
const Or = require('../src/fun/conditional/or');
const Not = require('../src/fun/conditional/not');
const Condition = require('../src/condition');
const If = require('../src/fun/conditional/if');

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

	describe('Base64', () => {
		it('should blow up if no value is given', () => {
			expect(() => { new Base64(); }).to.throwError(/^value is required$/);
		});

		it('should generate JSON from attribute', () => {
			const resource = new Resource('foo', 'type');
			const attr = new Attribute(resource, 'bar');
			const base64 = new Base64(attr);
			const json = base64.getTemplateJson();

			expect(json).to.eql({
				'Fn::Base64': {'Fn::GetAtt': [ 'foo', 'bar' ] }
			});
		});

		it('should generate JSON from string', () => {
			const base64 = new Base64('foo');
			const json = base64.getTemplateJson();

			expect(json).to.eql({
				'Fn::Base64': 'foo'
			});
		});

		it('should generate JSON from ref', () => {
			const resource = new Resource('foo', 'type');
			const base64 = new Base64(resource.ref);
			const json = base64.getTemplateJson();

			expect(json).to.eql({
				'Fn::Base64': { Ref: 'foo' }
			});
		});

		it('should generate JSON from join', () => {
			const join = new Join([ 'foo', 'bar' ]);
			const base64 = new Base64(join);
			const json = base64.getTemplateJson();

			expect(json).to.eql({
				'Fn::Base64': {
					'Fn::Join': [ '', [ 'foo', 'bar' ] ]
				}
			});
		});
	});

	describe('FindInMap', () => {
		it('should blow up if no map name is given', () => {
			expect(() => { new FindInMap(); }).to.throwError(/^mapName is required$/);
		});

		it('should blow up if no top level key is given', () => {
			expect(() => { new FindInMap('foo'); }).to.throwError(/^topLevelKey is required$/);
		});

		it('should blow up if no second level key is given', () => {
			expect(() => { new FindInMap('foo', 'bar'); }).to.throwError(/^secondLevelKey is required$/);
		});

		it('should generate JSON', () => {
			const findInMap = new FindInMap('foo' ,'bar', 'baz');
			const json = findInMap.getTemplateJson();

			expect(json).to.eql({
				'Fn::FindInMap': [ 'foo', 'bar', 'baz' ]
			});
		});

		it('should generate JSON from ref, attribute, join', () => {
			const resource = new Resource('foo', 'type');
			const attr = new Attribute(resource, 'bar');
			const join = new Join([ 'baz', 'bat' ]);
			const findInMap = new FindInMap(resource.ref, attr, join);
			const json = findInMap.getTemplateJson();

			expect(json).to.eql({
				'Fn::FindInMap': [
					{ Ref: 'foo' },
					{ 'Fn::GetAtt': [ 'foo', 'bar' ] },
					{ 'Fn::Join': [ '', [ 'baz', 'bat' ] ] }
				]
			});
		});
	});

	describe('GetAZs', () => {
		it('should allow empty region', () => {
			const getAZs = new GetAZs();
			const json = getAZs.getTemplateJson();

			expect(json).to.eql({
				'Fn::GetAZs': ''
			});
		});

		it('should generate JSON from string', () => {
			const getAZs = new GetAZs('foo');
			const json = getAZs.getTemplateJson();

			expect(json).to.eql({
				'Fn::GetAZs': 'foo'
			});
		});

		it('should generate JSON from ref', () => {
			const resource = new Resource('foo', 'type');
			const ref = new Reference(resource);
			const getAZs = new GetAZs(ref);
			const json = getAZs.getTemplateJson();

			expect(json).to.eql({
				'Fn::GetAZs': { Ref: 'foo' }
			});
		});
	});

	describe('Select', () => {
		it('should blow up if no index is given', () => {
			expect(() => { new Select(); }).to.throwError(/^index is required$/);
		});

		it('should blow up if no things are given', () => {
			expect(() => { new Select('1'); }).to.throwError(/^things is required$/);
		});

		it('should generate JSON from array', () => {
			const select = new Select(1, [ 'foo', 'bar' ]);
			const json = select.getTemplateJson();

			expect(json).to.eql({
				'Fn::Select': [ 1, [ 'foo', 'bar' ] ]
			});
		});

		it('should generate JSON from ref', () => {
			const ref1 = new Reference(new Resource('foo', 'asdf'));
			const ref2 = new Reference(new Resource('bar', 'asdf'));
			const select = new Select(ref1, ref2);
			const json = select.getTemplateJson();

			expect(json).to.eql({
				'Fn::Select': [ { Ref: 'foo' }, { Ref: 'bar' } ]
			});
		});
	});

	describe('conditional', () => {
		describe('Equals', () => {
			it('should blow up if no LHS is given', () => {
				expect(() => { new Equals(); }).to.throwError(/^lhs is required$/);
			});
			it('should blow up if no RHS is given', () => {
				expect(() => { new Equals('foo'); }).to.throwError(/^rhs is required$/);
			});

			it('should generate JSON from strings', () => {
				const equals = new Equals('foo', 'bar');
				const json = equals.getTemplateJson();

				expect(json).to.eql({
					'Fn::Equals': [ 'foo', 'bar' ]
				});
			});
		});

		describe('Not', () => {
			it('should blow up if no condition is given', () => {
				expect(() => { new Not(); }).to.throwError(/^condition is required$/);
			});

			it('should generate JSON from function', () => {
				const not = new Not(new Equals('foo', 'bar'));
				const json = not.getTemplateJson();

				expect(json).to.eql({
					'Fn::Not': [ { 'Fn::Equals': [ 'foo', 'bar' ] } ]
				});
			});

			it('should generate JSON from Condition object', () => {
				const condition = new Condition('foo', new Equals('foo', 'bar'));
				const not = new Not(condition);
				const json = not.getTemplateJson();

				expect(json).to.eql({
					'Fn::Not': [ { Condition: 'foo' } ]
				});
			});
		});

		describe('If', () => {
			it('should blow up if no condition is given', () => {
				expect(() => { new If(); }).to.throwError(/^condition is required$/);
			});
			it('should blow up if condition is not a Condition', () => {
				expect(() => { new If({}); }).to.throwError(/^condition must be an instance of Condition$/);
			});
			it('should blow up if not trueValue is given', () => {
				expect(() => { new If(new Condition('foo', new Equals('foo', 'bar'))); }).to.throwError(/^trueValue is required$/);
			});
			it('should blow up if not falseValue is given', () => {
				expect(() => { new If(new Condition('foo', new Equals('foo', 'bar')), 'foo'); }).to.throwError(/^falseValue is required$/);
			});

			it('should generate JSON', () => {
				const funIf = new If(new Condition('foo', new Equals('foo', 'bar')), 'bar', 'baz');
				const json = funIf.getTemplateJson();

				expect(json).to.eql({
					'Fn::If': [ 'foo', 'bar', 'baz' ]
				});
			});
		});

		[ 'And', 'Or'].forEach((conditional) => {
			const ctor = conditional === 'And' ? And : Or;
			describe(conditional, () => {
				const fn = `Fn::${conditional}`;

				it('should blow up if no conditions are given', () => {
					expect(() => { new ctor(); }).to.throwError(/^conditions must be multiple conditions or an array of conditions$/);
				});
				it('should blow up if not enough conditions are given', () => {
					expect(() => { new ctor(['foo']); }).to.throwError(/^Must provide between 2 and 10 conditions$/);
				});
				it('should blow up if too many conditions are given', () => {
					const conditions = 'x'.repeat(11).split('');
					expect(() => { new ctor(conditions); }).to.throwError(/^Must provide between 2 and 10 conditions$/);
				});

				it('should generate JSON from strings', () => {
					const equals = new ctor('foo', 'bar');
					const json = equals.getTemplateJson();

					const expected = {};
					expected[fn] = [ 'foo', 'bar' ];
					expect(json).to.eql(expected);
				});

				it('should generate JSON from Condition objects and functions', () => {
					const condition = new Condition('foo', new Equals('foo', 'bar'));
					const equals = new ctor([condition, new Equals('bar', 'baz')]);
					const json = equals.getTemplateJson();

					const expected = {};
					expected[fn] = [
						{Condition: 'foo'},
						{'Fn::Equals': ['bar', 'baz']}
					];

					expect(json).to.eql(expected);
				});
			});
		});
	});
});
