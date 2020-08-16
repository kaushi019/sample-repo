const express= require('express');
const mongoose= require('mongoose');
const userModel=require('../userModel');
const route= express.Router();

route.post('/',async(req,res)=>{
    const{name,mobile,age,branch}=req.body;
    let user={};
    user.name=name;
    user.mobile=mobile;
    user.age=age;
    user.branch=branch;
    let usermod=new userModel(user);
    await usermod.save();
    res.json(usermod);
});

module.exports= route;