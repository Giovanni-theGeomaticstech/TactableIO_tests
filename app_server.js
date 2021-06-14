var http = require('http');

// Create a server object
http.createServer(function (req, res) {
	// Write response to the client
	res.write('GeeksforGeeks Wahgwaan');
	
	// End the response
	res.end();
}).listen(8080);
