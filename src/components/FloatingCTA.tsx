import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Ne pas exécuter en SSR
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (isDismissed) return;

      const currentPath = window.location.pathname;
      const isHomePage = currentPath === '/';
      
      if (isHomePage) {
        // Logique pour la page d'accueil
        const heroSection = document.querySelector('section');
        const contactSection = document.getElementById('contact');
        
        if (!heroSection || !contactSection) return;

        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const contactTop = contactSection.offsetTop;

        // Apparaît après la section hero et disparaît avant le contact
        const shouldShow = window.scrollY > heroBottom && window.scrollY < contactTop - 300;
        
        if (shouldShow && !isVisible && !isDismissed) {
          setIsAnimating(true);
          setTimeout(() => setIsVisible(true), 50);
        } else if (!shouldShow && isVisible) {
          setIsVisible(false);
          setTimeout(() => setIsAnimating(false), 300);
        }
      } else {
        // Logique pour les pages de services (plomberie, chauffage, électricité)
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollY = window.scrollY;
        
        // Disparaît seulement dans les 800 derniers pixels de la page
        const hideZone = documentHeight - windowHeight - 800;
        
        const shouldShow = scrollY < hideZone;
        
        if (shouldShow && !isVisible && !isDismissed) {
          setIsAnimating(true);
          setTimeout(() => setIsVisible(true), 50);
        } else if (!shouldShow && isVisible) {
          setIsVisible(false);
          setTimeout(() => setIsAnimating(false), 300);
        }
      }
    };

    // Vérifier immédiatement au chargement avec un petit délai pour les pages externes
    const currentPath = window.location.pathname;
    const isServicePage = currentPath !== '/';
    
    if (isServicePage) {
      // Pour les pages de services, afficher immédiatement
      setTimeout(() => {
        handleScroll();
      }, 100);
    } else {
      // Pour la page d'accueil, vérifier normalement
      handleScroll();
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed, isVisible]);

  // Reset de l'état lors du changement de page
  useEffect(() => {
    const handleLocationChange = () => {
      setIsDismissed(false);
      setIsVisible(false);
      setIsAnimating(false);
    };

    // Écouter les changements d'URL (pour la navigation SPA)
    window.addEventListener('popstate', handleLocationChange);
    
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsDismissed(true);
      setIsAnimating(false);
    }, 300);
  };

  const handleCall = () => {
    window.location.href = 'tel:0988097855';
  };

  if (!isAnimating && !isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
      isVisible 
        ? 'opacity-100 translate-y-0 scale-100' 
        : 'opacity-0 translate-y-8 scale-75'
    }`}>
      <div className="relative">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 transition-all duration-200 hover:scale-110 hover:rotate-90 shadow-lg z-20"
          title="Fermer"
        >
          <X className="h-3.5 w-3.5" />
        </button>
        
        {/* Main CTA button - Toute la partie bleue cliquable */}
        <button
          onClick={handleCall}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl flex items-center space-x-3 px-6 py-4 w-full text-left cursor-pointer relative overflow-hidden"
          title="Appeler maintenant"
        >
          <div className="bg-white/20 p-2.5 rounded-full transition-all duration-200 hover:bg-white/30 hover:scale-110">
            <Phone className="h-6 w-6" />
          </div>
          <div className="text-left">
            <div className="font-bold text-lg leading-tight">09 88 09 78 55</div>
            <div className="text-xs text-blue-100">Appel gratuit • Cliquez pour appeler</div>
          </div>
          
          {/* Pulsing ring effect */}
          <div className="absolute inset-0 rounded-2xl bg-blue-400 animate-ping opacity-20 pointer-events-none"></div>
          
          {/* Secondary pulsing ring */}
          <div className="absolute inset-0 rounded-2xl bg-blue-300 animate-ping opacity-10 animation-delay-1000 pointer-events-none"></div>
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;