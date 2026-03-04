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
              <i className="fa-regular fa-circle-question" aria-hidden="true"></i>
            </div>
            <h3>{item.q}</h3>
            <p>{item.preview}</p>
          </div>
          
          <div className="qa-face qa-back">
            <div className="qa-close">
              <button onClick={handleClose} data-close="true" aria-label="Đóng">
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
            </div>
            <h4>{item.q}</h4>
            <div className="ans" dangerouslySetInnerHTML={{ __html: item.a }}></div>
            <div className="meta">
              <div className="sources">
                <strong>Nguồn:</strong>
                <ul>
                  {item.sources.map((src, idx) => (
                    <li key={idx}><a href={src.u} target="_blank" rel="noopener noreferrer">{src.t}</a></li>
                  ))}
                </ul>
              </div>
              {item.related.length > 0 && (
                <div className="related">
                  <span className="related-label">Câu hỏi liên quan:</span>
                  <ul className="related-list">
                    {item.related.map((relId) => {
                      const rel = getRelatedItem(relId);
                      return rel ? (
                        <li key={relId}>
                          <button 
                            className="chipbtn related-item" 
                            onClick={(e) => handleJumpClick(e, relId)}
                            data-jump={relId}
                          >
                            {rel.q}
                          </button>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
