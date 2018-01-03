var server = require("./service1");
var router = require("./router");

server.start(router.route);