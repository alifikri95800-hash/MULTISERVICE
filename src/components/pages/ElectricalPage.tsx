import React, { useEffect, useState } from 'react';
import { Zap, Shield, Lightbulb, Smartphone, CheckCircle, Clock } from 'lucide-react';

interface ElectricalPageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const ElectricalPage: React.FC<ElectricalPageProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const electricalServices = [
    {
      title: 'Dépannage électrique',
      description: 'Intervention d\'urgence 24h/7j pour tous problèmes électriques',
      details: ['Coupure générale', 'Court-circuit', 'Disjoncteur qui saute', 'Prise qui ne fonctionne plus'],
      icon: Zap,
      color: 'red'
    },
    {
      title: 'Mise aux normes NF C 15-100',
      description: 'Remise aux normes complète de votre installation électrique',
      details: ['Diagnostic électrique', 'Tableau électrique', 'Mise à la terre', 'Protection différentielle'],
      icon: Shield,
      color: 'blue'
    },
    {
      title: 'Installation éclairage',
      description: 'Pose d\'éclairage LED, spots, luminaires et variateurs',
      details: ['Éclairage LED', 'Spots encastrés', 'Luminaires design', 'Variateurs d\'intensité'],
      icon: Lightbulb,
      color: 'green'
    },
    {
      title: 'Domotique connectée',
      description: 'Installation de systèmes domotiques pour votre confort',
      details: ['Volets automatiques', 'Éclairage connecté', 'Thermostat intelligent', 'Portier vidéo'],
      icon: Smartphone,
      color: 'blue'
    }
  ];

  const advantages = [
    'Électriciens certifiés et qualifiés',
    'Respect des normes NF C 15-100',
    'Matériel électrique de qualité',
    'Garantie décennale sur nos travaux',
    'Intervention rapide 24h/7j',
    'Devis gratuit et détaillé'
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-100 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="bg-green-600 p-4 rounded-2xl">
                  <Zap className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Services <span className="text-green-600">Électricité</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Électricien professionnel à Paris et départements 78, 95, 92, 93. Dépannage, mise aux normes et installation électrique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:0629173003"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Dépannage urgent
                </a>
                <button
                  onClick={onRequestQuote}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Mise aux normes
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/20250907_1148_Precision Electrical Panel_simple_compose_01k4hs5jxbevya4n03yffsth2x.png"
                  alt="Services d'électricité professionnels - Installation et mise aux normes électriques par des experts certifiés"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Zap className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Électricité Expert</p>
                      <p className="text-green-600 text-sm">Normes NF C 15-100</p>
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
            Nos services d'électricité
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {electricalServices.map((service, index) => {
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
                        if (service.title === 'Dépannage électrique') {
                          window.location.href = '/electricite/depannage-urgence';
                        } else if (service.title === 'Mise aux normes NF C 15-100') {
                          window.location.href = '/electricite/mise-aux-normes';
                        } else if (service.title === 'Installation éclairage') {
                          window.location.href = '/electricite/installation-eclairage';
                        } else if (service.title === 'Domotique connectée') {
                          window.location.href = '/electricite/domotique-connectee';
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

      {/* Safety Alert */}
      <section className="py-12 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 text-center">
            <Shield className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sécurité électrique</h3>
            <p className="text-gray-600 mb-6">
              Une installation électrique défaillante peut présenter des risques graves : incendie, électrocution. 
              Nos électriciens certifiés vérifient et remettent aux normes votre installation.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900">Diagnostic</h4>
                <p className="text-red-700 text-sm">État de l'installation</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900">Mise aux normes</h4>
                <p className="text-blue-700 text-sm">Conformité NF C 15-100</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900">Attestation</h4>
                <p className="text-green-700 text-sm">Consuel si nécessaire</p>
              </div>
            </div>
            <button
              onClick={onRequestQuote}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Diagnostic électrique gratuit
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
                Pourquoi choisir nos électriciens ?
              </h2>
              <p className="text-gray-600 mb-8">
                Notre équipe d'électriciens qualifiés intervient sur Paris et départements 78, 95, 92, 93 
                pour tous vos besoins en électricité : dépannage, installation et mise aux normes.
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
                className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Demander un devis gratuit
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="text-center mb-6">
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Urgence électrique</h3>
                <p className="text-gray-600">Intervention rapide et sécurisée</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 mb-2">Situations d'urgence</h4>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Coupure électrique générale</li>
                    <li>• Court-circuit, disjoncteur</li>
                    <li>• Odeur de brûlé électrique</li>
                    <li>• Installation dangereuse</li>
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
                  <p className="text-gray-600 text-sm mt-2">Sécurisation immédiate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ElectricalPage;