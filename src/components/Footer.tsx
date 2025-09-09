import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onScrollToSection, onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Accueil', onClick: () => window.location.href = '/' },
    { label: 'Services', onClick: () => onScrollToSection('services') },
    { label: 'Zones', onClick: () => onScrollToSection('zones') },
    { label: 'Avis clients', onClick: () => onScrollToSection('reviews') },
    { label: 'Contact', onClick: () => onScrollToSection('contact') },
  ];

  const services = [
    'Plomberie d\'urgence',
    'Entretien chaudière',
    'Installation électrique',
    'Débouchage canalisations',
    'Dépannage chauffage',
    'Mise aux normes',
  ];

  const legalLinks = [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { label: 'Conditions générales de vente', href: '/conditions-generales-vente' },
    { label: 'Plan du site', href: '/plan-du-site' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="FKR MULTI-SERVICES Logo" 
               className="h-16 w-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">MULTISERVICES</h3>
                <p className="text-sm text-gray-400">Votre expert</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Votre spécialiste en plomberie, chauffage et électricité à Paris et Île-de-France. 
              Interventions rapides 24h/7j par des techniciens certifiés dans les départements 78, 95, 92, 93.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://www.tiktok.com/@fkr.multi_services" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.onClick}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300 text-sm">09 88 09 78 55</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">06 29 17 30 03 (Urgence)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">fkrmultiservices@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-red-400 mt-0.5" />
                <span className="text-gray-300 text-sm">Paris et Île-de-France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} MULTISERVICES. Tous droits réservés. SIRET : 521 945 147 00028
            </p>
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;