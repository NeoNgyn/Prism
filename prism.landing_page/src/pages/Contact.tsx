import type { FormEvent } from 'react';

interface ContactProps {
  showToast: (title: string, message: string) => void;
  onNavigate: (page: string) => void;
}

export const Contact = ({ showToast, onNavigate }: ContactProps) => {
  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const to = "prismproject.fptu@gmail.com";
    const cc = "hanhndmss180820@fpt.edu.vn";
    const subject = encodeURIComponent(`[Liên hệ] ${data.topic || "Khác"} | Êm Dạ Mode`);
    const body = encodeURIComponent(
      `Họ và tên: ${data.name}\nEmail: ${data.email}\nSố điện thoại: ${data.phone}\n\nNội dung:\n${data.message}`
    );
    
    window.location.href = `mailto:${to}?cc=${cc}&subject=${subject}&body=${body}`;
    showToast('Sắp mở email', 'Trình duyệt sẽ mở ứng dụng email để bạn gửi liên hệ.');
    e.currentTarget.reset();
  };

  return (
    <>
      <section className="section">
        <div className="panel pad">
          <p className="kicker"><span className="badge">Liên hệ</span></p>
          <h2 style={{ marginTop: 0 }}><span className="bar" aria-hidden="true"></span>Thông tin liên hệ</h2>
          <p className="sub">Nếu bạn muốn hợp tác truyền thông, tài trợ hoặc cần thêm thông tin về hoạt động, hãy để lại lời nhắn.</p>

          <div className="grid-2" style={{ marginTop: '12px' }}>
            <div className="kpi">
              <h3>Phone/Zalo</h3>
              <p><a href="tel:0815398633">0815398633</a></p>
            </div>
            <div className="kpi">
              <h3>Email dự án</h3>
              <p><a href="mailto:prismproject.fptu@gmail.com">prismproject.fptu@gmail.com</a></p>
            </div>
            <div className="kpi">
              <h3>Email trưởng BTC</h3>
              <p>
                <a href="mailto:hanhndmss180820@fpt.edu.vn">hanhndmss180820@fpt.edu.vn</a><br />
                <span className="small">(Ms. Nguyễn Đặng Mỹ Hạnh)</span>
              </p>
            </div>
            <div className="kpi">
              <h3>Giờ phản hồi</h3>
              <p>Trong 24-48h (demo). Có thể chỉnh theo quy trình của nhóm.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="panel pad">
          <h2 style={{ marginTop: 0 }}><span className="bar" aria-hidden="true"></span>Gửi liên hệ</h2>
          <p className="sub">Form này dùng mailto để mở ứng dụng email trên máy của bạn và tạo sẵn nội dung gửi về email dự án.</p>

          <form onSubmit={handleContactSubmit}>
            <div className="form">
              <div className="field">
                <label htmlFor="name">Họ và tên</label>
                <input id="name" name="name" autoComplete="name" placeholder="Nguyễn Văn A" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
              </div>
              <div className="field">
                <label htmlFor="phone">Số điện thoại</label>
                <input id="phone" name="phone" autoComplete="tel" placeholder="09xx xxx xxx" />
              </div>
              <div className="field">
                <label htmlFor="topic">Bạn muốn liên hệ về</label>
                <select id="topic" name="topic">
                  <option>Hợp tác chuyên môn</option>
                  <option>Tài trợ</option>
                  <option>Truyền thông</option>
                  <option>Khác</option>
                </select>
              </div>
              <div className="field" style={{ gridColumn: '1/-1' }}>
                <label htmlFor="message">Nội dung</label>
                <textarea id="message" name="message" placeholder="Bạn muốn nhắn gì cho tụi mình?"></textarea>
              </div>
            </div>

            <div style={{ marginTop: '12px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button className="btn primary" type="submit">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Gửi liên hệ
              </button>
              <a className="btn" href="#qna" onClick={(e) => { e.preventDefault(); onNavigate('qna'); }}>
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </span>
                Xem Q&A trước
              </a>
            </div>
          </form>

          <div className="helper">
            <div className="dot" aria-hidden="true"></div>
            <div>Nếu muốn gửi mail tự động không cần mail client, có thể tích hợp EmailJS hoặc Formspree ở bản final.</div>
          </div>
        </div>
      </section>
    </>
  );
};
