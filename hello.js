var http = require("http");
http.createServer(function(request, response) {
	response.writeHead(301, {'Content-Type': 'text/plain'})
	response.end('Hello World')
}).listen(8888);
