import React, { useEffect, useState } from 'react';
import { MapPin, Phone, CheckCircle, Clock, Users, Award } from 'lucide-react';

interface LocalPageProps {
  title: string;
  location: string;
  description: string;
  onRequestQuote: () => void;
  onNavigate: (page: string) => void;
}

const LocalPage: React.FC<LocalPageProps> = ({ title, location, description, onRequestQuote, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.title = `${title} – Dépannage plomberie, chauffage, électricité 24h/7j`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', `${description}. Intervention rapide 24h/7j. Devis gratuit et garanti.`);
  }, [title, description]);

  const localServices = [
    {
      title: 'Plomberie d\'urgence',
      description: 'Intervention rapide pour fuites, débouchages et dépannages',
      icon: '🔧',
      color: 'blue'
    },
    {
      title: 'Chauffage',
      description: 'Entretien chaudière, dépannage et installation',
      icon: '🔥',
      color: 'red'
    },
    {
      title: 'Électricité',
      description: 'Mise aux normes, dépannage et installation électrique',
      icon: '⚡',
      color: 'green'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {description}. Intervention rapide 24h/7j par des techniciens certifiés.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Intervention</p>
                  <p className="text-sm text-gray-600">Sous 1h</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Award className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Devis gratuit</p>
                  <p className="text-sm text-gray-600">Garanti</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:0988097855"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>09 88 09 78 55</span>
                </a>
                <button
                  onClick={onRequestQuote}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  Devis gratuit
                </button>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/20250908_0137_Eiffel Tower at Golden Hour_simple_compose_01k4k8j4tvesjsz6jhcna8php6.png"
                  alt={`Services de plomberie, chauffage et électricité - ${location}`}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Service Local</p>
                      <p className="text-blue-600 text-sm">{location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos services dans {location}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {localServices.map((service, index) => {
              const colorClasses = {
                blue: 'bg-blue-50 border-blue-100 text-blue-600',
                red: 'bg-red-50 border-red-100 text-red-600',
                green: 'bg-green-50 border-green-100 text-green-600'
              };
              
              return (
                <div
                  key={index}
                  className={`bg-white border-2 rounded-2xl p-6 lg:p-8 shadow-lg transition-all duration-700 delay-${index * 200} hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-4xl ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <button
                    onClick={() => {
                      if (service.title.includes('Plomberie')) onNavigate('plumbing');
                      else if (service.title.includes('Chauffage')) onNavigate('heating');
                      else if (service.title.includes('Électricité')) onNavigate('electrical');
                      if (service.title.includes('Plomberie')) window.location.href = '/plomberie';
                      else if (service.title.includes('Chauffage')) window.location.href = '/chauffage';
                      else if (service.title.includes('Électricité')) window.location.href = '/electricite';
                    }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-md text-white ${
                      service.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                      service.color === 'red' ? 'bg-red-600 hover:bg-red-700' :
                      'bg-green-600 hover:bg-green-700'
                    }`}
                  >
                    En savoir plus
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Besoin d'une intervention dans {location} ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez-nous maintenant pour une intervention rapide et efficace
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:0988097855"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-xl transition-all duration-200 hover:scale-105 shadow-lg"
            >
              09 88 09 78 55
            </a>
            <button
              onClick={onRequestQuote}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-xl transition-all duration-200"
            >
              Devis Gratuit
            </button>
          </div>
          
          <p className="text-blue-100 text-sm mt-6">
            Service disponible 24h/7j • Intervention rapide • Devis gratuit
          </p>
        </div>
      </section>
    </div>
  );
};

export default LocalPage;