const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await UserModel.find().select( { bookName: 1, authorName: 1, _id: 0})
    res.send({msg: allBooks})
}
const getBooksInYear= async function (req, res) { 
    let year =req.body.year
    let allBooks= await UserModel.find({year:year})
    res.send({msg: allBooks})
    
}
const getParticularBooks = async function(req,res)
{
  let condition = req.body
  let particularBooks = await UserModel.find(condition)

  res.send(particularBooks)
}
const getXINRBooks= async function (req, res) {
    let allBooks= await UserModel.find({"prices.indianPrice": {$in:["100","200","500"]}})
    res.send({msg: allBooks})
}
const getRandomBooks= async function (req, res) {
    let allBooks= await UserModel.find({ 
        $or: [ { stockAvaliable: true } , { totalpages:  { $gt:  500 }  } ]})
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear                                       
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks