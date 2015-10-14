var express = require('express');
var fs = require('fs');
var prerender = require('prerender-node');

var app = express();
app.use(prerender.
  set('prerenderServiceUrl', 'http://localhost:8172'));
app.use(express.static('./'));
app.get('*', function(req, res) {
  res.sendfile('./index.html');
});

app.listen(3000);
