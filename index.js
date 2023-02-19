const express=require("express");
const {connection}=require("./models/api.mosule")
const{todosrouter}=require("./routers/api")
const {todorouter}=require("./routers/todo")
const {authntication}=require("./middleware/middleware")
const cors=require("cors")
require("dotenv").config();
const app=express();
app.use(cors())
app.use(express.urlencoded())
app.use(express.json());
app.use("/todo",todorouter);
app.use(authntication);
app.use("/users",todosrouter);
app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("connect to database");
    } catch (error) {
        console.log(error.message);
    }
    console.log(`server is running in port ${process.env.port}`);
})