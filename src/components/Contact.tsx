import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { sendContactEmail, ContactFormData } from '../utils/emailService';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

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

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      const success = await sendContactEmail(formData as ContactFormData);
      
      if (success) {
        alert('✅ Merci pour votre message ! Nous vous recontactons rapidement.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        alert('❌ Erreur lors de l\'envoi. Veuillez réessayer ou nous appeler directement.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('❌ Erreur lors de l\'envoi. Veuillez réessayer ou nous appeler directement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Cergy\n95000 Val-d\'Oise',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '09 88 09 78 55\n06 29 17 30 03 (urgences)',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'fkrmultiservices@gmail.com',
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Service 24h/7j\nUrgences incluses',
      color: 'text-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une urgence ? Un projet ? Nous sommes là pour vous aider 24h/7j
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${info.color} bg-gray-50 p-3 rounded-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bouton d'appel flottant */}
            <div className="mt-6 flex justify-center">
              <a
                href="tel:0988097855"
                className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-bounce hover:animate-none flex items-center space-x-3"
              >
                <div className="relative">
                  <Phone className="h-6 w-6" />
                  {/* Animation de pulsation */}
                  <div className="absolute -inset-1 bg-blue-400 rounded-full opacity-30 animate-ping"></div>
                </div>
                <div>
                  <div className="text-xl font-bold">09 88 09 78 55</div>
                  <div className="text-xs text-blue-100">Appel gratuit • Cliquez pour appeler</div>
                </div>
                
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 transition-all duration-700 group-hover:translate-x-full"></div>
              </a>
            </div>

            <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4">
              <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Urgences 24h/7j
              </h4>
              <p className="text-red-800 text-sm">
                En cas d'urgence, appelez directement au{' '}
                <a href="tel:0629173003" className="font-bold text-red-900 hover:text-red-700 transition-colors">
                  06 29 17 30 03
                </a>
                .{' '}
                Un technicien peut intervenir dans l'heure.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Formulaire de contact
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="jean.dupont@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="plomberie">Plomberie</option>
                    <option value="chauffage">Chauffage</option>
                    <option value="electricite">Électricité</option>
                    <option value="urgence">Urgence</option>
                    <option value="devis">Demande de devis</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Décrivez votre problème ou votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 shadow-md ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande détaillée'}
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                * Champs obligatoires. Réponse sous 2h en journée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;