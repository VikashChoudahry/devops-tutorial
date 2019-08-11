const http = require('http');

const port = process.env.PROT || 8081;

// configure our HTTP server
const server = http.createServer( (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" } );
  res.end("Hello Wolrd!");
});

server.listen(port);
console.log(`Server listening at localhost on ${port}`);