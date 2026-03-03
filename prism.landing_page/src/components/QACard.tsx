import { useState } from 'react';
import type { QAItem } from '../types';
import './QACard.css';

interface QACardProps {
  item: QAItem;
  allItems: QAItem[];
  onJumpTo: (id: string) => void;
}

export const QACard = ({ item, allItems, onJumpTo }: QACardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleJumpClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setIsOpen(false);
    onJumpTo(id);
  };

  const getRelatedItem = (id: string) => {
    return allItems.find(i => i.id === id);
  };

  return (
    <div className="flip">
      <div 
        className={`qa-card ${isOpen ? 'open' : ''}`}
        onClick={handleClick}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
      >
        <div className="qa-inner">
          <div className="qa-face qa-front">
            <div className="qmark">
              <svg viewBox="0 0 24 24" fill="none" style={{ width: '20px', height: '20px' }}>
                <path d="M12 16h.01M10 10a2 2 0 0 1 4 0c0 1.5-2 2-2 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>{item.q}</h3>
            <p>{item.preview}</p>
          </div>
          
          <div className="qa-face qa-back">
            <div className="qa-close">
              <button onClick={handleClose} data-close="true" aria-label="Đóng">
                <svg viewBox="0 0 24 24" fill="none" style={{ width: '16px', height: '16px' }}>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <h4>{item.q}</h4>
            <div className="ans" dangerouslySetInnerHTML={{ __html: item.a }}></div>
            <div className="meta">
              <div style={{ marginTop: '10px' }}>
                <strong>Nguồn:</strong>
                {item.sources.map((src, idx) => (
                  <span key={idx}>
                    {idx > 0 && ', '}
                    <a href={src.u} target="_blank" rel="noopener noreferrer">{src.t}</a>
                  </span>
                ))}
              </div>
              {item.related.length > 0 && (
                <div className="chip-row">
                  <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Câu hỏi liên quan:</span>
                  {item.related.map((relId) => {
                    const rel = getRelatedItem(relId);
                    return rel ? (
                      <button 
                        key={relId}
                        className="chipbtn" 
                        onClick={(e) => handleJumpClick(e, relId)}
                        data-jump={relId}
                      >
                        {rel.q}
                      </button>
                    ) : null;
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
