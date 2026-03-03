import { useState } from 'react';
import { TestWizard } from '../components/TestWizard';
import { testItems } from '../data/testData';
import type { TestResult } from '../types';

export const Test = () => {
  const [result, setResult] = useState<TestResult | null>(null);

  const handleComplete = (testResult: TestResult) => {
    setResult(testResult);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setResult(null);
  };

  return (
    <>
      <section className="section">
        <div className="panel pad">
          <p className="kicker"><span className="badge">Kiểm tra nguy cơ</span></p>
          <h2 style={{ marginTop: 0 }}><span className="bar" aria-hidden="true"></span>Trắc nghiệm dạ dày</h2>
          <p className="sub">
            Bài test gồm 10 câu hỏi chia theo cảm nhận, thói quen và dấu hiệu cảnh báo. Giúp bạn định vị xem mình đang thuộc "G-Type" nào để sớm có biện pháp điều chỉnh.
          </p>
          <div className="helper">
            <div className="dot" aria-hidden="true"></div>
            <div>Lưu ý: Kết quả chỉ mang tính chất đánh giá sơ bộ, hoàn toàn không thay thế chẩn đoán y khoa.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="test-shell">
          <div className="panel pad">
            {!result ? (
              <TestWizard items={testItems} onComplete={handleComplete} />
            ) : (
              <div>
                <div className="meter" aria-label="Thang đánh giá (0-30 điểm)">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="small">Điểm nguy cơ:</div>
                    <div className="small" style={{ fontWeight: 'bold' }}>{result.score}/30</div>
                  </div>
                  <div className="line" style={{ marginTop: '8px' }}>
                    <div className="fill" style={{ width: `${Math.round((result.score / 30) * 100)}%` }}></div>
                  </div>
                </div>

                <div className="result" style={{ marginTop: '12px' }}>
                  <div className={`risk ${result.cls}`}>{result.resultTitle}</div>
                  <p style={{ marginTop: '10px', fontSize: '14px' }}>{result.resultDesc}</p>
                  <p style={{ marginTop: '8px', fontSize: '13px', color: 'var(--muted)' }}>{result.resultTip}</p>

                  <div style={{ marginTop: '14px' }}>
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

                  <div className="helper" style={{ marginTop: '14px' }}>
                    <div className="dot" aria-hidden="true"></div>
                    <div>Nếu bạn có lo ngại, hãy tham khảo ý kiến bác sĩ chuyên khoa tiêu hóa để được tư vấn cụ thể.</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="panel pad">
            <h2 style={{ marginTop: 0 }}><span className="bar" aria-hidden="true"></span>Phân nhóm G-Type</h2>
            <p className="sub">Kết quả quy chiếu dựa trên mức độ nhạy cảm của dạ dày.</p>
            <div className="grid-2" style={{ marginTop: '12px' }}>
              <div className="kpi">
                <h3>🟢 Balanced</h3>
                <p style={{ fontSize: '12px' }}>Dạ dày ổn định. Cần duy trì giờ ăn đều, giảm stress để bảo vệ đường dài.</p>
              </div>
              <div className="kpi">
                <h3>🟡 Sensitive</h3>
                <p style={{ fontSize: '12px' }}>Dạ dày nhạy cảm. Có dấu hiệu rối loạn nhẹ, cần điều chỉnh chế độ ăn.</p>
              </div>
              <div className="kpi">
                <h3>🟠 Warning</h3>
                <p style={{ fontSize: '12px' }}>Nguy cơ viêm/trào ngược. Nên chủ động đi khám chuyên khoa tiêu hoá.</p>
              </div>
              <div className="kpi">
                <h3>🔴 Critical</h3>
                <p style={{ fontSize: '12px' }}>Có dấu hiệu nghiêm trọng. Khuyến nghị gặp bác sĩ y tế càng sớm càng tốt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
