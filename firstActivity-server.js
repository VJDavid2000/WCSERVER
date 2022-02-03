var http = require('http');

var server = http.createServer(function(req, res){
  if (req.url == '/') {
  
  res.writeHead(800, { 'Content-Type': 'text/html' });

  res.write('<html><body><p>Welcome To My Node.js Application<br>Welcome John Smith. This is an activity about basics of Node.js</p></body><html>');
  res.end();

  }

  else if (req.url == "/about") {

    res.writeHead(800, { 'Content-Type': 'text/html '});
    
    res.write('<html><body><p>This Is About Page.<br>Hello, John Smith. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body><html>');
    res.end();
  }
  
  else if (req.url == "/contact") {

    res.writeHead(800, { 'Content-Type': 'text/html '});
    
    res.write('<html><body><p>This Is Contact Page.<br>John Smith, if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/nodejs/nodejs-tutorials </p></body><html>');
    res.end();
  }

  else if (req.url == "/gallery") {

    res.writeHead(800, { 'Content-Type': 'text/html '});
    
    res.write('<html><body><p>This Is Gallery.</p></body><html>');
    res.end();
  }

  else
      res.end('Invalid Request!');

});

server.listen(1000);

console.log('NodeJS LocalHost At Port 1000 Is Running...')

/*David, Vincent Jericho C.
2075 - WCSERVER
Section: WD-201
1/28/2022*/