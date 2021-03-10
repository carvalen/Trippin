const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({

    type: String,
    days: Number,
    items: [String],
    
},
{ timestamps: true }
);



module.exports = mongoose.model('Template', TemplateSchema);