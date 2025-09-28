// backend/routes/adminRoutes.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Lấy danh sách tất cả user (chỉ admin mới được gọi)
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password"); // ẩn password
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server" });
  }
});

export default router;
