const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required.'],
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },
  
  lists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],
},
{ timestamps: true }
);




module.export = mongoose.model('User', UserShema);