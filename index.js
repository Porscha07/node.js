// we need the http and fs modules to make the app work ( 10 lines to make a webserver)
var http = require("http");
var fs = require("fs")

var server = http.createServer((req, res)=>{
	console.log("someone connected via HTTP!");
})

// console.log("the node file is working");
server.listen(8080);
console.log("listening on port 8080");
******************************************************