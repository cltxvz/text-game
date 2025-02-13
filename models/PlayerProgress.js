const mongoose = require("mongoose");

const PlayerProgressSchema = new mongoose.Schema({
  playerId: { type: String, required: true }, // Could be session ID or user ID if needed later
  currentStory: { type: mongoose.Schema.Types.ObjectId, ref: "Story" }, // Where the player is
  choicesMade: [{ type: mongoose.Schema.Types.ObjectId, ref: "Choice" }], // Choices made so far
});

module.exports = mongoose.model("PlayerProgress", PlayerProgressSchema);
