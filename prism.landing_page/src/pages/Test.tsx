import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
  options: Array<{ label: string; score: number }>;
}

export default function Test() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResult, setShowResult] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: 'Bạn có thường xuyên bỏ bữa hoặc ăn không đúng giờ?',
      options: [
        { label: 'Không bao giờ', score: 0 },
        { label: 'Thỉnh thoảng (1–2 lần/tuần)', score: 1 },
        { label: 'Thường xuyên (3–4 lần/tuần)', score: 2 },
        { label: 'Rất thường xuyên (hầu như mỗi ngày)', score: 3 }
      ]
    },
    {
      id: 2,
      question: 'Bạn có thói quen ăn khuya (sau 21h hoặc trước khi ngủ dưới 2 giờ)?',
      options: [
        { label: 'Không bao giờ', score: 0 },
        { label: 'Thỉnh thoảng', score: 1 },
        { label: 'Thường xuyên', score: 2 },
        { label: 'Rất thường xuyên', score: 3 }
      ]
    },
    {
      id: 3,
      question: 'Bạn có uống nhiều caffeine (cà phê, trà, nước tăng lực)?',
      options: [
        { label: 'Không hoặc rất ít (dưới 1 cốc/ngày)', score: 0 },
        { label: '1–2 cốc/ngày', score: 1 },
        { label: '3–4 cốc/ngày', score: 2 },
        { label: 'Trên 4 cốc/ngày', score: 3 }
      ]
    },
    {
      id: 4,
      question: 'Bạn có thường xuyên ăn đồ cay, dầu mỡ, đồ ăn nhanh?',
      options: [
        { label: 'Không bao giờ', score: 0 },
        { label: 'Thỉnh thoảng', score: 1 },
        { label: 'Thường xuyên (3–4 lần/tuần)', score: 2 },
        { label: 'Rất thường xuyên (hầu như mỗi ngày)', score: 3 }
      ]
    },
    {
      id: 5,
      question: 'Bạn có cảm thấy căng thẳng, áp lực kéo dài?',
      options: [
        { label: 'Không', score: 0 },
        { label: 'Thỉnh thoảng', score: 1 },
        { label: 'Thường xuyên', score: 2 },
        { label: 'Rất thường xuyên', score: 3 }
      ]
    },
    {
      id: 6,
      question: 'Bạn có uống rượu, bia hoặc hút thuốc?',
      options: [
        { label: 'Không', score: 0 },
        { label: 'Thỉnh thoảng', score: 1 },
        { label: 'Thường xuyên', score: 2 },
        { label: 'Rất thường xuyên', score: 3 }
      ]
    },
    {
      id: 7,
      question: 'Bạn có thường xuyên cảm thấy đau bụng trên rốn, ợ nóng, chướng bụng?',
      options: [
        { label: 'Không bao giờ', score: 0 },
        { label: 'Thỉnh thoảng', score: 1 },
        { label: 'Thường xuyên', score: 2 },
        { label: 'Rất thường xuyên', score: 3 }
      ]
    },
    {
      id: 8,
      question: 'Bạn có ngủ đủ 7–8 giờ mỗi đêm?',
      options: [
        { label: 'Có, thường xuyên', score: 0 },
        { label: 'Thỉnh thoảng', score: 1 },
        { label: 'Hiếm khi', score: 2 },
        { label: 'Không bao giờ', score: 3 }
      ]
    },
    {
      id: 9,
      question: 'Bạn có uống đủ nước (2–2.5L/ngày)?',
      options: [
        { label: 'Có, thường xuyên', score: 0 },
        { label: 'Thỉnh thoảng', score: 1 },
        { label: 'Hiếm khi', score: 2 },
        { label: 'Không bao giờ', score: 3 }
      ]
    },
    {
      id: 10,
      question: 'Bạn có tập thể dục hoặc vận động đều đặn?',
      options: [
        { label: 'Có, thường xuyên (3–5 lần/tuần)', score: 0 },
        { label: 'Thỉnh thoảng (1–2 lần/tuần)', score: 1 },
        { label: 'Hiếm khi', score: 2 },
        { label: 'Không bao giờ', score: 3 }
      ]
    }
  ];

  const handleSelect = (questionId: number, score: number) => {
    setAnswers({ ...answers, [questionId]: score });
  };

  const goNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const goPrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);

  const getResult = () => {
    if (totalScore <= 10) {
      return {
        category: 'G-Type: Cân bằng',
        color: 'low',
        message: 'Chúc mừng! Bạn đang có thói quen sống khá tốt.',
        description: 'Sức khỏe dạ dày của bạn đang ổn định. Hãy duy trì lối sống lành mạnh, ăn uống đều đặn, ngủ đủ giấc, quản lý stress tốt.',
        recommendations: [
          'Tiếp tục duy trì thói quen ăn uống lành mạnh.',
          'Uống đủ 2–2.5L nước/ngày.',
          'Tập thể dục đều đặn 3–5 lần/tuần.',
          'Kiểm tra sức khỏe định kỳ 6 tháng/lần.'
        ]
      };
    } else if (totalScore <= 18) {
      return {
        category: 'G-Type: Nhạy cảm',
        color: 'mid',
        message: 'Bạn cần lưu ý điều chỉnh một số thói quen.',
        description: 'Dạ dày của bạn đang có dấu hiệu căng thẳng. Hãy cải thiện thói quen ăn uống, giảm căng thẳng, tránh đồ cay nóng.',
        recommendations: [
          'Ăn đúng giờ, tránh bỏ bữa.',
          'Giảm caffeine, đồ cay, dầu mỡ.',
          'Quản lý stress bằng yoga, thiền, thể dục.',
          'Ngủ đủ 7–8 giờ/đêm.',
          'Khám sức khỏe nếu triệu chứng kéo dài.'
        ]
      };
    } else if (totalScore <= 24) {
      return {
        category: 'G-Type: Cảnh báo',
        color: 'high',
        message: 'Bạn có nguy cơ cao mắc bệnh dạ dày.',
        description: 'Thói quen sống hiện tại đang ảnh hưởng tiêu cực đến dạ dày. Hãy thay đổi ngay để tránh biến chứng.',
        recommendations: [
          'Thay đổi chế độ ăn ngay: ăn đúng giờ, tránh đồ cay nóng, dầu mỡ.',
          'Giảm căng thẳng, ngủ đủ giấc.',
          'Tránh rượu, bia, thuốc lá, caffeine.',
          'Tập thể dục nhẹ nhàng.',
          'Đến bệnh viện khám để được tư vấn chuyên môn.'
        ]
      };
    } else {
      return {
        category: 'G-Type: Nguy hiểm',
        color: 'high',
        message: 'Bạn cần đi khám ngay!',
        description: 'Dạ dày của bạn đang ở trạng thái nguy hiểm. Hãy đến cơ sở y tế để được thăm khám và điều trị kịp thời.',
        recommendations: [
          'Đến bệnh viện hoặc phòng khám ngay để được khám và tư vấn.',
          'Thay đổi hoàn toàn lối sống: ăn uống lành mạnh, giảm stress, ngủ đủ giấc.',
          'Tuân thủ chỉ định của bác sĩ.',
          'Kiểm tra sức khỏe định kỳ.'
        ]
      };
    }
  };

  const result = getResult();
  const progress = ((step + 1) / questions.length) * 100;

  if (showResult) {
    return (
      <main>
        <div className="container">
          <section className="section">
            <div className="panel pad">
              <div className="kicker">KẾT QUẢ ĐÁNH GIÁ</div>
              <h1 className="h1">Kết quả của bạn</h1>
              <p className="sub">
                Bạn đã hoàn thành bài kiểm tra. Dưới đây là kết quả và lời khuyên từ chúng tôi.
              </p>
            </div>
          </section>

          <section className="section">
            <div className="test-shell">
              <div className="result">
                <div className={`risk ${result.color}`}>{result.category}</div>
                <p style={{ marginTop: '10px', color: 'var(--muted)' }}>
                  Tổng điểm: <strong style={{ color: 'var(--text)' }}>{totalScore}/30</strong>
                </p>
                <div className="meter">
                  <div className="line">
                    <div className="fill" style={{ width: `${(totalScore / 30) * 100}%` }}></div>
                  </div>
                </div>
                <h3 style={{ marginTop: '16px', fontSize: '16px' }}>{result.message}</h3>
                <p style={{ marginTop: '8px', color: 'var(--muted)', fontSize: '13px', lineHeight: '1.65' }}>
                  {result.description}
                </p>
                <div style={{ marginTop: '14px' }}>
                  <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>Khuyến nghị:</h4>
                  <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--muted)', fontSize: '13px', lineHeight: '1.7' }}>
                    {result.recommendations.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: '18px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <button className="btn primary" onClick={restart}>
                    <span className="icon">🔄</span>
                    Làm lại
                  </button>
                  <Link to="/contact" className="btn">
                    <span className="icon">📧</span>
                    Liên hệ tư vấn
                  </Link>
                </div>
              </div>

              <div className="panel pad">
                <h3 style={{ marginTop: 0, fontSize: '16px' }}>Lưu ý quan trọng</h3>
                <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.65', margin: '10px 0' }}>
                  Kết quả này chỉ mang tính tham khảo, không thay thế cho chẩn đoán y khoa. 
                  Nếu bạn có triệu chứng kéo dài hoặc nghiêm trọng, hãy đến bệnh viện để được khám và tư vấn chuyên môn.
                </p>
                <div className="chip-row">
                  <span className="chip">🏥 Tham khảo bác sĩ</span>
                  <span className="chip">📊 Kết quả tham khảo</span>
                  <span className="chip">🔒 Bảo mật thông tin</span>
                </div>
              </div>
            </div>
          </section>

          <div className="helper">
            <span className="dot"></span>
            <span>
              <strong>Cần hỗ trợ?</strong> Liên hệ với chúng tôi qua trang <Link to="/contact">Liên hệ</Link> 
              hoặc tìm hiểu thêm tại <Link to="/qna">Q&A</Link>.
            </span>
          </div>
        </div>
      </main>
    );
  }

  const currentQuestion = questions[step];

  return (
    <main>
      <div className="container">
        <section className="section">
          <div className="panel pad">
            <div className="kicker">ĐÁNH GIÁ SỨC KHỎE</div>
            <h1 className="h1">Test sức khỏe dạ dày</h1>
            <p className="sub">
              Trả lời 10 câu hỏi để đánh giá sức khỏe dạ dày và nhận lời khuyên phù hợp. 
              Kết quả chỉ mang tính tham khảo, không thay thế chẩn đoán y khoa.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="test-shell">
            <div>
              <div className="progress">
                <div style={{ width: `${progress}%` }}></div>
              </div>
              <div className="step">
                <div className="small">Câu hỏi {step + 1}/{questions.length}</div>
                <div className="q-title">{currentQuestion.question}</div>
                <div className="options">
                  {currentQuestion.options.map((opt, idx) => (
                    <label key={idx} className="opt">
                      <input
                        type="radio"
                        name={`q${currentQuestion.id}`}
                        checked={answers[currentQuestion.id] === opt.score}
                        onChange={() => handleSelect(currentQuestion.id, opt.score)}
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
                <div className="nav-row">
                  <button className="btn ghost" onClick={goPrev} disabled={step === 0}>
                    ← Quay lại
                  </button>
                  <button
                    className="btn primary"
                    onClick={goNext}
                    disabled={answers[currentQuestion.id] === undefined}
                  >
                    {step === questions.length - 1 ? 'Xem kết quả →' : 'Tiếp theo →'}
                  </button>
                </div>
              </div>
            </div>

            <div className="panel pad">
              <h3 style={{ marginTop: 0, fontSize: '16px' }}>Hướng dẫn</h3>
              <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: '1.65', margin: '10px 0' }}>
                Chọn đáp án phù hợp nhất với tình trạng của bạn trong 3 tháng gần đây. 
                Trả lời trung thực để kết quả chính xác hơn.
              </p>
              <div className="chip-row">
                <span className="chip">⏱️ 2–3 phút</span>
                <span className="chip">📊 10 câu hỏi</span>
                <span className="chip">🔒 Bảo mật</span>
              </div>
            </div>
          </div>
        </section>

        <div className="helper">
          <span className="dot"></span>
          <span>
            <strong>Lưu ý:</strong> Kết quả mang tính tham khảo. Nếu có triệu chứng nghiêm trọng, hãy đến cơ sở y tế.
          </span>
        </div>
      </div>
    </main>
  );
}
