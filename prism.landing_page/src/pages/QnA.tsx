import { useRef } from 'react';
import { QACard } from '../components/QACard';
import { qaData } from '../data/qaData';

interface QnAProps {
  showToast: (title: string, message: string) => void;
}

export const QnA = ({ showToast }: QnAProps) => {
  const qaRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleJumpTo = (id: string) => {
    const element = qaRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleAskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = (formData.get('email') as string || '').trim();
    const q = (formData.get('question') as string || '').trim();
    
    if (!q) {
      showToast('Lỗi', 'Vui lòng nhập câu hỏi của bạn.');
      return;
    }

    const to = "prismproject.fptu@gmail.com";
    const subject = encodeURIComponent("Q&A | Câu hỏi từ website Êm Dạ Mode");
    const body = encodeURIComponent(
      `Câu hỏi:\n${q}\n\n${email ? `Email người gửi: ${email}` : '(Không để lại email)'}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    showToast('Sắp mở email', 'Trình duyệt sẽ mở ứng dụng email của bạn để gửi câu hỏi.');
    e.currentTarget.reset();
  };

  return (
    <>
      <section className="section">
        <div className="panel pad">
          <p className="kicker"><span className="badge">Q&A có sẵn</span></p>
          <h2 style={{ marginTop: 0 }}><span className="bar" aria-hidden="true"></span>Câu hỏi thường gặp</h2>
          <p className="sub">
            Danh sách câu hỏi có sẵn theo dạng thẻ lật. Bấm vào câu hỏi để lật sang câu trả lời.
            Trong mỗi câu trả lời luôn có nguồn tham khảo và related questions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="qa-grid" aria-label="Danh sách Q&A">
          {qaData.map((item) => (
            <div key={item.id} ref={(el) => { qaRefs.current[item.id] = el; }}>
              <QACard item={item} allItems={qaData} onJumpTo={handleJumpTo} />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="panel pad">
          <h2 style={{ marginTop: 0 }}><span className="bar" aria-hidden="true"></span>Gửi câu hỏi cho dự án</h2>
          <p className="sub">Bạn không thấy câu hỏi của mình? Nhập câu hỏi tại đây, tụi mình sẽ phản hồi qua email.</p>

          <form onSubmit={handleAskSubmit}>
            <div className="form">
              <div className="field">
                <label htmlFor="askEmail">Email của bạn (không bắt buộc)</label>
                <input id="askEmail" name="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="field" style={{ gridColumn: '1/-1' }}>
                <label htmlFor="askQ">Nhập câu hỏi</label>
                <textarea id="askQ" name="question" placeholder="Ví dụ: Đau thượng vị về đêm có nguy hiểm không?"></textarea>
              </div>
            </div>

            <div style={{ marginTop: '12px' }}>
              <button className="btn primary" type="submit">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Send
              </button>
            </div>

            <p className="small" style={{ marginTop: '10px' }}>
              Nếu mailto không hoạt động, bạn có thể gửi trực tiếp tới <a href="mailto:prismproject.fptu@gmail.com">prismproject.fptu@gmail.com</a>.
            </p>
          </form>
        </div>
      </section>
    </>
  );
};
