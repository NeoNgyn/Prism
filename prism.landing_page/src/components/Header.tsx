import { useState } from 'react';
import './Header.css';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="nav">
          <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} aria-label="Về trang chủ">
            <div className="logo" aria-hidden="true"></div>
            <div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span className="title">Êm Dạ Mode</span>
                <span className="badge">Team Prism</span>
              </div>
              <div className="tag">Bật mode Êm Dạ, nhịp sống mượt mà</div>
            </div>
          </a>

          <nav className="nav-links" aria-label="Điều hướng chính">
            <a 
              className={currentPage === 'home' ? 'active' : ''} 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            >
              Trang chủ
            </a>
            <a 
              className={currentPage === 'about' ? 'active' : ''} 
              href="#about" 
              onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            >
              About us
            </a>
            <a 
              className={currentPage === 'qna' ? 'active' : ''} 
              href="#qna" 
              onClick={(e) => { e.preventDefault(); handleNavClick('qna'); }}
            >
              Q&A
            </a>
            <a 
              className={currentPage === 'test' ? 'active' : ''} 
              href="#test" 
              onClick={(e) => { e.preventDefault(); handleNavClick('test'); }}
            >
              Test
            </a>
            <a 
              className={currentPage === 'contact' ? 'active' : ''} 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              Liên hệ
            </a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a className="btn primary" href="#test" onClick={(e) => { e.preventDefault(); handleNavClick('test'); }} title="Làm bài test">
              <span className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 11h6M9 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 3h10a2 2 0 0 1 2 2v16l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </span>
              Bắt đầu Test
            </a>
            <button 
              className="btn ghost menu-btn" 
              id="menuBtn" 
              type="button" 
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              Menu
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-panel open" aria-label="Menu di động">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Trang chủ</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About us</a>
            <a href="#qna" onClick={(e) => { e.preventDefault(); handleNavClick('qna'); }}>Q&A</a>
            <a href="#test" onClick={(e) => { e.preventDefault(); handleNavClick('test'); }}>Test</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Liên hệ</a>
          </div>
        )}
      </div>
    </header>
  );
};
