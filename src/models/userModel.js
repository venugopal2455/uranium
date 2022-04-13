const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        required:true,
    },
    authorName: String,
    
    category: String,
    year: {type: Number, default: 2021},
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    tags:[String],
    totalPages:Number,
    stockAvaliable:Boolean,
}, { timestamps: true });

module.exports = mongoose.model('bookModel', bookSchema) 