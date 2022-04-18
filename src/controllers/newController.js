// const authorModel =require('../models/authorModel')
// const bookModel = require('../models/bookModel')
// const mongoose= require('mongoose')
// const publishModel=require('../models/publishModel')
// const ObjectId = mongoose.Types.ObjectId

// const createAuthor =async function(req,res){
//     let reqAuthor =req.body
//     let createData=await authorModel.create(reqAuthor)
//     res.send({msg:createData})
// }
// const createPublisher =async function(req,res){
//     let reqPublisher =req.body
//     let createData=await publishModel.create(reqPublisher)
//     res.send({msg:createData})
// }
// const createBook=async function(req,res){
//     let reqBook=req.body.author
//     let reqPub=req.body.publisher
//     if(reqBook){
//         if(reqPub){
//             let authData=await authorModel.find({_id:reqBook})
//             let pubData=await publishModel.find({id:reqPub})
//             if(authData.length!==0){
//                 let save=await bookModel.create(req.body)
//                 res.send({msg:save})
//               }else res.send({msg:"send valid publisher"})

//         }res.send({msg:"send valid author"})
//     }res.send({msg:"publisher id is required"})
// res.send({msg:"authorid is needed"})
// }
// const getBookData= async function(req,res){
//     let getbooks=await bookModel.find().populate(["author","publisher"])
//     res.send({msg:getbooks})
// }
// const updatedata=async function(req,res){
//    let system=await publishModel.find({$in:[{name:"Penguin"},{name:"HarperCollins"}]}).select({_id:1})
//    let newSet=await bookModel.updateMany({$or:[{publisher:system[0]},{publisher:system[1]}]},{$set:{hardCover:true},new:true})
// res.send({msg:newSet})
// }
// const updatePrice=async function(req,res){
//     let data= await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
//     console.log(data)
//     let newThing=await bookModel.updateMany({author:data},{$inc:{"price":10}},{new:true})
    
//     res.send({msg:newThing})
// }
// module.exports.createAuthor=createAuthor
// module.exports.createPublisher=createPublisher
// module.exports.createNewBook=createBook
// module.exports.getBookData=getBookData
// module.exports.putUpdate=updatedata
// module.exports.updatePrice=updatePrice