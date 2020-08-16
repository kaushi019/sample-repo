const mongoose=require('mongoose');

const user= new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    mobile:{
        type:Number
    },
    age:{
        type:Number
    },
    branch:{
        type:String
    }
});

module.exports= userModel = mongoose.model('user',user);