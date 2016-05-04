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

		it('should generate JSON for groups', () => {
			const config = botox.cfg.config()
				.group(botox.cfg.group('lol').gid(12))
				.group(botox.cfg.group('dat-group'));

			const json = config.getTemplateJson();

			expect(json).to.eql({
				groups: {
					lol: { gid: 12 },
					'dat-group': {}
				}
			});
		});

		it('should generate JSON for users', () => {
			const config = botox.cfg.config()
				.user(botox.cfg.user('lol').uid(12).groups([ 'foo', 'bar' ]).homeDir('/tmp'));

			const json = config.getTemplateJson();

			expect(json).to.eql({
				users: {
					lol: {
						uid: 12,
						groups: [ 'foo', 'bar' ],
						homeDir: '/tmp'
					}
				}
			});
		});

		it('should generate JSON for packages', () => {
			const config = botox.cfg.config()
				.package(botox.cfg.package('yum')
					.add('nginx', [])
					.add('httpd', [ '1.5.3' ])
					.add('lol', 'https://example.com/package.rpm')
				);

			const json = config.getTemplateJson();

			expect(json).to.eql({
				packages: {
					yum: {
						nginx: [],
						httpd: [ '1.5.3' ],
						lol: 'https://example.com/package.rpm'
					}
				}
			});
		});

		it('should generate JSON for sources', () => {
			const config = botox.cfg.config()
				.source('/etc/myapp', 'https://s3.amazonaws.com/mybucket/myapp.tar.gz')
				.source('/tmp/example', 'http://example.com');

			const json = config.getTemplateJson();

			expect(json).to.eql({
				sources: {
					'/etc/myapp': 'https://s3.amazonaws.com/mybucket/myapp.tar.gz',
					'/tmp/example': 'http://example.com'
				}
			});
		});

		it('should generate JSON for services', () => {
			const config = botox.cfg.config()
				.service('sysvinit', botox.cfg.service('nginx')
					.enabled(true)
					.ensureRunning(true)
					.sources([ '/var/www/html' ])
				)
				.service('windows', botox.cfg.service('taskmgr.exe')
					.enabled(true)
					.ensureRunning(false)
				);

			const json = config.getTemplateJson();

			expect(json).to.eql({
				services: {
					sysvinit: {
						nginx: {
							enabled: true,
							ensureRunning: true,
							sources: [ '/var/www/html' ]
						}
					},
					windows: {
						'taskmgr.exe': {
							enabled: true,
							ensureRunning: false
						}
					}
				}
			});
		});
	});
});
