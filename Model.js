const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  studentFirstName: {
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  location: {
    Type: String,

  },
});

module.exports = mongoose.model("PostModel", PostSchema);
