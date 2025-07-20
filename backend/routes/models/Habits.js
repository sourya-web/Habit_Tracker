const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  name: String,
  completedDates: [Date]
});

module.exports = mongoose.model("Habit", habitSchema);