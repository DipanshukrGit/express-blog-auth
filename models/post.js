const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",   // post belongs to a User
    required: true
  },
  date: {
    type: Date,
    default: Date.now  // auto set current date
  },
  content: {
    type: String,
    required: true
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"   // users who liked the post
    }
  ]
});

module.exports = mongoose.model("post", postSchema);
