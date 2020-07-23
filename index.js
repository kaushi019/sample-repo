var express = require('express');
var app=express();

var port = process.env.PORT || 3500;

app.get('/',function(req,res){
    res.send('This is the beginning...');
});

app.listen(port, function(){
    console.log("http://localhost:"+port);
});

//ctrl+c for terminating server.