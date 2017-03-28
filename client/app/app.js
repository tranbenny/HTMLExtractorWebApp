$(document).ready(function() {

	// fire get request with input url and output file name
	function formSubmit(event) {
		event.preventDefault();


	}

	function getDemo(event) {
		console.log('button clicked');
		event.preventDefault();
		var url = "https://www.pitchbook.com";
		var fileName = "output.txt";
		$.get('/api', {
			'url' : url,
			'fileName' : 'fileName'
		}, function(response) {
			console.log(response);
		});
	}

	$('#demo-btn').click(getDemo);



});