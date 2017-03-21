function route(handle, pathname) {
	console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') { //checks if handle[pathname] is variable taht has function as its type note a variable can be a string, integer etc
		handle[pathname]; //executes function that has been assigned to the element of the associative array handle[pathname] if previous condition is true
    } else {
    console.log("No request handler found for " + pathname);
    }
}

 exports.route = route; //assigns route function to the export property labelled route so that it can be used in another file see index.js