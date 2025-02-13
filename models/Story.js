const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  choices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Choice" }], // Choices linked to this story
  isMainStory: { type: Boolean, default: false }, // Whether this is part of the main story
});

module.exports = mongoose.model("Story", StorySchema);
