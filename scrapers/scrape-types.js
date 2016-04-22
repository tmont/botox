'use strict';

const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');
const async = require('async');
const http = require('http');
const https = require('https');
const helpers = require('./helpers');

function getTypeUrls(next) {
	helpers.getReferenceUrls(
		'http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-product-property-reference.html',
		next
	);
}

function processTypeUrls(urls, next) {
	function processUrl(url, next) {
		console.log('processing ' + path.basename(url));

		function getDoc(next) {
			helpers.fetchDoc(url, next);
		}

		function writeData($, next) {
			const data = helpers.getPropertyInfo($);
			data.referenceUrl = url;

			console.log(' detected ' + data.name + ' ' +
				' (' + data.properties.length + ' properties)');

			const fileName = path.join(__dirname, 'types', data.name + '.json');
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
