const express=require('express');
const router=express.Router();
const Formidable=require("formidable");
const Gallery = require('./galleryModel');
const fs = require('fs');
// const { getImageId,getImage } = require('./galleryControler');
// const addImage=require('./galleryControler');
// const getAllIMages=require('./galleryControler');
// const addImage=require('./galleryControler');            

// router.post('/add/image',addImage);
router.post('/add/image',(req, res) => {
   if(req.files?.image){
       const gallery=new Gallery;
       gallery.photo.data=fs.readFileSync(req.files.image.path);
       gallery.photo.contentType=req.files.image.type;


       gallery.save((err,data)=>{
           if(err){
               return res.status(400).json({
                   error:"Not able to save"
               })
           }
           res.json(data);
//         // console.log(data);
       })
   } 
});
router.get('/images',(req,res)=>{
    Gallery.find().exec((err,data)=>{
        if(err && data.length==0 ){
            return res.status(400).json({
                error:"not able to find"
            })
        }
        res.json(data)
        // console.log(data)

    })
})
router.param('imageId',(req,res,next,id)=>{
    Gallery.findById(id).exec((err,data)=>{
        if(err){
            return res.status(400).json({
                message:"no Image found"
            })
        }
        req.image=data;
        next();
    })
});
router.get('/image/:imageId',(req,res)=>
{
res.set("Content-Type",req.image.photo.contentType);
 return res.send(req.image.photo.data)
});
module.exports=router;