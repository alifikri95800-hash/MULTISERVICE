import React, { useEffect, useState } from 'react';
import { Award, Shield, Clock, CheckCircle, Users } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Award,
      title: 'Certifiés RGE',
      description: 'Techniciens qualifiés et certifiés pour tous types d\'interventions'
    },
    {
      icon: Shield,
      title: 'Assurance décennale',
      description: 'Garantie pièces et main d\'œuvre sur toutes nos interventions'
    },
    {
      icon: Clock,
      title: 'Service 24h/7j',
      description: 'Disponibles pour toutes urgences, même week-ends et jours fériés'
    },
    {
      icon: Users,
      title: '15 ans d\'expérience',
      description: 'Une équipe expérimentée au service de particuliers et professionnels'
    }
  ];

  const guarantees = [
    'Devis gratuit avec déplacement offert',
    'Intervention dans l\'heure qui suit votre appel',
    'Tarifs transparents communiqués avant intervention',
    'Garantie satisfaction ou remboursement',
    'Pièces détachées d\'origine constructeur',
    'Service après-vente réactif'
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            À propos de FKR MULTI-SERVICES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour tous vos besoins en plomberie, chauffage et électricité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Description */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="prose prose-lg">
              <p className="text-gray-700 mb-6">
                <strong>MULTISERVICES</strong> est une entreprise spécialisée dans les services de plomberie, 
                chauffage et électricité à Paris et départements 78, 95, 92, 93. Forte de son expérience, 
                notre équipe de techniciens certifiés RGE intervient 24h/7j pour résoudre tous vos problèmes.
              </p>
              
              <p className="text-gray-700 mb-6">
                Nous mettons un point d'honneur à offrir un service de qualité avec des tarifs transparents 
                et des interventions rapides. Notre priorité : votre satisfaction et votre tranquillité d'esprit.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-blue-900 font-medium">
                  "Notre mission est de vous apporter des solutions durables et fiables pour votre confort au quotidien."
                </p>
                <p className="text-blue-700 text-sm mt-2">- Équipe MULTISERVICES</p>
              </div>
            </div>
          </div>

          {/* Team Image Placeholder */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Notre équipe</h3>
                <p className="text-gray-600 mb-4">
                  12 techniciens qualifiés à votre service
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <strong className="text-blue-900">8</strong>
                    <p className="text-blue-700">Plombiers</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <strong className="text-red-900">6</strong>
                    <p className="text-red-700">Chauffagistes</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <strong className="text-green-900">4</strong>
                    <p className="text-green-700">Électriciens</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <strong className="text-purple-900">2</strong>
                    <p className="text-purple-700">Superviseurs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`text-center p-6 transition-all duration-700 delay-${(index + 1) * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Guarantees */}
        <div className={`bg-gray-50 rounded-2xl p-6 lg:p-8 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nos garanties
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;