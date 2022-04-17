const mongoose =require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const newBookSchema = new mongoose.Schema({
 
    name:String,
    author: {
        type: ObjectId,
        ref: "newAuthor"
    },
     price:Number,
    ratings:Number,
    publisher:{
        type: ObjectId,
        ref:"newPublisher"
    },
    hardCover:{
        type:Boolean,
        default:false,
    },
},{timestamps:true})
module.exports =mongoose.model('mixBook',newBookSchema)
