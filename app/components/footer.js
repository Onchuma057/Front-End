//import ใน /app/layout.js

export default function Footer() {
  return (
    <div className="container-fluid py-5" style={{backgroundColor: "#fce4ec"}}> 
      <footer className="mx-5">
        <div className="row">
          <div className="col-6 col-md-3 mb-4">
            <h5 style={{
              color: "#ec407a",
              fontWeight: "600",
              position: "relative",
              display: "inline-block",
              marginBottom: "20px"
            }}>
              <span style={{
                position: "relative",
                zIndex: "1"
              }}>Explore</span>
              <span style={{
                position: "absolute",
                height: "6px",
                width: "100%",
                bottom: "0",
                left: "0",
                backgroundColor: "#f8bbd0",
                zIndex: "0"
              }}></span>
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0" 
                  style={{
                    color: "#ad1457",
                    transition: "all 0.3s ease",
                    position: "relative",
                    display: "inline-block"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(5px)";
                    e.currentTarget.style.color = "#ec407a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.color = "#ad1457";
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0" 
                  style={{
                    color: "#ad1457",
                    transition: "all 0.3s ease",
                    position: "relative",
                    display: "inline-block"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(5px)";
                    e.currentTarget.style.color = "#ec407a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.color = "#ad1457";
                  }}
                >
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0" 
                  style={{
                    color: "#ad1457",
                    transition: "all 0.3s ease",
                    position: "relative",
                    display: "inline-block"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(5px)";
                    e.currentTarget.style.color = "#ec407a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.color = "#ad1457";
                  }}
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-6 col-md-3 mb-4">
            <h5 style={{
              color: "#ec407a",
              fontWeight: "600",
              position: "relative",
              display: "inline-block",
              marginBottom: "20px"
            }}>
              <span style={{
                position: "relative",
                zIndex: "1"
              }}>Resources</span>
              <span style={{
                position: "absolute",
                height: "6px",
                width: "100%",
                bottom: "0",
                left: "0",
                backgroundColor: "#f8bbd0",
                zIndex: "0"
              }}></span>
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0" 
                  style={{
                    color: "#ad1457",
                    transition: "all 0.3s ease",
                    position: "relative",
                    display: "inline-block"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(5px)";
                    e.currentTarget.style.color = "#ec407a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.color = "#ad1457";
                  }}
                >
                  Blog
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0" 
                  style={{
                    color: "#ad1457",
                    transition: "all 0.3s ease",
                    position: "relative",
                    display: "inline-block"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(5px)";
                    e.currentTarget.style.color = "#ec407a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.color = "#ad1457";
                  }}
                >
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0" 
                  style={{
                    color: "#ad1457",
                    transition: "all 0.3s ease",
                    position: "relative",
                    display: "inline-block"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(5px)";
                    e.currentTarget.style.color = "#ec407a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.color = "#ad1457";
                  }}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-md-6 mb-4">
            <h5 style={{
              color: "#ec407a",
              fontWeight: "600",
              position: "relative",
              display: "inline-block",
              marginBottom: "20px"
            }}>
              <span style={{
                position: "relative",
                zIndex: "1"
              }}>Subscribe to our newsletter</span>
              <span style={{
                position: "absolute",
                height: "6px",
                width: "100%",
                bottom: "0",
                left: "0",
                backgroundColor: "#f8bbd0",
                zIndex: "0"
              }}></span>
            </h5>
            <p style={{color: "#ad1457"}}>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="email"
                className="form-control"
                placeholder="Email address"
                style={{
                  borderRadius: "20px",
                  border: "2px solid #f8bbd0",
                  padding: "10px 15px",
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
              <button className="btn" type="button"
                style={{
                  backgroundColor: "#ec407a",
                  color: "white",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  transition: "all 0.3s ease",
                  border: "none"
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
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 mt-4 border-top" style={{borderColor: "#f8bbd0 !important"}}>
          <p style={{color: "#ad1457"}}>© 2025 Sanrio Co., Ltd. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" aria-label="Instagram"
                style={{
                  color: "#ec407a",
                  fontSize: "24px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#d81b60";
                  e.currentTarget.style.transform = "scale(1.2)";
                  e.currentTarget.style.display = "inline-block";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ec407a";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" aria-label="Facebook"
                style={{
                  color: "#ec407a",
                  fontSize: "24px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#d81b60";
                  e.currentTarget.style.transform = "scale(1.2)";
                  e.currentTarget.style.display = "inline-block";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ec407a";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" aria-label="Twitter"
                style={{
                  color: "#ec407a",
                  fontSize: "24px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#d81b60";
                  e.currentTarget.style.transform = "scale(1.2)";
                  e.currentTarget.style.display = "inline-block";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ec407a";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <i className="bi bi-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      
      {/* Add Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
    </div>
  );
}