const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("blogs", blogSchema);
