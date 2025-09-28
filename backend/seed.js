const mongoose = require("mongoose");
const Course = require("./models/Course");

mongoose.connect("mongodb://127.0.0.1:27017/elearning")
  .then(async () => {
    await Course.deleteMany({});
    await Course.insertMany([
      { title: "HTML & CSS Cơ bản", description: "Học nền tảng web", image: "https://picsum.photos/200/100" },
      { title: "JavaScript Nâng cao", description: "Học JS để code web động", image: "https://picsum.photos/200/101" },
      { title: "ReactJS Fullstack", description: "Làm web với React", image: "https://picsum.photos/200/102" }
    ]);
    console.log("✅ Seed thành công");
    process.exit();
  })
  .catch(err => console.error(err));
