import { useState, useEffect } from 'react';
import type { TestItem, TestState, TestResult } from '../types';
import { Toast } from './Toast';
import './TestWizard.css';

interface TestWizardProps {
  items: TestItem[];
  onComplete: (result: TestResult) => void;
}

export const TestWizard = ({ items, onComplete }: TestWizardProps) => {
  const [state, setState] = useState<TestState>({ idx: 0, answers: {} });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const currentAnswer = state.answers[items[state.idx]?.id];
    setSelectedOption(currentAnswer !== undefined ? currentAnswer : null);
  }, [state.idx, state.answers, items]);

  useEffect(() => {
    const totalScore = Object.values(state.answers).reduce((sum, val) => sum + val, 0);
    setScore(totalScore);
  }, [state.answers]);

  const handleBack = () => {
    if (state.idx > 0) {
      setState({ ...state, idx: state.idx - 1 });
    }
  };

  const handleNext = () => {
    if (selectedOption === null) {
      setShowToast(true);
      return;
    }

    const currentItem = items[state.idx];
    const newAnswers = { ...state.answers, [currentItem.id]: selectedOption };
    
    if (state.idx === items.length - 1) {
      // Calculate and show result
      const totalScore = Object.values(newAnswers).reduce((sum, val) => sum + val, 0);
      const result = calculateResult(totalScore);
      onComplete(result);
    } else {
      setState({ idx: state.idx + 1, answers: newAnswers });
    }
  };

  const calculateResult = (totalScore: number): TestResult => {
    let resultTitle = "";
    let resultDesc = "";
    let resultTip = "";
    let cls: 'low' | 'mid' | 'high' = "low";

    if (totalScore >= 23) {
      resultTitle = "🔴 G-TYPE CRITICAL";
      resultDesc = "Có dấu hiệu cảnh báo bệnh lý dạ dày hoặc nguy cơ biến chứng. Không nên chỉ tự theo dõi tại nhà.";
      resultTip = "Khuyến nghị hành động: Nên khám chuyên khoa tiêu hoá. Đi khám sớm nếu đau nhiều, sụt cân, nôn, hoặc triệu chứng kéo dài. Không tự ý dùng thuốc kéo dài.";
      cls = "high";
    } else if (totalScore >= 8) {
      resultTitle = "🟠 G-TYPE WARNING";
      resultDesc = "Dạ dày đang nhạy cảm hoặc có dấu hiệu rối loạn chức năng tiêu hoá mức nhẹ–trung bình.";
      resultTip = "Gợi ý hành động: Điều chỉnh chế độ ăn (ít cay, ít dầu, đúng giờ). Giảm stress và thức khuya. Theo dõi triệu chứng trong 2–4 tuần. Nếu không cải thiện → nên đi khám.";
      cls = "mid";
    } else {
      resultTitle = "🟢 G-TYPE BALANCED";
      resultDesc = "Dạ dày đang trong trạng thái tương đối ổn định. Có thể có khó chịu nhẹ do lối sống hoặc ăn uống thất thường.";
      resultTip = "Gợi ý hành động: Duy trì giờ ăn đều. Hạn chế chất kích thích (cà phê, rượu, thuốc lá). Ngủ đủ và giảm stress. Theo dõi nếu triệu chứng tăng lên.";
      cls = "low";
    }

    return { score: totalScore, resultTitle, resultDesc, resultTip, cls };
  };

  const currentItem = items[state.idx];
  const progress = Math.round(((state.idx + 1) / items.length) * 100);
  const meterProgress = Math.round((score / 30) * 100);

  return (
    <div>
      <Toast 
        show={showToast} 
        title="Vui lòng chọn một câu trả lời" 
        message="Bạn cần chọn đáp án trước khi tiếp tục."
        onClose={() => setShowToast(false)}
      />
      <div className="progress" aria-label="Tiến độ bài test">
        <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, rgba(110,231,200,.8), rgba(122,166,255,.8))' }}></div>
      </div>
      <div style={{ marginTop: '12px', fontSize: '15px' }}>
        <b style={{ color: 'var(--mint)' }}>Câu {state.idx + 1}/{items.length}</b> • {currentItem.tag}
      </div>

      <div className="meter" aria-label="Thang đánh giá (0-30 điểm)" style={{ marginTop: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '15px' }}>Điểm nguy cơ:</div>
          <div style={{ fontSize: '15px', fontWeight: 'bold' }}>{score}/30</div>
        </div>
        <div className="line" style={{ marginTop: '8px' }}>
          <div className="fill" style={{ width: `${meterProgress}%` }}></div>
        </div>
      </div>

      <div className="step">
        <div className="q-title">{currentItem.q}</div>
        <p style={{ marginTop: '8px', marginBottom: '16px', color: 'var(--muted)', fontSize: '14px' }}>
          Chọn đáp án giống bạn nhất trong 2 tuần gần đây.
        </p>
        <div className="options">{currentItem.opts.map(([label, value], idx) => (
            <label key={idx} className="opt">
              <input 
                type="radio" 
                name="opt" 
                value={value}
                checked={selectedOption === value}
                onChange={() => setSelectedOption(value)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
        <div className="nav-row">
          <button className="btn" onClick={handleBack} disabled={state.idx === 0} type="button">
            Quay lại
          </button>
          <button className="btn primary" onClick={handleNext} type="button">
            {state.idx === items.length - 1 ? 'Xem kết quả' : 'Tiếp'}
          </button>
        </div>
      </div>
    </div>
  );
};
