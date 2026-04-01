const Record = require("../models/record.model");

exports.createRecord = async (req, res) => {
  const record = await Record.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.status(201).json(record);
};

exports.getRecords = async (req, res) => {
  const query = {};

  if (req.query.type) query.type = req.query.type;
  if (req.query.category) query.category = req.query.category;

  const records = await Record.find(query);
  res.json(records);
};

exports.updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(record);
};

exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};