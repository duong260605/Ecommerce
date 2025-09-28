const express = require("express");
const Course = require("../models/Course");

const router = express.Router();

// Lấy tất cả khóa học
router.get("/", async (req, res) => {
  const courses = await Course.find().populate("createdBy", "name email");
  res.json(courses);
});

// Tạo khóa học mới
router.post("/", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
