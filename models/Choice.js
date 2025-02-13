const mongoose = require("mongoose");

const ChoiceSchema = new mongoose.Schema({
  text: { type: String, required: true }, // The choice text
  nextStory: { type: mongoose.Schema.Types.ObjectId, ref: "Story" }, // Where this choice leads
  isKeyChoice: { type: Boolean, default: false }, // If this choice is required for the main story
});

module.exports = mongoose.model("Choice", ChoiceSchema);
