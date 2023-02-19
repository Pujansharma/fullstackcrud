const mongoose=require("mongoose");
mongoose.set('strictQuery', false);
require("dotenv").config()
const connection=mongoose.connect(process.env.url);
const todoschema=mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    device:{type:String,required:true}
});

const totomodel=mongoose.model("data",todoschema);

module.exports={
    connection,
    totomodel
};