import './Footer.css';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 950, color: 'var(--text)', letterSpacing: '.2px' }}>Êm Dạ Mode</div>
          <div>Demo bố cục và UI cho website đồ án (1 file).</div>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#qna" onClick={(e) => { e.preventDefault(); onNavigate('qna'); }}>Q&A</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Liên hệ</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>Core team</a>
        </div>
      </div>
    </footer>
  );
};
