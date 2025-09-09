import React, { useEffect, useState } from 'react';
import { AlertTriangle, Clock, Phone, CheckCircle, Droplets } from 'lucide-react';

interface PlumbingEmergencyPageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const PlumbingEmergencyPage: React.FC<PlumbingEmergencyPageProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const emergencyServices = [
    {
      title: 'Fuite d\'eau importante',
      description: 'Intervention immédiate pour stopper les fuites et limiter les dégâts',
      details: ['Coupure d\'eau d\'urgence', 'Réparation temporaire', 'Évaluation des dégâts', 'Solution définitive'],
      icon: Droplets,
      urgency: 'Critique'
    },
    {
      title: 'Canalisation bouchée',
      description: 'Débouchage rapide de tous types de canalisations',
      details: ['WC bouché', 'Évier obstrué', 'Douche qui ne s\'évacue plus', 'Regard d\'évacuation'],
      icon: AlertTriangle,
      urgency: 'Urgent'
    },
    {
      title: 'Chauffe-eau en panne',
      description: 'Dépannage et remplacement d\'urgence de chauffe-eau',
      details: ['Plus d\'eau chaude', 'Fuite chauffe-eau', 'Problème électrique', 'Remplacement immédiat'],
      icon: AlertTriangle,
      urgency: 'Important'
    },
    {
      title: 'Dégât des eaux',
      description: 'Intervention d\'urgence pour limiter les dommages',
      details: ['Recherche de fuite', 'Arrêt d\'eau', 'Assèchement', 'Rapport d\'expertise'],
      icon: AlertTriangle,
      urgency: 'Critique'
    }
  ];

  const emergencySteps = [
    {
      step: '1',
      title: 'Appelez immédiatement',
      description: 'Contactez notre service d\'urgence 24h/7j',
      action: '06 29 17 30 03'
    },
    {
      step: '2',
      title: 'Coupez l\'eau',
      description: 'Fermez le compteur d\'eau principal si possible',
      action: 'Action immédiate'
    },
    {
      step: '3',
      title: 'Intervention rapide',
      description: 'Notre technicien arrive sous 1h maximum',
      action: 'Sous 60 minutes'
    },
    {
      step: '4',
      title: 'Réparation',
      description: 'Diagnostic et réparation sur place',
      action: 'Solution immédiate'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-100 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-red-600 p-4 rounded-2xl">
                  <AlertTriangle className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-red-600">Urgence</span> Plomberie 24h/7j
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Fuite d'eau, canalisation bouchée, dégât des eaux ? Notre équipe intervient en urgence 
                dans l'heure qui suit votre appel à Paris et départements 78, 95, 92, 93.
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
                      <div className="text-xs text-red-100">URGENCES UNIQUEMENT</div>
                    </div>
                  </div>
                </a>
                
                <div className="text-center">
                  <p className="text-red-600 font-bold">Intervention sous 1h</p>
                  <p className="text-gray-600 text-sm">Service disponible 24h/7j</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos interventions d'urgence
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
            Procédure d'urgence
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
            Une urgence plomberie ?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            N'attendez pas que la situation s'aggrave. Contactez-nous immédiatement !
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
            Intervention garantie sous 1h • Service 24h/7j • Devis gratuit
          </p>
        </div>
      </section>
    </div>
  );
};

export default PlumbingEmergencyPage;