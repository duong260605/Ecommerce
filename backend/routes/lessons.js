const express = require("express");
const Lesson = require("../models/Lesson");

const router = express.Router();

// Lấy tất cả bài học
router.get("/", async (req, res) => {
  const lessons = await Lesson.find().populate("course");
  res.json(lessons);
});

// Thêm bài học
router.post("/", async (req, res) => {
  try {
    const lesson = new Lesson(req.body);
    await lesson.save();
    res.json(lesson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
