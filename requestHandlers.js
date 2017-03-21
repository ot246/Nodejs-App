var exec = require("child_process").exec;   //child_process.exec(): spawns a shell and runs a command within that shell, passing the stdout and stderr to a callback function when complete.
											// By default, pipes for stdin, stdout and stderr are established between 
											// the parent Node.js process and the spawned child. It is possible to stream 
											// data through these pipes in a non-blocking way. Note, however, that some 
											// programs use line-buffered I/O internally. While that does not affect Node.js, 
											// it can mean that data sent to the child process may not be immediately consumed.

function start(response) {
	console.log("Request handler 'start' was called.");

	exec("ls -lah", function (error, stdout, stderr) { //exec() executes a shell command from with Node.js in this case the command is ls -lah
													   //ls -lah list all of the files in the current directory and response.write is used to display these file (names)
													   //in the browser
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;