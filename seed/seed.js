require("dotenv").config()
const mongoose = require("mongoose")
const data = require("./data")
const Template = require("../models/template.model")

const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }

async function seedDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URI, dbOptions)
        const templates = await Template.create(data)
        console.log(templates)
        mongoose.connection.close()
    }catch(err){
        console.error(err)
    }
}

seedDb()