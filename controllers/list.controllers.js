const List = require("../models/list.model");

exports.getLists = async (req, res) => {
  try{
  const lists = await List.find();
  res.status(200).json(lists);
}catch (err) {
  console.log(err);
}
};

exports.getList = async (req, res) => {
  try{
  const { listId } = req.params;
  const list = await List.findById(listId);
  res.status(200).json(list);
}catch (err) {
  console.log(err);
}
};

exports.createList = async (req, res) => {
    try{
const userId = req.session.userId;
  const list = await List.create({...req.body, user: userId});
  await User.findByIdAndUpdate(userId, { lists: { $push: list._id }});
  res.status(200).json(list);
  //paso las listas al usuario conectado 
}catch (err) {
  console.log(err);
}
};

exports.updateList = async (req, res) => {
  try{
  const { listId } = req.params;
  const list = await List.findByIdAndUpdate(listId, req.body);
  res.status(200).json(list);
}catch (err) {
  console.log(err);
}
};

exports.deleteList = async (req, res) => {
  try{
      const { listId } = req.params;
  await List.findOneAndDelete(listId);
  res.status(200).json({ message: "List removed", listId });
}catch (err) {
  console.log(err);
}
};
