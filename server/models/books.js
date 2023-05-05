const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
   accNo: Number,
   author: String,
   title: String,
   count: Number,
   price: String,
   dateOfAcc: String,
   vendor: String,
   billNo: String,
   year: String,
   publisher: String,
   place: String,
   pages: Number,
   subject: String,
   semester: String,
   available: Boolean,
});

module.exports = mongoose.model('Books', bookSchema);
