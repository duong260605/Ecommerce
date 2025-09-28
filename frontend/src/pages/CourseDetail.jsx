import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourseDetail } from "../api";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    getCourseDetail(id)
      .then((res) => setCourse(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!course) return <p>Đang tải...</p>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>

      <h3>Bài học:</h3>
      <ul>
        {course.lessons?.map((lesson, idx) => (
          <li key={idx}>{lesson}</li>
        ))}
      </ul>

      <Link to={`/courses/${id}/quiz`}>
        <button>Làm bài trắc nghiệm</button>
      </Link>
    </div>
  );
}
