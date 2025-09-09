import React, { useEffect, useState } from 'react';
import { Flame, Award, Shield, CheckCircle, Clock, Settings } from 'lucide-react';

interface BoilerInstallationPageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const BoilerInstallationPage: React.FC<BoilerInstallationPageProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const boilerTypes = [
    {
      title: 'Chaudière gaz condensation',
      description: 'Haute performance énergétique avec récupération de chaleur',
      details: ['Rendement jusqu\'à 110%', 'Économies 15-20%', 'Éligible aides', 'Faibles émissions'],
      icon: Flame,
      color: 'blue'
    },
    {
      title: 'Chaudière gaz classique',
      description: 'Solution fiable et économique pour le chauffage',
      details: ['Installation simple', 'Coût abordable', 'Maintenance facile', 'Pièces disponibles'],
      icon: Settings,
      color: 'green'
    },
    {
      title: 'Chaudière hybride',
      description: 'Combinaison chaudière gaz et pompe à chaleur',
      details: ['Double énergie', 'Optimisation automatique', 'Très haute efficacité', 'Écologique'],
      icon: Award,
      color: 'purple'
    },
    {
      title: 'Pompe à chaleur',
      description: 'Solution 100% électrique et écologique',
      details: ['Énergie renouvelable', 'COP élevé', 'Réversible chaud/froid', 'Aides importantes'],
      icon: Shield,
      color: 'blue'
    }
  ];

  const advantages = [
    'Conseil personnalisé selon logement',
    'Installation par chauffagiste RGE',
    'Mise en service complète',
    'Formation à l\'utilisation',
    'Garantie constructeur',
    'Service après-vente'
  ];

  const grants = [
    { name: 'MaPrimeRénov\'', amount: 'Jusqu\'à 1 200€', condition: 'Selon revenus' },
    { name: 'CEE', amount: 'Jusqu\'à 800€', condition: 'Tous ménages' },
    { name: 'Éco-PTZ', amount: 'Jusqu\'à 15 000€', condition: 'Prêt 0%' },
    { name: 'TVA réduite', amount: '5,5%', condition: 'Au lieu de 20%' }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="bg-orange-600 p-4 rounded-2xl">
                  <Flame className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Installation <span className="text-orange-600">Chaudière</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Installation de chaudières haute performance à Paris et départements 78, 95, 92, 93. 
                Chauffagiste RGE pour bénéficier des aides de l'État.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={onRequestQuote}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Devis gratuit
                </button>
                <a
                  href="tel:0988097855"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  09 88 09 78 55
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/20250909_0242_Modern Boiler Installation_simple_compose_01k4nynw2qekka2tj7qtznw5ep.png"
                  alt="Installation professionnelle de chaudière - Service certifié RGE"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Flame className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Installation RGE</p>
                      <p className="text-orange-600 text-sm">Aides éligibles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grants Alert */}
      <section className="py-12 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 text-center">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Aides de l'État disponibles</h3>
            <p className="text-gray-600 mb-6">
              Profitez des aides gouvernementales pour financer votre nouvelle chaudière. 
              Notre certification RGE vous permet d'en bénéficier.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {grants.map((grant, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900">{grant.name}</h4>
                  <p className="text-green-700 font-bold">{grant.amount}</p>
                  <p className="text-green-600 text-xs">{grant.condition}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Boiler Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Types de chaudières
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {boilerTypes.map((type, index) => {
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

      {/* Installation Process */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Processus d'installation
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Étude technique', desc: 'Visite et dimensionnement' },
              { step: '2', title: 'Devis détaillé', desc: 'Avec aides déduites' },
              { step: '3', title: 'Installation', desc: 'Par chauffagiste RGE' },
              { step: '4', title: 'Mise en service', desc: 'Test et formation' }
            ].map((process, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi changer de chaudière ?
              </h2>
              <p className="text-gray-600 mb-8">
                Une chaudière moderne vous apporte confort, économies et tranquillité. 
                Notre équipe RGE vous accompagne dans votre projet.
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
                className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Demander un devis gratuit
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="text-center mb-6">
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Installation complète</h3>
                <p className="text-gray-600">Service clé en main</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-900 mb-2">Inclus dans le service</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Dépose ancienne chaudière</li>
                    <li>• Installation complète</li>
                    <li>• Raccordements gaz/eau</li>
                    <li>• Mise en service</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <a
                    href="tel:0988097855"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg inline-block"
                  >
                    09 88 09 78 55
                  </a>
                  <p className="text-gray-600 text-sm mt-2">Étude gratuite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoilerInstallationPage;