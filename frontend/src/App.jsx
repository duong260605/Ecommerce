import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />       {/* Trang chủ */}
        <Route path="/login" element={<Login />} /> {/* Đăng nhập */}
        <Route path="/register" element={<Register />} /> {/* Đăng ký */}
      </Routes>
    </BrowserRouter>
  );
}
