import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const sampleCourses = [
    { id: 1, title: "Lập trình JavaScript cơ bản", desc: "Khóa học cho người mới bắt đầu." },
    { id: 2, title: "ReactJS toàn tập", desc: "Xây dựng web hiện đại với ReactJS." },
    { id: 3, title: "NodeJS & Express", desc: "Viết API và backend với NodeJS." },
    { id: 4, title: "MongoDB Mastery", desc: "Cơ sở dữ liệu NoSQL phổ biến nhất." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-6">
        <h1 className="text-2xl font-bold text-blue-600">🎓 E-Learning</h1>
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-700">Xin chào, <b>{user.username}</b> 👋</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Đăng xuất
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
            >
              Đăng nhập
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
            >
              Đăng ký
            </button>
          </div>
        )}
      </header>

      {/* Nội dung */}
      <main>
        <h2 className="text-xl font-semibold mb-4">📚 Danh sách khóa học</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.desc}</p>
              <button className="mt-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
