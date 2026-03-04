export const Home = ({
  onNavigate,
}: {
  onNavigate: (page: string) => void;
}) => {
  return (
    <>
      <section>
        <div className="hero-grid">
          <div className="panel pad">
            <p className="kicker">
              <span className="badge">Chiến dịch truyền thông cộng đồng</span>
            </p>
            <h1 className="h1">ÊM DẠ MODE</h1>
            <p className="sub">
              <b>Bật mode "Êm Dạ", nhịp sống mượt mà!</b>
              <br />
              Chiến dịch truyền thông gia tăng nhận thức về mức độ nghiêm trọng
              của bệnh lý dạ dày cho người trẻ 18-24 tại TP. Hồ Chí Minh.
            </p>

            {/* <div className="pill-row">
              <div className="pill">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </span>
                <b>Nhận diện</b> dấu hiệu
              </div>
              <div className="pill">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 8h.01M11 12h1v6h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </span>
                <b>Hiểu đúng</b> rủi ro
              </div>
              <div className="pill">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 11h6M9 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M7 3h10a2 2 0 0 1 2 2v16l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </span>
                <b>Bắt đầu</b> bước nhỏ
              </div>
            </div> */}

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {/* <a className="btn primary" href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </span>
                Về chúng mình
              </a> */}
              <a
                className="btn"
                href="#qna"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("qna");
                }}
              >
                <span className="icon" aria-hidden="true">
                  <i
                    className="fa-regular fa-circle-question"
                    aria-hidden="true"
                  ></i>
                </span>
                Q&A NHANH
              </a>
              <a
                className="btn"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("test");
                }}
              >
                <span className="icon" aria-hidden="true">
                  <i
                    className="fa-solid fa-pen-to-square"
                    aria-hidden="true"
                  ></i>
                </span>
                BÀI TEST DẠ DÀY
              </a>
            </div>

            <div className="helper">
              <div className="dot" aria-hidden="true"></div>
              <div>
                Nội dung mang tính tham khảo và không thay thế tư vấn y khoa.
              </div>
            </div>
          </div>

          <div className="panel pad hero-ill">
            <div className="glass" aria-hidden="true"></div>

            <svg
              viewBox="0 0 640 520"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Minh họa Êm Dạ Mode"
            >
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="rgba(110,231,200,0.95)" />
                  <stop offset="0.55" stopColor="rgba(122,166,255,0.9)" />
                  <stop offset="1" stopColor="rgba(255,123,212,0.75)" />
                </linearGradient>
                <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="14" />
                </filter>
              </defs>

              <circle
                cx="160"
                cy="140"
                r="110"
                fill="rgba(110,231,200,0.35)"
                filter="url(#blur)"
              />
              <circle
                cx="460"
                cy="160"
                r="120"
                fill="rgba(122,166,255,0.30)"
                filter="url(#blur)"
              />
              <circle
                cx="390"
                cy="400"
                r="130"
                fill="rgba(255,123,212,0.18)"
                filter="url(#blur)"
              />

              <g transform="translate(110,160)">
                <rect
                  x="0"
                  y="0"
                  rx="22"
                  ry="22"
                  width="420"
                  height="260"
                  fill="rgba(255,255,255,0.08)"
                  stroke="rgba(255,255,255,0.18)"
                />
                <rect
                  x="18"
                  y="20"
                  rx="16"
                  ry="16"
                  width="384"
                  height="210"
                  fill="rgba(7,11,22,0.85)"
                  stroke="rgba(255,255,255,0.14)"
                />
                <g transform="translate(38,48)">
                  <rect
                    x="0"
                    y="0"
                    rx="14"
                    ry="14"
                    width="210"
                    height="60"
                    fill="rgba(255,255,255,0.06)"
                    stroke="rgba(255,255,255,0.12)"
                  />
                  <rect
                    x="0"
                    y="78"
                    rx="14"
                    ry="14"
                    width="320"
                    height="42"
                    fill="rgba(255,255,255,0.06)"
                    stroke="rgba(255,255,255,0.12)"
                  />
                  <rect
                    x="0"
                    y="132"
                    rx="14"
                    ry="14"
                    width="280"
                    height="42"
                    fill="rgba(255,255,255,0.06)"
                    stroke="rgba(255,255,255,0.12)"
                  />
                  <rect
                    x="0"
                    y="186"
                    rx="14"
                    ry="14"
                    width="180"
                    height="24"
                    fill="rgba(110,231,200,0.16)"
                    stroke="rgba(110,231,200,0.30)"
                  />
                </g>

                <rect
                  x="-20"
                  y="266"
                  rx="18"
                  ry="18"
                  width="460"
                  height="56"
                  fill="rgba(255,255,255,0.06)"
                  stroke="rgba(255,255,255,0.14)"
                />
                <rect
                  x="90"
                  y="284"
                  rx="12"
                  ry="12"
                  width="240"
                  height="18"
                  fill="rgba(255,255,255,0.08)"
                />
              </g>

              <g transform="translate(360,92)">
                <rect
                  x="0"
                  y="0"
                  rx="18"
                  ry="18"
                  width="210"
                  height="140"
                  fill="rgba(255,255,255,0.08)"
                  stroke="rgba(255,255,255,0.18)"
                />
                <rect
                  x="16"
                  y="18"
                  rx="10"
                  ry="10"
                  width="178"
                  height="24"
                  fill="rgba(255,255,255,0.06)"
                />
                <rect
                  x="16"
                  y="54"
                  rx="10"
                  ry="10"
                  width="128"
                  height="18"
                  fill="rgba(255,255,255,0.06)"
                />
                <rect
                  x="16"
                  y="78"
                  rx="10"
                  ry="10"
                  width="162"
                  height="18"
                  fill="rgba(255,255,255,0.06)"
                />
                <rect
                  x="16"
                  y="108"
                  rx="12"
                  ry="12"
                  width="86"
                  height="18"
                  fill="rgba(255,107,107,0.16)"
                  stroke="rgba(255,107,107,0.35)"
                />
                <circle cx="186" cy="30" r="8" fill="rgba(255,107,107,0.9)" />
              </g>

              <g transform="translate(88,96)">
                <rect
                  x="0"
                  y="0"
                  rx="20"
                  ry="20"
                  width="190"
                  height="44"
                  fill="rgba(255,255,255,0.06)"
                  stroke="rgba(255,255,255,0.14)"
                />
                <text
                  x="18"
                  y="28"
                  fontFamily="ui-sans-serif, system-ui"
                  fontSize="14"
                  fill="rgba(238,242,255,0.95)"
                  fontWeight="700"
                >
                  Êm Dạ Mode
                </text>
                <rect
                  x="122"
                  y="10"
                  rx="12"
                  ry="12"
                  width="58"
                  height="24"
                  fill="rgba(110,231,200,0.22)"
                  stroke="rgba(110,231,200,0.35)"
                />
                <circle cx="166" cy="22" r="10" fill="url(#g1)" />
              </g>

              <g transform="translate(458,320)">
                <path
                  d="M40 10c14 0 24 10 24 24 0 10-6 18-14 22 2 4 4 8 4 14 0 16-12 28-28 28-18 0-30-13-30-30 0-10 4-18 12-24-2-6-2-12 2-18 6-10 16-16 30-16Z"
                  fill="rgba(255,255,255,0.08)"
                  stroke="rgba(255,255,255,0.18)"
                />
                <path
                  d="M20 40c10-2 18 2 24 10"
                  stroke="rgba(110,231,200,0.9)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M28 64c10 2 18-2 22-10"
                  stroke="rgba(122,166,255,0.9)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 style={{ marginTop: 0 }}>
          <span className="bar" aria-hidden="true"></span>Vấn đề dạ dày đang được trẻ hoá một cách rõ rệt
        </h2>
        <div className="panel pad">
          {/* <h3 className="head-introduce">
            Vấn đề dạ dày đang được trẻ hoá một cách rõ rệt
          </h3> */}
          <p className="sub-introduce">
            Các vấn đề dạ dày đang tăng và xuất hiện nhiều ở nhóm trẻ, đặc biệt
            khi lịch học, deadline và thói quen ăn uống thất thường trở thành
            “bình thường mới”.
          </p>

          <section className="section">
            <h3 className="head-introduce">
              {/* <span className="bar" aria-hidden="true"></span> */}
              Số liệu nền cho
              bối cảnh
            </h3>
            <div className="grid-4">
              <div className="card">
                <div className="top">
                  <div className="i" aria-hidden="true">
                    <i className="fa-solid fa-users" aria-hidden="true"></i>
                  </div>
                  <div className="n">5-10</div>
                </div>
                <div className="d">
                  Triệu người mắc trào ngược dạ dày thực quản GERD.
                </div>
              </div>
              <div className="card">
                <div className="top">
                  <div className="i" aria-hidden="true">
                    <i className="fa-solid fa-percent" aria-hidden="true"></i>
                  </div>
                  <div className="n">15-20%</div>
                </div>
                <div className="d">
                  Dân số Việt Nam được ghi nhận mắc viêm loét dạ dày.
                </div>
              </div>
              <div className="card">
                <div className="top">
                  <div className="i" aria-hidden="true">
                    <i className="fa-solid fa-bacteria" aria-hidden="true"></i>
                  </div>
                  <div className="n">~70%</div>
                </div>
                <div className="d">
                  Dân số có thể nhiễm vi khuẩn HP (yếu tố liên quan viêm loét và
                  ung thư dạ dày).
                </div>
              </div>
              <div className="card">
                <div className="top">
                  <div className="i" aria-hidden="true">
                    <i className="fa-solid fa-globe" aria-hidden="true"></i>
                  </div>
                  <div className="n">Top 18/20</div>
                </div>
                <div className="d">
                  Quốc gia có tỷ lệ ung thư dạ dày cao nhất thế giới.
                </div>
              </div>
            </div>
          </section>

          <div className="context-divider">
             <p className="sub">
               Người trẻ đang thiếu nhận thức về sự nghiêm trọng của các bệnh lý dạ dày, 
               nên có xu hướng xem nhẹ triệu chứng, duy trì lối sống hại dạ dày và chỉ bắt đầu xử lý khi bệnh đã chuyển nặng. 
               Bối cảnh này cho thấy nhu cầu cấp thiết của các hoạt động truyền thông – giáo dục sức khỏe hướng đến người trẻ, 
               đặc biệt trong môi trường học đường và không gian số.
             </p>
             <div className="highlight-box">
               <p className="sub">
                 <b>Êm Dạ Mode</b> tạo ra một "cú chạm" vừa đủ: giúp bạn <strong>nhận diện dấu hiệu</strong>, 
                 <strong> hiểu đúng nguyên nhân và rủi ro</strong>, <strong>rồi bắt đầu một thay đổi nhỏ</strong> để bảo vệ dạ dày ngay trong lịch sống bận rộn.
               </p>
             </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <h2>
          <span className="bar" aria-hidden="true"></span>Thông qua chiến dịch
          chúng mình mong muốn
        </h2>
        <div className="grid-3">
          <div className="kpi">
            <h3>Nhận thức</h3>
            <p>
              Nâng cao nhận thức về mức độ nghiêm trọng của các vấn đề dạ dày.
            </p>
          </div>
          <div className="kpi">
            <h3>Kiến thức</h3>
            <p>Trang bị những hiểu biết đúng đắn, dễ hiểu về các nguyên nhân gốc rễ và những giải pháp thực tế để phòng ngừa và cải thiện.</p>
          </div>
          <div className="kpi">
            <h3>Hành động</h3>
            <p>
              Thúc đẩy chủ động thay đổi ít nhất một thói quen để bảo vệ sức khoẻ dạ dày.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="panel pad">
          <h2 style={{ marginTop: 0 }}>
            <span className="bar" aria-hidden="true"></span>Vì sao lại là Êm Dạ
            Mode?
          </h2>
          <p className="sub">
            <strong>Người trẻ sợ bị gián đoạn nhịp sống hơn là sợ bệnh dạ dày</strong> – trì hoãn vì thiếu mốc để hành động, rào cản thời gian và phiền phức khi đi khám và hơn hết là sợ ảnh hưởng hiệu suất làm việc, học tập.
          </p>
          <p className="sub" style={{ marginTop: "10px" }}>
            <strong>Từ thực tế đó, chiến dịch đã đưa ra thông điệp:</strong> Đừng để cơn đau dạ dày “pop-up” làm gián đoạn nhịp sống – upgrade để giữ trải nghiệm sống mượt mà.
          </p>
          <div className="highlight-box">
            <p className="sub">
              Chiến dịch kêu gọi bật <b>Êm Dạ Mode</b> như một cách upgrade lối sống theo hướng nhẹ nhàng, dễ làm: check sớm - chọn bước nhỏ phù hợp – duy trì đúng nhịp, để hạn chế pop-up quay lại và giữ cho ngày làm việc/học tập “mượt” hơn.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="section">
        <h2>
          <span className="bar" aria-hidden="true"></span>Tóm tắt 4 trang còn
          lại
        </h2>
        <div className="cards">
          <div className="card-mini">
            <div className="iconbig" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M22 21v-2a4 4 0 0 0-3-3.87"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 3.13a4 4 0 0 1 0 7.75"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3>About us</h3>
            <p>Giới thiệu team, mục tiêu, core team.</p>
            <a
              className="readmore"
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("about");
              }}
            >
              Tìm hiểu thêm
            </a>
          </div>
          <div className="card-mini">
            <div className="iconbig" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Q&A</h3>
            <p>Q&A có sẵn dạng thẻ lật, mỗi câu có nguồn và related.</p>
            <a
              className="readmore"
              href="#qna"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("qna");
              }}
            >
              Tìm hiểu thêm
            </a>
          </div>
          <div className="card-mini">
            <div className="iconbig" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 11h6M9 15h4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7 3h10a2 2 0 0 1 2 2v16l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Test</h3>
            <p>Test demo kiểu MBTI, có progress và kết quả.</p>
            <a
              className="readmore"
              href="#test"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("test");
              }}
            >
              Tìm hiểu thêm
            </a>
          </div>
          <div className="card-mini">
            <div className="iconbig" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16v12H4V6Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="m4 7 8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Liên hệ</h3>
            <p>Thông tin liên hệ và form gửi email nhanh.</p>
            <a
              className="readmore"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("contact");
              }}
            >
              Tìm hiểu thêm
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
};
