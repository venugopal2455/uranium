// const authorModel=require('../models/authModel')
// const bookModel=require('../models/BoModel')


// const createNewAuthor =async function(req,res){
//     let reqAuthor =req.body
//     let createData=await authorModel.create(reqAuthor)
//     res.send({msg:createData})
// }
// const createNewBook =async function(req,res){
//     const reqBook =req.body
//     const Data=await bookModel.create(reqBook)
//     res.send({msg:Data})
// }
// const allBooks =async function(req,res){
//     const authorDetails = await authorModel.find({author_name:"Chetan Bhagat"})
//     const id =authorDetails[0].author_id
//     const booksName =await bookModel.find({author_id:id}).select({bookName:1})
//     res.send({msg:booksName})
// }
// const updatedBookPrice=async function(req,res){
//     const bookDetails=await bookModel.find({bookName:"Two States"})
//     const id=bookDetails[0].author_id
//     const authorNew= await authorModel.find({author_id:id}).select({author_name:1,_id:0})
//     const bkName =bookDetails[0].bookName
//     const updatePrice=await bookModel.findOneAndUpdate({bookName:bkName},{price:100},{new:true}).select({price:1,_id:0})
//     res.send({msg:authorNew,updatePrice})
// }
// const authorsName =async function(req,res){
//     const bookId =await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
//     const id =bookId.map(k=>k.author_id)
//     let temp =[]
//     for(let i=0;i<id.length;i++){
//         let x=id[i]
//         const author =await authorModel.find({author_id:x}).select({author_name:1,_id:0})
//         temp.push(author)
//     }
//     const authorName =temp.flat()
//     res.send({msg:authorName})
// }
// module.exports.createNewAuthor=createNewAuthor
// module.exports.createNewBook=createNewBook
// module.exports.allBooks=allBooks
// module.exports.updatedBookPrice=updatedBookPrice
// module.exports.authorsName=authorsName