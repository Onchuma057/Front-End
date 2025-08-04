'use client';
import { useEffect } from 'react';
import Image from 'next/image';

export default function About() {
  useEffect(() => {
    // Add animation to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(item => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="container py-5">
      
      {/* Personal Story */}
      <div className="row mb-5 align-items-center animate-on-scroll">
        <div className="col-md-5 mb-4 mb-md-0">
          <div style={{
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(244, 143, 177, 0.3)",
            position: "relative"
          }}>
            <Image 
              src="/s1.jpg" 
              width={500} 
              height={600} 
              alt="My Profile" 
              style={{
                objectFit: "cover",
                width: "100%",
                height: "500px",
                transition: "transform 0.5s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            />
          </div>
        </div>
        <div className="col-md-7">
          <h2 style={{ color: "#d81b60", marginBottom: "20px" }}> Onchuma Jota </h2>
          <p className="mb-3" style={{ color: "#ec407a", fontWeight: "500", fontSize: "1.2rem" }}>
            Web Developer & Designer
          </p>
          <p style={{ color: "#555", lineHeight: "1.8" }}>
          สวัสดีค่ะ หนูชื่ออรชุมา จอต๊ะ หรือ เรียกสั้นๆว่าพิม
หนูเป็นนักพัฒนาเว็บและนักออกแบบที่รักในการสร้างเว็บไซต์ดิจิทัลที่ทั้งสวย ใช้งานง่าย และเข้าถึงได้สำหรับทุกคน

ปัจจุบันเรียนอยู่ที่วิทยาลัยเทคนิคเชียงใหม่หนูได้พื้นฐานทั้งด้านเทคนิคและการออกแบบ จากวันนั้นจนถึงวันนี้ หนูมีโอกาสทำงานในโปรเจกต์หลากหลาย ทั้งเว็บบล็อกส่วนตัว เว็บแนะนำ
          </p>
          <p style={{ color: "#555", lineHeight: "1.8" }}>
          เว็บไซต์นี้จัดทำขึ้นในรายวิชา <b> การพัฒนาซอฟต์แวร์ด้วยเทคโนโลยี Frontend </b>
          โดยมีวัตถุประสงค์เพื่อเป็นโปรเจกต์เล็ก ๆ ส่งอาจารย์ และเป็นโอกาสให้หนูได้ฝึกฝนทักษะการเขียนโค้ด การออกแบบ UI/UX และการพัฒนาเว็บไซต์จริงจากไอเดียสู่การใช้งานจริง
          </p>
          <div className="mt-4">
            <div className="d-flex align-items-center mb-3" style={{ color: "#ad1457" }}>
              <i className="bi bi-check-circle-fill me-2"></i>
              <span>Front-end Development</span>
            </div>
            <div className="d-flex align-items-center mb-3" style={{ color: "#ad1457" }}>
              <i className="bi bi-check-circle-fill me-2"></i>
              <span>UI/UX Design</span>
            </div>
            <div className="d-flex align-items-center" style={{ color: "#ad1457" }}>
              <i className="bi bi-check-circle-fill me-2"></i>
              <span>Responsive Web Design</span>
            </div>
          </div>
          <div className="mt-4">
            <a href="#" className="me-3" style={{ 
              color: "#ec407a", 
              fontSize: "24px", 
              transition: "all 0.3s ease" 
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="me-3" style={{ 
              color: "#ec407a", 
              fontSize: "24px", 
              transition: "all 0.3s ease" 
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="me-3" style={{ 
              color: "#ec407a", 
              fontSize: "24px", 
              transition: "all 0.3s ease" 
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <i className="bi bi-github"></i>
            </a>
            <a href="#" style={{ 
              color: "#ec407a", 
              fontSize: "24px", 
              transition: "all 0.3s ease" 
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="row mb-5 animate-on-scroll">
        <div className="col-12 text-center mb-4">
          <h2 style={{
            color: "#d81b60",
            position: "relative",
            display: "inline-block",
            marginBottom: "20px"
          }}>
            <span style={{
              position: "relative",
              zIndex: "1"
            }}>My Skills</span>
            <span style={{
              position: "absolute",
              height: "8px",
              width: "100%",
              bottom: "0",
              left: "0",
              backgroundColor: "#f8bbd0",
              zIndex: "0"
            }}></span>
          </h2>
          <p style={{ color: "#555", maxWidth: "700px", margin: "0 auto" }}>
          นี่คือเทคโนโลยีและเครื่องมือบางส่วนที่ใช้งาน
          </p>
        </div>

        <div className="col-md-6 mb-4">
          <div className="p-4" style={{
            backgroundColor: "#fff0f5",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            height: "100%",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 15px 30px rgba(244, 143, 177, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
          }}>
            <h4 style={{ color: "#d81b60", marginBottom: "20px" }}>Frontend Development</h4>
            
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span style={{ color: "#555" }}>HTML/CSS</span>
                <span style={{ color: "#ad1457" }}>95%</span>
              </div>
              <div style={{ height: "10px", backgroundColor: "#f8bbd0", borderRadius: "5px" }}>
                <div style={{ width: "95%", height: "100%", backgroundColor: "#ec407a", borderRadius: "5px" }}></div>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span style={{ color: "#555" }}>JavaScript</span>
                <span style={{ color: "#ad1457" }}>90%</span>
              </div>
              <div style={{ height: "10px", backgroundColor: "#f8bbd0", borderRadius: "5px" }}>
                <div style={{ width: "90%", height: "100%", backgroundColor: "#ec407a", borderRadius: "5px" }}></div>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span style={{ color: "#555" }}>React</span>
                <span style={{ color: "#ad1457" }}>85%</span>
              </div>
              <div style={{ height: "10px", backgroundColor: "#f8bbd0", borderRadius: "5px" }}>
                <div style={{ width: "85%", height: "100%", backgroundColor: "#ec407a", borderRadius: "5px" }}></div>
              </div>
            </div>
            
            <div>
              <div className="d-flex justify-content-between mb-1">
                <span style={{ color: "#555" }}>Next.js</span>
                <span style={{ color: "#ad1457" }}>80%</span>
              </div>
              <div style={{ height: "10px", backgroundColor: "#f8bbd0", borderRadius: "5px" }}>
                <div style={{ width: "80%", height: "100%", backgroundColor: "#ec407a", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="p-4" style={{
            backgroundColor: "#fff0f5",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            height: "100%",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 15px 30px rgba(244, 143, 177, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
          }}>
            <h4 style={{ color: "#d81b60", marginBottom: "20px" }}>Design & Other Skills</h4>
            
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span style={{ color: "#555" }}>UI/UX Design</span>
                <span style={{ color: "#ad1457" }}>90%</span>
              </div>
              <div style={{ height: "10px", backgroundColor: "#f8bbd0", borderRadius: "5px" }}>
                <div style={{ width: "90%", height: "100%", backgroundColor: "#ec407a", borderRadius: "5px" }}></div>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span style={{ color: "#555" }}>Figma</span>
                <span style={{ color: "#ad1457" }}>85%</span>
              </div>
              <div style={{ height: "10px", backgroundColor: "#f8bbd0", borderRadius: "5px" }}>
                <div style={{ width: "85%", height: "100%", backgroundColor: "#ec407a", borderRadius: "5px" }}></div>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span style={{ color: "#555" }}>Responsive Design</span>
                <span style={{ color: "#ad1457" }}>95%</span>
              </div>
              <div style={{ height: "10px", backgroundColor: "#f8bbd0", borderRadius: "5px" }}>
                <div style={{ width: "95%", height: "100%", backgroundColor: "#ec407a", borderRadius: "5px" }}></div>
              </div>
            </div>
            
            <div>
              <div className="d-flex justify-content-between mb-1">
                <span style={{ color: "#555" }}>SEO Optimization</span>
                <span style={{ color: "#ad1457" }}>75%</span>
              </div>
              <div style={{ height: "10px", backgroundColor: "#f8bbd0", borderRadius: "5px" }}>
                <div style={{ width: "75%", height: "100%", backgroundColor: "#ec407a", borderRadius: "5px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="row mb-5 animate-on-scroll">
        <div className="col-12 text-center mb-4">
          <h2 style={{
            color: "#d81b60",
            position: "relative",
            display: "inline-block",
            marginBottom: "20px"
          }}>
            <span style={{
              position: "relative",
              zIndex: "1"
            }}>My Education</span>
            <span style={{
              position: "absolute",
              height: "8px",
              width: "100%",
              bottom: "0",
              left: "0",
              backgroundColor: "#f8bbd0",
              zIndex: "0"
            }}></span>
          </h2>
        </div>

        <div className="col-md-6 mb-4">
          <div style={{
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(244, 143, 177, 0.3)",
          }}>
            <Image 
              src="/cmtc.jpg" 
              width={600} 
              height={400} 
              alt="Chiang Mai Technical College" 
              style={{
                objectFit: "cover",
                width: "100%",
                height: "350px",
                transition: "transform 0.5s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            />
          </div>
        </div>
        <div className="col-md-6">
          <h3 style={{ color: "#d81b60", marginBottom: "20px" }}>Chiang Mai Technical College</h3>
          <p style={{ color: "#555", lineHeight: "1.8" }}>
          หนูกำลังศึกษาอยู่ที่วิทยาลัยเทคนิคเชียงใหม่ (CMTC) ในระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาเทคโนโลยีคอมพิวเตอร์สารสนเทศ

ระหว่างที่เรียนอยู่ที่นี่ หนูได้เรียนรู้พื้นฐานสำคัญเกี่ยวกับการเขียนโปรแกรม การพัฒนาเว็บไซต์ และหลักการออกแบบต่าง ๆ
          </p>
          <p style={{ color: "#555", lineHeight: "1.8" }}>
          การเรียนที่ CMTC เป็นแบบเน้นปฏิบัติจริง ทำให้หนูได้ฝึกทักษะทั้งด้านเทคนิคและการแก้ปัญหา ผ่านการทำโปรเจกต์ที่ใกล้เคียงกับงานจริง ซึ่งหนูเชื่อว่าจะเป็นประโยชน์มากในการทำงานในอนาคต
          </p>
          <div className="mt-4">
            <div className="d-flex align-items-center mb-3" style={{ color: "#ad1457" }}>
              <i className="bi bi-calendar-event me-2"></i>
              <span>2024 - Present</span>
            </div>
            <div className="d-flex align-items-center mb-3" style={{ color: "#ad1457" }}>
              <i className="bi bi-mortarboard-fill me-2"></i>
              <span>High Vocational Certificate in Information Technology</span>
            </div>
            <div className="d-flex align-items-center" style={{ color: "#ad1457" }}>
              <i className="bi bi-trophy-fill me-2"></i>
              <span>Outstanding Student Award</span>
            </div>
          </div>
        </div>
      </div>

      {/* ตัวการ์ตูนที่อยากแนะนำ */}  
<div className="row animate-on-scroll">
  <div className="col-12 text-center mb-4">
    <h2 style={{
      color: "#d81b60",
      position: "relative",
      display: "inline-block",
      marginBottom: "20px"
    }}>
      <span style={{ position: "relative", zIndex: "1" }}>ตัวการ์ตูนที่อยากแนะนำ</span>
      <span style={{
        position: "absolute",
        height: "8px",
        width: "100%",
        bottom: "0",
        left: "0",
        backgroundColor: "#f8bbd0",
        zIndex: "0"
      }}></span>
    </h2>
    <p style={{ color: "#555", maxWidth: "700px", margin: "0 auto" }}>
      การ์ตูนจาก Sanrio ที่หนูชื่นชอบมาก ๆ แต่ละตัวมีเอกลักษณ์เฉพาะตัวและน่ารักสุด ๆ เลยค่ะ
    </p>
  </div>

  {/* My Melody */}
  <div className="col-md-4 mb-4">
    <div className="text-center p-3" style={{
      backgroundColor: "#fff0f5",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
    }}>
      <img 
        src="p3.jpg" // เปลี่ยน path ตามภาพของคุณ
        alt="My Melody"
        style={{
          width: "100%",
          borderRadius: "15px",
          objectFit: "cover",
          marginBottom: "15px"
        }}
      />
      <h4 style={{ color: "#d81b60", marginBottom: "10px" }}>My Melody</h4>
      <p style={{ color: "#555", fontSize: "14px" }}>
        มายเมโลดี้ หนูน้อยแห่งป่าเมอร์รี่แลนด์ เป็นตัวละครจากบริษัทซานริโอ เปิดตัวครั้งแรกปี 2005 ในชุดอนิเมะ “Onegai My Melody” มีลักษณะเด่นคือใส่ฮู้ดชมพู มีนิสัยใจดีและช่วยเหลือเพื่อนเสมอ
      </p>
    </div>
  </div>

  {/* Hello Kitty */}
  <div className="col-md-4 mb-4">
    <div className="text-center p-3" style={{
      backgroundColor: "#fff0f5",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
    }}>
      <img 
        src="p4.jpg" // เปลี่ยน path ตามภาพของคุณ
        alt="Hello Kitty"
        style={{
          width: "100%",
          borderRadius: "15px",
          objectFit: "cover",
          marginBottom: "15px"
        }}
      />
      <h4 style={{ color: "#d81b60", marginBottom: "10px" }}>Hello Kitty</h4>
      <p style={{ color: "#555", fontSize: "14px" }}>
        เฮลโลคิตตี้ (Kitty White) เป็นแมวสาวน่ารักจากญี่ปุ่น เปิดตัวครั้งแรกในปี 1974 จุดเด่นคือไม่มีปาก ใส่โบว์สีแดง เป็นสัญลักษณ์แห่งมิตรภาพและความอบอุ่น
      </p>
    </div>
  </div>

  {/* Cinnamoroll */}
  <div className="col-md-4 mb-4">
    <div className="text-center p-3" style={{
      backgroundColor: "#fff0f5",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
    }}>
      <img 
        src="p5.jpg" // เปลี่ยน path ตามภาพของคุณ
        alt="Cinnamoroll"
        style={{
          width: "100%",
          borderRadius: "15px",
          objectFit: "cover",
          marginBottom: "15px"
        }}
      />
      <h4 style={{ color: "#d81b60", marginBottom: "10px" }}>Cinnamoroll</h4>
      <p style={{ color: "#555", fontSize: "14px" }}>
        ซินนามอนโรล ลูกสุนัขหูยาวบินได้ ขนปุยนุ่มสีขาว เกิดเมื่อปี 2002 โดยมีลักษณะน่ารักสดใส มีแก้มสีแดงอ่อน และหมวกฟ้าสุดคิ้วท์ เป็นมาสคอตที่คนรักเยอะมากค่ะ
      </p>
    </div>
  </div>
</div>


      {/* Add Bootstrap Icons */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
      
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
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