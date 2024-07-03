//Contains all of the apis from the database, sets up and hosts the website locally
// modules
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set the port
//Gets the api for grade 9 number sense and algebra and the information for grade 9 number sense and algebra
app.get('/api/math', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Questions");
    var query = { Grade: "9", Subject: "Number Sense and Algebra" };
    dbo.collection("Math").find(query).toArray(function(err, result){
      var Question = result[1].Question;
      if (err) throw err;
      db.close();
      console.log(Question);
      res.json(result);
    });
  });
});
//Gets the api for grade 9 linear relations and the information for grade 9 linear relations
app.get('/api/LinearRelations', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Questions");
var query = { Grade: "9", Subject:"Linear Relations"};
dbo.collection("Math").find(query).toArray(function(err, result){
 var Question = result[0].Question;
 if (err) throw err;
 db.close();
 console.log(Question);
 res.json(result);
});
});
});
//Gets the api for Measurements and Geometry and the information for grade 9 Measurements and Geometry
app.get('/api/Measurements', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Questions");
var query = { Grade: "9", Subject:"Measurements and Geometry"};
dbo.collection("Math").find(query).toArray(function(err, result){
 var Question = result[0].Question;
 if (err) throw err;
 db.close();
 console.log(Question);
 res.json(result);
});
});
});
//Gets the api for grade 9 Analytic Geometry and the information for grade 9 Analytic Geometry
app.get('/api/Analytic', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;   
    var dbo = db.db("Questions");
var query = { Grade: "9", Subject:"Analytic Geometry"};
dbo.collection("Math").find(query).toArray(function(err, result){
 var Question = result[0].Question;
 if (err) throw err;
 db.close();
 console.log(Question);
 res.json(result);
});
});
});
//Gets the api for Quadratic Relations and the information for Quadratic Relations
app.get('/api/Quadratic', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Questions");
var query = {Grade: "10", Subject: "Quadratic Relations"};
dbo.collection("Math").find(query).toArray(function(err, result){
 var Question = result[0].Question;
 if (err) throw err;
 db.close();
 console.log(Question);
 res.json(result);
});
});
});
//Gets the api for grade 10 Analytic Geometry and the information for grade 10 Analytic Geometry
app.get('/api/Analytic10', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Questions");
var query = {Grade: "10", Subject: "Analytic Geometry"};
dbo.collection("Math").find(query).toArray(function(err, result){
 var Question = result[0].Question;
 if (err) throw err;
 db.close();
 console.log(Question);
 res.json(result);
});
});
});
//Gets the api for Trigonometry and the information for Trigonometry
app.get('/api/Trigonometry', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Questions");
var query = {Grade: "10", Subject: "Trigonometry"};
dbo.collection("Math").find(query).toArray(function(err, result){
 var Question = result[0].Question;
 if (err) throw err;
 db.close();
 console.log(Question);
 res.json(result);
});
});
});
//Gets the api for Characteristics of Function and the information for Characteristics of Function
app.get('/api/Character', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Questions");
var query = {Grade: "11", Subject: "Characteristics of Functions"};
dbo.collection("Math").find(query).toArray(function(err, result){
 var Question = result[0].Question;
 if (err) throw err;
 db.close();
 console.log(Question);
 res.json(result);
});
});
});
//Gets the api for Exponetial Functions and the information for Exponential Functions
app.get('/api/Exponential', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Questions");
var query = {Grade: "11", Subject: "Exponential Functions"};
dbo.collection("Math").find(query).toArray(function(err, result){
 var Question = result[0].Question;
 if (err) throw err;
 db.close();
 console.log(Question);
 res.json(result);
});
});
});
//Gets the api for Discrete Functions and the information for Discrete Functions
app.get('/api/Discrete', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Questions");
var query = {Grade: "11", Subject: "Discrete Functions"};
dbo.collection("Math").find(query).toArray(function(err, result){
 var Question = result[0].Question;
 if (err) throw err;
 db.close();
 console.log(Question);
 res.json(result);
});
});
});
//Gets the api for Discrete Functions and the information for Discrete Functions
app.get('/api/Trigonometric', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Questions");
var query = {Grade: "11", Subject: "Trigonometric Functions"};
dbo.collection("Math").find(query).toArray(function(err, result){
 var Question = result[0].Question;
 if (err) throw err;
 db.close();
 console.log(Question);
 res.json(result);
});
});
});
//Gets the api for Exponential and Logarithmic Functions and the information for Exponential and Logarithmic Functions
app.get('/api/ExponentialAndLogarithmic', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Questions");
var query = {Grade: "12", Subject: "Exponential and Logarithmic Functions"};
dbo.collection("Math").find(query).toArray(function(err, result){
 var Question = result[0].Question;
 if (err) throw err;
 db.close();
 console.log(Question);
 res.json(result);
});
});
});
//Gets the api for Grade 12 Trigonometric Functions and the information for Grade 12 Trigonometric Functions
app.get('/api/TrigonometricFunctions12', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Questions");
var query = {Grade: "12", Subject: "Trigonometric Functions"};
dbo.collection("Math").find(query).toArray(function(err, result){
 var Question = result[0].Question;
 if (err) throw err;
 db.close();
 console.log(Question);
 res.json(result);
});
});
});
//Gets the api for Polynomial and Rationa Functions and the information for  Polynomial and Rationa Functions
app.get('/api/PolynomialAndRationalFunctions', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Questions");
var query = {Grade: "12", Subject: "Polynomial and Rational Functions"};
dbo.collection("Math").find(query).toArray(function(err, result){
 var Question = result[0].Question;
 if (err) throw err;
 db.close();
 console.log(Question);
 res.json(result);
});
});
});
//Gets the api for Polynomial and Rationa Functions and the information for Polynomial and Rationa Functions
app.get('/api/CharacteristicOFunctions12', function(req, res) {
  const { MongoClient } = require('mongodb');
  const url = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  MongoClient.connect(url, (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log("Error in the connectivity");
  })
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Questions");
var query = {Grade: "12", Subject: "Characteristics of Functions"};
dbo.collection("Math").find(query).toArray(function(err, result){
 var Question = result[0].Question;
 if (err) throw err;
 db.close();
 console.log(Question);
 res.json(result);
});
});
});
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 
// routes
require('./app/routes')(app); 
// start app
app.listen(port);	
console.log('Magic happens on port ' + port); 
exports = module.exports = app;  