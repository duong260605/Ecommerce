import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">E-learning</Link>
        <div>
          {token ? (
            <button onClick={logout} style={{ marginLeft: "1rem" }}>
              Đăng xuất
            </button>
          ) : (
            <>
              <Link to="/login" style={{ marginLeft: "1rem" }}>
                Đăng nhập
              </Link>
              <Link to="/register" style={{ marginLeft: "1rem" }}>
                Đăng ký
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
