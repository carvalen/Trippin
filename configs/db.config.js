require("dotenv").config();
const mongoose = require("mongoose");

const { MONGODB_URI } = process.env;
const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = async () => {
  await mongoose.connect(MONGODB_URI, dbOptions);
  console.log("connected to mongo");
};
///dU5EQmE3wdtIbmzk 
//mongodb+srv://trippin-app:<password>@cluster0.yydqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority