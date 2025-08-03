import React from 'react';

export const Spinner: React.FC = () => {
  return (
    // This overlay has a very high z-index to appear on top of everything.
    <div className="fixed inset-0 bg-brand-green bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-[10000]">
      <div className="text-center">
        <i className="fas fa-spinner text-white text-6xl animate-spin"></i>
        <p className="text-white text-lg mt-4 font-semibold">Loading...</p>
      </div>
    </div>
  );
};