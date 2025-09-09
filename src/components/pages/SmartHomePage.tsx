import React, { useEffect, useState } from 'react';
import { Smartphone, Wifi, Home, CheckCircle, Clock, Award } from 'lucide-react';

interface SmartHomePageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const SmartHomePage: React.FC<SmartHomePageProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const smartHomeServices = [
    {
      title: 'Éclairage connecté',
      description: 'Contrôle intelligent de tous vos éclairages',
      details: ['Ampoules connectées', 'Variateurs intelligents', 'Programmation horaire', 'Contrôle vocal'],
      icon: Smartphone,
      color: 'blue'
    },
    {
      title: 'Volets automatiques',
      description: 'Motorisation et automatisation de vos volets',
      details: ['Moteurs radio', 'Programmation lever/coucher', 'Capteur soleil/vent', 'Contrôle à distance'],
      icon: Home,
      color: 'green'
    },
    {
      title: 'Thermostat connecté',
      description: 'Gestion intelligente du chauffage',
      details: ['Programmation avancée', 'Géolocalisation', 'Apprentissage automatique', 'Économies garanties'],
      icon: Award,
      color: 'orange'
    },
    {
      title: 'Portier vidéo connecté',
      description: 'Sécurité et contrôle d\'accès intelligent',
      details: ['Visiophone IP', 'Notification smartphone', 'Ouverture à distance', 'Enregistrement vidéo'],
      icon: Wifi,
      color: 'purple'
    }
  ];

  const ecosystems = [
    { name: 'Google Home', features: ['Assistant vocal', 'Contrôle centralisé'], logo: '🏠' },
    { name: 'Amazon Alexa', features: ['Commandes vocales', 'Routines'], logo: '🔊' },
    { name: 'Apple HomeKit', features: ['Siri', 'Sécurité renforcée'], logo: '🍎' },
    { name: 'Samsung SmartThings', features: ['Hub central', 'Compatibilité'], logo: '📱' }
  ];

  const advantages = [
    'Confort et simplicité d\'utilisation',
    'Économies d\'énergie automatiques',
    'Sécurité renforcée du domicile',
    'Contrôle à distance permanent',
    'Valorisation du bien immobilier',
    'Installation par électricien certifié'
  ];

  const benefits = [
    { title: 'Économies', desc: 'Jusqu\'à 30% sur factures', icon: '💰' },
    { title: 'Confort', desc: 'Automatisation complète', icon: '🏡' },
    { title: 'Sécurité', desc: 'Surveillance intelligente', icon: '🔒' },
    { title: 'Écologie', desc: 'Optimisation énergétique', icon: '🌱' }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-100 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="bg-purple-600 p-4 rounded-2xl">
                  <Smartphone className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-purple-600">Domotique</span> Connectée
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Installation de systèmes domotiques à Paris et départements 78, 95, 92, 93. 
                Transformez votre maison en habitat intelligent et économique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={onRequestQuote}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Devis gratuit
                </button>
                <a
                  href="tel:0988097855"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  09 88 09 78 55
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/20250909_0228_Futuristic Smart Home Circuitry_simple_compose_01k4nxvqjfe7nav9qnnkjnyjqp.png"
                  alt="Installation domotique connectée - Maison intelligente et automatisée"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Smartphone className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Domotique Expert</p>
                      <p className="text-purple-600 text-sm">Maison connectée</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Benefits */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Avantages de la maison connectée</h3>
            <p className="text-gray-600 mb-6">
              La domotique transforme votre quotidien en automatisant vos équipements 
              pour plus de confort, sécurité et économies.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <h4 className="font-semibold text-blue-900">{benefit.title}</h4>
                  <p className="text-blue-700 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos solutions domotiques
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {smartHomeServices.map((service, index) => {
              const Icon = service.icon;
              const colorClasses = {
                blue: 'bg-blue-50 text-blue-600 border-blue-100',
                green: 'bg-green-50 text-green-600 border-green-100',
                orange: 'bg-orange-50 text-orange-600 border-orange-100',
                purple: 'bg-purple-50 text-purple-600 border-purple-100'
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

      {/* Ecosystems */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Écosystèmes compatibles
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {ecosystems.map((ecosystem, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-3">{ecosystem.logo}</div>
                <h4 className="font-bold text-gray-900 mb-3">{ecosystem.name}</h4>
                <ul className="space-y-1">
                  {ecosystem.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Processus d'installation
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Audit domotique', desc: 'Analyse besoins et faisabilité' },
              { step: '2', title: 'Conception système', desc: 'Plan personnalisé' },
              { step: '3', title: 'Installation', desc: 'Pose et configuration' },
              { step: '4', title: 'Formation', desc: 'Prise en main complète' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir la domotique ?
              </h2>
              <p className="text-gray-600 mb-8">
                La domotique révolutionne votre habitat en apportant intelligence, 
                confort et économies. Notre équipe vous accompagne dans cette transformation.
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
                className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Demander un devis gratuit
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="text-center mb-6">
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Installation sur mesure</h3>
                <p className="text-gray-600">Selon vos besoins et budget</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Service complet</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Audit et conseil personnalisé</li>
                    <li>• Installation et configuration</li>
                    <li>• Formation complète</li>
                    <li>• Support technique</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <a
                    href="tel:0988097855"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg inline-block"
                  >
                    09 88 09 78 55
                  </a>
                  <p className="text-gray-600 text-sm mt-2">Audit domotique gratuit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartHomePage;