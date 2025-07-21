export default function Card() {
  return (
    <div className="container-fluid" style={{backgroundColor: "#f48fb1"}}>
      <div className="row">
        <div className="col-md-12 text-center mb-4">
            <br></br>
          <h3>Sanrio</h3>
        </div>
      </div>

      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="/p3.jpg"
              className="card-img-top w-100"
              alt="..."
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div className="card-body">
              <p className="card-text">
               มายเมโลดี้ หนูน้อยแห่งป่าเมอร์รี่แลนด์ (ญี่ปุ่น:おねがいマイメロディอังกฤษ:Onegai My Melody) เป็นอนิเมะชุดตามตัวละครจาก บริษัท ซานริโอ จำกัด, มายเมโลดี้ ที่ผลิตโดยสตูดิโอโคเมท ชุดแรกที่ได้รับการปล่อยตัวระหว่าง 3 เมษายน 2005 เป็นเรื่องราวของ มายเมโลดี้ กระต่ายน้อยแสนน่ารักและผองเพื่อน อย่าง ฟลัท ริสุ และ มายสวีทเปียโน ที่ช่วยกันปกป้องโลกจากพลังร้ายของคุโรมิ
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="/p5.jpg"
              className="card-img-top w-100"
              alt="..."
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div className="card-body">
              <p className="card-text">
                เฮลโลคิตตี (ญี่ปุ่น: ハローキティอังกฤษ: Hello Kitty)(ชื่อเต็ม: คิตตีไวท์  โรมาจิ: Kiti howaito; อังกฤษ: Kitty White)คือตัวละครที่สร้างโดยบริษัทซานริโอ้ ประเทศญี่ปุ่น ออกแบบครั้งแรกโดยคุณยูโกะ ชิมิซุ โดยเธอวาดออกมาเป็นภาพแมวญี่ปุ่นหางสั้น เพศเมีย สีขาว ที่ติดโบว์สีแดง
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="/p4.jpg"
              className="card-img-top w-100"
              alt="..."
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div className="card-body">
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
