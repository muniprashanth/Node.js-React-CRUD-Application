var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! 8080');
  console.log("Server start in 8080")
}).listen(8080);