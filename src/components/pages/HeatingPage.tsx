import React, { useEffect, useState } from 'react';
import { Flame, Thermometer, Settings, Shield, CheckCircle, Clock } from 'lucide-react';

interface HeatingPageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const HeatingPage: React.FC<HeatingPageProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heatingServices = [
    {
      title: 'Entretien chaudière',
      description: 'Entretien annuel obligatoire et révision complète de votre chaudière',
      details: ['Chaudière gaz et fioul', 'Nettoyage complet', 'Vérification sécurité', 'Certificat de conformité'],
      icon: Settings,
      color: 'blue'
    },
    {
      title: 'Dépannage urgence',
      description: 'Intervention rapide 24h/7j en cas de panne de chauffage',
      details: ['Panne chaudière', 'Plus d\'eau chaude', 'Radiateurs froids', 'Problème thermostat'],
      icon: Flame,
      color: 'red'
    },
    {
      title: 'Installation thermostat',
      description: 'Pose de thermostats connectés et programmables pour optimiser votre confort',
      details: ['Thermostat connecté', 'Programmation horaire', 'Contrôle à distance', 'Économies d\'énergie'],
      icon: Thermometer,
      color: 'green'
    },
    {
      title: 'Installation chaudière',
      description: 'Remplacement et installation de chaudières haute performance',
      details: ['Chaudière condensation', 'Chaudière hybride', 'Pompe à chaleur', 'Mise en service'],
      icon: Shield,
      color: 'blue'
    }
  ];

  const advantages = [
    'Techniciens chauffagistes certifiés RGE',
    'Intervention d\'urgence 24h/7j',
    'Entretien préventif et curatif',
    'Garantie constructeur respectée',
    'Conseils en économie d\'énergie',
    'Contrats d\'entretien avantageux'
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-100 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="bg-red-600 p-4 rounded-2xl">
                  <Flame className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Services de <span className="text-red-600">Chauffage</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Chauffagiste professionnel à Paris et départements 78, 95, 92, 93. Entretien, dépannage et installation de systèmes de chauffage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:0629173003"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Dépannage urgence
                </a>
                <button
                  onClick={onRequestQuote}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Entretien chaudière
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/20250907_1145_Modern Heating Installation_simple_compose_01k4hrwnnqetnty3x6ha8ahkjs.png"
                  alt="Services de chauffage professionnels - Installation et entretien de chaudières par des experts certifiés"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Flame className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Chauffage Expert</p>
                      <p className="text-red-600 text-sm">Certifié RGE</p>
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
            Nos services de chauffage
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {heatingServices.map((service, index) => {
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
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => {
                        if (service.title === 'Entretien chaudière') {
                          window.location.href = '/chauffage/entretien-chaudiere';
                        } else if (service.title === 'Dépannage urgence') {
                          window.location.href = '/chauffage/depannage-urgence';
                        } else if (service.title === 'Installation thermostat') {
                          window.location.href = '/chauffage/installation-thermostat';
                        } else if (service.title === 'Installation chaudière') {
                          window.location.href = '/chauffage/installation-chaudiere';
                        }
                      }}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-md flex items-center justify-center space-x-2 text-white ${
                        service.color === 'red' 
                          ? 'bg-red-600 hover:bg-red-700' 
                          : service.color === 'blue'
                          ? 'bg-blue-600 hover:bg-blue-700'
                          : 'bg-green-600 hover:bg-green-700'
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

      {/* Seasonal Alert */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 text-center">
            <Thermometer className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Entretien chaudière obligatoire</h3>
            <p className="text-gray-600 mb-6">
              L'entretien annuel de votre chaudière est obligatoire et permet de garantir votre sécurité, 
              optimiser les performances et prolonger la durée de vie de votre équipement.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900">Sécurité</h4>
                <p className="text-blue-700 text-sm">Détection des fuites de gaz</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900">Économies</h4>
                <p className="text-green-700 text-sm">Réduction de 12% de la consommation</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900">Durabilité</h4>
                <p className="text-purple-700 text-sm">Prolonge la durée de vie</p>
              </div>
            </div>
            <button
              onClick={onRequestQuote}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Programmer mon entretien
            </button>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir nos chauffagistes ?
              </h2>
              <p className="text-gray-600 mb-8">
                Notre équipe de chauffagistes certifiés RGE intervient sur Paris et départements 78, 95, 92, 93 
                pour l'entretien, le dépannage et l'installation de vos équipements de chauffage.
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
                className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Demander un devis gratuit
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="text-center mb-6">
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Urgence chauffage</h3>
                <p className="text-gray-600">Intervention rapide 24h/24</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 mb-2">Pannes courantes</h4>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Chaudière qui ne démarre pas</li>
                    <li>• Plus d'eau chaude sanitaire</li>
                    <li>• Radiateurs qui ne chauffent pas</li>
                    <li>• Fuite sur le circuit</li>
                  </ul>
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
                  <p className="text-gray-600 text-sm mt-2">Dépannage sous 2h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HeatingPage;