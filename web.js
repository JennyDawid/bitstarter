var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var temp = fs.readFileSync('index.html');
temp = buf.toString(temp);

app.get('/', function(request, response) {
  response.send(temp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
