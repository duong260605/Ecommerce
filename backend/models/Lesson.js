const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    quiz: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }],
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }
  },
  { timestamps: true }
);

module.exports = mongoose.models.Lesson || mongoose.model("Lesson", lessonSchema);
