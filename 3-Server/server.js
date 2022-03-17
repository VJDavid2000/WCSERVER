/*David, Vincent Jericho C.
2075 - WCSERVER*/

var http = require('http');

var server = http.createServer(function(req, res){
  if (req.url == '/') {
  
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.write('<html><body><p>This Is Home Page.</p></body><html>');
  res.end();

  }

  else if (req.url == "/student") {

    res.writeHead(200, { 'Content-Type': 'text/html '});
    
    res.write('<html><body><p>This Is Student Page.</p></body><html>');
    res.end();
  }
  
  else if (req.url == "/admin") {

    res.writeHead(200, { 'Content-Type': 'text/html '});
    
    res.write('<html><body><p>This Is Admin Page.</p></body><html>');
    res.end();
  }

  else
      res.end('Invalid Request!');

});

server.listen(3000);

console.log('NodeJS LocalHost At Port 3000 Is Running...')