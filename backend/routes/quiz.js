const express = require("express");
const Quiz = require("../models/Quiz");

const router = express.Router();

// Lấy quiz theo lesson
router.get("/:lessonId", async (req, res) => {
  const quiz = await Quiz.find({ lesson: req.params.lessonId });
  res.json(quiz);
});

// Tạo quiz mới
router.post("/", async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Chấm điểm quiz
router.post("/submit", async (req, res) => {
  try {
    const { answers } = req.body; // [{quizId, answerIndex}]
    let score = 0;

    for (const ans of answers) {
      const q = await Quiz.findById(ans.quizId);
      if (q && q.correctAnswer === ans.answerIndex) {
        score++;
      }
    }

    res.json({ score, total: answers.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
