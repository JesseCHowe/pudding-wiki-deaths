const fs = require('fs');
const mkdirp = require('mkdirp');
const pageviews = require('pageviews')
const d3 = require('d3');

//Getting aggregated pageview for a single project
pageviews
	.getAggregatedPageviews({
		project: 'en.wikipedia',
		agent: 'user',
		granularity: 'daily',
    	start: '2015070100', //YYYYMMDDHH string or Date object
    	end: '2018123100'
	})
	.then(result => {
    const output = d3.csvFormat(result.items);
    mkdirp('./output');
    fs.writeFileSync('./output/wiki-pageviews.csv', output)
	})
	.catch(console.error);