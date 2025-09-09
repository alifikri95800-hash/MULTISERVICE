import React, { useEffect, useState } from 'react';
import { Search, Droplets, Camera, CheckCircle, Shield } from 'lucide-react';

interface LeakDetectionPageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const LeakDetectionPage: React.FC<LeakDetectionPageProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const detectionMethods = [
    {
      title: 'Détection électronique',
      description: 'Équipement professionnel pour localiser les fuites sans casse',
      details: ['Géophone électronique', 'Corrélateur acoustique', 'Détecteur d\'humidité', 'Localisation précise'],
      icon: Search,
      color: 'blue'
    },
    {
      title: 'Caméra d\'inspection',
      description: 'Inspection vidéo des canalisations pour identifier les problèmes',
      details: ['Caméra haute définition', 'Inspection complète', 'Enregistrement vidéo', 'Rapport détaillé'],
      icon: Camera,
      color: 'green'
    },
    {
      title: 'Test de pression',
      description: 'Contrôle de l\'étanchéité de vos installations',
      details: ['Test hydraulique', 'Mesure de pression', 'Détection de chute', 'Certification étanchéité'],
      icon: Shield,
      color: 'purple'
    },
    {
      title: 'Recherche non destructive',
      description: 'Localisation sans démolition ni casse',
      details: ['Préservation des revêtements', 'Intervention ciblée', 'Réparation minimale', 'Économies garanties'],
      icon: Droplets,
      color: 'blue'
    }
  ];

  const leakSigns = [
    'Facture d\'eau anormalement élevée',
    'Humidité ou moisissures sur les murs',
    'Bruit d\'eau dans les cloisons',
    'Pression d\'eau faible',
    'Taches d\'humidité au plafond',
    'Odeurs d\'humidité persistantes'
  ];

  const advantages = [
    'Détection précise sans casse',
    'Équipement professionnel de pointe',
    'Intervention rapide et efficace',
    'Rapport détaillé avec photos',
    'Réparation ciblée et économique',
    'Garantie sur nos interventions'
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
                  <Search className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Recherche</span> de Fuites
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Détection professionnelle de fuites d'eau sans casse à Paris et départements 78, 95, 92, 93. 
                Équipement de pointe pour une localisation précise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:0988097855"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Détection immédiate
                </a>
                <button
                  onClick={onRequestQuote}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  Devis gratuit
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/20250907_1754_Leaking Pipe Close-up_simple_compose_01k4je58txfjp9z9mchv2ja3d5.png"
                  alt="Fuite de canalisation - Recherche de fuites professionnelle et détection sans casse par des experts"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Search className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Détection Expert</p>
                      <p className="text-blue-600 text-sm">Sans casse</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detection Methods */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos méthodes de détection
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {detectionMethods.map((method, index) => {
              const Icon = method.icon;
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
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${colorClasses[method.color as keyof typeof colorClasses]}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                  <p className="text-gray-600 mb-6">{method.description}</p>
                  
                  <ul className="space-y-2">
                    {method.details.map((detail, idx) => (
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

      {/* Signs of Leaks */}
      <section className="py-16 lg:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Signes d'une fuite d'eau
              </h2>
              <p className="text-gray-600 mb-8">
                Vous suspectez une fuite ? Ces signes ne trompent pas. 
                Une détection précoce permet d'éviter des dégâts importants.
              </p>
              
              <div className="space-y-4">
                {leakSigns.map((sign, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Droplets className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{sign}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h4 className="font-semibold text-orange-900 mb-2">⚠️ Attention</h4>
                <p className="text-orange-800 text-sm">
                  Une fuite non détectée peut causer des dégâts importants et coûteux. 
                  N'attendez pas, contactez-nous dès les premiers signes !
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="text-center mb-6">
                <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Détection rapide</h3>
                <p className="text-gray-600">Intervention sous 2h</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Nos avantages</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    {advantages.slice(0, 3).map((advantage, idx) => (
                      <li key={idx}>• {advantage}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <a
                    href="tel:0988097855"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg inline-block"
                  >
                    09 88 09 78 55
                  </a>
                  <p className="text-gray-600 text-sm mt-2">Devis gratuit sur place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Notre processus de détection
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Diagnostic initial', desc: 'Analyse des symptômes' },
              { step: '2', title: 'Équipement spécialisé', desc: 'Mise en place des outils' },
              { step: '3', title: 'Localisation précise', desc: 'Détection sans casse' },
              { step: '4', title: 'Rapport détaillé', desc: 'Devis de réparation' }
            ].map((process, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeakDetectionPage;