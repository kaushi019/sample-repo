var express = require('express');
var app=express();
const dbconnect = require('./backend/DB/connection');
const userapi=require('./backend/DB/user-api');

var PORT = process.env.PORT || 3500;

dbconnect.connect((msg)=>{
    console.log(msg);
});
//locate directory of the css/js file
app.use(express.json());
app.use(express.urlencoded({extended:true}));

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

app.get('/api/user',function(req,res){
    userapi.getUsers(function(err,array){
        res.json(array);
    })
});

app.post('/api/user',function(req,res){
    userapi.createUser(req.body);
    res.redirect('/ipform');
});

app.listen(PORT, function(){
    console.log("http://localhost:"+PORT);
});