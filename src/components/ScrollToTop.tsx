import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Ne pas exécuter en SSR
    if (typeof window === 'undefined') return;

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        if (!isVisible) {
          setIsAnimating(true);
          setTimeout(() => setIsVisible(true), 50);
        }
      } else {
        if (isVisible) {
          setIsVisible(false);
          setTimeout(() => setIsAnimating(false), 300);
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Check immediately on mount
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isVisible]);

  if (!isAnimating && !isVisible) return null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Hide button immediately when clicked
    setIsVisible(false);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 left-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100 animate-bounce' 
            : 'opacity-0 translate-y-8 scale-75'
        }`}
        style={{
          animationDuration: isVisible ? '1s' : '0s',
          animationIterationCount: isVisible ? '2' : '0'
        }}
        title="Retour en haut"
        aria-label="Retour en haut de la page"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </>
  );
};

export default ScrollToTop;