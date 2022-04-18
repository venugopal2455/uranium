const batchModel= require("../models/batchModel")
const devModel= require("../models/developerModel")
const mongoose= require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const createBatch =async function(req,res){
    let reqBatch =req.body
    let createData=await batchModel.create(reqBatch)
    res.send({msg:createData})
}
const createDeveloper =async function(req,res){
    let reqDev =req.body
    let createData=await devModel.create(reqDev)
    res.send({msg:createData})
}
const scholarship=async function(req,res){
    const newsp=await devModel.find({$and:[{gender:"female"},{percentage:{$gte:70}}]})
    res.send({msg:newsp})
}
// const developers=async function(req,res){
//     const newdev=await batchModel.findOne({$in:{name:"radium"}}).select({_id:1})
//     //const newper=await devModel.find({percentage:{$gte:55}})
//     res.send({msg:newdev})
    
// }
const developers = async function (req, res){
    let pro=req.query.name
    let per=req.query.percentage
    const back = await batchModel.find({ name:pro}).select({ _id: 1 });
    console.log(back)
     const developer = await devModel.find({batch:back,percentage:{$gte:per}})
     res.send({ data: developer});
}
module.exports.createBatch=createBatch
module.exports.createDeveloper=createDeveloper
module.exports.scholarship=scholarship
module.exports.developers=developers