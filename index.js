var express = require('express');
var app=express();

var PORT = process.env.PORT || 3500;

app.get('/',function(req,res){
    res.send('This is the beginning........');
});

app.listen(PORT, function(){
    console.log("http://localhost:"+PORT);
});

//ctrl+c for terminating server.