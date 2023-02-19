const mongoose=require("mongoose");
const apischema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:true},
    pass:{type:String,required:true}})

const apimodel=mongoose.model("newdata",apischema);

module.exports={
    apimodel,
};
