var server = require("./server"); //dependency injection
var router = require("./router"); //dependency injection
var requestHandlers = require("./requestHandlers");

var handle = {}; //declares handle as an assoicative array
handle["/"] = requestHandlers.start; //assigns the function requestHandlers.start to the key "/" in handle
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


server.start(router.route, handle);