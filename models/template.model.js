const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({

    type: String,
    days: String,
    items: [String],
    
},
{ timestamps: true }
);



module.exports = mongoose.model('Template', TemplateSchema);