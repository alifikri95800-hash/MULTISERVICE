import React, { useEffect, useState } from 'react';
import { Shield, Eye, Cookie, Lock } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Politique de confidentialité
              </h1>
            </div>

            {/* Hero Image Section */}
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/20250907_1320_Digital Data Security_simple_compose_01k4hyc4emezxvdrxsparfzp32.png"
                  alt="Sécurité des données numériques - Protection et confidentialité des informations clients FKR MULTI-SERVICES"
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Protection RGPD</p>
                      <p className="text-green-600 text-sm">Données sécurisées</p>
                    </div>
                  </div>
                </div>
                
                {/* Badge certification */}
                <div className="absolute top-6 right-6 bg-blue-600 text-white rounded-xl px-4 py-2 shadow-lg">
                  <div className="text-center">
                    <p className="font-bold text-sm">Conforme</p>
                    <p className="text-xs text-blue-100">RGPD 2018</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 mb-4">
                  MULTISERVICES s'engage à protéger la confidentialité de vos données personnelles. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons et 
                  protégeons vos informations personnelles.
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                  <p className="text-green-800">
                    <strong>Dernière mise à jour :</strong> Janvier 2025
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-blue-600 mr-2" />
                  Données collectées
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Données personnelles</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale (pour les interventions)</li>
                  <li>Informations sur vos demandes de service</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Données techniques</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées</li>
                  <li>Durée de visite</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Finalités du traitement</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-3">Services principaux</h3>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• Traitement des demandes de devis</li>
                      <li>• Planification des interventions</li>
                      <li>• Suivi client et facturation</li>
                      <li>• Support technique</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-purple-900 mb-3">Communication</h3>
                    <ul className="text-purple-800 text-sm space-y-1">
                      <li>• Réponse aux demandes</li>
                      <li>• Informations sur nos services</li>
                      <li>• Satisfaction client</li>
                      <li>• Offres personnalisées</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Cookie className="h-6 w-6 text-orange-600 mr-2" />
                  Cookies et technologies similaires
                </h2>
                <p className="text-gray-700 mb-4">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation et 
                  analyser l'utilisation du site.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Types de cookies utilisés</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Cookies essentiels</h4>
                    <p className="text-gray-600 text-sm">Nécessaires au fonctionnement du site</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Cookies analytiques</h4>
                    <p className="text-gray-600 text-sm">Mesure d'audience et statistiques</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Cookies de préférence</h4>
                    <p className="text-gray-600 text-sm">Mémorisation de vos choix</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Partage des données</h2>
                <p className="text-gray-700 mb-4">
                  Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, 
                  sauf dans les cas suivants :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour répondre à une obligation légale</li>
                  <li>Avec nos prestataires de services (sous contrat de confidentialité)</li>
                  <li>En cas de fusion ou acquisition d'entreprise</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-red-600 mr-2" />
                  Sécurité des données
                </h2>
                <p className="text-gray-700 mb-4">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
                  protéger vos données personnelles contre :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Protection technique</h4>
                    <ul className="text-red-800 text-sm space-y-1">
                      <li>• Chiffrement des données</li>
                      <li>• Accès sécurisés</li>
                      <li>• Sauvegardes régulières</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Protection organisationnelle</h4>
                    <ul className="text-orange-800 text-sm space-y-1">
                      <li>• Formation du personnel</li>
                      <li>• Accès limité aux données</li>
                      <li>• Procédures de sécurité</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos droits</h2>
                <p className="text-gray-700 mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Droit d'accès</h4>
                        <p className="text-gray-600 text-sm">Connaître les données que nous détenons</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Droit de rectification</h4>
                        <p className="text-gray-600 text-sm">Corriger vos données inexactes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Droit d'effacement</h4>
                        <p className="text-gray-600 text-sm">Supprimer vos données personnelles</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Droit à la portabilité</h4>
                        <p className="text-gray-600 text-sm">Récupérer vos données</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Droit d'opposition</h4>
                        <p className="text-gray-600 text-sm">Vous opposer au traitement</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Droit de limitation</h4>
                        <p className="text-gray-600 text-sm">Limiter le traitement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conservation des données</h2>
                <p className="text-gray-700 mb-4">
                  Nous conservons vos données personnelles uniquement pendant la durée nécessaire 
                  aux finalités pour lesquelles elles ont été collectées :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Données clients : 3 ans après la dernière intervention</li>
                  <li>Données de prospection : 3 ans après le dernier contact</li>
                  <li>Données de facturation : 10 ans (obligation légale)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-blue-800 mb-4">
                    Pour exercer vos droits ou pour toute question concernant cette politique de 
                    confidentialité, contactez-nous :
                  </p>
                  <div className="space-y-2">
                    <p className="text-blue-800"><strong>Email :</strong> fkrmultiservices@gmail.com</p>
                    <p className="text-blue-800"><strong>Téléphone :</strong> 09 88 09 78 55</p>
                    <p className="text-blue-800"><strong>Adresse :</strong> Cergy, 95000 Val-d'Oise</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;