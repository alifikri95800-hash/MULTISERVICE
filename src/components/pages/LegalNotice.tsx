import React, { useEffect, useState } from 'react';
import { Scale, MapPin, Phone, Mail } from 'lucide-react';

const LegalNotice: React.FC = () => {
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
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Scale className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Mentions légales
              </h1>
            </div>

            {/* Hero Image Section */}
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/20250907_1334_Elegant Legal Symbols_simple_compose_01k4hz7k51e4xavfw02mynzx3t.png"
                  alt="Symboles juridiques élégants - Mentions légales et informations légales de l'entreprise FKR MULTI-SERVICES"
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Scale className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Mentions Légales</p>
                      <p className="text-blue-600 text-sm">Conformité juridique</p>
                    </div>
                  </div>
                </div>
                
                {/* Badge entreprise */}
                <div className="absolute top-6 right-6 bg-blue-600 text-white rounded-xl px-4 py-2 shadow-lg">
                  <div className="text-center">
                    <p className="font-bold text-sm">Entreprise</p>
                    <p className="text-xs text-blue-100">Certifiée RGE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Informations légales</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Éditeur du site</h3>
                  <p className="text-blue-800 mb-2"><strong>Raison sociale :</strong> MULTISERVICES</p>
                  <p className="text-blue-800 mb-2"><strong>Forme juridique :</strong> Entreprise individuelle</p>
                  <p className="text-blue-800 mb-2"><strong>Adresse :</strong> Cergy, 95000 Val-d'Oise</p>
                  <p className="text-blue-800 mb-2"><strong>Téléphone :</strong> 09 88 09 78 55</p>
                  <p className="text-blue-800 mb-2"><strong>Email :</strong> fkrmultiservices@gmail.com</p>
                  <p className="text-blue-800"><strong>SIRET :</strong> 521 945 147 00028</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Directeur de publication</h2>
                <p className="text-gray-700">
                  Le directeur de la publication est le représentant légal de MULTISERVICES.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Hébergeur :</strong> [À compléter selon l'hébergeur choisi]
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Adresse :</strong> [Adresse de l'hébergeur]
                  </p>
                  <p className="text-gray-700">
                    <strong>Téléphone :</strong> [Téléphone de l'hébergeur]
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
                <p className="text-gray-700 mb-4">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                  les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-gray-700">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsabilité</h2>
                <p className="text-gray-700 mb-4">
                  Les informations contenues sur ce site sont aussi précises que possible et le site est 
                  périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
                  ou des lacunes.
                </p>
                <p className="text-gray-700">
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de 
                  bien vouloir le signaler par email à l'adresse fkrmultiservices@gmail.com, en décrivant 
                  le problème de la manière la plus précise possible.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Liens hypertextes</h2>
                <p className="text-gray-700 mb-4">
                  Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres 
                  ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de 
                  MULTISERVICES.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Litiges</h2>
                <p className="text-gray-700">
                  Les présentes conditions du site web et votre utilisation de ce site sont régies par la 
                  loi française. Tout litige portant sur l'utilisation du site sera de la compétence 
                  exclusive des tribunaux français.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">09 88 09 78 55</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">fkrmultiservices@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Cergy, 95000 Val-d'Oise</span>
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

export default LegalNotice;