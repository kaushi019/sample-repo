var express = require('express');
var app=express();
const connectDB = require('./backend/DB/connection');

var PORT = process.env.PORT || 3500;

connectDB();
//locate directory of the css/js file
app.use(express.json());
app.use(express.urlencoded());
app.use('/api/user',require('./backend/DB/user-api'));

app.use(express.static(__dirname+'/frontend'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/frontend/html/index.html');
});

app.get('/resume',function(req,res){
    res.sendFile(__dirname+'/frontend/html/index2.html');
});

app.get('/clock-time',function(req,res){
    res.sendFile(__dirname+'/frontend/html/clock.html');
});

app.get('/housie',function(req,res){
    res.sendFile(__dirname+'/frontend/html/housie.html');
});

app.get('/ipform',function(req,res){
    res.sendFile(__dirname+'/frontend/html/inputform.html');
});

app.listen(PORT, function(){
    console.log("http://localhost:"+PORT);
});