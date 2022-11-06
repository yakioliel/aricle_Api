const mongoose = require("mongoose");
const Category = require("../moduls/category");

const articleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  categoryId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Category",
  },
});

module.exports = mongoose.model("Article", articleSchema);
