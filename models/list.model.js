const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  
    type: String,
    days: String,
    items: [{String}],
    user: {
        type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
     otherOptions: String,

},
{ timestamps: true }
);


module.exports = mongoose.model('List', ListSchema);