import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate reviews one by one
            const reviews = Array.from({ length: 6 }, (_, i) => false);
            reviews.forEach((_, index) => {
              setTimeout(() => {
                setVisibleReviews(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('reviews');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      name: 'Marie L.',
      rating: 5,
      text: 'Intervention rapide et pro. Mon chauffe-eau remarche nickel ! Je recommande vivement.',
      service: 'Chauffage'
    },
    {
      name: 'Pierre M.',
      rating: 4,
      text: 'Bon travail, un peu de retard mais très efficace. Prix correct pour une urgence.',
      service: 'Plomberie'
    },
    {
      name: 'Sophie D.',
      rating: 5,
      text: 'Electricien très compétant. Installation domotique parfaite, explications claires.',
      service: 'Électricité'
    },
    {
      name: 'Jean-Luc B.',
      rating: 5,
      text: 'Fuite réparée en 30 min, technicien sympa et tarif respecté. Top !',
      service: 'Plomberie'
    },
    {
      name: 'Nathalie R.',
      rating: 4,
      text: 'Service clientèle réactif. Dépannage week-end sans soucis, merci beaucoup.',
      service: 'Chauffage'
    },
    {
      name: 'David K.',
      rating: 5,
      text: 'Mise aux normes électriques impecable. Travail soigné et dans les temps.',
      service: 'Électricité'
    }
  ];

  const averageRating = 4.7;
  const totalReviews = 327;

  const getServiceColor = (service: string) => {
    const colors = {
      'Plomberie': 'bg-blue-100 text-blue-800',
      'Chauffage': 'bg-red-100 text-red-800',
      'Électricité': 'bg-green-100 text-green-800'
    };
    return colors[service as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Avis de nos clients
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 ${star <= Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 
                    star === Math.ceil(averageRating) ? 'text-yellow-400 fill-current opacity-70' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">{averageRating}/5</span>
          </div>
          <p className="text-gray-600">Basé sur {totalReviews} avis clients authentiques</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-700 delay-${index * 150} ${
                visibleReviews[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getServiceColor(review.service)}`}>
                    {review.service}
                  </span>
                </div>
                <Quote className="h-6 w-6 text-blue-200" />
              </div>

              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 inline-block">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction client garantie</h3>
            <p className="text-gray-600">
              Plus de 15 ans d'expérience et des milliers de clients satisfaits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;