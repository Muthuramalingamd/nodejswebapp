//require node modules
var express = require('express');
var path = require('path');
var fs = require('fs');
var cors = require('cors');
var http = require('http');


//app configuration
var app = express();
var port = process.env.PORT || 80;
var httpsPort = process.env.HTTPS || 443;
var done=false;

//var privateKey  = fs.readFileSync('https/mobisynap.key', 'utf8');
//var certificate = fs.readFileSync('https/mobisynap.crt', 'utf8');

//var credentials = {key: privateKey, cert: certificate};
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);

//app.use(enforce.HTTPS());

httpServer.listen(port);
//httpsServer.listen(httpsPort);

console.log('App started on port : ' + port);

module.exports = app;

