var express = require('express');
var app=express();

var PORT = process.env.PORT || 3500;

//locate directory of the css/js file
app.use(express.static(__dirname+'/frontend'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/frontend/html/index.html');
});

app.get('/resume',function(req,res){
    res.sendFile(__dirname+'/frontend/html/index2.html');
});

app.listen(PORT, function(){
    console.log("http://localhost:"+PORT);
});