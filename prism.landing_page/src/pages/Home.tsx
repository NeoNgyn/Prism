import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { icon: '👥', number: '60%', description: 'Sinh viên 18–24 tuổi tại TP.HCM gặp vấn đề về dạ dày do stress, ăn uống không đều' },
    { icon: '🚑', number: '40%', description: 'Trong số đó không nhận thức rõ mức độ nghiêm trọng của bệnh' },
    { icon: '📱', number: '75%', description: 'Sinh viên thường xuyên sử dụng thiết bị điện tử trước khi ngủ, ảnh hưởng tiêu hóa' },
    { icon: '⚡', number: '82%', description: 'Sinh viên có thói quen ăn muộn hoặc bỏ bữa, làm tăng nguy cơ bệnh dạ dày' }
  ];

  const kpis = [
    {
      title: 'Tăng nhận thức',
      description: 'Nâng cao nhận thức về sức khỏe dạ dày trong sinh viên 18–24 tuổi tại TP.HCM qua các hoạt động truyền thông sáng tạo.'
    },
    {
      title: 'Thay đổi hành vi',
      description: 'Khuyến khích sinh viên cải thiện thói quen ăn uống, tránh ăn khuya, quản lý stress để bảo vệ dạ dày.'
    },
    {
      title: 'Xây dựng cộng đồng',
      description: 'Tạo không gian giao lưu để sinh viên chia sẻ kinh nghiệm, hỗ trợ lẫn nhau trong hành trình chăm sóc sức khỏe dạ dày.'
    }
  ];

  const cards = [
    {
      icon: '🍽️',
      title: 'Ăn đúng giờ',
      description: 'Giúp dạ dày hoạt động ổn định, giảm stress tiêu hóa. Đặc biệt quan trọng với sinh viên có lịch học không cố định.'
    },
    {
      icon: '🧘',
      title: 'Quản lý stress',
      description: 'Stress kéo dài làm tăng acid dạ dày, gây loét. Thư giãn, nghỉ ngơi đủ giấc để bảo vệ dạ dày.'
    },
    {
      icon: '🥗',
      title: 'Chế độ lành mạnh',
      description: 'Tránh đồ cay, dầu mỡ, caffeine, rượu bia. Ưu tiên rau xanh, trái cây, ngũ cốc nguyên hạt.'
    },
    {
      icon: '💧',
      title: 'Uống đủ nước',
      description: 'Nước giúp hòa loãng acid dạ dày, hỗ trợ tiêu hóa. Uống 2–2.5L mỗi ngày cho cơ thể khỏe mạnh.'
    }
  ];

  return (
    <main>
      <div className="container">
        <div className="bg-grid"></div>

        <section className="section">
          <div className="hero-grid">
            <div className="panel pad">
              <div className="badge">
                <span className="icon">🎯</span>
                <span>Sức khỏe dạ dày cho Gen Z</span>
              </div>
              <h1 className="h1">Êm Dạ Mode<br/>cho thế hệ trẻ</h1>
              <p className="sub">
                Chiến dịch nâng cao nhận thức sức khỏe dạ dày cho thanh niên 18–24 tuổi tại TP.HCM – giúp bạn hiểu rõ nguyên nhân, triệu chứng, và cách phòng ngừa bệnh dạ dày một cách dễ hiểu, thực tế.
              </p>
              <div className="pill-row">
                <div className="pill">
                  <span className="icon">👥</span>
                  <span>Dành cho <b>sinh viên 18–24 tuổi</b></span>
                </div>
                <div className="pill">
                  <span className="icon">📍</span>
                  <span>Tại <b>TP. Hồ Chí Minh</b></span>
                </div>
              </div>
              <div style={{ marginTop: '18px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Link to="/test" className="btn primary">
                  <span className="icon">📝</span>
                  Kiểm tra sức khỏe dạ dày
                </Link>
                <Link to="/qna" className="btn">
                  <span className="icon">💬</span>
                  Tìm hiểu thêm
                </Link>
              </div>
            </div>

            <div className="panel hero-ill">
              <div className="glass"></div>
              <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="140" r="70" fill="url(#g1)" opacity=".28" />
                <ellipse cx="200" cy="140" rx="50" ry="50" fill="url(#g2)" opacity=".55" />
                <path d="M 150 140 Q 150 90 200 90 Q 250 90 250 140 Q 250 190 200 240 Q 150 190 150 140 Z" fill="url(#g3)" opacity=".65" />
                <circle cx="180" cy="125" r="6" fill="rgba(255,255,255,.7)" />
                <circle cx="220" cy="125" r="6" fill="rgba(255,255,255,.7)" />
                <ellipse cx="200" cy="300" rx="90" ry="20" fill="url(#g4)" opacity=".15" />
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6ee7c8" />
                    <stop offset="100%" stopColor="#7aa6ff" />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7aa6ff" />
                    <stop offset="100%" stopColor="#ff7bd4" />
                  </linearGradient>
                  <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(110,231,200,.4)" />
                    <stop offset="100%" stopColor="rgba(122,166,255,.3)" />
                  </linearGradient>
                  <radialGradient id="g4">
                    <stop offset="0%" stopColor="rgba(110,231,200,.4)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>
            <span className="bar"></span>
            Tình hình sức khỏe dạ dày của Gen Z
          </h2>
          <div className="grid-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="card">
                <div className="top">
                  <div className="i"><span className="icon">{stat.icon}</span></div>
                  <div className="n">{stat.number}</div>
                </div>
                <div className="d">{stat.description}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>
            <span className="bar"></span>
            Mục tiêu chiến dịch
          </h2>
          <div className="grid-3">
            {kpis.map((kpi, idx) => (
              <div key={idx} className="kpi">
                <h3>{kpi.title}</h3>
                <p>{kpi.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>
            <span className="bar"></span>
            Thói quen bảo vệ dạ dày
          </h2>
          <div className="cards">
            {cards.map((card, idx) => (
              <div key={idx} className="card-mini">
                <div className="iconbig">
                  <span className="icon">{card.icon}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
          <Link to="/qna" className="readmore">
            <span className="icon">→</span>
            Tìm hiểu thêm về Q&A
          </Link>
          <div className="helper">
            <span className="dot"></span>
            <span>
              <strong>Lưu ý:</strong> Thông tin mang tính tham khảo. Nếu có triệu chứng kéo dài, hãy đến cơ sở y tế để được thăm khám và tư vấn chuyên nghiệp.
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
