import React from 'react';

const MobileHeader = ({ title, showBackButton = true, customAction = null }) => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="md:hidden bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          {showBackButton && (
            <button
              onClick={handleBack}
              className="text-gray-800 hover:text-emerald-600 transition-colors p-2 touch-manipulation text-2xl"
              aria-label="Go back"
            >
              ←
            </button>
          )}
          <span className="text-emerald-600 text-2xl font-bold">Grooso</span>
        </div>
        {customAction && (
          <div className="flex items-center">
            {customAction}
          </div>
        )}
      </div>
      {title && (
        <div className="px-4 pb-3">
          <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;