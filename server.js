var http = require("http"); //http is built-in nodejs module it offers the createServer function

var url = require("url");

// http.createServer(function(request, response) {
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("Hello World");
// 	response.end();
// }).listen(8888);

function start(route) { //start function is extended and is now able to accept the function route as a parameter
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname; //assigns the pathname section of the url of the request to the pathname variable
		console.log("Reuest for" + pathname + "received.");

		route(pathname);

		// Send the HTTP header 
   		// HTTP Status: 200 : OK
   		// Content Type: text/plain
		response.writeHead(200, {"Content-Type": "text/plain"}); //Sends a response (html)header to the request. The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. Optionally one can give a human-readable statusMessage as the second argument.
		response.write("Hello World"); //This sends a chunk of the response body. This method may be called multiple times to provide successive parts of the body.
		response.end(); //This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), MUST be called on each response.
    }

 	http.createServer(onRequest).listen(8888);
 	console.log("Server has started.");
}

exports.start = start; //assigns start function to the export property labelled start so that it can be used in another file see index.js