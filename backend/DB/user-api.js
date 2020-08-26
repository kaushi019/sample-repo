const express= require('express');
const mongoose= require('mongoose');
const userModel=require('../userModel');

module.exports={
    createUser: function(userObj){
        var user=new userModel(userObj);
        user.save();
    },
    getUsers: function(cb){
        userModel.find({},function(err,Users){
            cb(err,Users);
        })
    },
    getByName: function(obj,cb){
        userModel.find(obj,cb);
    },
}