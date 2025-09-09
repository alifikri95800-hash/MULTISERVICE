import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);

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

    const section = document.getElementById('faq');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: 'En combien de temps intervenez-vous ?',
      answer: 'Nous intervenons dans l\'heure qui suit votre appel pour les urgences. Pour les interventions programmées, nous proposons des créneaux sous 24-48h selon votre disponibilité.'
    },
    {
      question: 'Proposez-vous des devis gratuits ?',
      answer: 'Oui, tous nos devis sont gratuits et sans engagement. Notre technicien se déplace à votre domicile pour établir un diagnostic précis et vous propose une solution adaptée avec un tarif transparent.'
    },
    {
      question: 'Travaillez-vous le soir et le week-end ?',
      answer: 'Notre service est disponible 24h/7j, y compris les soirs, week-ends et jours fériés. Un supplément peut s\'appliquer pour les interventions en dehors des heures ouvrables.'
    },
    {
      question: 'Quelles sont vos zones d\'intervention ?',
      answer: 'Nous intervenons à Paris et dans les départements suivants : Yvelines (78), Val-d\'Oise (95), Hauts-de-Seine (92) et Seine-Saint-Denis (93).'
    },
    {
      question: 'Vos techniciens sont-ils assurés ?',
      answer: 'Oui, tous nos techniciens sont certifiés RGE et couverts par notre assurance décennale. Nous garantissons notre travail et utilisons uniquement des pièces détachées d\'origine constructeur.'
    },
    {
      question: 'Comment régler ma facture ?',
      answer: 'Nous acceptons tous les modes de paiement : espèces, chèque, carte bancaire (sur place ou par téléphone) et virement. Le paiement s\'effectue après réalisation des travaux et votre entière satisfaction.'
    },
    {
      question: 'Que faire en cas d\'urgence ?',
      answer: 'En cas d\'urgence (fuite importante, panne de chauffage, coupure électrique), appelez-nous immédiatement au 09 88 09 78 55 ou au 06 29 17 30 03 (urgences uniquement). Notre équipe d\'astreinte vous guidera par téléphone et dépêchera un technicien rapidement.'
    },
    {
      question: 'Proposez-vous un service après-vente ?',
      answer: 'Oui, nous assurons un suivi de nos interventions. En cas de problème lié à notre intervention, nous revenons gratuitement. Nous proposons également des contrats d\'entretien pour vos équipements.'
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Retrouvez les réponses aux questions les plus posées par nos clients
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Une autre question ?</h3>
            <p className="text-blue-800 text-sm mb-4">
              N'hésitez pas à nous contacter, notre équipe vous répond rapidement !
            </p>
            <a
              href="tel:0988097855"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              09 88 09 78 55
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;