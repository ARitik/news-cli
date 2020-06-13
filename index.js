const inquirer = require('inquirer');
const axios = require('axios');
require('dotenv').config();
const chalk = require('chalk');

const srcURI = 'https://newsapi.org/v2/top-headlines?sources=';

const fetchData = async srcID => {
	try {
		const response = await axios.get(srcURI + srcID, {
			headers: { 'x-api-key': process.env.API_KEY },
		});
		const data = await response.data;
		console.log(
			'🌈 ' +
				chalk.bgCyanBright.black.bold(data.articles[0].source.name) +
				' ☀️' +
				'\n'
		);
		const feed = data.articles;
		feed.map(({ title, description, url }, index) => {
			console.log(chalk.yellow.bold(index + 1 + ')' + ' ' + title + ' 🌈'));
			console.log(chalk.green(description));
			console.log(chalk.blueBright.underline(url) + '\n\n');
		});
	} catch (err) {
		console.error(err.message);
	}
};

inquirer
	.prompt([
		{
			type: 'list',
			message: chalk.blue.bold('Pick a source to load news from 📚'),
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
		console.log('\n');
		fetchData(answers.source);
	})
	.catch(err => {
		console.error(err);
	});
