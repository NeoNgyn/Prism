import { useState } from 'react';
import Toast from '../components/Toast';

export default function Contact() {
  const [toast, setToast] = useState({ show: false, title: '', message: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const mailto = `mailto:contact@emdamode.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Họ tên: ${name}\nEmail: ${email}\n\nNội dung:\n${message}`
    )}`;

    window.location.href = mailto;

    setToast({
      show: true,
      title: 'Email đã mở!',
      message: 'Vui lòng gửi email từ ứng dụng email của bạn.'
    });
  };

  return (
    <main>
      <div className="container">
        <section className="section">
          <div className="panel pad">
            <div className="kicker">LIÊN HỆ CHÚNG TÔI</div>
            <h1 className="h1">Kết nối với Êm Dạ Mode</h1>
            <p className="sub">
              Bạn có câu hỏi, góp ý hoặc muốn hợp tác? Hãy liên hệ với chúng tôi qua form dưới đây. 
              Chúng tôi sẽ phản hồi trong vòng 24–48 giờ.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="grid-2">
            <div className="panel pad">
              <h2 style={{ marginTop: 0 }}>
                <span className="bar"></span>
                Gửi tin nhắn
              </h2>
              <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                  <label>Họ tên *</label>
                  <input type="text" name="name" placeholder="Nguyễn Văn A" required />
                </div>
                <div className="field">
                  <label>Email *</label>
                  <input type="email" name="email" placeholder="example@gmail.com" required />
                </div>
                <div className="field" style={{ gridColumn: '1 / -1' }}>
                  <label>Chủ đề *</label>
                  <select name="subject" required>
                    <option value="">-- Chọn chủ đề --</option>
                    <option value="Tư vấn sức khỏe dạ dày">Tư vấn sức khỏe dạ dày</option>
                    <option value="Hợp tác truyền thông">Hợp tác truyền thông</option>
                    <option value="Góp ý về chiến dịch">Góp ý về chiến dịch</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>
                <div className="field" style={{ gridColumn: '1 / -1' }}>
                  <label>Nội dung *</label>
                  <textarea name="message" placeholder="Nhập nội dung tin nhắn của bạn..." required></textarea>
                </div>
                <div className="field" style={{ gridColumn: '1 / -1' }}>
                  <div className="chip-row">
                    <span className="chip">💬 Phản hồi trong 24–48h</span>
                    <span className="chip">🔒 Bảo mật thông tin</span>
                  </div>
                </div>
                <div className="field" style={{ gridColumn: '1 / -1' }}>
                  <button type="submit" className="btn primary">
                    <span className="icon">📧</span>
                    Gửi tin nhắn
                  </button>
                </div>
              </form>
            </div>

            <div>
              <div className="panel pad">
                <h2 style={{ marginTop: 0 }}>
                  <span className="bar"></span>
                  Thông tin liên hệ
                </h2>
                <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.65', margin: '10px 0' }}>
                  <strong style={{ color: 'var(--text)' }}>Email:</strong><br />
                  contact@emdamode.com
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.65', margin: '10px 0' }}>
                  <strong style={{ color: 'var(--text)' }}>Địa chỉ:</strong><br />
                  Đại học FPT, TP. Hồ Chí Minh
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.65', margin: '10px 0' }}>
                  <strong style={{ color: 'var(--text)' }}>Thời gian hỗ trợ:</strong><br />
                  Thứ 2 – Thứ 6: 8h00 – 17h00
                </p>
              </div>

              <div className="panel pad" style={{ marginTop: '14px' }}>
                <h3 style={{ marginTop: 0, fontSize: '16px' }}>Theo dõi chúng tôi</h3>
                <div className="chip-row">
                  <button className="chipbtn">📘 Facebook</button>
                  <button className="chipbtn">📸 Instagram</button>
                  <button className="chipbtn">🐦 Twitter</button>
                  <button className="chipbtn">💼 LinkedIn</button>
                </div>
              </div>

              <div className="panel pad" style={{ marginTop: '14px' }}>
                <h3 style={{ marginTop: 0, fontSize: '16px' }}>Câu hỏi thường gặp</h3>
                <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.65', margin: '10px 0' }}>
                  Trước khi liên hệ, bạn có thể tham khảo phần <a href="/qna" style={{ color: 'var(--mint)' }}>Q&A</a> để 
                  tìm câu trả lời nhanh chóng cho các câu hỏi phổ biến về sức khỏe dạ dày.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="helper">
          <span className="dot"></span>
          <span>
            <strong>Chính sách bảo mật:</strong> Thông tin bạn cung cấp sẽ được bảo mật tuyệt đối và chỉ sử dụng để phản hồi yêu cầu của bạn.
          </span>
        </div>
      </div>

      <Toast
        show={toast.show}
        title={toast.title}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </main>
  );
}
