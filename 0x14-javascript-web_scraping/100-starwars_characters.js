#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/' + movieId;

request(apiUrl, function (error, response, body) {
	if (!error) {
		const characters = JSON.parse(body).characters;
		for (let i = 0; i < characters.length; i++) {
			request(characters[i], function (error, response, body) {
				if (!error) {
					console.log(JSON.parse(body).name);
				}
			});
		}
	}
});
