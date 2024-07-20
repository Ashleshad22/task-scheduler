const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  priority: { type: Number, required: true },
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Task", taskSchema);
