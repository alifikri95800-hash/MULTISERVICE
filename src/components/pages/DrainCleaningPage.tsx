import React, { useEffect, useState } from 'react';
import { Droplets, Wrench, AlertCircle, CheckCircle, Clock, Shield } from 'lucide-react';

interface DrainCleaningPageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const DrainCleaningPage: React.FC<DrainCleaningPageProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const drainServices = [
    {
      title: 'Débouchage WC',
      description: 'Intervention rapide pour WC bouchés avec équipement professionnel',
      details: ['Débouchage mécanique', 'Hydrocurage haute pression', 'Inspection caméra', 'Désinfection complète'],
      icon: AlertCircle,
      color: 'red'
    },
    {
      title: 'Débouchage évier',
      description: 'Débouchage efficace d\'éviers de cuisine et lavabos',
      details: ['Éviers de cuisine', 'Lavabos salle de bain', 'Évacuation lave-vaisselle', 'Siphons obstrués'],
      icon: Droplets,
      color: 'blue'
    },
    {
      title: 'Débouchage douche/baignoire',
      description: 'Évacuation des eaux usées de salle de bain',
      details: ['Bonde de douche', 'Évacuation baignoire', 'Cheveux et résidus', 'Canalisations PVC'],
      icon: Wrench,
      color: 'green'
    },
    {
      title: 'Débouchage extérieur',
      description: 'Canalisations extérieures et regards d\'évacuation',
      details: ['Regards d\'évacuation', 'Canalisations enterrées', 'Évacuations pluviales', 'Fosses septiques'],
      icon: Shield,
      color: 'blue'
    }
  ];

  const advantages = [
    'Intervention rapide 24h/7j',
    'Équipement professionnel haute pression',
    'Diagnostic par caméra d\'inspection',
    'Garantie sur nos interventions',
    'Tarifs transparents sans surprise',
    'Nettoyage complet après intervention'
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="bg-blue-600 p-4 rounded-2xl">
                  <Droplets className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Débouchage</span> Canalisations
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Service professionnel de débouchage à Paris et départements 78, 95, 92, 93. 
                Intervention rapide avec équipement haute pression.
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
                  src="/20250909_0245_Professional Plumbing System_simple_compose_01k4nyv999eq2rm5e2tx54prdk.png"
                  alt="Débouchage professionnel de canalisations - Service expert avec équipement haute pression"
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
                      <p className="font-bold text-gray-900">Débouchage Expert</p>
                      <p className="text-blue-600 text-sm">Haute pression</p>
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
            Nos services de débouchage
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {drainServices.map((service, index) => {
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
                Pourquoi choisir notre service de débouchage ?
              </h2>
              <p className="text-gray-600 mb-8">
                Notre équipe de plombiers spécialisés utilise des équipements professionnels 
                pour déboucher efficacement toutes vos canalisations.
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
                <h3 className="text-2xl font-bold text-gray-900">Service rapide</h3>
                <p className="text-gray-600">Débouchage efficace garanti</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Équipement professionnel</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Hydrocurage haute pression</li>
                    <li>• Caméra d'inspection</li>
                    <li>• Outils de débouchage mécanique</li>
                    <li>• Produits professionnels</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <a
                    href="tel:0988097855"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg inline-block"
                  >
                    09 88 09 78 55
                  </a>
                  <p className="text-gray-600 text-sm mt-2">Intervention rapide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrainCleaningPage;