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

function getTypeUrls(next) {
	const prefix = 'http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/';
	const referenceUrl = prefix + 'aws-product-property-reference.html';
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

function processTypeUrls(urls, next) {
	function processUrl(url, next) {
		console.log('processing ' + path.basename(url));

		function getDoc(next) {
			fetchDoc(url, next);
		}

		function writeData($, next) {
			function normalize(text) {
				return (text || '').replace(/[\n\t]/g, ' ').replace(/\s{2,}/g, ' ').trim();
			}

			const $body = $('#main-col-body');
			const name = normalize($body.find('h1.topictitle').text()).replace(/^amazon/i, '').replace(/\s/g, '');
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
							return result && result[1];
						})
						.filter(Boolean)[0];

					return {
						name: normalize($el.find('.term').text()),
						desc: desc,
						required: /^yes/i.test(required),
						type: type
					};
				})
				.get();

			const data = {
				name: name,
				description: desc,
				properties: properties
			};

			console.log(' detected ' + name + ' ' + ' (' + properties.length + ' properties)');

			const fileName = path.join(__dirname, 'types', name + '.json');
			fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
				if (!err) {
					console.log('wrote to ' + path.basename(fileName));
				}

				next(err);
			});
		}

		async.waterfall([getDoc, writeData], next);
	}

	async.each(urls, processUrl, next);
}

async.waterfall([
	getTypeUrls,
	processTypeUrls
], (err) => {
	err && console.error(err);
	process.exit(err ? 1 : 0);
});
