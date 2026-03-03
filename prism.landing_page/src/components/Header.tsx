import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <header>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="brand">
            <div className="logo"></div>
            <div>
              <div className="title">Êm Dạ Mode</div>
              <div className="tag">Healthy Gen Z</div>
            </div>
          </Link>
          <div className="nav-links">
            <Link to="/" className={isActive('/')}>Trang chủ</Link>
            <Link to="/about" className={isActive('/about')}>About us</Link>
            <Link to="/qna" className={isActive('/qna')}>Q&A</Link>
            <Link to="/test" className={isActive('/test')}>Test</Link>
            <Link to="/contact" className={`btn primary ${isActive('/contact')}`}>
              Liên hệ chúng tôi
            </Link>
          </div>
          <button className="btn menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="icon">☰</span>
          </button>
        </nav>
        {mobileOpen && (
          <div className="mobile-panel open">
            <Link to="/" onClick={() => setMobileOpen(false)}>Trang chủ</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)}>About us</Link>
            <Link to="/qna" onClick={() => setMobileOpen(false)}>Q&A</Link>
            <Link to="/test" onClick={() => setMobileOpen(false)}>Test</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Liên hệ chúng tôi</Link>
          </div>
        )}
      </div>
    </header>
  );
}
