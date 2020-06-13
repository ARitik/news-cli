const inquirer = require('inquirer');
const axios = require('axios');
require('dotenv').config();
const chalk = require('chalk');

const sourceUri = 'https://newsapi.org/v2/sources?language=en';

// axios({
// 	method: 'get',
// 	url: 'https://newsapi.org/v2/sources?language=en',
// 	headers: {
// 		'x-api-key': process.env.API_KEY,
// 	},
// })
// 	.then(response => {
// 		console.log(response.data);
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});

inquirer
	.prompt([
		{
			type: 'list',
			message: chalk.blue('Pick a source to recieve news from 🌈'),
			name: 'source',
			choices: [
				'bbc-news',
				'bloomberg',
				'business-insider',
				'buzzfeed',
				'crypto-coins-news',
				'engadget',
				'espn',
				'hacker-news',
				'ign',
				'mashable',
				'recode',
				'techcrunch',
				'the-hindu',
				'the-verge',
				'the-washington-post',
				'vice-news',
				'wired',
			],
		},
	])
	.then(answers => {
		console.log(answers);
	})
	.catch(error => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else when wrong
		}
	});
