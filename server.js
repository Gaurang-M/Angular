var express = require("express");
var app     = express();
var path    = require("path");
var fs = require("fs");
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


fs.readdir('./src', (err, files) => {
  files.forEach(file => {
    let route = file.split(".")[0];
    app.get("/"+route,function(req,res){
      res.sendFile(path.join(__dirname+'/src/'+file));
      //__dirname : It will resolve to your project folder. 
    });
  });
})

app.listen(15000);

console.log("Running at Port 15000");