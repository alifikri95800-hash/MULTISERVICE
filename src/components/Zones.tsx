import React, { useEffect, useState } from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import dynamic from 'next/dynamic';

const GoogleMap = dynamic(() => import('./GoogleMap'), { ssr: false });

interface ZonesProps {
  onNavigate?: (page: string) => void;
}

const Zones: React.FC<ZonesProps> = ({ onNavigate }) => {
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

    const section = document.getElementById('zones');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const parisArrondissements = [
    { name: '1er arrondissement', slug: '1er-arrondissement' },
    { name: '2e arrondissement', slug: '2e-arrondissement' },
    { name: '3e arrondissement', slug: '3e-arrondissement' },
    { name: '4e arrondissement', slug: '4e-arrondissement' },
    { name: '5e arrondissement', slug: '5e-arrondissement' },
    { name: '6e arrondissement', slug: '6e-arrondissement' },
    { name: '7e arrondissement', slug: '7e-arrondissement' },
    { name: '8e arrondissement', slug: '8e-arrondissement' },
    { name: '9e arrondissement', slug: '9e-arrondissement' },
    { name: '10e arrondissement', slug: '10e-arrondissement' },
    { name: '11e arrondissement', slug: '11e-arrondissement' },
    { name: '12e arrondissement', slug: '12e-arrondissement' },
    { name: '13e arrondissement', slug: '13e-arrondissement' },
    { name: '14e arrondissement', slug: '14e-arrondissement' },
    { name: '15e arrondissement', slug: '15e-arrondissement' },
    { name: '16e arrondissement', slug: '16e-arrondissement' },
    { name: '17e arrondissement', slug: '17e-arrondissement' },
    { name: '18e arrondissement', slug: '18e-arrondissement' },
    { name: '19e arrondissement', slug: '19e-arrondissement' },
    { name: '20e arrondissement', slug: '20e-arrondissement' }
  ];

  const departments = [
    { name: 'Yvelines (78)', slug: '78-yvelines' },
    { name: 'Val-d\'Oise (95)', slug: '95-val-doise' },
    { name: 'Hauts-de-Seine (92)', slug: '92-hauts-de-seine' },
    { name: 'Seine-Saint-Denis (93)', slug: '93-seine-saint-denis' }
  ];

  return (
    <section id="zones" className="py-16 lg:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Zones d'intervention
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plombier, chauffagiste et électricien à Paris et départements 78, 95, 92, 93
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Google Map */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <div className="aspect-square rounded-xl overflow-hidden mb-6">
                <GoogleMap className="w-full h-full" />
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900 mb-2">Service disponible 24h/7j</p>
                <p className="text-gray-600">
                  <MapPin className="h-4 w-4 inline mr-1 text-blue-600" />
                  Intervention rapide dans les départements 78, 95, 92, 93
                </p>
              </div>
            </div>
          </div>

          {/* Zones list */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-8">
              {/* Paris */}
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  Paris (75)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {parisArrondissements.map((arr, index) => (
                    <button
                      key={index}
                     onClick={() => window.location.href = `/paris/${arr.slug}`}
                      className="text-sm text-gray-700 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-lg transition-colors cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {arr.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Banlieue */}
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  Départements d'intervention
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {departments.map((dept, index) => (
                    <button
                      key={index}
                     onClick={() => window.location.href = `/departements/${dept.slug}`}
                      className="text-sm text-gray-700 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-lg transition-colors cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {dept.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-semibold text-green-900 mb-2">Frais de déplacement offerts pour les devis !</h4>
              <p className="text-green-800 text-sm">
                Aucun frais de déplacement pour établir votre devis dans notre zone d'intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zones;