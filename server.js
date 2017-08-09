var express = require("express");
var app     = express();
var path    = require("path");
app.use(express.static('public'))
var cors = require('cors');
app.use(cors()); 

const empData = require('./model/data');

app.get('/sum', function (req, res) {
  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);
  res.status(200).send({"data":a+b});
})

app.get('/getEmployee',function(req, res){
  var empId = req.query.empId;
  var empFound = {};
  empData['Employees'].map(function(emp){
    if(emp['id'] == empId){
      empFound = emp;
    }
  })
  res.status(200).send({data:empFound});
})

app.get('/getAllEmployee',function(req, res){
  res.status(200).send({data:{data:empData['Employees']}});
})



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