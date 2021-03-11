const Template = require("../models/template.model");

// exports.getTemplate = async (req, res) => {
//   try{
//   const templates = await Template.find();
//   res.status(200).json(templates);
// }catch (err) {
//   console.log(err);
// }
// };

exports.getTemplate = async (req, res) => {
  try{
  const { type, days } = req.params;
  const templates = await Template.find({$and: [{ days: {$lte: days } }, { type: type }] });
  res.status(200).json(templates);
}catch (err) {
  console.log(err);
}
};
