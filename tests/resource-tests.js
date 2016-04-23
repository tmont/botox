const expect = require('expect.js');
const Instance = require('../src/gen/resources/EC2Instance');

describe('Resource', () => {
	it('should generate JSON', () => {
		const resource = new Instance('datInstance').imageId('ami-deadbeef');
		const json = resource.getTemplateJson();

		expect(json).to.eql({
			Type: 'AWS::EC2::Instance',
			Properties: {
				ImageId: 'ami-deadbeef'
			}
		});
	});

	it('should get attribute', () => {
		const other = new Instance('other');
		const resource = new Instance('datInstance').imageId(other.attr.privateDnsName);
		const json = resource.getTemplateJson();

		expect(json).to.eql({
			Type: 'AWS::EC2::Instance',
			Properties: {
				ImageId: {
					'Fn::GetAtt': [ 'other', 'PrivateDnsName' ]
				}
			}
		});
	});
});
