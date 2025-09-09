import React, { useEffect, useState } from 'react';
import { Settings, Shield, CheckCircle, Clock, Award, AlertTriangle } from 'lucide-react';

interface BoilerMaintenancePageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const BoilerMaintenancePage: React.FC<BoilerMaintenancePageProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const maintenanceServices = [
    {
      title: 'Entretien chaudière gaz',
      description: 'Entretien annuel obligatoire pour chaudières gaz',
      details: ['Nettoyage brûleur', 'Contrôle étanchéité', 'Vérification évacuation', 'Réglage combustion'],
      icon: Settings,
      color: 'blue'
    },
    {
      title: 'Entretien chaudière fioul',
      description: 'Maintenance complète des chaudières fioul',
      details: ['Nettoyage complet', 'Contrôle gicleur', 'Vérification pompe', 'Analyse combustion'],
      icon: Settings,
      color: 'red'
    },
    {
      title: 'Contrôle sécurité',
      description: 'Vérification des dispositifs de sécurité',
      details: ['Détecteur de fumée', 'Soupape sécurité', 'Pressostat', 'Thermostat sécurité'],
      icon: Shield,
      color: 'green'
    },
    {
      title: 'Ramonage conduit',
      description: 'Ramonage obligatoire des conduits de fumée',
      details: ['Ramonage mécanique', 'Contrôle tirage', 'Certificat ramonage', 'Nettoyage conduit'],
      icon: AlertTriangle,
      color: 'orange'
    }
  ];

  const advantages = [
    'Entretien obligatoire selon la loi',
    'Certificat d\'entretien fourni',
    'Techniciens chauffagistes certifiés',
    'Détection précoce des pannes',
    'Optimisation du rendement',
    'Prolongation durée de vie'
  ];

  const benefits = [
    { title: 'Sécurité', desc: 'Prévention des risques', icon: Shield },
    { title: 'Économies', desc: 'Réduction 8-12% consommation', icon: Award },
    { title: 'Durabilité', desc: 'Prolonge la durée de vie', icon: Clock },
    { title: 'Obligation', desc: 'Requis par la loi', icon: AlertTriangle }
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
                  <Settings className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-orange-600">Entretien</span> Chaudière
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Entretien annuel obligatoire de chaudière à Paris et départements 78, 95, 92, 93. 
                Chauffagistes certifiés RGE avec certificat de conformité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={onRequestQuote}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Programmer entretien
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
                  src="/20250909_0233_Boiler Maintenance Professional_simple_compose_01k4ny4vh5en7bbq26ehz3jhxd.png"
                  alt="Entretien professionnel de chaudière - Service certifié avec garantie"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Settings className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Entretien Certifié</p>
                      <p className="text-orange-600 text-sm">Obligatoire</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Requirement Alert */}
      <section className="py-12 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 text-center border-l-4 border-red-600">
            <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Entretien obligatoire</h3>
            <p className="text-gray-600 mb-6">
              Depuis 2009, l'entretien annuel de votre chaudière est une obligation légale. 
              Un certificat d'entretien doit être fourni à votre assurance.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <Icon className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos services d'entretien
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {maintenanceServices.map((service, index) => {
              const Icon = service.icon;
              const colorClasses = {
                red: 'bg-red-50 text-red-600 border-red-100',
                blue: 'bg-blue-50 text-blue-600 border-blue-100',
                green: 'bg-green-50 text-green-600 border-green-100',
                orange: 'bg-orange-50 text-orange-600 border-orange-100'
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
                Pourquoi entretenir votre chaudière ?
              </h2>
              <p className="text-gray-600 mb-8">
                L'entretien régulier de votre chaudière est essentiel pour votre sécurité, 
                vos économies et la durabilité de votre équipement.
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
                Programmer mon entretien
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="text-center mb-6">
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Contrat d'entretien</h3>
                <p className="text-gray-600">Tranquillité garantie</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-900 mb-2">Avantages contrat</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Entretien annuel programmé</li>
                    <li>• Dépannage prioritaire</li>
                    <li>• Tarifs préférentiels</li>
                    <li>• Pièces détachées incluses</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <a
                    href="tel:0988097855"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg inline-block"
                  >
                    09 88 09 78 55
                  </a>
                  <p className="text-gray-600 text-sm mt-2">Devis contrat gratuit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoilerMaintenancePage;