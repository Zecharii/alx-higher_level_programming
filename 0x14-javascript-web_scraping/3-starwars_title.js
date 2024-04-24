#!/usr/bin/node
const request = require('request');
const id = process.argv[2];
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';
request(apiUrl + id + '/', function (error, response, body) {
	if (error == null) {
		const movie = JSON.parse(body);
		console.log(movie.title);
	}
});
