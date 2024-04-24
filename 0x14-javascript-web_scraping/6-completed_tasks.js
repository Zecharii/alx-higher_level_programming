#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
	if (!error) {
		const tasks = JSON.parse(body);
		const completedTasks = {};

		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].completed === true) {
				if (completedTasks[tasks[i].userId] === undefined) {
					completedTasks[tasks[i].userId] = 0;
				}
				completedTasks[tasks[i].userId]++;
			}
		}
		console.log(completedTasks);
	}
});
