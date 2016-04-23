const expect = require('expect.js');
const Template = require('../src/template');
const Instance = require('../src/gen/resources/EC2Instance');

describe('Template', () => {
	it('should generate template using resource', () => {
		const template = new Template('lol')
			.resource(new Instance('datInstance').imageId('ami-deadbeef'));

		const json = template.getTemplateJson();

		expect(json).to.eql({
			AWSTemplateFormatVersion: '2010-09-09',
			Description: 'lol',
			Resources: {
				datInstance: {
					Type: 'AWS::EC2::Instance',
					Properties: {
						ImageId: 'ami-deadbeef'
					}
				}
			}
		});
	});
});
