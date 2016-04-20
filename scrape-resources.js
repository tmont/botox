'use strict';

const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');
const async = require('async');
const http = require('http');
const https = require('https');

function fetchDoc(url, callback) {
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
}

function getReferenceLinks(next) {
	const prefix = 'http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/';
	const referenceUrl = prefix + 'aws-template-resource-type-ref.html';
	fetchDoc(referenceUrl, (err, $) => {
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
}

function processReferenceLinks(urls, next) {
	function processLink(url, next) {
		console.log('processing ' + path.basename(url));

		function getDoc(next) {
			fetchDoc(url, next);
		}

		function writeData($, next) {
			function normalize(text) {
				return (text || '').replace(/[\n\t]/g, ' ').replace(/\s{2,}/g, ' ').trim();
			}

			const $body = $('#main-col-body');
			const name = normalize($body.find('h1.topictitle').text());
			const shortDesc = normalize($body.find('p').first().text());

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
							return result && result[1];
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
						desc: desc,
						required: /^yes/i.test(required),
						type: type,
						update: update
					};
				})
				.get();

			const attributes = $body
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
						desc: desc
					};
				})
				.get();

			const data = {
				fullName: name,
				namespace: name.split('::')[0],
				category: name.split('::')[1],
				name: name.split('::')[2],
				shortDesc: shortDesc,
				properties: properties,
				attributes: attributes
			};

			console.log(' detected ' + name + ' ' +
				' (' + properties.length + ' properties, ' + attributes.length + ' attributes)');

			const fileName = path.join(__dirname, 'resources', name.replace(/::/g, '_') + '.json');
			fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
				if (!err) {
					console.log('wrote to ' + path.basename(fileName));
				}

				next(err);
			});
		}

		async.waterfall([ getDoc, writeData ], next);
	}

	async.each(urls, processLink, next);
}

async.waterfall([
	getReferenceLinks,
	processReferenceLinks
], (err) => {
	err && console.error(err);
	process.exit(err ? 1 : 0);
});
