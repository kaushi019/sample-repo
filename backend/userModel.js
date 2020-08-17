const mongoose=require('mongoose');

const user= new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    branch:{
        type:String,
        required:true
    }
});

module.exports= userModel = mongoose.model('user',user);