const Template = require("../models/template.model");

exports.getTemplate = async (req, res) => {
  try{
    const { type, days } = req.params;
    const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
    const templates = await Template.find({ type: typeCapitalized, days: Number(days) });
    res.status(200).json(templates);
  } catch (err) {
    console.log(err);
  }
};

