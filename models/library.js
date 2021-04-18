const mongoose = require('mongoose');

const LibrarySchema = new mongoose.Schema({
    name: {
      type: String,
    },
    location: {
      type: String,
    },
    book:{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'book' 
    }
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Library', LibrarySchema);