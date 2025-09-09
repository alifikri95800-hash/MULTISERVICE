import React, { useEffect, useState } from 'react';
import { Shield, CheckCircle, AlertTriangle, Award, Clock, FileText } from 'lucide-react';

interface ElectricalCompliancePageProps {
  onRequestQuote: () => void;
  onNavigate?: (page: string) => void;
}

const ElectricalCompliancePage: React.FC<ElectricalCompliancePageProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const complianceServices = [
    {
      title: 'Diagnostic électrique',
      description: 'État complet de votre installation électrique',
      details: ['Contrôle tableau électrique', 'Vérification mise à la terre', 'Test différentiels', 'Rapport détaillé'],
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Mise aux normes NF C 15-100',
      description: 'Remise en conformité selon la norme française',
      details: ['Tableau électrique aux normes', 'Protection différentielle', 'Nombre de prises réglementaire', 'Mise à la terre'],
      icon: Shield,
      color: 'green'
    },
    {
      title: 'Attestation Consuel',
      description: 'Certificat de conformité pour raccordement',
      details: ['Contrôle réglementaire', 'Attestation officielle', 'Raccordement Enedis', 'Mise en service'],
      icon: Award,
      color: 'purple'
    },
    {
      title: 'Rénovation électrique',
      description: 'Modernisation complète de l\'installation',
      details: ['Remplacement câblage', 'Nouveau tableau', 'Prises et éclairage', 'Domotique possible'],
      icon: AlertTriangle,
      color: 'orange'
    }
  ];

  const normsRequirements = [
    { room: 'Salon', outlets: '5 prises minimum', lighting: '1 point lumineux', special: 'Prise TV/téléphone' },
    { room: 'Chambre', outlets: '3 prises minimum', lighting: '1 point lumineux', special: 'Prise près du lit' },
    { room: 'Cuisine', outlets: '6 prises dont 4 plan travail', lighting: '1 point lumineux', special: 'Circuit spécialisé' },
    { room: 'Salle de bain', outlets: '1 prise près lavabo', lighting: '1 point lumineux', special: 'Volume de sécurité' }
  ];

  const advantages = [
    'Sécurité des personnes et biens',
    'Conformité réglementaire obligatoire',
    'Valorisation du bien immobilier',
    'Réduction risques incendie',
    'Assurance habitation validée',
    'Installation pérenne et fiable'
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
                  <Shield className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Mise aux Normes <span className="text-blue-600">NF C 15-100</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Mise en conformité électrique à Paris et départements 78, 95, 92, 93. 
                Électriciens certifiés pour diagnostic et remise aux normes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={onRequestQuote}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Diagnostic gratuit
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
                  src="/20250909_0231_Professional Electrician Precision_simple_compose_01k4ny24r5fqxte2nnp5z0xfpd.png"
                  alt="Mise aux normes électriques NF C 15-100 - Installation conforme et sécurisée"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Normes NF C 15-100</p>
                      <p className="text-blue-600 text-sm">Conformité garantie</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Obligation légale</h3>
            <p className="text-gray-600 mb-6">
              La norme NF C 15-100 est obligatoire pour toutes les installations électriques. 
              Une installation non conforme peut entraîner des risques graves et des problèmes d'assurance.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900">Sécurité</h4>
                <p className="text-red-700 text-sm">Protection personnes</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900">Assurance</h4>
                <p className="text-orange-700 text-sm">Couverture garantie</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900">Vente</h4>
                <p className="text-yellow-700 text-sm">Diagnostic obligatoire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos services de mise aux normes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {complianceServices.map((service, index) => {
              const Icon = service.icon;
              const colorClasses = {
                blue: 'bg-blue-50 text-blue-600 border-blue-100',
                green: 'bg-green-50 text-green-600 border-green-100',
                purple: 'bg-purple-50 text-purple-600 border-purple-100',
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

      {/* Norms Requirements */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Exigences NF C 15-100 par pièce
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {normsRequirements.map((req, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-4">{req.room}</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-blue-900">Prises</p>
                    <p className="text-blue-700 text-xs">{req.outlets}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-900">Éclairage</p>
                    <p className="text-green-700 text-xs">{req.lighting}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-purple-900">Spécial</p>
                    <p className="text-purple-700 text-xs">{req.special}</p>
                  </div>
                </div>
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
                Pourquoi mettre aux normes ?
              </h2>
              <p className="text-gray-600 mb-8">
                Une installation électrique aux normes vous protège et valorise votre bien. 
                Notre équipe certifiée vous accompagne dans cette démarche obligatoire.
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
                Diagnostic gratuit
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="text-center mb-6">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Diagnostic complet</h3>
                <p className="text-gray-600">État de votre installation</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Inclus dans le diagnostic</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Contrôle tableau électrique</li>
                    <li>• Vérification mise à la terre</li>
                    <li>• Test protections différentielles</li>
                    <li>• Rapport détaillé avec photos</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <a
                    href="tel:0988097855"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg inline-block"
                  >
                    09 88 09 78 55
                  </a>
                  <p className="text-gray-600 text-sm mt-2">Diagnostic gratuit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectricalCompliancePage;