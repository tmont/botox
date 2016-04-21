'use strict';

const cheerio = require('cheerio');
const http = require('http');
const https = require('https');
const inflection = require('inflection');

module.exports = {
	fetchDoc: function(url, callback) {
		let lib = http;
		if (url.indexOf('https') === 0) {
			lib = https;
		}

		const req = lib.get(url, (res) => {
			let body = '';
			res.on('data', (chunk) => {
				body += chunk;
			});

			res.on('end', () => {
				callback(null, cheerio.load(body));
			});
		});

		req.on('error', callback);
	},

	getReferenceUrls: function(url, next) {
		const prefix = url.substring(0, url.lastIndexOf('/') + 1);
		this.fetchDoc(url, (err, $) => {
			if (err) {
				next(err);
				return;
			}

			const urls = $('#main-col-body')
				.find('.highlights li a')
				.map((i, el) => {
					return prefix + $(el).attr('href');
				})
				.get();

			next(null, urls);
		});
	},

	getPropertyInfo: function($, parseAttrs) {
		function normalize(text) {
			return (text || '').replace(/[\n\t]/g, ' ').replace(/\s{2,}/g, ' ').trim();
		}

		const $body = $('#main-col-body');
		const name = normalize($body.find('h1.topictitle').text())
			.replace(/^amazon/i, '')
			.replace(/\s/g, '');
		const desc = normalize($body.find('p').first().text());

		const properties = $body
			.find('.variablelist')
			.first()
			.find('dt')
			.map((i, el) => {
				const $el = $(el);
				const $dd = $(el).next('dd');
				const desc = normalize($dd.find('p').first().text());
				const pText = $dd.find('p').map((i, el) => {
					return normalize($(el).text());
				}).get();

				const required = pText
					.map((text) => {
						const result = /^Required:\s*(.+)/i.exec(text);
						return result && result[1];
					})
					.filter(Boolean)[0];

				const type = pText
					.map((text) => {
						const result = /^Type:\s*(.+)/i.exec(text);
						if (!result) {
							return null;
						}

						const typeMatchers = [
							(type) => {
								if (type === 'String' || type === 'Boolean') {
									return type;
								}

								return null;
							},
							(type) => {
								const match = /^(?:A )?list of (?:Amazon )?([\w\s]+)/i.exec(type);
								if (!match) {
									return null;
								}

								let newType = inflection.singularize(match[1].replace(/\s/g, ''));
								if (newType === 'EC2MountPoint') {
									newType = 'EC2MountPointPropertyType';
								}
								return newType + '[]';
							},
							(type) => {
								if (type === 'AWS CloudFormation Resource Tags') {
									return 'AWSCloudFormationResourceTagsType[]';
								}

								return null;
							},
							(type) => {
								if (/^an empty map/i.test(type)) {
									return 'Object';
								}

								return null;
							},
							(type) => {
								return type.replace(/^Amazon\s+/i, '').replace(/\W/g, '');
							}
						];

						let type = result[1];
						for (let i = 0; i < typeMatchers.length; i++) {
							const newType = typeMatchers[i](type);
							if (newType) {
								return newType;
							}
						}

						return type;
					})
					.filter(Boolean)[0];

				const update = pText
					.map((text) => {
						const result = /^Update requires:\s*(.+)/i.exec(text);
						return result && result[1];
					})
					.filter(Boolean)[0];

				return {
					name: normalize($el.find('.term').text()),
					description: desc,
					required: /^yes/i.test(required),
					type: type,
					update: update
				};
			})
			.get();

		const attributes = parseAttrs && $body
			.find('h3')
			.filter((i, el) => {
				return normalize($(el).text()) === 'Fn::GetAtt';
			})
			.closest('.section')
			.find('.variablelist dt')
			.map((i, el) => {
				const name = normalize($(el).text());
				const desc = normalize($(el).next('dd').text());

				return {
					name: name,
					description: desc
				};
			})
			.get();

		const hasNamespace = name.indexOf('::') !== -1;

		const result = {};
		if (hasNamespace) {
			result.fullName = name;
			result.namespace = name.split('::')[0];
			result.category = name.split('::')[1];
			result.name = name.split('::')[2];
		} else {
			result.name = name;
		}

		result.description = desc;
		result.properties = properties;
		if (parseAttrs) {
			result.attributes = attributes;
		}

		return result;
	}
};
