require('dotenv').config();

const express =require("express");
const mongoose =require("mongoose");
const bodyParser =require("body-parser");
const cors =require("cors");
const session= require("express-session");
const passport =require("passport");
const localStrategy =require("passport-local");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { collection } = require("./model/UsersModel");

const PORT =process.env.PORT ||3002;
const  url =process.env.MONGO_URL;
const app =express();

app.use(cors());
app.use(bodyParser.json());
app.post("/Login",async(req,res)=>{
  const{email,password}=req.body

  try{
      const check=await collection.findOne({email:email})

      if(check){
          res.json("exist")
      }
      else{
          res.json("notexist")
      }

  }
  catch(e){
      res.json("fail")
  }

})



app.post("/signup",async(req,res)=>{
  const{email,password}=req.body

  const data={
      email:email,
      password:password
  }

  try{
      const check=await collection.findOne({email:email})

      if(check){
          res.json("exist")
      }
      else{
          res.json("notexist")
          await collection.insertMany([data])
      }

  }
  catch(e){
      res.json("fail")
  }

})

app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  });
  
  app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  });

  app.get("/",async(req,res)=>{
    console.log("hi");
    res.send("hi");

  });
app.listen(PORT,()=>{
    console.log("app started");
    mongoose.connect(url);
    console.log("connected");
});