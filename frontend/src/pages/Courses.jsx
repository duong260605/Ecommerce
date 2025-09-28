import React, { useEffect, useState } from "react";
import { getCourses, joinCourse } from "../api";
import { Link } from "react-router-dom";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // gọi API lấy danh sách khóa học
    getCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleJoin = async (id) => {
    try {
      await joinCourse(id);
      alert("✅ Bạn đã tham gia khóa học!");
    } catch (err) {
      console.error(err);
      alert("❌ Lỗi khi tham gia khóa học!");
    }
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Danh sách khóa học</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses.map((c) => (
            <div
              key={c._id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={c.image || "https://picsum.photos/400/200?random=" + c._id}
                alt={c.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{c.title}</h2>
                <p className="text-gray-600 mb-3">{c.description}</p>
                <div className="flex justify-between">
                  <Link
                    to={`/courses/${c._id}`}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Xem chi tiết
                  </Link>
                  <button
                    onClick={() => handleJoin(c._id)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Tham gia
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>⏳ Đang tải khóa học...</p>
        )}
      </div>
    </div>
  );
}
