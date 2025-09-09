import React, { useEffect, useState } from 'react';
import { Thermometer, Smartphone, Wifi, CheckCircle, Clock, Award } from 'lucide-react';

interface ThermostatInstallationPageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const ThermostatInstallationPage: React.FC<ThermostatInstallationPageProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const thermostatTypes = [
    {
      title: 'Thermostat programmable',
      description: 'Programmation horaire et hebdomadaire pour optimiser le confort',
      details: ['Programmation 7 jours', 'Plusieurs zones horaires', 'Mode vacances', 'Écran LCD'],
      icon: Thermometer,
      color: 'blue'
    },
    {
      title: 'Thermostat connecté',
      description: 'Contrôle à distance via smartphone et intelligence artificielle',
      details: ['Contrôle smartphone', 'Géolocalisation', 'Apprentissage automatique', 'Statistiques consommation'],
      icon: Smartphone,
      color: 'green'
    },
    {
      title: 'Thermostat sans fil',
      description: 'Installation simple sans câblage supplémentaire',
      details: ['Installation facile', 'Communication radio', 'Portée 100m', 'Pile longue durée'],
      icon: Wifi,
      color: 'purple'
    },
    {
      title: 'Thermostat multizone',
      description: 'Gestion indépendante de plusieurs zones de chauffage',
      details: ['Plusieurs zones', 'Vannes motorisées', 'Économies ciblées', 'Confort personnalisé'],
      icon: Award,
      color: 'blue'
    }
  ];

  const advantages = [
    'Économies d\'énergie jusqu\'à 25%',
    'Installation par chauffagiste certifié',
    'Programmation personnalisée',
    'Contrôle à distance possible',
    'Amélioration du confort',
    'Garantie fabricant respectée'
  ];

  const brands = [
    { name: 'Nest', features: ['IA avancée', 'Design premium'] },
    { name: 'Netatmo', features: ['Made in France', 'Apple HomeKit'] },
    { name: 'Honeywell', features: ['Fiabilité', 'Simplicité'] },
    { name: 'Tado', features: ['Géofencing', 'Multi-zones'] }
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
                  <Thermometer className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Installation <span className="text-green-600">Thermostat</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Installation de thermostats programmables et connectés à Paris et départements 78, 95, 92, 93. 
                Économisez jusqu'à 25% sur votre facture de chauffage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={onRequestQuote}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Devis gratuit
                </button>
                <a
                  href="tel:0988097855"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  09 88 09 78 55
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/20250909_0242_Modern Smart Thermostat System_simple_compose_01k4nynr1peg09ztmsfx95xepj.png"
                  alt="Installation de thermostat connecté - Contrôle intelligent du chauffage"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Thermometer className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Thermostat Expert</p>
                      <p className="text-green-600 text-sm">Connecté</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Alert */}
      <section className="py-12 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 text-center">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Économies garanties</h3>
            <p className="text-gray-600 mb-6">
              Un thermostat programmable peut réduire votre facture de chauffage de 15 à 25% 
              en optimisant automatiquement la température selon vos habitudes.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900">Programmation</h4>
                <p className="text-green-700 text-sm">Température selon horaires</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900">Géolocalisation</h4>
                <p className="text-blue-700 text-sm">Détection présence/absence</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900">Apprentissage</h4>
                <p className="text-purple-700 text-sm">IA adapte aux habitudes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thermostat Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Types de thermostats
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {thermostatTypes.map((type, index) => {
              const Icon = type.icon;
              const colorClasses = {
                blue: 'bg-blue-50 text-blue-600 border-blue-100',
                green: 'bg-green-50 text-green-600 border-green-100',
                purple: 'bg-purple-50 text-purple-600 border-purple-100'
              };
              
              return (
                <div
                  key={index}
                  className={`bg-white border-2 rounded-2xl p-6 lg:p-8 shadow-lg transition-all duration-700 delay-${index * 200} hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${colorClasses[type.color as keyof typeof colorClasses]}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  
                  <ul className="space-y-2">
                    {type.details.map((detail, idx) => (
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

      {/* Brands */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Marques partenaires
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h4 className="font-bold text-gray-900 mb-3">{brand.name}</h4>
                <ul className="space-y-1">
                  {brand.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi installer un thermostat ?
              </h2>
              <p className="text-gray-600 mb-8">
                Un thermostat moderne transforme votre système de chauffage en solution 
                intelligente et économique.
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
                <h3 className="text-2xl font-bold text-gray-900">Installation rapide</h3>
                <p className="text-gray-600">Mise en service en 1h</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Service complet</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Conseil personnalisé</li>
                    <li>• Installation professionnelle</li>
                    <li>• Configuration complète</li>
                    <li>• Formation utilisation</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <a
                    href="tel:0988097855"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg inline-block"
                  >
                    09 88 09 78 55
                  </a>
                  <p className="text-gray-600 text-sm mt-2">Conseil gratuit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThermostatInstallationPage;