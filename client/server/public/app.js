$(document).ready(function() {

	// fire get request with input url and output file name
	function formSubmit(event) {
		event.preventDefault();
		$('#resultBox').empty();
		var url = $('#urlInput').val();
		var fileName = $('#fileName').val();
		$.get('/api/main', {
			url : url,
			fileName : fileName
		}, function(response) {
			formatResponse(response);
		});
	}

	// 
	function getDemo(event) {
		console.log('button clicked');
		$('#resultBox').empty();
		event.preventDefault();
		var url = "https://www.pitchbook.com";
		var fileName = "output.txt";
		$.get('/api/demo', {
			'url' : url,
			'fileName' : 'fileName'
		}, function(response) {
			formatResponse(response);
		});
	}


	// adds response from http code into preview box
	function formatResponse(data) {
		console.log(data);
		var url = data['url'];
		var outputFilename = data['fileName'];

		var htmlOutput = data['htmlOutput'];
		var sequences = data['sequences'];
		var links = data['links'];

		var resultElements = [
			$('<h4></h4>').text(url),
			$('<p></p>', {'class':'lead'}).text("Preview of " + outputFilename),
			$('<p></p>', {class: "resultHeader"}).text("[links]")
		];

		links.forEach(function(x) {
			resultElements.push($('<p></p>').text(x));
		});

		resultElements.push($('<p></p>', {class: 'resultHeader'}).text('[HTML]'));
		resultElements.push($('<p></p>').text(htmlOutput));
		resultElements.push($('<p></p>', {class: 'resultHeader'}).text('[sequences]'));

		sequences.forEach(function(x) {
			resultElements.push($('<p></p>').text(x));
		});



		// $('#resultBox').append(urlParagraph);
		// $('#resultBox').append(outputParagraph);

		resultElements.forEach(function(elem) {
			$('#resultBox').append(elem);
		});
	}



	$('#demo-btn').click(getDemo);
	$('#extract-btn').click(formSubmit);



});