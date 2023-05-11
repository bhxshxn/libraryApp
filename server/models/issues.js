const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
   issuerName: String,
   issueDate: String,
   issueStatus: Boolean,
   bookId: String,
   bookName: String,
   returnDate: { type: String, default: '' },
});

module.exports = mongoose.model('Issues', issueSchema);
