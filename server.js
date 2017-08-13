var express = require("express");
var app     = express();
var path    = require("path");
var fs = require("fs");
var cors = require('cors');

//set static location on server to host static files
app.use(express.static('public'))
app.use(cors()); 

//setting rendering engine
app.set('views', __dirname  + '/src');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

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
      res.render(file);
    });
  });
})

app.listen(15000);

console.log("Running at Port 15000");