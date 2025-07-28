"use client"

export default function Card() {
  return (
    <div className="container-fluid py-5 " style={{backgroundColor: "#fce4ec"}}>
      <div className="row ">
        <div className="col-md-12 text-center mb-5 ">
          <h3 className="fw-bold" style={{
            color: "#ec407a", 
            letterSpacing: "2px",
            position: "relative",
            display: "inline-block"
          }}>
            <span style={{
              position: "relative",
              zIndex: "1"
            }}>Sanrio Characters</span>
            <span style={{
              position: "absolute",
              height: "8px",
              width: "100%",
              bottom: "0",
              left: "0",
              backgroundColor: "#f8bbd0",
              zIndex: "0"
            }}></span>
          </h3>
        </div>
      </div>

      <div className="row mx-3">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm" style={{
            borderRadius: "15px",
            transition: "all 0.3s ease",
            overflow: "hidden"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(244, 143, 177, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
          }}>
            <div style={{
              overflow: "hidden",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px"
            }}>
              <img
                src="/p3.jpg"
                className="card-img-top w-100"
                alt="My Melody"
                style={{ 
                  height: "250px", 
                  objectFit: "cover",
                  transition: "transform 0.5s ease"
                }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
              />
            </div>
            <div className="card-body" style={{backgroundColor: "#fff0f5"}}>
              <h5 className="card-title mb-3 text-center" style={{color: "#d81b60"}}>My Melody</h5>
              <p className="card-text">
                มายเมโลดี้ หนูน้อยแห่งป่าเมอร์รี่แลนด์ (ญี่ปุ่น:おねがいマイメロディอังกฤษ:Onegai My Melody) เป็นอนิเมะชุดตามตัวละครจาก บริษัท ซานริโอ จำกัด, มายเมโลดี้ ที่ผลิตโดยสตูดิโอโคเมท ชุดแรกที่ได้รับการปล่อยตัวระหว่าง 3 เมษายน 2005 เป็นเรื่องราวของ มายเมโลดี้ กระต่ายน้อยแสนน่ารักและผองเพื่อน อย่าง ฟลัท ริสุ และ มายสวีทเปียโน ที่ช่วยกันปกป้องโลกจากพลังร้ายของคุโรมิ
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm" style={{
            borderRadius: "15px",
            transition: "all 0.3s ease",
            overflow: "hidden"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(244, 143, 177, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
          }}>
            <div style={{
              overflow: "hidden",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px"
            }}>
              <img
                src="/p5.jpg"
                className="card-img-top w-100"
                alt="Hello Kitty"
                style={{ 
                  height: "250px", 
                  objectFit: "cover",
                  transition: "transform 0.5s ease"
                }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
              />
            </div>
            <div className="card-body" style={{backgroundColor: "#fff0f5"}}>
              <h5 className="card-title mb-3 text-center" style={{color: "#d81b60"}}>Hello Kitty</h5>
              <p className="card-text">
                เฮลโลคิตตี (ญี่ปุ่น: ハローキティอังกฤษ: Hello Kitty)(ชื่อเต็ม: คิตตีไวท์  โรมาจิ: Kiti howaito; อังกฤษ: Kitty White)คือตัวละครที่สร้างโดยบริษัทซานริโอ้ ประเทศญี่ปุ่น ออกแบบครั้งแรกโดยคุณยูโกะ ชิมิซุ โดยเธอวาดออกมาเป็นภาพแมวญี่ปุ่นหางสั้น เพศเมีย สีขาว ที่ติดโบว์สีแดง
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm" style={{
            borderRadius: "15px",
            transition: "all 0.3s ease",
            overflow: "hidden"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(244, 143, 177, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
          }}>
            <div style={{
              overflow: "hidden",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px"
            }}>
              <img
                src="/p4.jpg"
                className="card-img-top w-100"
                alt="Cinnamoroll"
                style={{ 
                  height: "250px", 
                  objectFit: "cover",
                  transition: "transform 0.5s ease"
                }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
              />
            </div>
            <div className="card-body" style={{backgroundColor: "#fff0f5"}}>
              <h5 className="card-title mb-3 text-center" style={{color: "#d81b60"}}>Cinnamoroll</h5>
              <p className="card-text">
                ซินามอโรล (ญี่ปุ่น: シナモロール; อังกฤษ: Cinnamoroll) เป็นตัวการ์ตูนของซานริโอ เกิดเมื่อวันที่ 6 มีนาคม ค.ศ. 2002 ผู้ออกแบบตัวละครคือยูมิ สึกิริโนะ รูปลักษณ์ของเขาคือลูกสุนัขขนนุ่มฟูสีขาว แก้มแดง มีหางม้วนคล้ายกับซินนามอนโรล
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}