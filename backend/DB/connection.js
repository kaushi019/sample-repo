const mongoose = require('mongoose');
const mongo_url="mongodb+srv://dbuser:dbuser@cluster0.suq9i.mongodb.net/user?retryWrites=true&w=majority" || process.env.MONGO_DB_STRING;
const optionJSON = {useUnifiedTopology:true,useNewUrlParser: true };

const connectDB= async()=>{
    await mongoose.connect(mongo_url,optionJSON);
    console.log('DB Connected...');
};

module.exports=connectDB;