import React, { useEffect, useState } from 'react';
import { AlertTriangle, Flame, Phone, CheckCircle, Clock, Thermometer } from 'lucide-react';

interface HeatingEmergencyPageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const HeatingEmergencyPage: React.FC<HeatingEmergencyPageProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const emergencyServices = [
    {
      title: 'Chaudière qui ne démarre pas',
      description: 'Diagnostic et réparation immédiate de panne de chaudière',
      details: ['Problème d\'allumage', 'Défaut électronique', 'Pression insuffisante', 'Thermostat défaillant'],
      icon: AlertTriangle,
      urgency: 'Critique'
    },
    {
      title: 'Plus d\'eau chaude',
      description: 'Rétablissement rapide de la production d\'eau chaude',
      details: ['Panne production ECS', 'Vanne 3 voies bloquée', 'Échangeur entartré', 'Sonde température'],
      icon: Thermometer,
      urgency: 'Urgent'
    },
    {
      title: 'Radiateurs froids',
      description: 'Remise en fonctionnement du système de chauffage',
      details: ['Circulateur en panne', 'Air dans le circuit', 'Vanne thermostatique', 'Pression circuit'],
      icon: Flame,
      urgency: 'Important'
    },
    {
      title: 'Fuite circuit chauffage',
      description: 'Réparation d\'urgence des fuites de chauffage',
      details: ['Fuite chaudière', 'Fuite radiateur', 'Fuite tuyauterie', 'Joint défaillant'],
      icon: AlertTriangle,
      urgency: 'Critique'
    }
  ];

  const emergencySteps = [
    {
      step: '1',
      title: 'Appelez immédiatement',
      description: 'Contactez notre service chauffage d\'urgence',
      action: '06 29 17 30 03'
    },
    {
      step: '2',
      title: 'Sécurisez l\'installation',
      description: 'Coupez l\'arrivée de gaz si nécessaire',
      action: 'Sécurité prioritaire'
    },
    {
      step: '3',
      title: 'Intervention rapide',
      description: 'Chauffagiste sur place sous 2h maximum',
      action: 'Sous 2 heures'
    },
    {
      step: '4',
      title: 'Réparation',
      description: 'Diagnostic et réparation immédiate',
      action: 'Remise en marche'
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
                  <Flame className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-red-600">Urgence</span> Chauffage 24h/7j
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Panne de chaudière, plus d'eau chaude, radiateurs froids ? Notre équipe de chauffagistes 
                intervient en urgence dans les 2h à Paris et départements 78, 95, 92, 93.
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
                      <div className="text-xs text-red-100">URGENCES CHAUFFAGE</div>
                    </div>
                  </div>
                </a>
                
                <div className="text-center">
                  <p className="text-red-600 font-bold">Intervention sous 2h</p>
                  <p className="text-gray-600 text-sm">Chauffagiste certifié RGE</p>
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
            Nos interventions d'urgence chauffage
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

      {/* Winter Alert */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 text-center border-l-4 border-blue-600">
            <Thermometer className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Attention grand froid</h3>
            <p className="text-gray-600 mb-6">
              En période de grand froid, les pannes de chauffage sont plus fréquentes. 
              N'attendez pas, contactez-nous dès les premiers signes de dysfonctionnement.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900">Prévention</h4>
                <p className="text-blue-700 text-sm">Entretien préventif</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900">Urgence</h4>
                <p className="text-red-700 text-sm">Intervention rapide</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900">Réparation</h4>
                <p className="text-green-700 text-sm">Remise en marche</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Procédure d'urgence chauffage
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
            Panne de chauffage ?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Ne restez pas dans le froid ! Contactez notre service d'urgence chauffage.
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
            Chauffagiste certifié RGE • Intervention sous 2h • Service 24h/7j
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeatingEmergencyPage;