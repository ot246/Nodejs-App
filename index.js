var server = require("./server"); //dependency injection
var router = require("./router"); //dependency injection


server.start(router.route);