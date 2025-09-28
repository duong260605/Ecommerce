const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: Number, required: true }, // chỉ số trong mảng options
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }
  },
  { timestamps: true }
);

module.exports = mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);
