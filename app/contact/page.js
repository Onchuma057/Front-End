'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Add animation to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    const timeout = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(item => {
        observer.observe(item);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      document.querySelectorAll('.animate-on-scroll').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row mb-5 animate-on-scroll">
        <div className="col-12 text-center">
          <h1 style={{
            color: "#d81b60",
            position: "relative",
            display: "inline-block",
            marginBottom: "30px",
            fontWeight: "bold"
          }}>
            <span style={{
              position: "relative",
              zIndex: "1"
            }}>ติดต่อเรา</span>
            <span style={{
              position: "absolute",
              height: "10px",
              width: "100%",
              bottom: "0",
              left: "0",
              backgroundColor: "#f8bbd0",
              zIndex: "0"
            }}></span>
          </h1>
          <p className="lead" style={{ color: "#ad1457", maxWidth: "800px", margin: "0 auto" }}>
            มีคำถามหรือข้อเสนอแนะ? เราพร้อมรับฟังคุณเสมอ
          </p>
        </div>
      </div>

      <div className="row">
        {/* Contact Information */}
        <div className="col-lg-5 mb-4 mb-lg-0 animate-on-scroll">
          <div style={{
            backgroundColor: "#fff0f5",
            borderRadius: "20px",
            padding: "30px",
            height: "100%",
            boxShadow: "0 10px 30px rgba(244, 143, 177, 0.15)"
          }}>
            <h2 style={{ color: "#d81b60", marginBottom: "25px" }}>ข้อมูลการติดต่อ</h2>
            
            <div className="d-flex align-items-start mb-4">
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#fce4ec",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "15px",
                flexShrink: 0
              }}>
                <i className="bi bi-geo-alt" style={{ fontSize: "24px", color: "#ec407a" }}></i>
              </div>
              <div>
                <h5 style={{ color: "#d81b60", marginBottom: "5px" }}>ที่อยู่</h5>
                <p style={{ color: "#555", lineHeight: "1.6" }}>
                9 ถนนเวียงแก้ว ตำบลศรีภูมิ<br />
                อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200
                </p>
              </div>
            </div>
            
            <div className="d-flex align-items-start mb-4">
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#fce4ec",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "15px",
                flexShrink: 0
              }}>
                <i className="bi bi-telephone" style={{ fontSize: "24px", color: "#ec407a" }}></i>
              </div>
              <div>
                <h5 style={{ color: "#d81b60", marginBottom: "5px" }}>โทรศัพท์</h5>
                <p style={{ color: "#555", lineHeight: "1.6" }}>
                  +66 53 123 4567<br />
                  +66 81 234 5678
                </p>
              </div>
            </div>
            
            <div className="d-flex align-items-start mb-4">
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#fce4ec",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "15px",
                flexShrink: 0
              }}>
                <i className="bi bi-envelope" style={{ fontSize: "24px", color: "#ec407a" }}></i>
              </div>
              <div>
                <h5 style={{ color: "#d81b60", marginBottom: "5px" }}>อีเมล</h5>
                <p style={{ color: "#555", lineHeight: "1.6" }}>
                  info@example.com<br />
                  support@example.com
                </p>
              </div>
            </div>
            
            <div className="d-flex align-items-start">
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#fce4ec",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "15px",
                flexShrink: 0
              }}>
                <i className="bi bi-clock" style={{ fontSize: "24px", color: "#ec407a" }}></i>
              </div>
              <div>
                <h5 style={{ color: "#d81b60", marginBottom: "5px" }}>เวลาทำการ</h5>
                <p style={{ color: "#555", lineHeight: "1.6" }}>
                  จันทร์ - ศุกร์: 8:00 - 18:00<br />
                  เสาร์: 8:00 - 18:00<br />
                  อาทิตย์: ปิดทำการ
                </p>
              </div>
            </div>
            
            <div className="mt-5">
              <h5 style={{ color: "#d81b60", marginBottom: "15px" }}>ติดตามเรา</h5>
              <div className="d-flex">
                <a href="#" style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#fce4ec",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                  color: "#ec407a",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ec407a";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fce4ec";
                  e.currentTarget.style.color = "#ec407a";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#fce4ec",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                  color: "#ec407a",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ec407a";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fce4ec";
                  e.currentTarget.style.color = "#ec407a";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#fce4ec",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                  color: "#ec407a",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ec407a";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fce4ec";
                  e.currentTarget.style.color = "#ec407a";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#fce4ec",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                  color: "#ec407a",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ec407a";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fce4ec";
                  e.currentTarget.style.color = "#ec407a";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                  <i className="bi bi-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="col-lg-7 animate-on-scroll">
          <div style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}>
            <h2 style={{ color: "#d81b60", marginBottom: "25px" }}>ส่งข้อความถึงเรา</h2>
            
            {submitStatus === 'success' && (
              <div className="alert" style={{
                backgroundColor: "#e8f5e9",
                color: "#2e7d32",
                padding: "15px 20px",
                borderRadius: "10px",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center"
              }}>
                <i className="bi bi-check-circle-fill me-2" style={{ fontSize: "20px" }}></i>
                <span>ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็วที่สุด</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" style={{ color: "#ad1457", marginBottom: "8px", fontWeight: "500" }}>ชื่อ *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: "10px",
                      border: "1px solid #f8bbd0",
                      backgroundColor: "#fff",
                      transition: "all 0.3s ease"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#ec407a";
                      e.target.style.boxShadow = "0 0 0 3px rgba(236, 64, 122, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#f8bbd0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" style={{ color: "#ad1457", marginBottom: "8px", fontWeight: "500" }}>อีเมล *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: "10px",
                      border: "1px solid #f8bbd0",
                      backgroundColor: "#fff",
                      transition: "all 0.3s ease"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#ec407a";
                      e.target.style.boxShadow = "0 0 0 3px rgba(236, 64, 122, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#f8bbd0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="subject" style={{ color: "#ad1457", marginBottom: "8px", fontWeight: "500" }}>หัวข้อ *</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    borderRadius: "10px",
                    border: "1px solid #f8bbd0",
                    backgroundColor: "#fff",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#ec407a";
                    e.target.style.boxShadow = "0 0 0 3px rgba(236, 64, 122, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#f8bbd0";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" style={{ color: "#ad1457", marginBottom: "8px", fontWeight: "500" }}>ข้อความ *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    borderRadius: "10px",
                    border: "1px solid #f8bbd0",
                    backgroundColor: "#fff",
                    resize: "vertical",
                    transition: "all 0.3s ease"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#ec407a";
                    e.target.style.boxShadow = "0 0 0 3px rgba(236, 64, 122, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#f8bbd0";
                    e.target.style.boxShadow = "none";
                  }}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                style={{
                  backgroundColor: "#ec407a",
                  color: "white",
                  border: "none",
                  borderRadius: "30px",
                  padding: "12px 30px",
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = "#d81b60";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(236, 64, 122, 0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ec407a";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    กำลังส่ง...
                  </>
                ) : "ส่งข้อความ"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="row mt-5 animate-on-scroll">
        <div className="col-12">
          <div style={{
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            height: "400px",
            position: "relative"
          }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4790.25111827445!2d98.9813390116746!3d18.79289728228058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a9a71d80adf%3A0xe41f657fc5052416!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LiZ4Li04LiE4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e1!3m2!1sth!2sth!4v1753694402963!5m2!1sth!2sth" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Add Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
      
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease;
        }
        
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}