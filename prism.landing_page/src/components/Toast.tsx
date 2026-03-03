import { useEffect } from 'react';

interface ToastProps {
  show: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

export default function Toast({ show, title, message, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      <div className="t">{title}</div>
      <div className="m">{message}</div>
    </div>
  );
}
