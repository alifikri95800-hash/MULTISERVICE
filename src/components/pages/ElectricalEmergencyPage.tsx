import React, { useEffect, useState } from 'react';
import { AlertTriangle, Zap, Phone, CheckCircle, Clock, Shield } from 'lucide-react';

interface ElectricalEmergencyPageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const ElectricalEmergencyPage: React.FC<ElectricalEmergencyPageProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const emergencyServices = [
    {
      title: 'Coupure électrique générale',
      description: 'Rétablissement rapide de l\'alimentation électrique',
      details: ['Diagnostic tableau électrique', 'Réparation disjoncteur', 'Vérification installation', 'Remise sous tension'],
      icon: AlertTriangle,
      urgency: 'Critique'
    },
    {
      title: 'Court-circuit',
      description: 'Localisation et réparation des courts-circuits',
      details: ['Détection défaut', 'Isolation circuit', 'Réparation câblage', 'Test sécurité'],
      icon: Zap,
      urgency: 'Critique'
    },
    {
      title: 'Disjoncteur qui saute',
      description: 'Diagnostic et réparation des déclenchements répétés',
      details: ['Analyse surcharge', 'Vérification protection', 'Répartition circuits', 'Remplacement si nécessaire'],
      icon: Shield,
      urgency: 'Urgent'
    },
    {
      title: 'Installation dangereuse',
      description: 'Sécurisation immédiate d\'installation électrique',
      details: ['Mise en sécurité', 'Coupure d\'urgence', 'Diagnostic complet', 'Solution temporaire'],
      icon: AlertTriangle,
      urgency: 'Critique'
    }
  ];

  const emergencySteps = [
    {
      step: '1',
      title: 'Sécurisez la zone',
      description: 'Coupez le disjoncteur général si possible',
      action: 'Sécurité prioritaire'
    },
    {
      step: '2',
      title: 'Appelez immédiatement',
      description: 'Contactez notre service électricité d\'urgence',
      action: '06 29 17 30 03'
    },
    {
      step: '3',
      title: 'Intervention rapide',
      description: 'Électricien sur place sous 1h maximum',
      action: 'Sous 1 heure'
    },
    {
      step: '4',
      title: 'Réparation sécurisée',
      description: 'Diagnostic et réparation selon normes',
      action: 'Remise aux normes'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-yellow-100 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-red-600 p-4 rounded-2xl">
                  <Zap className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-red-600">Urgence</span> Électrique 24h/7j
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Coupure électrique, court-circuit, installation dangereuse ? Notre équipe d'électriciens 
                intervient en urgence sous 1h à Paris et départements 78, 95, 92, 93.
              </p>
              
              {/* Emergency CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="tel:0629173003"
                  className="relative inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-xl transition-all duration-200 hover:scale-110 shadow-xl"
                >
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-red-400 via-red-500 to-red-400 opacity-60 animate-pulse blur-sm"></div>
                  <div className="absolute -inset-0.5 rounded-xl bg-red-500 opacity-40 animate-ping"></div>
                  <div className="relative flex items-center space-x-3">
                    <Phone className="h-6 w-6" />
                    <div>
                      <div>06 29 17 30 03</div>
                      <div className="text-xs text-red-100">URGENCES ÉLECTRIQUES</div>
                    </div>
                  </div>
                </a>
                
                <div className="text-center">
                  <p className="text-red-600 font-bold">Intervention sous 1h</p>
                  <p className="text-gray-600 text-sm">Électricien certifié</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Alert */}
      <section className="py-12 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 text-center border-l-4 border-yellow-600">
            <AlertTriangle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">⚠️ Danger électrique</h3>
            <p className="text-gray-600 mb-6">
              L'électricité peut être mortelle. En cas de problème électrique, ne touchez à rien 
              et contactez immédiatement un professionnel.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900">Ne pas toucher</h4>
                <p className="text-red-700 text-sm">Fils électriques dénudés</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900">Couper le courant</h4>
                <p className="text-orange-700 text-sm">Disjoncteur général</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900">Appeler</h4>
                <p className="text-yellow-700 text-sm">Électricien d'urgence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos interventions d'urgence électrique
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {emergencyServices.map((service, index) => {
              const Icon = service.icon;
              const urgencyColors = {
                'Critique': 'bg-red-100 text-red-800 border-red-200',
                'Urgent': 'bg-orange-100 text-orange-800 border-orange-200',
                'Important': 'bg-yellow-100 text-yellow-800 border-yellow-200'
              };
              
              return (
                <div
                  key={index}
                  className={`bg-white border-2 border-red-100 rounded-2xl p-6 lg:p-8 shadow-lg transition-all duration-700 delay-${index * 200} hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center">
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${urgencyColors[service.urgency as keyof typeof urgencyColors]}`}>
                      {service.urgency}
                    </span>
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

      {/* Emergency Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Procédure d'urgence électrique
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencySteps.map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="bg-red-50 text-red-800 px-4 py-2 rounded-lg font-semibold text-sm">
                  {step.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Emergency */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Urgence électrique ?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Votre sécurité est notre priorité. Contactez immédiatement notre service d'urgence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:0629173003"
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-xl font-bold text-xl transition-all duration-200 hover:scale-105 shadow-lg"
            >
              06 29 17 30 03
            </a>
            <button
              onClick={onRequestQuote}
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-xl font-bold transition-all duration-200"
            >
              Demander un devis
            </button>
          </div>
          
          <p className="text-red-100 text-sm mt-6">
            Électricien certifié • Intervention sécurisée • Service 24h/7j
          </p>
        </div>
      </section>
    </div>
  );
};

export default ElectricalEmergencyPage;