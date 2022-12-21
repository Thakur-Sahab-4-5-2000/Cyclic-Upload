const mongoose = require("mongoose");

const Componet = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Component", Componet);
