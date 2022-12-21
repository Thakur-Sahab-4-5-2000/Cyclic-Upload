const Component = require("../models/ComponentModel");
const { validationResult } = require("express-validator");

const addCompenentFields = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { title, placeholder } = req.body;
  try {
    const newComponent = new Component({
      title,
      placeholder,
    });
    await newComponent.save();
    res.status(200).json(newComponent);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCoponentFields = async (req, res) => {
  try {
    const component = await Component.find();
    res.status(200).json(component);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  addCompenentFields,
  getCoponentFields,
};
