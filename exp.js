var request = require('request');
var url = 'http://stackoverflow.com/questions/19730565/how-to-remove-files-from-git-staging-area';

request({
	url: url
	
}, function (error, response, body) {
	if (error) {
		console.log('Unable to fetch weather.');
	} else {
		console.log(JSON.stringify(body, 4, null));
		
		// console.log('It\'s ' + body.main.temp + ' in ' + body.name + '!');
		// console.log("You live in " + body.name + ", " + body.sys.country);
	}
});

console.log('After request!');


