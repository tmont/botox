const expect = require('expect.js');
const botox = require('../');

describe('CloudFormationInit', () => {
	it('should generate JSON for configSet', () => {
		const init = botox.cfnInit().configSet('foo', [ 'bar', 'baz' ]);
		const json = init.getTemplateJson();

		expect(json).to.eql({
			configSets: {
				foo: [ 'bar', 'baz' ]
			}
		});
	});

	it('should generate JSON for configSet', () => {
		const init = botox.cfnInit().configSet('foo', ['bar', 'baz']);
		const json = init.getTemplateJson();

		expect(json).to.eql({
			configSets: {
				foo: ['bar', 'baz']
			}
		});
	});

	describe('Config', () => {
		it('should generate JSON for files', () => {
			const config = botox.cfg.config()
				.file(botox.cfg.file('/tmp/foo')
					.content('foo')
					.mode('000644')
					.context({ foo: 'bar' })
					.group('dat-group')
					.authentication(botox.authentication('S3Access')
						.type('S3')
						.roleName('myRole')
					)
				);

			const json = config.getTemplateJson();

			expect(json).to.eql({
				files: {
					'/tmp/foo': {
						content: 'foo',
						mode: '000644',
						context: { foo: 'bar' },
						group: 'dat-group',
						authentication: {
							S3Access: {
								type: 'S3',
								roleName: 'myRole'
							}
						}
					}
				}
			});
		});

		it('should generate JSON for commands', () => {
			const config = botox.cfg.config()
				.command(botox.cfg.command('lol')
					.command('echo hello world')
					.ignoreErrors(true)
					.test('test ! -f ~/hello')
				);

			const json = config.getTemplateJson();

			expect(json).to.eql({
				commands: {
					lol: {
						command: 'echo hello world',
						ignoreErrors: true,
						test: 'test ! -f ~/hello'
					}
				}
			});
		});
	});
});
