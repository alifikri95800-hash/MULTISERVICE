import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onScrollToSection: (sectionId: string) => void;
  onRequestQuote: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onScrollToSection, onRequestQuote }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Accueil', onClick: () => onNavigate('home'), isActive: currentPage === 'home' },
    { label: 'Plomberie', onClick: () => window.location.href = '/plomberie', isActive: currentPage === 'plumbing' },
    { label: 'Chauffage', onClick: () => window.location.href = '/chauffage', isActive: currentPage === 'heating' },
    { label: 'Électricité', onClick: () => window.location.href = '/electricite', isActive: currentPage === 'electrical' },
    { label: 'Blog', onClick: () => onNavigate('blog'), isActive: currentPage === 'blog' },
    { label: 'FAQ', onClick: () => currentPage === 'home' ? onScrollToSection('faq') : window.location.href = '/#faq', isActive: false },
    { label: 'Contact', onClick: () => currentPage === 'home' ? onScrollToSection('contact') : window.location.href = '/#contact', isActive: false },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/70 backdrop-blur-lg shadow-xl border-b border-white/30' : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <img 
              src="/logo.png" 
              alt="FKR MULTI-SERVICES Logo" 
             className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">MULTISERVICES</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Plomberie • Chauffage • Électricité</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  item.isActive ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <button
              onClick={onRequestQuote}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Devis gratuit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="py-4 space-y-2">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    item.onClick();
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                    item.isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 border-t">
                <a
                  href="tel:0988097855"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 text-blue-600 py-2 font-semibold"
                >
                  <Phone className="h-4 w-4" />
                  <span>09 88 09 78 55</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;