const mongoose = require('mongoose');

const PlantillaSchema = new mongoose.Schema({

    type: String,
    days: String,
    items: [{String}],
    
},
{ timestamps: true }
);



module.export = mongoose.model('Plantilla', PlantillaSchema);