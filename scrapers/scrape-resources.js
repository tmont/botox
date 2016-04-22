'use strict';

const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');
const async = require('async');
const helpers = require('./helpers');

function getReferenceLinks(next) {
	helpers.getReferenceUrls(
		'http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html',
		next
	);
}

function processReferenceLinks(urls, next) {
	function processLink(url, next) {
		console.log('processing ' + path.basename(url));

		function getDoc(next) {
			helpers.fetchDoc(url, next);
		}

		function writeData($, next) {
			const data = helpers.getPropertyInfo($, true);
			data.referenceUrl = url;

			console.log(' detected ' + data.fullName + ' ' +
				' (' + data.properties.length + ' properties, ' + data.attributes.length + ' attributes)');

			const fileName = path.join(__dirname, 'resources', data.fullName.replace(/::/g, '_') + '.json');
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
