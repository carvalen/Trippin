const List = require("../models/list.model");

exports.getLists = async (req, res) => {
  const lists = await List.find();
  res.status(200).json(lists);
};

exports.getList = async (req, res) => {
  const { listId } = req.params;
  const list = await List.findById(listId);
  res.status(200).json(list);
};

exports.createList = async (req, res) => {
    console.log(req.session);
const userId = req.session.userId;
  const list = await List.create({...req.body, user: userId});
  await User.findByIdAndUpdate(userId, { lists: { $push: list._id }});
  res.status(200).json(list);
  //paso las listas al usuario conectado 
};

exports.updateList = async (req, res) => {
  const { listId } = req.params;
  const list = await List.findByIdAndUpdate(listId, req.body);
  res.status(200).json(list);
};

exports.deleteList = async (req, res) => {
  const { listId } = req.params;
  await List.findOneAndDelete(listId);
  res.status(200).json({ message: "List removed", listId });
};


//try catch