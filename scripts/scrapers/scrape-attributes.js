'use strict';

const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');
const async = require('async');
const helpers = require('./helpers');

const attrs = {
	CreationPolicy: 'http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-creationpolicy.html',
	UpdatePolicy: 'http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html'
};

function processReferenceLinks(urls, next) {
	function processLink(url, next) {
		console.log('processing ' + path.basename(url));

		function getDoc(next) {
			helpers.fetchDoc(url, next);
		}

		function writeData($, next) {

		}

		async.waterfall([getDoc, writeData], next);
	}

	async.eachLimit(urls, 20, processLink, next);
}

function processAttr(url, className, next) {
	console.log(className);
	function getDoc(next) {
		helpers.fetchDoc(url, next);
	}

	function writeData($, next) {
		const data = helpers.getPropertyInfo($, true);
		data.referenceUrl = url;

		data.name = data.name.replace(/Attribute$/, '');
		console.log(' detected ' + data.name + ' (' + data.properties.length + ' properties)');


		const fileName = path.join(__dirname, 'attributes', data.name + '.json');
		fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
			if (!err) {
				console.log(' wrote to ' + path.basename(fileName));
			}

			next(err);
		});
	}

	async.waterfall([ getDoc, writeData ], next);

}

async.eachOfSeries(attrs, processAttr, (err) => {
	err && console.error(err);
	process.exit(err ? 1 : 0);
});
