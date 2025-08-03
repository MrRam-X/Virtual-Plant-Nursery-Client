import React, { useEffect } from 'react';
import type { ToastProps } from '../../context/GlobalContext';

// --- Individual Toast Component ---
interface ToastComponentProps extends ToastProps {
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastComponentProps> = ({ id, message, type, onClose }) => {
  // Automatically close the toast after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 5000);

    // Cleanup the timer if the component is unmounted
    return () => {
      clearTimeout(timer);
    };
  }, [id, onClose]);

  // Define icons and colors based on the toast type
  const style = {
    success: {
      icon: <i className="fas fa-check-circle"></i>,
      barColor: 'bg-green-500',
    },
    error: { // fail
      icon: <i className="fas fa-times-circle"></i>,
      barColor: 'bg-red-500',
    },
    info: { // common
      icon: <i className="fas fa-info-circle"></i>,
      barColor: 'bg-blue-500',
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in-right flex w-full max-w-sm">
      {/* Progress/Color Bar */}
      <div className={`w-2 ${style[type].barColor}`}></div>
      
      {/* Icon */}
      <div className="p-4 text-2xl text-brand-green">
        {style[type].icon}
      </div>
      
      {/* Message */}
      <div className="py-4 flex-grow">
        <p className="font-semibold text-brand-green">{message}</p>
      </div>
      
      {/* Close Button */}
      <button onClick={() => onClose(id)} className="p-4 text-gray-400 hover:text-gray-700">
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};


// --- Toaster Container Component ---
interface ToasterContainerProps {
  toasts: ToastProps[];
  removeToast: (id: string) => void;
}

export const ToasterContainer: React.FC<ToasterContainerProps> = ({ toasts, removeToast }) => {
  return (
    // This container is fixed to the top-right of the screen
    // It has a very high z-index to appear on top of everything
    <div className="fixed top-4 right-4 z-[9999] w-full max-w-sm space-y-3">
      {toasts.map(toast => (
        <Toast key={toast.id} {...toast} onClose={removeToast} />
      ))}
    </div>
  );
};