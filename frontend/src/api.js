import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// Auth
// Đăng ký
export const register = (userData) => API.post("/auth/register", userData);

// Đăng nhập
export const login = (userData) => API.post("/auth/login", userData);

// Courses
export const getCourses = () => API.get("/courses");
export const getCourseDetail = (id) => API.get(`/courses/${id}`);   // ✅ sửa lại tên
export const joinCourse = (id) => API.post(`/courses/${id}/join`);

// Quiz
export const getQuiz = (courseId) => API.get(`/quiz/${courseId}`);  // ✅ sửa lại tên
export const submitQuiz = (courseId, answers) =>
  API.post(`/quiz/${courseId}/submit`, { answers });
