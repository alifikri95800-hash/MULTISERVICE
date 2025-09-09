import React, { useEffect, useState } from 'react';
import { Droplets, Flame, Zap, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.service-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Droplets,
      title: 'Plomberie',
      description: 'Dépannages d\'urgence, réparation de fuites, débouchages, installation chauffe-eau',
      features: ['Recherche de fuite', 'Débouchage évier/WC', 'Chauffe-eau', 'Robinetterie'],
      color: 'blue',
      page: '/plomberie' as const,
    },
    {
      icon: Flame,
      title: 'Chauffage',
      description: 'Entretien chaudière, dépannage, installation thermostat, ramonage',
      features: ['Entretien chaudière', 'Dépannage urgence', 'Thermostat connecté', 'Radiateurs'],
      color: 'red',
      page: '/chauffage' as const,
    },
    {
      icon: Zap,
      title: 'Électricité',
      description: 'Mise aux normes, dépannage électrique, tableau électrique, domotique',
      features: ['Mise aux normes', 'Tableau électrique', 'Domotique', 'Éclairage LED'],
      color: 'green',
      page: '/electricite' as const,
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        border: 'border-blue-100 hover:border-blue-200',
      },
      red: {
        bg: 'bg-red-50',
        icon: 'text-red-600',
        button: 'bg-red-600 hover:bg-red-700',
        border: 'border-red-100 hover:border-red-200',
      },
      green: {
        bg: 'bg-green-50',
        icon: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        border: 'border-green-100 hover:border-green-200',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos services d'expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe de professionnels certifiés pour tous vos besoins en plomberie, chauffage et électricité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            
            return (
              <div
                key={service.title}
                data-index={index}
                className={`service-card bg-white rounded-2xl p-6 lg:p-8 shadow-lg border-2 transition-all duration-700 hover:scale-105 hover:shadow-xl cursor-pointer ${colors.border} ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } lg:flex lg:flex-col`}
                onClick={() => window.location.href = service.page}
              >
                {service.title === 'Plomberie' ? (
                  <div className="relative mb-6">
                    <div className="aspect-video rounded-xl overflow-hidden mb-4">
                      <img
                        src="/20250907_1139_Copper Plumbing Masterpiece_simple_compose_01k4hrnezxfarawjaqe1r90kkc.png"
                        alt="Services de plomberie professionnels - Réparation et installation"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className={`absolute -bottom-2 -right-2 w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center shadow-lg border-2 border-white`}>
                      <Icon className={`h-6 w-6 ${colors.icon}`} />
                    </div>
                  </div>
                ) : service.title === 'Chauffage' ? (
                  <div className="relative mb-6">
                    <div className="aspect-video rounded-xl overflow-hidden mb-4">
                      <img
                        src="/20250907_1145_Modern Heating Installation_simple_compose_01k4hrwnnqetnty3x6ha8ahkjs.png"
                        alt="Services de chauffage professionnels - Installation et entretien chaudière"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className={`absolute -bottom-2 -right-2 w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center shadow-lg border-2 border-white`}>
                      <Icon className={`h-6 w-6 ${colors.icon}`} />
                    </div>
                  </div>
                ) : (
                  <div className="relative mb-6">
                    <div className="aspect-video rounded-xl overflow-hidden mb-4">
                      <img
                        src="/20250907_1148_Precision Electrical Panel_simple_compose_01k4hs5jxbevya4n03yffsth2x.png"
                        alt="Services d'électricité professionnels - Installation et mise aux normes électriques"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className={`absolute -bottom-2 -right-2 w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center shadow-lg border-2 border-white`}>
                      <Icon className={`h-6 w-6 ${colors.icon}`} />
                    </div>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-8 lg:flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className={`w-2 h-2 ${colors.bg} rounded-full`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full ${colors.button} text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 hover:shadow-lg lg:mt-auto`}>
                  <span>Découvrir</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;