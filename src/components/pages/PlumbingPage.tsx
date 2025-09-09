import React, { useEffect, useState } from 'react';
import { Droplets, Wrench, AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface PlumbingPageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const PlumbingPage: React.FC<PlumbingPageProps> = ({ onRequestQuote, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Dépannages d\'urgence',
      description: 'Intervention rapide 24h/7j pour tous types de pannes',
      details: ['Fuites d\'eau importantes', 'Canalisations bouchées', 'Chauffe-eau en panne', 'Robinets défaillants'],
      icon: AlertCircle,
      color: 'red'
    },
    {
      title: 'Recherche de fuites',
      description: 'Détection précise des fuites sans casse grâce à notre matériel professionnel',
      details: ['Détection électronique', 'Caméra d\'inspection', 'Localisation précise', 'Réparation ciblée'],
      icon: Droplets,
      color: 'blue'
    },
    {
      title: 'Débouchage canalisations',
      description: 'Débouchage efficace de tous types de conduits',
      details: ['Évier et lavabo', 'WC et sanitaires', 'Douche et baignoire', 'Évacuations extérieures'],
      icon: Wrench,
      color: 'green'
    },
    {
      title: 'Installation chauffe-eau',
      description: 'Pose et remplacement de chauffe-eau électriques et gaz',
      details: ['Chauffe-eau électrique', 'Chauffe-eau gaz', 'Ballon thermodynamique', 'Chauffe-eau solaire'],
      icon: Droplets,
      color: 'blue'
    }
  ];

  const advantages = [
    'Intervention sous 1h pour les urgences',
    'Techniciens plombiers certifiés',
    'Matériel professionnel de dernière génération',
    'Garantie pièces et main d\'œuvre',
    'Devis gratuit avant intervention',
    'Tarifs transparents sans surprise'
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="bg-blue-600 p-4 rounded-2xl">
                  <Droplets className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Services de <span className="text-blue-600">Plomberie</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Plombier professionnel à Paris et départements 78, 95, 92, 93. Interventions rapides 24h/7j pour tous vos problèmes de plomberie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:0629173003"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Urgence 24h/7j
                </a>
                <button
                  onClick={onRequestQuote}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Devis gratuit
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/20250907_1139_Copper Plumbing Masterpiece_simple_compose_01k4hrnezxfarawjaqe1r90kkc.png"
                  alt="Services de plomberie professionnels - Réparation et installation"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Droplets className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Plomberie Expert</p>
                      <p className="text-blue-600 text-sm">Intervention 24h/7j</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos services de plomberie
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colorClasses = {
                red: 'bg-red-50 text-red-600 border-red-100',
                blue: 'bg-blue-50 text-blue-600 border-blue-100',
                green: 'bg-green-50 text-green-600 border-green-100'
              };
              
              return (
                <div
                  key={index}
                  className={`bg-white border-2 rounded-2xl p-6 lg:p-8 shadow-lg transition-all duration-700 delay-${index * 200} hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  className={`bg-white border-2 rounded-2xl p-6 lg:p-8 shadow-lg transition-all duration-700 delay-${index * 200} hover:scale-105 flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 flex-grow">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100 mt-auto">
                    <button
                      onClick={() => {
                        if (service.title === 'Dépannages d\'urgence') {
                          window.location.href = '/plomberie/depannage-urgence';
                        } else if (service.title === 'Recherche de fuites') {
                          window.location.href = '/plomberie/recherche-fuites';
                        } else if (service.title === 'Débouchage canalisations') {
                          window.location.href = '/plomberie/debouchage-canalisations';
                        } else if (service.title === 'Installation chauffe-eau') {
                          window.location.href = '/plomberie/installation-chauffe-eau';
                        }
                      }}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-md flex items-center justify-center space-x-2 ${
                        service.color === 'red' 
                          ? 'bg-red-600 hover:bg-red-700 text-white' 
                          : service.color === 'blue'
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-green-600 hover:bg-green-700 text-white'
                      }`}
                    >
                      <span>En savoir plus</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir notre service plomberie ?
              </h2>
              <p className="text-gray-600 mb-8">
                Notre équipe de plombiers qualifiés vous garantit 
                un service professionnel et des interventions rapides sur Paris et départements 78, 95, 92, 93.
              </p>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onRequestQuote}
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Demander un devis gratuit
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="text-center mb-6">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Service d'urgence</h3>
                <p className="text-gray-600">Disponible 24h/24, 7j/7</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 mb-2">Urgences plomberie</h4>
                  <p className="text-red-800 text-sm">Fuite importante, dégât des eaux, canalisation bouchée</p>
                </div>
                
                <div className="text-center">
                  <a
                    href="tel:0629173003"
                    className="relative inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-lg transition-all duration-200 hover:scale-110 shadow-xl cursor-pointer"
                  >
                    {/* Effet néon contour qui fait le tour */}
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-400 opacity-60 animate-pulse blur-sm"></div>
                    <div className="absolute -inset-0.5 rounded-lg bg-red-500 opacity-40 animate-ping"></div>
                    
                    <div className="relative">
                      06 29 17 30 03
                    </div>
                  </a>
                  <p className="text-gray-600 text-sm mt-2">Intervention sous 1h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PlumbingPage;