const Template = require("../models/template.model");

exports.getTemplate = async (req, res) => {
  const templates = await Template.find();
  res.status(200).json(templates);
};

exports.getTemplate = async (req, res) => {
  const { type, days } = req.params;
  const templates = await Template.find({$and: [{ days: {$lte: days } }, { type: type }] });
  res.status(200).json(templates[0]);
};
