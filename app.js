// include the http module.

var http = require("http");

// set up the server
//include the fs module. fs = file system. part of core!!! Yay!
var fs = require ("fs"); //can use this to grab a .html file( can grab any files on the machine its running on (your) own computer its running on)

var server = http.createServer((req,res)=>{ // (someone made a http request to this server) the following function will run. read contents of file.
	console.log("someone connected to the server!!!");
	console.log(req.url);

	res.writeHead(200,{'content-type': 'text/html'});//where you write your error code. You are the server right now
	if(req.url == '/'){
		var theHomePageHTML = fs.readFileSync('./homepage.html');
		res.end(theHomePageHTML);
	}else if(req.url == '/movie-app'){
		res.writeHead(200,{'content-type': 'text/html'});
		var theHomePageHTML = fs.readFileSync('./movie-app.html');
		res.end(theHomePageHTML);
	}else if(req.url == './image-gallery'){
		res.writeHead(200,{'content-type': 'text/html'});
		var theHomePageHTML = fs.readFileSync('./photo-gallery-remix.html');
		res.end(theHomePageHTML);
	}else if(req.url == '/js/scripts.js'){
		res.writeHead(200,{'content-type': 'application/javascript'});
		var theHomePageHTML = fs.readFileSync('./photo-gallery.html');
		res.end(theHomePageHTML);
	}else if(req.url == '/js/config.js'){
		res.writeHead(200,{'content-type': 'application/javascript'});
		var theHomePageHTML = fs.readFileSync('./js/scripts.js');
		res.end(theHomePageHTML);	
	}else if(req.url == '/css/styles.css'){
		res.writeHead(200,{'content-type': 'text/css'});
		var theHomePageHTML = fs.readFileSync('./css/styles.css');
		res.end(theHomePageHTML);
	}else{
		res.writeHead(404,{'content-type': 'text/html'});
		res.end("<h1>404 ERROR</h1>");
	}

});

// Tell the server we created above to listen to port 8000.
// whenever someone makes an HTTP request to port 8000,
// our callback ( with req and res) will fire
var port = 8001;// we tell it what port to listen for.
server.listen(port);
console.log("server is listening for http traffic on port" + port + '....');