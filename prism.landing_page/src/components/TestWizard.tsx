import { useState, useEffect } from 'react';
import type { TestItem, TestState, TestResult } from '../types';
import './TestWizard.css';

interface TestWizardProps {
  items: TestItem[];
  onComplete: (result: TestResult) => void;
}

export const TestWizard = ({ items, onComplete }: TestWizardProps) => {
  const [state, setState] = useState<TestState>({ idx: 0, answers: {} });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

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
      alert('Vui lòng chọn một câu trả lời.');
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
      resultDesc = "Có dấu hiệu cảnh báo nghiêm trọng.";
      resultTip = "Khuyến nghị: đi khám y tế càng sớm càng tốt.";
      cls = "high";
    } else if (totalScore >= 16) {
      resultTitle = "🟠 G-TYPE WARNING";
      resultDesc = "Nguy cơ viêm dạ dày hoặc trào ngược đáng chú ý.";
      resultTip = "Gợi ý: nên đi khám chuyên khoa tiêu hoá để kiểm tra.";
      cls = "mid";
    } else if (totalScore >= 8) {
      resultTitle = "🟡 G-TYPE SENSITIVE";
      resultDesc = "Dạ dày nhạy cảm, có dấu hiệu rối loạn chức năng tiêu hoá.";
      resultTip = "Gợi ý: điều chỉnh chế độ ăn, theo dõi triệu chứng 2–4 tuần.";
      cls = "mid";
    } else {
      resultTitle = "🟢 G-TYPE BALANCED";
      resultDesc = "Dạ dày đang tương đối ổn định. Có thể có khó chịu nhẹ do lối sống.";
      resultTip = "Gợi ý: duy trì giờ ăn đều, giảm stress, hạn chế chất kích thích.";
      cls = "low";
    }

    return { score: totalScore, resultTitle, resultDesc, resultTip, cls };
  };

  const currentItem = items[state.idx];
  const progress = Math.round(((state.idx) / items.length) * 100);
  const meterProgress = Math.round((score / 30) * 100);

  return (
    <div>
      <div className="progress" aria-label="Tiến độ bài test">
        <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, rgba(110,231,200,.8), rgba(122,166,255,.8))' }}></div>
      </div>
      <div className="small" style={{ marginTop: '10px' }}>
        <b style={{ color: 'var(--mint)' }}>Câu {state.idx + 1}/{items.length}</b> • {currentItem.tag}
      </div>

      <div className="meter" aria-label="Thang đánh giá (0-30 điểm)" style={{ marginTop: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="small">Điểm nguy cơ:</div>
          <div className="small" style={{ fontWeight: 'bold' }}>{score}/30</div>
        </div>
        <div className="line" style={{ marginTop: '8px' }}>
          <div className="fill" style={{ width: `${meterProgress}%` }}></div>
        </div>
      </div>

      <div className="step">
        <div className="q-title">{currentItem.q}</div>
        <div className="options">
          {currentItem.opts.map(([label, value], idx) => (
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
