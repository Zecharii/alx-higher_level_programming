#!/usr/bin/node
const request = require('request');
let films = 0;

request(process.argv[2], function (error, response, body) {
	if (!error) {
		const results = JSON.parse(body).results;
		for (let i = 0; i < results.length; i++) {
			const characters = results[i].characters;
			for (let j = 0; j < characters.length; j++) {
				if (characters[j].search('18') > 0) {
					films++;
				}
			}
		}
	}
	console.log(films);
});
