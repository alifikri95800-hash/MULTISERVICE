import React, { useEffect, useState } from 'react';
import { FileText, AlertTriangle, CheckCircle, Euro } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Conditions générales de vente
              </h1>
            </div>

            {/* Hero Image Section */}
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/20250907_1339_Contract Icon_simple_compose_01k4hzhb7aemtbq1mcgn4cfp22.png"
                  alt="Icône de contrat élégant - Conditions générales de vente et termes contractuels FKR MULTI-SERVICES"
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <FileText className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Conditions de Vente</p>
                      <p className="text-purple-600 text-sm">Termes contractuels</p>
                    </div>
                  </div>
                </div>
                
                {/* Badge service */}
                <div className="absolute top-6 right-6 bg-purple-600 text-white rounded-xl px-4 py-2 shadow-lg">
                  <div className="text-center">
                    <p className="font-bold text-sm">Service</p>
                    <p className="text-xs text-purple-100">Professionnel</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 1 - Objet</h2>
                <p className="text-gray-700 mb-4">
                  Les présentes conditions générales de vente (CGV) régissent les relations contractuelles 
                  entre MULTISERVICES et ses clients dans le cadre de la fourniture de services de 
                  plomberie, chauffage et électricité.
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <p className="text-purple-800">
                    <strong>Date d'entrée en vigueur :</strong> Janvier 2025
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 2 - Champ d'application</h2>
                <p className="text-gray-700 mb-4">
                  Les présentes CGV s'appliquent à toutes les prestations de services réalisées par 
                  MULTISERVICES, notamment :
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Plomberie</h3>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• Dépannage d'urgence</li>
                      <li>• Recherche de fuites</li>
                      <li>• Installation sanitaire</li>
                      <li>• Débouchage</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-900 mb-2">Chauffage</h3>
                    <ul className="text-red-800 text-sm space-y-1">
                      <li>• Entretien chaudière</li>
                      <li>• Dépannage chauffage</li>
                      <li>• Installation thermostat</li>
                      <li>• Ramonage</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">Électricité</h3>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>• Mise aux normes</li>
                      <li>• Dépannage électrique</li>
                      <li>• Installation éclairage</li>
                      <li>• Domotique</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Euro className="h-6 w-6 text-green-600 mr-2" />
                  Article 3 - Tarifs et devis
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Devis</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Tous les devis sont gratuits et sans engagement</li>
                  <li>Le déplacement pour établir un devis est offert dans notre zone d'intervention</li>
                  <li>Les devis sont valables 30 jours à compter de leur émission</li>
                  <li>Acceptation du devis par signature ou accord verbal</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Tarification</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-2">Tarifs spéciaux</h4>
                      <ul className="text-yellow-800 text-sm space-y-1">
                        <li>• Majoration de 50% les dimanches et jours fériés</li>
                        <li>• Majoration de 30% de 20h à 8h en semaine</li>
                        <li>• Majoration de 30% les samedis après 14h</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 4 - Modalités d'intervention</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Prise de rendez-vous</h3>
                <p className="text-gray-700 mb-4">
                  Les interventions sont programmées par téléphone au 09 88 09 78 55 ou par email à 
                  fkrmultiservices@gmail.com. Pour les urgences, appelez le 06 29 17 30 03.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Délais d'intervention</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Urgences</h4>
                    <p className="text-red-800 text-sm">Intervention sous 1h dans notre zone de couverture</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Interventions programmées</h4>
                    <p className="text-blue-800 text-sm">Rendez-vous sous 24-48h selon disponibilités</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 5 - Modalités de paiement</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Moyens de paiement acceptés</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Espèces (dans la limite légale)</li>
                  <li>Chèque bancaire</li>
                  <li>Carte bancaire (sur place ou par téléphone)</li>
                  <li>Virement bancaire</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Conditions de paiement</h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <ul className="text-green-800 space-y-2">
                    <li>• Paiement à la fin de l'intervention pour les dépannages</li>
                    <li>• Acompte de 30% à la commande pour les gros travaux</li>
                    <li>• Solde à la fin des travaux</li>
                    <li>• Facture remise immédiatement</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  Article 6 - Garanties
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Garantie main d'œuvre</h3>
                <p className="text-gray-700 mb-4">
                  Toutes nos interventions sont garanties 1 an pour la main d'œuvre, sauf usure normale 
                  ou mauvaise utilisation.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Garantie pièces</h3>
                <p className="text-gray-700 mb-4">
                  Les pièces détachées sont garanties selon les conditions du fabricant. Nous utilisons 
                  exclusivement des pièces d'origine constructeur.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Assurance décennale</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-blue-800">
                    MULTISERVICES est couverte par une assurance décennale pour tous les travaux 
                    de construction et d'installation. Attestation disponible sur demande.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 7 - Responsabilité</h2>
                <p className="text-gray-700 mb-4">
                  MULTISERVICES s'engage à réaliser les prestations avec le plus grand soin et 
                  selon les règles de l'art. Notre responsabilité est limitée au montant de la prestation.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Exclusions de responsabilité</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Dommages dus à un défaut d'entretien</li>
                  <li>Usure normale des équipements</li>
                  <li>Modifications non autorisées</li>
                  <li>Force majeure</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 8 - Droit de rétractation</h2>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <p className="text-orange-800 mb-3">
                    <strong>Important :</strong> Conformément à l'article L221-28 du Code de la consommation, 
                    le droit de rétractation ne s'applique pas aux prestations de services d\'urgence.
                  </p>
                  <p className="text-orange-800">
                    Pour les autres prestations, vous disposez de 14 jours pour exercer votre droit de 
                    rétractation, sauf si les travaux ont commencé avec votre accord exprès.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 9 - Réclamations et litiges</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Service client</h3>
                <p className="text-gray-700 mb-4">
                  Pour toute réclamation, contactez-nous dans les 48h suivant l'intervention :
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Téléphone : 09 88 09 78 55</li>
                  <li>Email : fkrmultiservices@gmail.com</li>
                  <li>Courrier : Cergy, 95000 Val-d'Oise</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Médiation</h3>
                <p className="text-gray-700">
                  En cas de litige, vous pouvez recourir à la médiation de la consommation. 
                  Coordonnées du médiateur disponibles sur demande.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 10 - Dispositions générales</h2>
                <p className="text-gray-700 mb-4">
                  Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux 
                  français seront seuls compétents.
                </p>
                <p className="text-gray-700">
                  Si une clause des présentes CGV était déclarée nulle, cela n'affecterait pas la 
                  validité des autres clauses.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;