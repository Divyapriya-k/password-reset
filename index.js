import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send("welcome to our API(PSWD-RESET)")
})

const port = process.env.PORT ||5000;

app.listen(port,()=>{
    console.log("server started and running on the port at the moment");
    
})
