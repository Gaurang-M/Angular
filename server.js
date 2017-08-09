var express = require("express");
var app     = express();
var path    = require("path");
app.use(express.static('public'))


app.get('/bindings',function(req,res){
  res.sendFile(path.join(__dirname+'/src/bindings.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/controllers',function(req,res){
  res.sendFile(path.join(__dirname+'/src/controllers.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/customDirective',function(req,res){
  res.sendFile(path.join(__dirname+'/src/customDirective.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/factory',function(req,res){
  res.sendFile(path.join(__dirname+'/src/factory.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/filter',function(req,res){
  res.sendFile(path.join(__dirname+'/src/filter.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/introduction',function(req,res){
  res.sendFile(path.join(__dirname+'/src/introduction.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/promises',function(req,res){
  res.sendFile(path.join(__dirname+'/src/promises.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/provider',function(req,res){
  res.sendFile(path.join(__dirname+'/src/provider.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/services',function(req,res){
  res.sendFile(path.join(__dirname+'/src/services.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/linkAndCompile',function(req,res){
  res.sendFile(path.join(__dirname+'/src/linkAndCompile.html'));
  //__dirname : It will resolve to your project folder.
});


app.listen(15000);

console.log("Running at Port 15000");