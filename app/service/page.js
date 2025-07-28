'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Service() {
  const [activeTab, setActiveTab] = useState('all');
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    // Add a small delay to ensure DOM elements are ready
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
  }, [activeTab]); // Add activeTab as dependency to re-run when tab changes
  
  const characters = [
    {
      id: 1,
      name: "Hello Kitty",
      category: "popular",
      image: "/service/hello-kitty.jpg",
      year: "1974",
      description: "เฮลโลคิตตี้เป็นตัวการ์ตูนรูปแมวสีขาวที่มีโบว์สีแดงติดที่หู เธอเป็นตัวการ์ตูนที่โด่งดังที่สุดของ Sanrio และเป็นที่รู้จักไปทั่วโลก เฮลโลคิตตี้มีนิสัยน่ารัก ชอบทำอาหาร และชอบช่วยเหลือเพื่อนๆ",
      funFact: "เฮลโลคิตตี้มีส่วนสูงเท่ากับ 5 แอปเปิ้ล และมีน้ำหนักเท่ากับ 3 แอปเปิ้ล"
    },
    {
      id: 2,
      name: "My Melody",
      category: "popular",
      image: "/service/my-melody.jpg",
      year: "1975",
      description: "มายเมโลดี้เป็นกระต่ายสีขาวที่สวมหมวกคลุมสีแดง เธอมีนิสัยอ่อนโยน เป็นมิตร และชอบทำขนม เธอเป็นเพื่อนที่ดีของเฮลโลคิตตี้และมักจะช่วยเหลือผู้อื่นเสมอ",
      funFact: "มายเมโลดี้ชอบคุกกี้อัลมอนด์และดอกทิวลิปมาก"
    },
    {
      id: 3,
      name: "Kuromi",
      category: "popular",
      image: "/service/kuromi.jpg",
      year: "1982",
      description: "คุโรมิเป็นกระต่ายสีดำที่สวมหมวกสีดำมีหัวกะโหลก เธอมีบุคลิกซน ดื้อรั้น แต่ก็มีความอ่อนโยนซ่อนอยู่ คุโรมิเป็นคู่แข่งของมายเมโลดี้ แต่บางครั้งก็เป็นเพื่อนกัน",
      funFact: "คุโรมิชอบเล่นกีตาร์และฟังเพลงร็อค"
    },
    {
      id: 4,
      name: "Cinnamoroll",
      category: "popular",
      image: "/service/cinnamoroll.jpg",
      year: "2001",
      description: "ซินนามอนโรลเป็นลูกสุนัขสีขาวที่มีหูใหญ่คล้ายกับหูกระต่าย และมีหางม้วนเหมือนขนมซินนามอนโรล เขามีความสามารถพิเศษคือบินได้โดยใช้หูของเขา",
      funFact: "ซินนามอนโรลชอบนอนบนก้อนเมฆและดื่มโกโก้ร้อน"
    },
    {
      id: 5,
      name: "Pompompurin",
      category: "classic",
      image: "/service/pompompurin.jpg",
      year: "1996",
      description: "ปอมปอมปูรินเป็นสุนัขพันธุ์โกลเด้นรีทรีฟเวอร์สีเหลืองที่สวมหมวกสีน้ำตาล เขามีนิสัยสบายๆ ชอบนอน และชอบกินพุดดิ้ง",
      funFact: "ปอมปอมปูรินชอบสะสมรองเท้าบูทและหมวก"
    },
    {
      id: 6,
      name: "Keroppi",
      category: "classic",
      image: "/service/keroppi.jpg",
      year: "1988",
      description: "เคโรปปิเป็นกบสีเขียวที่อาศัยอยู่ในสระน้ำ Donut Pond เขาเป็นนักกีฬาที่เก่งและชอบผจญภัย เขามีเพื่อนมากมายและชอบเล่นเบสบอล",
      funFact: "เคโรปปิชอบกินแซนด์วิชผักโขมและไข่ต้ม"
    },
    {
      id: 7,
      name: "Little Twin Stars",
      category: "classic",
      image: "/service/little-twin-stars.jpg",
      year: "1975",
      description: "ลิตเติ้ลทวินสตาร์ประกอบด้วยคิกิและลาล่า พวกเขาเป็นฝาแฝดที่มาจากดวงดาว พวกเขาลงมาที่โลกเพื่อเรียนรู้สิ่งต่างๆ คิกิเป็นผู้ชายผมสีฟ้า ส่วนลาล่าเป็นผู้หญิงผมสีชมพู",
      funFact: "คิกิชอบดาราศาสตร์ ส่วนลาล่าชอบดนตรีและกวี"
    },
    {
      id: 8,
      name: "Gudetama",
      category: "modern",
      image: "/service/gudetama.jpg",
      year: "2013",
      description: "กุเดทามะเป็นไข่ขี้เกียจที่ไม่มีพลังงานจะทำอะไร เขามักจะนอนอยู่บนไข่ขาวของเขาและบ่นเรื่องต่างๆ แม้จะดูเหนื่อยหน่ายกับชีวิต แต่กุเดทามะก็มีเสน่ห์และเป็นที่รักของแฟนๆ",
      funFact: "กุเดทามะชอบพูดว่า 'เหนื่อยจัง' และ 'ไม่อยากทำอะไรเลย'"
    },
    {
      id: 9,
      name: "Aggretsuko",
      category: "modern",
      image: "/service/aggretsuko.jpg",
      year: "2017",
      description: "แอกเกรทสึโกะเป็นแพนด้าแดงที่ทำงานเป็นพนักงานออฟฟิศ เธอดูเรียบร้อยและสุภาพในที่ทำงาน แต่เมื่อเครียด เธอจะระบายอารมณ์ด้วยการร้องเพลงเดธเมทัลในคาราโอเกะ",
      funFact: "แอกเกรทสึโกะมีซีรีส์ของตัวเองบน Netflix"
    },
    {
      id: 10,
      name: "Badtz-Maru",
      category: "classic",
      image: "/service/badtz-maru.jpg",
      year: "1993",
      description: "แบ็ดซ์-มารุเป็นเพนกวินสีดำที่มีบุคลิกเกเร ชอบทำหน้าบึ้ง และมักจะทำตัวเป็นคนเท่ เขาอาศัยอยู่กับแม่ของเขาในเมือง Gorgeoustown",
      funFact: "แบ็ดซ์-มารุชอบเล่นเทนนิสและวอลเลย์บอล"
    },
    {
      id: 11,
      name: "Pochacco",
      category: "classic",
      image: "/service/pochacco.jpg",
      year: "1989",
      description: "โพชาโกะเป็นสุนัขสีขาวที่ชอบกีฬา โดยเฉพาะฟุตบอลและบาสเกตบอล เขามีจมูกสีฟ้าและหูสีดำ เขาเป็นตัวการ์ตูนที่มีพลังและความกระตือรือร้น",
      funFact: "โพชาโกะสามารถวิ่งได้เร็วมากและชอบดื่มน้ำผลไม้"
    },
    {
      id: 12,
      name: "Chococat",
      category: "classic",
      image: "/service/chococat.jpg",
      year: "1996",
      description: "โชโคแคทเป็นแมวสีดำที่มีจมูกใหญ่สีช็อคโกแลต เขามีหนวดที่ไวต่อความรู้สึกมาก ทำให้เขารู้ข่าวสารต่างๆ ได้เร็วกว่าใคร",
      funFact: "โชโคแคทมีหนวดที่ยาวที่สุดในบรรดาตัวการ์ตูน Sanrio"
    }
  ];

  const filteredCharacters = activeTab === 'all' 
    ? characters 
    : characters.filter(char => char.category === activeTab);

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
            }}>ตัวการ์ตูน Sanrio</span>
            <span style={{
              position: "absolute",
              height: "3px",
              width: "100%",
              bottom: "0",
              left: "0",
              backgroundColor: "#f8bbd0",
              zIndex: "0"
            }}></span>
          </h1>
          <p className="lead" style={{ color: "#ad1457", maxWidth: "800px", margin: "0 auto" }}>
            ค้นพบโลกแห่งความน่ารักกับตัวการ์ตูนจาก Sanrio ที่จะทำให้วันของคุณสดใสขึ้น
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="row mb-4 animate-on-scroll">
        <div className="col-12 text-center">
          <div className="btn-group" role="group" aria-label="Character categories" style={{
            backgroundColor: "#fce4ec",
            padding: "5px",
            borderRadius: "30px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}>
            <button 
              type="button" 
              className={`btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
              style={{
                backgroundColor: activeTab === 'all' ? "#ec407a" : "transparent",
                color: activeTab === 'all' ? "white" : "#ad1457",
                border: "none",
                borderRadius: "25px",
                padding: "8px 20px",
                margin: "0 5px",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'all') {
                  e.currentTarget.style.backgroundColor = "#f8bbd0";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'all') {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              ทั้งหมด
            </button>
            <button 
              type="button" 
              className={`btn ${activeTab === 'popular' ? 'active' : ''}`}
              onClick={() => setActiveTab('popular')}
              style={{
                backgroundColor: activeTab === 'popular' ? "#ec407a" : "transparent",
                color: activeTab === 'popular' ? "white" : "#ad1457",
                border: "none",
                borderRadius: "25px",
                padding: "8px 20px",
                margin: "0 5px",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'popular') {
                  e.currentTarget.style.backgroundColor = "#f8bbd0";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'popular') {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              ยอดนิยม
            </button>
            <button 
              type="button" 
              className={`btn ${activeTab === 'classic' ? 'active' : ''}`}
              onClick={() => setActiveTab('classic')}
              style={{
                backgroundColor: activeTab === 'classic' ? "#ec407a" : "transparent",
                color: activeTab === 'classic' ? "white" : "#ad1457",
                border: "none",
                borderRadius: "25px",
                padding: "8px 20px",
                margin: "0 5px",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'classic') {
                  e.currentTarget.style.backgroundColor = "#f8bbd0";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'classic') {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              คลาสสิก
            </button>
            <button 
              type="button" 
              className={`btn ${activeTab === 'modern' ? 'active' : ''}`}
              onClick={() => setActiveTab('modern')}
              style={{
                backgroundColor: activeTab === 'modern' ? "#ec407a" : "transparent",
                color: activeTab === 'modern' ? "white" : "#ad1457",
                border: "none",
                borderRadius: "25px",
                padding: "8px 20px",
                margin: "0 5px",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'modern') {
                  e.currentTarget.style.backgroundColor = "#f8bbd0";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'modern') {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              ยุคใหม่
            </button>
          </div>
        </div>
      </div>

      {/* Character Cards */}
      <div className="row">
        {filteredCharacters.map((character) => (
          <div key={character.id} className="col-md-6 col-lg-4 mb-4 animate-on-scroll">
            <div className="card border-0 h-100" style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(244, 143, 177, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
            }}>
              <div style={{ position: "relative", overflow: "hidden", height: "250px" }}>
                <Image 
                  src={character.image} 
                  alt={character.name}
                  layout="fill"
                  objectFit="cover"
                  style={{
                    transition: "transform 0.5s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                />
                <div style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  backgroundColor: "#ec407a",
                  color: "white",
                  padding: "5px 15px",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "bold"
                }}>
                  {character.year}
                </div>
              </div>
              <div className="card-body" style={{ backgroundColor: "#fff0f5" }}>
                <h3 style={{ 
                  color: "#d81b60", 
                  marginBottom: "10px",
                  fontWeight: "600"
                }}>
                  {character.name}
                </h3>
                <p style={{ color: "#555", marginBottom: "15px" }}>
                  {character.description}
                </p>
                <div style={{
                  backgroundColor: "#fce4ec",
                  padding: "15px",
                  borderRadius: "15px",
                  marginTop: "15px"
                }}>
                  <p style={{ 
                    color: "#ad1457", 
                    margin: "0",
                    fontWeight: "500",
                    fontSize: "0.9rem"
                  }}>
                    <i className="bi bi-lightbulb-fill me-2"></i>
                    เกร็ดน่ารู้: {character.funFact}
                  </p>
                </div>
              </div>
              <div className="card-footer" style={{ 
                backgroundColor: "#f8bbd0",
                border: "none",
                padding: "15px"
              }}>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ 
                    color: "#ad1457",
                    fontWeight: "500"
                  }}>
                    <i className="bi bi-heart-fill me-1"></i> Sanrio Character
                  </span>
                  <button className="btn" style={{
                    backgroundColor: "white",
                    color: "#ec407a",
                    borderRadius: "20px",
                    padding: "5px 15px",
                    fontWeight: "500",
                    border: "none",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ec407a";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.color = "#ec407a";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}>
                    ดูเพิ่มเติม
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sanrio History Section */}
      <div className="row mt-5 pt-4 animate-on-scroll">
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
            }}>ประวัติของ Sanrio</span>
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
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(244, 143, 177, 0.3)",
          }}>
            <Image 
              src="/sanrio-history.jpg" 
              width={600} 
              height={400} 
              alt="Sanrio History" 
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
          <h3 style={{ color: "#d81b60", marginBottom: "20px" }}>จากอดีตถึงปัจจุบัน</h3>
          <p style={{ color: "#555", lineHeight: "1.8" }}>
            Sanrio ก่อตั้งขึ้นในปี 1960 โดย Shintaro Tsuji ในประเทศญี่ปุ่น เริ่มต้นจากการผลิตของขวัญเล็กๆ น้อยๆ 
            และต่อมาได้พัฒนาตัวการ์ตูนของตัวเองเพื่อใช้ในสินค้าต่างๆ
          </p>
          <p style={{ color: "#555", lineHeight: "1.8" }}>
            ในปี 1974 เฮลโลคิตตี้ได้ถือกำเนิดขึ้นและกลายเป็นตัวการ์ตูนที่โด่งดังที่สุดของ Sanrio 
            จนถึงปัจจุบัน Sanrio มีตัวการ์ตูนมากกว่า 400 ตัว แต่ละตัวมีบุคลิกและเสน่ห์เฉพาะตัว
          </p>
          <p style={{ color: "#555", lineHeight: "1.8" }}>
            ปัจจุบัน Sanrio ไม่ได้เป็นเพียงแค่บริษัทผลิตสินค้าเท่านั้น แต่ยังมีธีมพาร์ค ร้านอาหาร 
            และสื่อบันเทิงต่างๆ ที่สร้างความสุขให้กับผู้คนทั่วโลก
          </p>
          <div className="mt-4">
            <div className="d-flex align-items-center mb-3" style={{ color: "#ad1457" }}>
              <i className="bi bi-check-circle-fill me-2"></i>
              <span>มีตัวการ์ตูนมากกว่า 400 ตัว</span>
            </div>
            <div className="d-flex align-items-center mb-3" style={{ color: "#ad1457" }}>
              <i className="bi bi-check-circle-fill me-2"></i>
              <span>มีสินค้ามากกว่า 50,000 รายการทั่วโลก</span>
            </div>
            <div className="d-flex align-items-center" style={{ color: "#ad1457" }}>
              <i className="bi bi-check-circle-fill me-2"></i>
              <span>มีแฟนคลับในกว่า 130 ประเทศทั่วโลก</span>
            </div>
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