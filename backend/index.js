const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");


app.use(express.json());
app.use(cors());

// Databased connection with MongoDB

mongoose.connect("mongodb+srv://Gaumayam:ravi123456789@cluster0.vj1pm.mongodb.net/e-commerce")

// API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

// Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// creating upload endpoint for images

 app.use('/images',express.static('upload/images'))

 app.post("/upload",upload.single('product'),(req,res)=>{
     res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
     })
 })

// Schema for creating products

const Product = mongoose.model("Product",{
    id:{
        type: Number,
        require:true,
    },
    name:{
        type: String,
        require:true,
    },
    image:{
        type: String,
        require:true,
    },
    category:{
        type: String,
        require:true,
    },
    new_price:{
        type: Number,
        require:true,
    },
    old_price:{
        type: Number,
        require:true,
    },
    date:{
        type: Date,
        require:Date.now,
    },
    avilable:{
        type: Boolean,
        default:true,
    },
})

app.post('/addproduct',async (req,res)=>{
    const product =new Product({
        id:req.body.id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name, 
    })
    
})


app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port " +port) 
    }
    else{
        console.log("Error : "+error)
    }
})

