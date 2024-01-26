const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "complete"],
    default: "pending",
  },
  addedDate: {
    type: Date,
    default: Date.now(),
  },
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
export default Task;
