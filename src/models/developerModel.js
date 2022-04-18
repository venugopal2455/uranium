const mongoose =require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const newDevSchema = new mongoose.Schema({
 
    name:String,
    gender:{
        type: String,
        enum:['female','male','other']
    },
    percentage: Number,
    batch: {
        type: ObjectId,
        ref: "batch"
    },
},{timestamps:true})
module.exports =mongoose.model('developers',newDevSchema)
