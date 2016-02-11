var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Slough,uk&units=metric&appid=44db6a862fba0b067b1930da0d769e98';

function first(callback){
	request({
		url: url,
		json: true
	}, function(err, response, body){
		if(err){
			callback('could not do it sorry');
		}else{
			callback('we did it');
			callback(body.main.temp);
		}
	});
}

// function second(result){
// 	console.log(result);
// }

first(function(result){
	console.log(result);
});