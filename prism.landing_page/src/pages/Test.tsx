import { useState } from 'react';
import { TestWizard } from '../components/TestWizard';
import { testItems } from '../data/testData';
import type { TestResult } from '../types';

export const Test = () => {
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);

  const handleStart = () => {
    setStarted(true);
  };

  const handleComplete = (testResult: TestResult) => {
    setResult(testResult);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setResult(null);
    setStarted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Intro Screen
  if (!started && !result) {
    return (
      <>
        <section className="section" style={{ marginTop: '40px' }}>
          <div className="panel pad" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <p className="kicker" style={{ marginBottom: '20px' }}>
              <span className="badge">BÀI TEST ĐÁNH GIÁ</span>
            </p>
            <h1 className="h1" style={{ margin: '0 0 20px', fontSize: '48px', lineHeight: '1.1' }}>
              <span className="bar" aria-hidden="true" style={{ display: 'block', width: '10px', height: '10px', margin: '0 auto 16px' }}></span>
              Dạ dày bạn đang ở Level nào?
            </h1>
            <p className="sub" style={{ fontSize: '20px', margin: '0px 100px 32px' }}>
              Làm test 3 phút trước khi cơn đau pop-up lần nữa.
            </p>
            <button className="btn primary" onClick={handleStart} style={{ fontSize: '16px', padding: '14px 32px' }}>
              <span className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              BẮT ĐẦU TEST
            </button>
            <div className="helper" style={{ marginTop: '24px', maxWidth: '600px', margin: '24px auto 0' }}>
              <div className="dot" aria-hidden="true"></div>
              <div style={{ fontSize: '14px' }}>Kết quả chỉ mang tính chất tham khảo sức khỏe ban đầu, không thay thế chẩn đoán y khoa.</div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {!result && (
        <section className="section">
          <div className="panel pad" style={{ textAlign: 'center' }}>
            <h2 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: '700', letterSpacing: '0.5px' }}>
              BÀI TEST: MỨC ĐỘ "BÁO ĐỘNG" CỦA DẠ DÀY
            </h2>
            <p className="sub" style={{ margin: '0 0 6px', fontSize: '13px' }}>
              <strong>Thời gian:</strong> 3–5 phút | <strong>Mục tiêu:</strong> Sàng lọc nhanh nguy cơ vấn đề dạ dày
            </p>
            <p className="sub" style={{ margin: '0', fontSize: '13px' }}>
              Chọn đáp án giống bạn nhất trong 2 tuần gần đây.
            </p>
          </div>
        </section>
      )}

      <section className="section">
        <div className="test-shell">
          <div className="panel pad">
            {!result ? (
              <TestWizard items={testItems} onComplete={handleComplete} />
            ) : (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <h2 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: '700' }}>KẾT QUẢ ĐÁNH GIÁ</h2>
                </div>

                <div className="meter" aria-label="Thang đánh giá (0-30 điểm)">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="small">Điểm số:</div>
                    <div className="small" style={{ fontWeight: 'bold' }}>{result.score}/30 điểm</div>
                  </div>
                  <div className="line" style={{ marginTop: '8px' }}>
                    <div className="fill" style={{ width: `${Math.round((result.score / 30) * 100)}%` }}></div>
                  </div>
                </div>

                <div className="result" style={{ marginTop: '20px' }}>
                  <div className={`risk ${result.cls}`} style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>
                    {result.resultTitle}
                  </div>
                  <div style={{ background: 'rgba(11,18,38,.68)', border: '1px solid rgba(255,255,255,.14)', borderRadius: '12px', padding: '16px', marginBottom: '12px' }}>
                    <h3 style={{ margin: '0 0 8px', fontSize: '14px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Đánh giá:</h3>
                    <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.7' }}>{result.resultDesc}</p>
                  </div>
                  <div style={{ background: 'rgba(11,18,38,.68)', border: '1px solid rgba(255,255,255,.14)', borderLeft: '4px solid var(--mint)', borderRadius: '12px', padding: '16px' }}>
                    <h3 style={{ margin: '0 0 8px', fontSize: '14px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Gợi ý hành động:</h3>
                    <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.7' }}>{result.resultTip}</p>
                  </div>

                  <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <button className="btn primary" onClick={handleRestart}>
                      <span className="icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M21 2v6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 22v-6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      Làm lại
                    </button>
                  </div>

                  <div className="helper" style={{ marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>
                    <div className="dot" aria-hidden="true"></div>
                    <div style={{ fontSize: '14px' }}>
                      <strong>Thông điệp quan trọng:</strong> Kết quả chỉ mang tính tham khảo sức khỏe ban đầu. 
                      Nếu bạn có triệu chứng nặng, kéo dài, hoặc lo lắng — hãy đi khám bác sĩ.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="panel pad">
            <h2 style={{ marginTop: 0 }}><span className="bar" aria-hidden="true"></span>Phân nhóm G-Type</h2>
            <p className="sub">Kết quả quy chiếu dựa trên mức độ nguy cơ vấn đề dạ dày.</p>
            <div className="grid-2" style={{ marginTop: '12px' }}>
              <div className="kpi">
                <h3>🟢 Balanced (0–7)</h3>
                <p style={{ fontSize: '12px' }}>Dạ dày ổn định. Duy trì giờ ăn đều, giảm stress, hạn chế chất kích thích.</p>
              </div>
              <div className="kpi">
                <h3>🟠 Warning (8–22)</h3>
                <p style={{ fontSize: '12px' }}>Dạ dày nhạy cảm hoặc có rối loạn nhẹ–trung bình. Điều chỉnh chế độ ăn, theo dõi 2–4 tuần.</p>
              </div>
              <div className="kpi">
                <h3>🔴 Critical (23–30)</h3>
                <p style={{ fontSize: '12px' }}>Có dấu hiệu cảnh báo nghiêm trọng. Nên khám chuyên khoa tiêu hoá càng sớm càng tốt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
