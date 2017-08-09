var express = require('express'),
  fs = require('fs');

//instantiate express
var app = express();
 
//attach route to app
require('./routes')(app);

app.listen(5000);
console.log('Listening on port 5000...');
