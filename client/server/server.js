var express = require('express');
var request = require('request');
var path = require('path');
var app = express();

var port = process.env.PORT || 5000;

	const apiEndpoint = "http://sample-env-1.xkkqd2xpus.us-west-2.elasticbeanstalk.com/api";


app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/api/demo', function(req, res) {
	request({
		url : apiEndpoint,
		method: 'GET',
		qs: {
			"url" : "https://www.pitchbook.com",
			"fileName" : "output.txt"
		}
	}, function(err, response, body) {
		if (err) {
			console.log(err);
			console.log("error occured");
		}
		res.send(JSON.parse(body));
	});
});

app.get('/api/main', function(req, res) {
	var url = req.query['url'];
	var filename = req.query['fileName'];
	request({
		url : apiEndpoint,
		method: 'GET',
		qs: {
			"url" : url,
			"fileName" : filename
		}
	}, function(err, response, body) {
		if (err) {
			console.log(err);
			console.log("error occured");
		}
		res.send(JSON.parse(body));
	});
});



app.listen(port, function() {
	console.log('example app listening on port 5000');
});