const req = require("express/lib/request")

const OrderModel = require("../model/orderModel")
const { default: mongoose } = require("mongoose")
const userModel = require("../model/userModel")
const productModel = require("../model/productModel")

const ObjectId = mongoose.Types.ObjectId

const createProduct = async function (req, res) {
    let data = req.body;
    let saveData = await ProductModel.create(data);
    res.send({ msg: saveData });
}

const createUser = async function (req, res) {
    let data = req.body;
    let headers=req.headers
    let appType=headers["isfreeappuser"]
  if(!appType){
      res.send({status:false,msg:"a manditory header is missing"})
  }  
    let saveData = await UserModel.create(data);
    res.send({ msg: saveData });
}

const createOrder = async function (req, res) {
    let data = req.body;
    let headers=req.headers
    let appType=headers["isfreeappuser"]
  if(!appType){
      res.send({status:false,msg:"a manditory header is missing"})
  }  
  let userId=OrderModel.userId
  let user=await userModel.findById(userId)
  if(!user){
      return res.send({status:false,msg:'user needed'})
  }  
let productId=Ordermodel.productId
let product=await productModel.findById(productId)
if(product){
    return res.send({status:false,msg:'product needed'})
}   
  let saveData = await OrderModel.create(data);
    res.send({ msg: saveData });
}

module.exports.createProduct = createProduct
module.exports.createUser = createUser
//module.exports.createOrder = createOrder