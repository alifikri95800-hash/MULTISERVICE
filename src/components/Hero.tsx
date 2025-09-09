import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, Shield, Users, Phone, ArrowRight } from 'lucide-react';

interface HeroProps {
  onRequestQuote: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-16 lg:pt-20 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`lg:text-left text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Interventions <span className="text-blue-600">rapides</span> et{' '}
              <span className="text-green-600">fiables</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              En plomberie, chauffage et électricité à Paris et départements 78, 95, 92, 93
            </p>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium text-gray-700">24h/7j</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Devis gratuit</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Certifiés RGE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">15 ans d'expérience</span>
              </div>
            </div>

            {/* Phone CTA */}
            <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg text-gray-700 mb-4 font-medium">
                Contactez-nous maintenant pour une intervention rapide
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center max-w-2xl lg:mx-0 mx-auto">
                {/* Bouton fixe - bleu */}
                <div className="flex flex-col items-center">
                  <a
                    href="tel:0988097855"
                    className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-xl transition-all duration-200 hover:scale-105 shadow-xl"
                  >
                    <Phone className="h-5 w-5" />
                    <span>09 88 09 78 55</span>
                  </a>
                  <p className="text-xs text-gray-600 mt-2">
                    Appel non surtaxé • Service 24h/7j
                  </p>
                </div>

                {/* Séparateur */}
                <div className="hidden sm:block text-gray-400 text-lg font-bold">OU</div>

                {/* Bouton urgence - rouge avec animation */}
                <div className="flex flex-col items-center">
                  <a
                    href="tel:0629173003"
                    className="relative inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-xl transition-all duration-200 hover:scale-110 shadow-xl"
                  >
                    {/* Effet néon contour qui fait le tour */}
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-red-400 via-red-500 to-red-400 opacity-60 animate-pulse blur-sm"></div>
                    <div className="absolute -inset-0.5 rounded-xl bg-red-500 opacity-40 animate-ping"></div>
                    
                    <div className="relative flex items-center space-x-3">
                      <Phone className="h-5 w-5" />
                      <span>06 29 17 30 03</span>
                    </div>
                  </a>
                  <p className="text-xs text-red-600 mt-2 font-semibold">
                    🚨 URGENCES UNIQUEMENT
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-4">
                Intervention sous 1h • Disponible 24h/7j
              </p>
            </div>
          </div>

          {/* Professional Image */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/20250907_0035_Atelier Professionnel Moderne_simple_compose_01k4gjm7k1f4avp9nqefs4p5qy.png"
                  alt="Atelier professionnel FKR MULTI-SERVICES - Techniciens experts en plomberie, chauffage et électricité"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient pour améliorer la lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Badge de certification flottant */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border-2 border-green-200">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Certifiés RGE</p>
                    <p className="text-green-600 text-xs">Techniciens qualifiés</p>
                  </div>
                </div>
              </div>
              
              {/* Badge d'expérience flottant */}
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white rounded-xl shadow-xl p-4">
                <div className="text-center">
                  <p className="font-bold text-2xl">15+</p>
                  <p className="text-xs text-blue-100">ans d'expérience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional visual elements - moved below */}
        <div className={`mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Intervention rapide</h3>
                <p className="text-sm text-gray-600">Sous 1h pour les urgences dans toute l'Île-de-France</p>
              </div>
              
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Techniciens certifiés</h3>
                <p className="text-sm text-gray-600">Équipe qualifiée RGE avec 15 ans d'expérience</p>
              </div>
              
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Service 24h/7j</h3>
                <p className="text-sm text-gray-600">Disponible même week-ends et jours fériés</p>
              </div>
            </div>
          </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;