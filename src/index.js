import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express"
const app = express();
dotenv.config({
    path : './env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`serving is running on port:${process.env.PORT}`)
    })
})
.catch(err,()=>{
    console.log("mongoDB connection failed",err);
});