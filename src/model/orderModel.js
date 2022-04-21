const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId: {
        type:ObjectId,
        ref:"UserModel"
    },
	productId:  {
        type:ObjectId,
        ref:"ProductModel"
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date:String
}, { timestamps: true });

module.exports = mongoose.model('OrderModel', orderSchema)  //orders