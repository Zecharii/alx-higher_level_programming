#!/usr/bin/node

const request = require('request');
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';
let movieId = parseInt(process.argv[2], 10);
let characters = [];

request(apiUrl, function (error, response, body) {
	if (!error) {
		const results = JSON.parse(body).results;
		if (movieId < 4) {
			movieId += 3;
		} else {
			movieId -= 3;
		}
		for (let i = 0; i < results.length; i++) {
			if (results[i].episode_id === movieid) {
				characters = results[i].characters;
				break;
			}
		}
		for (let j = o; j < characters.length; j++) {
			request(characters[j], function (error, response, body) {
				if (!error) {
					console.log(JSON.parse(body).name);
				}
			});
		}
	}
});
