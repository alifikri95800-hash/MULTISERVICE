import React, { useEffect, useState } from 'react';
import { Lightbulb, Zap, Settings, CheckCircle, Clock, Award } from 'lucide-react';

interface LightingInstallationPageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const LightingInstallationPage: React.FC<LightingInstallationPageProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const lightingServices = [
    {
      title: 'Éclairage LED',
      description: 'Installation d\'éclairage LED économique et durable',
      details: ['Spots LED encastrés', 'Réglettes LED', 'Ampoules LED', 'Économies jusqu\'à 80%'],
      icon: Lightbulb,
      color: 'green'
    },
    {
      title: 'Spots encastrés',
      description: 'Pose de spots encastrés pour éclairage moderne',
      details: ['Spots orientables', 'Éclairage indirect', 'Variateur d\'intensité', 'Design contemporain'],
      icon: Zap,
      color: 'blue'
    },
    {
      title: 'Luminaires design',
      description: 'Installation de luminaires décoratifs et fonctionnels',
      details: ['Suspensions design', 'Appliques murales', 'Plafonniers modernes', 'Éclairage d\'ambiance'],
      icon: Award,
      color: 'purple'
    },
    {
      title: 'Variateurs et domotique',
      description: 'Systèmes d\'éclairage intelligents et connectés',
      details: ['Variateurs tactiles', 'Éclairage connecté', 'Programmation horaire', 'Contrôle smartphone'],
      icon: Settings,
      color: 'blue'
    }
  ];

  const ledAdvantages = [
    { title: 'Économies', desc: 'Jusqu\'à 80% de consommation en moins', icon: '💰' },
    { title: 'Durabilité', desc: 'Durée de vie 25 fois supérieure', icon: '⏰' },
    { title: 'Écologie', desc: 'Réduction empreinte carbone', icon: '🌱' },
    { title: 'Confort', desc: 'Éclairage de qualité sans scintillement', icon: '✨' }
  ];

  const advantages = [
    'Conseil éclairage personnalisé',
    'Installation par électricien certifié',
    'Luminaires de qualité professionnelle',
    'Variateurs et domotique',
    'Garantie installation et matériel',
    'Service après-vente réactif'
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="bg-yellow-600 p-4 rounded-2xl">
                  <Lightbulb className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Installation <span className="text-yellow-600">Éclairage</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Installation d'éclairage LED et luminaires à Paris et départements 78, 95, 92, 93. 
                Économisez jusqu'à 80% sur votre facture d'électricité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={onRequestQuote}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Devis gratuit
                </button>
                <a
                  href="tel:0988097855"
                  className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  09 88 09 78 55
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/20250909_0227_Futuristic LED Lighting Elegance_simple_compose_01k4nxwf9sfrrbc2d9wxt67sm1.png"
                  alt="Installation d'éclairage LED moderne - Économique et design"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <Lightbulb className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Éclairage Expert</p>
                      <p className="text-yellow-600 text-sm">LED & Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LED Benefits */}
      <section className="py-12 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Avantages de l'éclairage LED</h3>
            <p className="text-gray-600 mb-6">
              Passez à l'éclairage LED et réduisez drastiquement votre facture d'électricité 
              tout en améliorant la qualité de votre éclairage.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {ledAdvantages.map((advantage, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg">
                  <div className="text-3xl mb-2">{advantage.icon}</div>
                  <h4 className="font-semibold text-green-900">{advantage.title}</h4>
                  <p className="text-green-700 text-sm">{advantage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lighting Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos services d'éclairage
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {lightingServices.map((service, index) => {
              const Icon = service.icon;
              const colorClasses = {
                green: 'bg-green-50 text-green-600 border-green-100',
                blue: 'bg-blue-50 text-blue-600 border-blue-100',
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

      {/* Lighting Types */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Types d'éclairage par pièce
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { room: 'Salon', lighting: 'Éclairage d\'ambiance', solutions: ['Spots LED', 'Variateurs', 'Appliques'] },
              { room: 'Cuisine', lighting: 'Éclairage fonctionnel', solutions: ['Réglettes LED', 'Spots plan travail', 'Suspension îlot'] },
              { room: 'Chambre', lighting: 'Éclairage doux', solutions: ['Plafonnier LED', 'Liseuses', 'Variateurs'] },
              { room: 'Salle de bain', lighting: 'Éclairage sécurisé', solutions: ['Spots IP44', 'Miroir éclairant', 'Appliques étanches'] }
            ].map((room, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-2">{room.room}</h4>
                <p className="text-gray-600 text-sm mb-4">{room.lighting}</p>
                <ul className="space-y-1">
                  {room.solutions.map((solution, idx) => (
                    <li key={idx} className="text-gray-700 text-xs flex items-center">
                      <span className="w-1 h-1 bg-yellow-600 rounded-full mr-2"></span>
                      {solution}
                    </li>
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
                Pourquoi choisir notre service éclairage ?
              </h2>
              <p className="text-gray-600 mb-8">
                Notre équipe d'électriciens spécialisés vous accompagne dans la modernisation 
                de votre éclairage pour plus de confort et d'économies.
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
                className="mt-8 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Demander un devis gratuit
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="text-center mb-6">
                <Clock className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Installation rapide</h3>
                <p className="text-gray-600">Éclairage fonctionnel immédiatement</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Service complet</h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Étude éclairage personnalisée</li>
                    <li>• Fourniture et pose</li>
                    <li>• Réglages et programmation</li>
                    <li>• Formation utilisation</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <a
                    href="tel:0988097855"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg inline-block"
                  >
                    09 88 09 78 55
                  </a>
                  <p className="text-gray-600 text-sm mt-2">Conseil éclairage gratuit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LightingInstallationPage;