import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Ne pas exécuter en SSR
    if (typeof window === 'undefined') return;

    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div className="bg-white border border-gray-200 rounded-xl shadow-xl max-w-md mx-auto p-4">
        <div className="flex items-start space-x-3">
          <Cookie className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 text-sm mb-2">
              Cookies et confidentialité
            </h4>
            <p className="text-gray-600 text-xs mb-3">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site et analyser notre trafic.
            </p>
            <div className="flex space-x-2">
              <button
                onClick={handleAccept}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
              >
                Accepter
              </button>
              <button
                onClick={handleDecline}
                className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
              >
                Refuser
              </button>
            </div>
          </div>
          <button
            onClick={handleDecline}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;