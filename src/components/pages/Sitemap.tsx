import React, { useEffect, useState } from 'react';
import { Map, Home, Wrench, Flame, Zap, BookOpen, Phone, FileText } from 'lucide-react';

interface SitemapProps {
  onNavigate: (page: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

const Sitemap: React.FC<SitemapProps> = ({ onNavigate, onScrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const siteStructure = [
    {
      title: 'Accueil',
      icon: Home,
      color: 'blue',
      onClick: () => window.location.href = '/',
      children: [
        { name: 'Services', onClick: () => onScrollToSection('services') },
        { name: 'Zones d\'intervention', onClick: () => onScrollToSection('zones') },
        { name: 'Avis clients', onClick: () => onScrollToSection('reviews') },
        { name: 'À propos', onClick: () => onScrollToSection('about') },
        { name: 'FAQ', onClick: () => onScrollToSection('faq') },
        { name: 'Contact', onClick: () => onScrollToSection('contact') }
      ]
    },
    {
      title: 'Services de Plomberie',
      icon: Wrench,
      color: 'blue',
      onClick: () => window.location.href = '/plomberie',
      children: [
        { name: 'Dépannages d\'urgence', onClick: () => window.location.href = '/plomberie/depannage-urgence' },
        { name: 'Recherche de fuites', onClick: () => window.location.href = '/plomberie/recherche-fuites' },
        { name: 'Débouchage canalisations', onClick: () => window.location.href = '/plomberie/debouchage-canalisations' },
        { name: 'Installation chauffe-eau', onClick: () => window.location.href = '/plomberie/installation-chauffe-eau' }
      ]
    },
    {
      title: 'Services de Chauffage',
      icon: Flame,
      color: 'red',
      onClick: () => window.location.href = '/chauffage',
      children: [
        { name: 'Entretien chaudière', onClick: () => window.location.href = '/chauffage/entretien-chaudiere' },
        { name: 'Dépannage urgence', onClick: () => window.location.href = '/chauffage/depannage-urgence' },
        { name: 'Installation thermostat', onClick: () => window.location.href = '/chauffage/installation-thermostat' },
        { name: 'Installation chaudière', onClick: () => window.location.href = '/chauffage/installation-chaudiere' }
      ]
    },
    {
      title: 'Services d\'Électricité',
      icon: Zap,
      color: 'green',
      onClick: () => window.location.href = '/electricite',
      children: [
        { name: 'Dépannage électrique', onClick: () => window.location.href = '/electricite/depannage-urgence' },
        { name: 'Mise aux normes NF C 15-100', onClick: () => window.location.href = '/electricite/mise-aux-normes' },
        { name: 'Installation éclairage', onClick: () => window.location.href = '/electricite/installation-eclairage' },
        { name: 'Domotique connectée', onClick: () => window.location.href = '/electricite/domotique-connectee' }
      ]
    },
    {
      title: 'Blog',
      icon: BookOpen,
      color: 'purple',
      onClick: () => window.location.href = '/blog',
      children: [
        { name: 'Articles Plomberie' },
        { name: 'Articles Chauffage' },
        { name: 'Articles Électricité' },
        { name: 'Conseils d\'experts' }
      ]
    }
  ];

  const legalPages = [
    { name: 'Mentions légales', icon: FileText },
    { name: 'Politique de confidentialité', icon: FileText },
    { name: 'Conditions générales de vente', icon: FileText },
    { name: 'Plan du site', icon: Map }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-100',
      red: 'bg-red-50 text-red-600 border-red-100',
      green: 'bg-green-50 text-green-600 border-green-100',
      purple: 'bg-purple-50 text-purple-600 border-purple-100'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-50 text-gray-600 border-gray-100';
  };

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Map className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Plan du site
                </h1>
                <p className="text-gray-600 mt-2">
                  Navigation complète du site MULTISERVICES
                </p>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/20250907_1344_Modern Website Sitemap_simple_compose_01k4hztjj1ephswb6x7hr3t2rj.png"
                  alt="Plan de site moderne - Navigation complète et structure du site web FKR MULTI-SERVICES"
                  className="w-full h-48 lg:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Map className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Plan du Site</p>
                      <p className="text-blue-600 text-sm">Navigation complète</p>
                    </div>
                  </div>
                </div>
                
                {/* Badge navigation */}
                <div className="absolute top-6 right-6 bg-blue-600 text-white rounded-xl px-4 py-2 shadow-lg">
                  <div className="text-center">
                    <p className="font-bold text-sm">Navigation</p>
                    <p className="text-xs text-blue-100">Structurée</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Navigation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pages principales</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {siteStructure.map((section, index) => {
                  const Icon = section.icon;
                  const colorClasses = getColorClasses(section.color);
                  
                  return (
                    <div
                      key={index}
                      className={`border-2 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${colorClasses}`}
                      onClick={section.onClick}
                    >
                      <div className="flex items-center mb-4">
                        <Icon className="h-6 w-6 mr-3" />
                        <h3 className="text-lg font-bold">{section.title}</h3>
                      </div>
                      
                      <ul className="space-y-2">
                        {section.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (child.onClick) {
                                  child.onClick();
                                }
                              }}
                              className="text-sm hover:underline transition-colors"
                            >
                              • {child.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border-2 border-green-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-bold text-green-900">Numéros de téléphone</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-800">
                      <strong>Standard :</strong> 09 88 09 78 55
                    </p>
                    <p className="text-green-800">
                      <strong>Urgences :</strong> 06 29 17 30 03
                    </p>
                    <p className="text-green-700 text-sm">Service disponible 24h/7j</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-2 border-blue-100 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Map className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-bold text-blue-900">Zone d'intervention</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-blue-800">Paris (75) - Tous arrondissements</p>
                    <p className="text-blue-800">Yvelines (78)</p>
                    <p className="text-blue-800">Val-d'Oise (95)</p>
                    <p className="text-blue-800">Hauts-de-Seine (92)</p>
                    <p className="text-blue-800">Seine-Saint-Denis (93)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Pages */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pages légales</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {legalPages.map((page, index) => {
                  const Icon = page.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center">
                        <Icon className="h-5 w-5 text-gray-600 mr-2" />
                        <span className="text-gray-800 text-sm font-medium">{page.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Footer Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">MULTISERVICES</h3>
                <p className="text-gray-600 mb-4">
                  Votre expert en plomberie, chauffage et électricité à Paris et Île-de-France
                </p>
                <div className="flex justify-center space-x-6 text-sm text-gray-500">
                  <span>Entreprise certifiée RGE</span>
                  <span>•</span>
                  <span>Assurance décennale</span>
                  <span>•</span>
                  <span>Service 24h/7j</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;