const express=require("express");
const {totomodel}=require("../models/api.mosule");
const app=express();
const todosrouter=express.Router();
todosrouter.get("/",async(req,res)=>{
    let query=req.query;
    try {
        const user=await totomodel.find(query);
        res.send(user)
    } catch (error) {
        res.send("error")
    }
    
})
todosrouter.post("/create",async(req,res)=>{
    try {
        const newtodo= new totomodel(req.body)
       await newtodo.save();
        res.send({"mssg":"data havs been added to database"})
    } catch (error) {
        res.send({"mssg":"something went wrong","error":error.message})
    }
})
todosrouter.patch("/update/:todoId",async(req,res)=>{
    const ID=req.params.todoId
    const payload=req.body
    try {
       await totomodel.findByIdAndUpdate({_id:ID},payload);
        res.send({"mssg":"data havs been added to database"})
    } catch (error) {
        res.send({"mssg":"something went wrong","error":error.message})
    }
})
todosrouter.delete("/delete/:todoId",async(req,res)=>{
    const ID=req.params.todoId
    try {
       await totomodel.findByIdAndDelete({_id:ID});
        res.send({"mssg":"data has been deleted from database"})
    } catch (error) {
        res.send({"mssg":"something went wrong","error":error.message})
    }
})
module.exports={
    todosrouter
};