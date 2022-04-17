const mongoose = require('mongoose');

const publishSchema = new mongoose.Schema( {
  
    name: String,
     headQuarter: String,
   ratings:Number,
}, { timestamps: true });

module.exports = mongoose.model("newPublisher", publishSchema) 
