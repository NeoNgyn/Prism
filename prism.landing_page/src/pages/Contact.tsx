import { type FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  showToast: (title: string, message: string) => void;
  onNavigate: (page: string) => void;
}

export const Contact = ({ showToast, onNavigate }: ContactProps) => {
  const [isSending, setIsSending] = useState(false);

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Lưu reference của form trước khi vào async
    const form = e.currentTarget;
    
    // Kiểm tra cấu hình EmailJS
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      showToast('Lỗi cấu hình', 'Vui lòng cấu hình EmailJS trong file .env. Xem hướng dẫn trong EMAILJS_SETUP.md');
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Validate form
    if (!data.name || !data.email || !data.message) {
      showToast('Thiếu thông tin', 'Vui lòng điền đầy đủ họ tên, email và nội dung.');
      return;
    }

    setIsSending(true);

    try {
      // Gửi email qua EmailJS
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        phone: data.phone || 'Không cung cấp',
        topic: data.topic || 'Khác',
        message: data.message,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('EmailJS Response:', response);

      // EmailJS trả về status 200 khi thành công
      if (response.status === 200 || response.text === 'OK') {
        showToast('Gửi thành công!', 'Email của bạn đã được gửi. Chúng tôi sẽ phản hồi trong 24-48h.');
        form.reset();
      } else {
        throw new Error('Email sending failed with status: ' + response.status);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      showToast('Gửi thất bại', 'Có lỗi xảy ra khi gửi email. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua số điện thoại.');
    } finally {
      setIsSending(false);
    }
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
          <p className="sub">Điền thông tin bên dưới và gửi trực tiếp. Email sẽ được gửi đến nguyenphucnhan2004@gmail.com.</p>

          <form onSubmit={handleContactSubmit}>
            <div className="form">
              <div className="field">
                <label htmlFor="name">Họ và tên <span style={{color: 'red'}}>*</span></label>
                <input id="name" name="name" autoComplete="name" placeholder="Nguyễn Văn A" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email <span style={{color: 'red'}}>*</span></label>
                <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
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
                <label htmlFor="message">Nội dung <span style={{color: 'red'}}>*</span></label>
                <textarea id="message" name="message" placeholder="Bạn muốn nhắn gì cho tụi mình?" required></textarea>
              </div>
            </div>

            <div style={{ marginTop: '12px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button className="btn primary" type="submit" disabled={isSending}>
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {isSending ? 'Đang gửi...' : 'Gửi liên hệ'}
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
            <div>Email sẽ được gửi trực tiếp qua EmailJS. Đảm bảo đã cấu hình file .env (xem EMAILJS_SETUP.md).</div>
          </div>
        </div>
      </section>
    </>
  );
};
