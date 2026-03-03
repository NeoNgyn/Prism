import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { QnA } from './pages/QnA';
import { Test } from './pages/Test';
import { Contact } from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [toast, setToast] = useState({ show: false, title: '', message: '' });

  useEffect(() => {
    // Handle initial hash
    const hash = window.location.hash.replace('#', '') || 'home';
    setCurrentPage(hash);

    // Handle hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(newHash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    window.location.hash = page;
  };

  const showToast = (title: string, message: string) => {
    setToast({ show: true, title, message });
  };

  const hideToast = () => {
    setToast({ show: false, title: '', message: '' });
  };

  return (
    <>
      <div className="bg-grid" aria-hidden="true"></div>
      
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        <div className="container">
          {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
          {currentPage === 'about' && <About />}
          {currentPage === 'qna' && <QnA showToast={showToast} />}
          {currentPage === 'test' && <Test />}
          {currentPage === 'contact' && <Contact showToast={showToast} onNavigate={handleNavigate} />}
        </div>
      </main>
      
      <Footer onNavigate={handleNavigate} />
      
      <Toast 
        show={toast.show} 
        title={toast.title} 
        message={toast.message} 
        onClose={hideToast} 
      />
    </>
  );
}

export default App;
