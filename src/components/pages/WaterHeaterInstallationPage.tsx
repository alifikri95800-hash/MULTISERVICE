import React, { useEffect, useState } from 'react';
import { Droplets, Zap, Flame, CheckCircle, Clock, Award } from 'lucide-react';

interface WaterHeaterInstallationPageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const WaterHeaterInstallationPage: React.FC<WaterHeaterInstallationPageProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const waterHeaterTypes = [
    {
      title: 'Chauffe-eau électrique',
      description: 'Installation de chauffe-eau électriques de 50L à 300L',
      details: ['Capacité 50L à 300L', 'Installation murale ou au sol', 'Résistance blindée ou stéatite', 'Garantie constructeur'],
      icon: Zap,
      color: 'blue'
    },
    {
      title: 'Chauffe-eau gaz',
      description: 'Pose de chauffe-eau gaz instantané ou à accumulation',
      details: ['Chauffe-eau instantané', 'Ballon à accumulation', 'Raccordement gaz sécurisé', 'Évacuation des fumées'],
      icon: Flame,
      color: 'red'
    },
    {
      title: 'Ballon thermodynamique',
      description: 'Installation de chauffe-eau thermodynamique économique',
      details: ['Économies jusqu\'à 70%', 'Pompe à chaleur intégrée', 'Capacité 200L à 300L', 'Crédit d\'impôt possible'],
      icon: Award,
      color: 'green'
    },
    {
      title: 'Chauffe-eau solaire',
      description: 'Solution écologique avec capteurs solaires',
      details: ['Énergie renouvelable', 'Capteurs solaires', 'Ballon de stockage', 'Appoint électrique'],
      icon: Droplets,
      color: 'blue'
    }
  ];

  const advantages = [
    'Conseil personnalisé selon vos besoins',
    'Installation par plombiers certifiés',
    'Mise en service et réglages',
    'Garantie pièces et main d\'œuvre',
    'Recyclage de l\'ancien équipement',
    'Service après-vente réactif'
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-100 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="bg-blue-600 p-4 rounded-2xl">
                  <Droplets className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Installation <span className="text-blue-600">Chauffe-eau</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Installation professionnelle de chauffe-eau à Paris et départements 78, 95, 92, 93. 
                Tous types : électrique, gaz, thermodynamique, solaire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={onRequestQuote}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Devis gratuit
                </button>
                <a
                  href="tel:0988097855"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  09 88 09 78 55
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/20250909_0251_Professional Plumber Installation_simple_compose_01k4nz63afep2b76996yjztjyf.png"
                  alt="Installation professionnelle de chauffe-eau - Service expert avec garantie"
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
                      <p className="font-bold text-gray-900">Installation Expert</p>
                      <p className="text-blue-600 text-sm">Tous types</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Heater Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Types de chauffe-eau
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {waterHeaterTypes.map((type, index) => {
              const Icon = type.icon;
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

      {/* Sizing Guide */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Guide des capacités</h3>
            <p className="text-gray-600 mb-6">
              Choisissez la bonne capacité selon le nombre d'occupants de votre logement
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900">1-2 personnes</h4>
                <p className="text-blue-700 text-sm">50-100L</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900">3-4 personnes</h4>
                <p className="text-green-700 text-sm">150-200L</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900">5-6 personnes</h4>
                <p className="text-orange-700 text-sm">250-300L</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900">7+ personnes</h4>
                <p className="text-purple-700 text-sm">300L+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir notre installation ?
              </h2>
              <p className="text-gray-600 mb-8">
                Notre équipe de plombiers certifiés vous accompagne dans le choix 
                et l'installation de votre chauffe-eau.
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
                <h3 className="text-2xl font-bold text-gray-900">Installation rapide</h3>
                <p className="text-gray-600">Mise en service le jour même</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Service complet</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Dépose ancien équipement</li>
                    <li>• Installation complète</li>
                    <li>• Mise en service</li>
                    <li>• Formation utilisation</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <a
                    href="tel:0988097855"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg inline-block"
                  >
                    09 88 09 78 55
                  </a>
                  <p className="text-gray-600 text-sm mt-2">Conseil personnalisé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterHeaterInstallationPage;