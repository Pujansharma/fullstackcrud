const express=require("express");
const {apimodel}=require("../models/todo.module");
const todorouter=express.Router();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
todorouter.post("/register",async(req,res)=>{
    // const{name,email,gender,pass}=req.body;
    let payload=req.body;
    console.log(payload)
    try {
        bcrypt.hash(payload.pass,5,async(err,hash)=>{
            if(err){
               console.log(err);
            }
            else{
                payload.pass=hash;
                console.log(payload)
                const user=new apimodel(payload);
                await user.save();
                res.send({"msg":"new register has been updated"})
                console.log(user)
            }
        })
    } catch (error) {
        ({"msg":"some thing went wrong","err":error.message})
    }

});

todorouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body;
    try {
        const user=await apimodel.find({email})
        if(user.length>0){
            bcrypt.compare(pass,user[0].pass,(err,result)=>{
                if(result){
                    const token=jwt.sign({course:"beckend"},'masai');
                    res.send({"mssg":"user login succesfully","token":token});
                    
                }else{
                    res.send({"mssg":"wrong credincatil"});
                }
            });
        }else{
            res.send({"mssg":"wrong credincatil"});
        }
    } catch (error) {
        res.send({"mssg":"something went wrong","error":error.message})
    }
})
module.exports={
    todorouter
}

