// require is a built-in node.js method, that includes a module that can be:
// 1. part of core, in which case we can do nothing. (HTTP is an example)
// 2. from the npm store written by someone else. requie will look inside of node _modules
// 3.A module WE wrote, which requires a path.
var http = require("http");//given to us by node automatically.
// console.log("http");
var server = http.createServer(function(request, response){//createServer is a method of http
	// console.log(request);
	response.writeHead(418,{
		'content-type': 'text/html'
	});
	response.write("<h1>Hello, visitor. This is Your node server.</h1>"); // the only thing that can bee seen in the code.
	response.end();
});
//server is created above. It came from http object, the createServer method.
//It includes a request in the callbackk, but ALSO a listen method.
//port 80 (http)
//port 443 (https)
//port 22(aws through terminal)
// always use ports over 1,000
server.listen(8000);
console.log("NodeJS is listening for connections on port 8000...");