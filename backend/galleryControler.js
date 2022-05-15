
const Formidable=require("formidable");
const Gallery = require("./galleryModel");
exports.addImage = ((req, res) => {
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
         // console.log(data);
        })
    } 

})
exports.getAllIMages=(req,res)=>{
    Gallery.find().exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:"not able to find"
            })
        }
        else{
            res.json(data);
            // console.log(data);
        }

    })
}
exports.getImageId=(req,res,next,id)=>{
    Gallery.findById(id).exec((err,data)=>{
        if(err){
            return res.status(400).json({
                message:"no Image found"
            })
        }
        req.image=data;
        next();
    })
}
exports.getImage=(req,res)=>
{
res.set("Content-Type",res.image.photo.contentType);
 return res.send(req.image.photo.data)
}