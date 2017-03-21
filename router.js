function route(pathname) {
	console.log("About to route a request for " + pathname);
}

 exports.route = route; //assigns route function to the export property labelled route so that it can be used in another file see index.js