const mongoose = require('mongoose');
const mongo_url="mongodb+srv://dbuser:dbuser@cluster0.suq9i.mongodb.net/user?retryWrites=true&w=majority" || process.env.MONGO_DB_STRING;
const optionJSON = {useUnifiedTopology:true,useNewUrlParser: true ,useCreateIndex: true};

module.exports.connect =(cb)=>{
    mongoose.connect(mongo_url,optionJSON,(err)=>{
        if(err)
            console.log("ERROR"+err.message);
        else
            cb("DB Connected");
});
}
module.exports.disconnect=()=>{
    mongoose.disconnect(()=>{
        console.log("DB Disconnected...");
    });
}
