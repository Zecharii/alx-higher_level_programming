#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filepath = process.argv[3];

request(url, function (error, response, body) {
	if (!error) {
		fs.writeFileSync(filePath, body, 'utf8');
	}
});
