const http = require('http'); 
const hostname = "localhost";

const port = process.env.PORT || 8000;
var solan = 0;

 

const server = http.createServer((req, res) => { 

  res.statusCode = 200; 

  res.setHeader('Content-Type', 'text/html'); 
  

  res.end('<h1>Hello World</h1>'); 

}); 

 

server.listen(port,() => { 

  console.log(`Server running at port `+port); 

}); 