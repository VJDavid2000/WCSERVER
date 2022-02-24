//Name: David, Vincent Jericho C.
//App Name: Server (Express-Static)
//Description: This App Operates Within Server Of Express-Static

var express = require("Express");

var app = express();

app.use(express.static('public'));

app.get("/", function(request, response){
  respond.send("You Have Enter The Static With Your Picked Photo.");
});

var server = app.listen(8081, 'localhost', function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Server Running At http://%s:%s', host, port);
});