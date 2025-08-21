"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [tokenState, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    window.location.href = "/login";
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        backgroundColor: "#f8bbd0",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container-fluid mx-5">
        {/* โลโก้ */}
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center gap-2"
          style={{
            color: "#ad1457",
            fontWeight: "600",
            transition: "all 0.3s ease",
          }}
        >
          <img
            src="/hello-logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="d-inline-block align-text-top"
            style={{
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
            }}
          />
          <span
            style={{
              background: "linear-gradient(45deg, #ec407a, #ad1457)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FrontEnd
          </span>
        </Link>

        {/* ปุ่ม toggle mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1">
              <Link className="nav-link" href="/">
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link" href="/about">
                เกี่ยวกับเรา
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link" href="/service">
                บริการของเรา
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link" href="/contact">
                ติดต่อเรา
              </Link>
            </li>
          </ul>

          {/* ปุ่ม Login/Logout */}
          <div className="d-flex">
            {tokenState ? (
              <button
                type="button"
                onClick={handleSignOut}
                className="btn"
                style={{
                  backgroundColor: "transparent",
                  color: "#d32f2f",
                  border: "2px solid #d32f2f",
                  borderRadius: "20px",
                  padding: "8px 20px",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                }}
              >
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            ) : (
              <>
                <Link
                  href="/register"
                  className="btn"
                  style={{
                    color: "#ec407a",
                    borderRadius: "20px",
                    padding: "8px 20px",
                    fontWeight: "500",
                    border: "2px solid #ec407a",
                    transition: "all 0.3s ease",
                    marginRight: "5px",
                  }}
                >
                  <i className="bi bi-person-plus"></i> Register
                </Link>
                <Link
                  href="/login"
                  className="btn"
                  style={{
                    backgroundColor: "#ec407a",
                    color: "white",
                    borderRadius: "20px",
                    padding: "8px 20px",
                    fontWeight: "500",
                    border: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <i className="bi bi-box-arrow-in-right"></i> Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
