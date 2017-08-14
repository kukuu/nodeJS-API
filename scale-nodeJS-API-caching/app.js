
//Author: Alexander Adu-Sarkodie
//Note: Cloud Boost cache  for nodeJS API

var CB  = require('cloudboost');

var express = require('express');
var app = express();
var http = require('http').Server(app);

CB.CloudApp.init('Your App ID', 'Your App Key');

//Instantiate cloudboost
var cache = new CB.CloudCache('SampleCache');

app.get('/item/:key', function(req,res) {
    cache.get(req.params.key,{
      success : function(value){
        res.status(200).send({key : req.params.key, value : value});
      }, error : function(error){
        res.status(500).send(error);
      }
    });
});

app.post('/item/:key/:value', function(req,res) {
    cache.get(req.params.key, req.params.value, {
      success : function(value){
        res.status(200).send({key : req.params.key, value : value});
      }, error : function(error){
        res.status(500).send(error);
      }
    });
});

app.delete('/item/:key', function(req,res) {
    cache.deleteItem(req.params.key, {
      success : function(value){
        res.status(200).send({key : req.params.key, value : value});
      }, error : function(error){
        res.status(500).send(error);
      }
    });
});

http.listen(8000, function() {
   console.log("Server Started.");
});

// See https://github.com/kukuu/managing-performance/tree/master/nodeJS/caching
