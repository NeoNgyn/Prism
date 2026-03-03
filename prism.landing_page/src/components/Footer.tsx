import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <strong>Êm Dạ Mode</strong> — Chiến dịch nâng cao nhận thức về sức khỏe dạ dày cho giới trẻ 18–24 tuổi tại TP.HCM.
        </div>
        <div style={{ marginTop: '12px' }}>
          <Link to="/">Trang chủ</Link> · <Link to="/about">About us</Link> · <Link to="/qna">Q&A</Link> · <Link to="/test">Test</Link> · <Link to="/contact">Liên hệ</Link>
        </div>
      </div>
    </footer>
  );
}
