const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required.'],
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },

  email: {
    type: String,
    required: [true, 'Email is required.'],
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




module.exports = mongoose.model('User', UserSchema);