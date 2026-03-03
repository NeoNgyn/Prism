import { useState } from 'react';
import Toast from '../components/Toast';

interface QAItemData {
  question: string;
  preview: string;
  answer: string;
  meta?: string;
}

export default function QnA() {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [toast, setToast] = useState({ show: false, title: '', message: '' });

  const qaItems: QAItemData[] = [
    {
      question: 'Tại sao sinh viên dễ mắc bệnh dạ dày?',
      preview: 'Căng thẳng học tập, ăn uống không đều, thức khuya, uống nhiều caffeine...',
      answer: `Sinh viên thường phải đối mặt với áp lực học tập, thi cử, ăn uống không đúng giờ, thức khuya làm bài tập hoặc giải trí. 
        Những yếu tố này làm tăng tiết acid dạ dày, gây viêm loét. Ngoài ra, việc lạm dụng caffeine, đồ ăn nhanh, cay nóng cũng làm tình trạng trở nên nghiêm trọng hơn.`,
      meta: 'Nguồn: Bộ Y tế Việt Nam, Khảo sát sinh viên TP.HCM 2023.'
    },
    {
      question: 'Triệu chứng bệnh dạ dày thường gặp?',
      preview: 'Đau bụng trên rốn, ợ nóng, chướng bụng, buồn nôn...',
      answer: `Các triệu chứng phổ biến bao gồm đau thượng vị (vùng trên rốn), ợ nóng, ợ chua, đầy bụng, chướng hơi, buồn nôn, 
        nôn ói, mất cảm giác thèm ăn. Nếu các triệu chứng kéo dài trên 2 tuần hoặc xuất hiện máu trong phân, hãy đến cơ sở y tế ngay.`,
      meta: 'Nguồn: WHO, Hiệp hội Tiêu hóa Việt Nam.'
    },
    {
      question: 'Làm sao để phòng ngừa bệnh dạ dày?',
      preview: 'Ăn đúng giờ, uống đủ nước, quản lý stress, tránh đồ cay nóng...',
      answer: `Để phòng ngừa, bạn nên ăn uống đều đặn (3 bữa chính + 1–2 bữa phụ), uống đủ 2–2.5L nước/ngày, 
        hạn chế đồ cay, dầu mỡ, caffeine, rượu bia. Quản lý stress bằng cách tập thể dục, ngủ đủ giấc, thư giãn. 
        Tránh ăn quá no hoặc bỏ bữa, không nằm ngay sau khi ăn.`,
      meta: 'Nguồn: Bộ Y tế, Hiệp hội Dinh dưỡng Việt Nam.'
    },
    {
      question: 'Có nên uống thuốc dạ dày tự ý không?',
      preview: 'Không nên. Cần tham khảo ý kiến bác sĩ trước khi dùng thuốc...',
      answer: `Không nên tự ý mua thuốc dạ dày về uống mà không có chỉ định của bác sĩ. Việc lạm dụng thuốc giảm acid 
        có thể gây tác dụng phụ, che giấu triệu chứng bệnh nặng hơn. Nếu có triệu chứng kéo dài, hãy đến bệnh viện 
        hoặc phòng khám để được khám, chẩn đoán và kê đơn thuốc phù hợp.`,
      meta: 'Nguồn: Cục Quản lý Dược, Bộ Y tế Việt Nam.'
    },
    {
      question: 'Ăn khuya có gây hại cho dạ dày?',
      preview: 'Có. Ăn khuya làm tăng acid dạ dày, gây khó tiêu...',
      answer: `Ăn khuya (sau 21h hoặc trước khi ngủ dưới 2 giờ) làm dạ dày phải hoạt động liên tục, tăng tiết acid, 
        gây ợ nóng, khó tiêu, viêm loét. Nếu phải thức khuya, hãy ăn bữa phụ nhẹ nhàng (trái cây, sữa chua, bánh mì nguyên cám) 
        thay vì đồ ăn nặng, cay nóng.`,
      meta: 'Nguồn: Viện Dinh dưỡng Quốc gia, Bộ Y tế.'
    },
    {
      question: 'Stress ảnh hưởng thế nào đến dạ dày?',
      preview: 'Stress kéo dài làm tăng acid, giảm lớp niêm mạc bảo vệ...',
      answer: `Khi bạn căng thẳng, cơ thể tiết nhiều hormone cortisol, làm tăng acid dạ dày và giảm khả năng tự bảo vệ của niêm mạc. 
        Điều này dẫn đến viêm, loét dạ dày. Để giảm stress, bạn nên tập thể dục, thiền, yoga, ngủ đủ 7–8 giờ/đêm, sắp xếp công việc hợp lý.`,
      meta: 'Nguồn: Tổ chức Y tế Thế giới (WHO).'
    }
  ];

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToast({
      show: true,
      title: 'Câu hỏi đã gửi!',
      message: 'Chúng tôi sẽ trả lời bạn qua email trong vòng 24–48 giờ.'
    });
  };

  return (
    <main>
      <div className="container">
        <section className="section">
          <div className="panel pad">
            <div className="kicker">HỎI & ĐÁP</div>
            <h1 className="h1">Câu hỏi thường gặp</h1>
            <p className="sub">
              Tìm hiểu các câu hỏi phổ biến về sức khỏe dạ dày, nguyên nhân, triệu chứng, 
              và cách phòng ngừa. Nhấn vào thẻ để xem câu trả lời chi tiết.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="qa-grid">
            {qaItems.map((item, idx) => (
              <div key={idx} className="flip">
                <div className={`qa-card ${openCard === idx ? 'open' : ''}`} onClick={() => toggleCard(idx)}>
                  <div className="qa-inner">
                    <div className="qa-face qa-front">
                      <div className="qmark">
                        <span className="icon">❓</span>
                      </div>
                      <h3>{item.question}</h3>
                      <p>{item.preview}</p>
                    </div>
                    <div className="qa-face qa-back">
                      <div className="qa-close">
                        <button onClick={(e) => { e.stopPropagation(); toggleCard(idx); }}>
                          ✕ Đóng
                        </button>
                      </div>
                      <div style={{ padding: '16px' }}>
                        <h4>{item.question}</h4>
                        <div className="ans">{item.answer}</div>
                        {item.meta && <div className="meta">{item.meta}</div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="panel pad">
            <h2 style={{ marginTop: 0 }}>
              <span className="bar"></span>
              Gửi câu hỏi của bạn
            </h2>
            <p className="sub">
              Nếu bạn có câu hỏi chưa được giải đáp, hãy gửi cho chúng tôi. 
              Đội ngũ sẽ trả lời qua email trong vòng 24–48 giờ.
            </p>
            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label>Họ tên</label>
                <input type="text" placeholder="Nguyễn Văn A" required />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com" required />
              </div>
              <div className="field" style={{ gridColumn: '1 / -1' }}>
                <label>Câu hỏi của bạn</label>
                <textarea placeholder="Ví dụ: Tôi bị đau dạ dày sau khi ăn cay, làm sao để cải thiện?" required></textarea>
              </div>
              <div className="field" style={{ gridColumn: '1 / -1' }}>
                <div className="chip-row">
                  <span className="chip">💬 Hỗ trợ 24/7</span>
                  <span className="chip">📧 Trả lời qua email</span>
                  <span className="chip">🔒 Bảo mật thông tin</span>
                </div>
              </div>
              <div className="field" style={{ gridColumn: '1 / -1' }}>
                <button type="submit" className="btn primary">
                  <span className="icon">📤</span>
                  Gửi câu hỏi
                </button>
              </div>
            </form>
          </div>
        </section>

        <div className="helper">
          <span className="dot"></span>
          <span>
            <strong>Lưu ý:</strong> Thông tin trên website mang tính tham khảo. 
            Nếu có triệu chứng nghiêm trọng, hãy đến cơ sở y tế để được khám và tư vấn chuyên môn.
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
