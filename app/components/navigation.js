import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top " style={{ 
      backgroundColor: "#f8bbd0",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    }}>
      <div className="container-fluid mx-5">

        {/* โลโก้และชื่อแบรนด์ */}
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2" 
          style={{
            color: "#ad1457",
            fontWeight: "600",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
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
              transition: "all 0.3s ease"
            }}
          />
          <span style={{
            background: "linear-gradient(45deg, #ec407a, #ad1457)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>FrontEnd</span>
        </Link>

        {/* ปุ่ม toggle สำหรับมือถือ */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: "none",
            color: "#ad1457",
            backgroundColor: "#fce4ec",
            borderRadius: "10px",
            padding: "8px 12px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f8bbd0";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#fce4ec";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item mx-1">
              <Link className="nav-link" aria-current="page" href="/"
                style={{
                  color: "#ad1457",
                  fontWeight: "500",
                  padding: "8px 15px",
                  borderRadius: "20px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fce4ec";
                  e.currentTarget.style.color = "#ec407a";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#ad1457";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                หน้าแรก
              </Link>
            </li>

            <li className="nav-item mx-1">
              <Link className="nav-link" href="/about"
                style={{
                  color: "#ad1457",
                  fontWeight: "500",
                  padding: "8px 15px",
                  borderRadius: "20px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fce4ec";
                  e.currentTarget.style.color = "#ec407a";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#ad1457";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                เกี่ยวกับเรา
              </Link>
            </li>

            <li className="nav-item mx-1">
              <Link className="nav-link" href="/service"
                style={{
                  color: "#ad1457",
                  fontWeight: "500",
                  padding: "8px 15px",
                  borderRadius: "20px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fce4ec";
                  e.currentTarget.style.color = "#ec407a";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#ad1457";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                บริการของเรา
              </Link>
            </li>

            <li className="nav-item mx-1">
              <Link href="/contact" className="nav-link" aria-disabled="true"
                style={{
                  color: "#ad1457",
                  fontWeight: "500",
                  padding: "8px 15px",
                  borderRadius: "20px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fce4ec";
                  e.currentTarget.style.color = "#ec407a";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#ad1457";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                ติดต่อเรา
              </Link>
            </li>
          </ul>

          {/* กล่องค้นหา */}
          <form className="d-flex me-3" role="search">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  borderRadius: "20px 0 0 20px",
                  border: "2px solid #f8bbd0",
                  borderRight: "none",
                  padding: "10px 15px",
                  backgroundColor: "#fff0f5",
                  transition: "all 0.3s ease"
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#ec407a";
                  e.currentTarget.style.boxShadow = "0 0 0 0.25rem rgba(236, 64, 122, 0.25)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#f8bbd0";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button 
                className="btn" 
                type="submit"
                style={{
                  backgroundColor: "#ec407a",
                  color: "white",
                  borderRadius: "0 20px 20px 0",
                  border: "2px solid #ec407a",
                  padding: "10px 15px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#d81b60";
                  e.currentTarget.style.borderColor = "#d81b60";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ec407a";
                  e.currentTarget.style.borderColor = "#ec407a";
                }}
              >
                ค้นหา
              </button>
            </div>
          </form>

          {/* Login and Register Buttons */}
          <div className="d-flex">
            <Link href="/login" className="btn me-2"
              style={{
                backgroundColor: "transparent",
                color: "#ad1457",
                border: "2px solid #ec407a",
                borderRadius: "20px",
                padding: "8px 20px",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#fce4ec";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(236, 64, 122, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Login
            </Link>
            <Link href="/register" className="btn"
              style={{
                backgroundColor: "#ec407a",
                color: "white",
                borderRadius: "20px",
                padding: "8px 20px",
                fontWeight: "500",
                border: "none",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#d81b60";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(216, 27, 96, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ec407a";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}