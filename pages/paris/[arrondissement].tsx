import React, { useState, useLayoutEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import dynamic from 'next/dynamic';
import { MapPin, Phone, CheckCircle, Clock, Award, Users } from 'lucide-react';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import LocalPage from '../../src/components/pages/LocalPage';
import { ParisArrondissement, getAllArrondissementSlugs, getArrondissementBySlug } from '../../src/data/paris';

const QuoteModal = dynamic(() => import('../../src/components/QuoteModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('../../src/components/FloatingCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('../../src/components/ScrollToTop'), { ssr: false });

interface ArrondissementPageProps {
  arrondissement: ParisArrondissement;
}

export default function ArrondissementPage({ arrondissement }: ArrondissementPageProps) {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    setIsVisible(true);
  }, []);

  const navigate = (page: string) => {
    if (page === 'home') {
      window.location.href = '/';
    } else if (page === 'plumbing') {
      window.location.href = '/plomberie';
    } else if (page === 'heating') {
      window.location.href = '/chauffage';
    } else if (page === 'electrical') {
      window.location.href = '/electricite';
    } else if (page === 'blog') {
      window.location.href = '/blog';
    }
  };

  const scrollToSection = (sectionId: string) => {
    window.location.href = `/#${sectionId}`;
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `FKR MULTI-SERVICES - Plombier Paris ${arrondissement.number}`,
    "description": arrondissement.description,
    "url": `https://example.com/paris/${arrondissement.slug}`,
    "telephone": "09 88 09 78 55",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `Paris ${arrondissement.number}`,
      "addressLocality": "Paris",
      "postalCode": `750${arrondissement.number.replace(/\D/g, '').padStart(2, '0')}`,
      "addressCountry": "FR"
    },
    "serviceArea": {
      "@type": "Place",
      "name": `Paris ${arrondissement.number} arrondissement`
    },
    "serviceType": ["Plomberie", "Chauffage", "Électricité"],
    "openingHours": "Mo-Su 24:00"
  };

  return (
    <>
      <Head>
        <title>{arrondissement.title}</title>
        <meta name="description" content={arrondissement.description} />
        <link rel="canonical" href={`https://example.com/paris/${arrondissement.slug}`} />
        <meta property="og:title" content={arrondissement.title} />
        <meta property="og:description" content={arrondissement.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://example.com/paris/${arrondissement.slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header 
          currentPage={`paris-${arrondissement.slug}`}
          onNavigate={navigate}
          onScrollToSection={scrollToSection}
          onRequestQuote={() => setShowQuoteModal(true)}
        />
        <main>
          <div className="pt-16 lg:pt-20">
            <section className="bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 py-12 lg:py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                      {arrondissement.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                      {arrondissement.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
                        <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <p className="font-semibold text-gray-900">Intervention</p>
                        <p className="text-sm text-gray-600">Sous 30 min</p>
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
                        onClick={() => setShowQuoteModal(true)}
                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                      >
                        Devis gratuit
                      </button>
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/20250908_0137_Eiffel Tower at Golden Hour_simple_compose_01k4k8j4tvesjsz6jhcna8php6.png"
                      alt={`Tour Eiffel au coucher de soleil - Services de plomberie dans le ${arrondissement.number} arrondissement de Paris`}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">Service Parisien</p>
                          <p className="text-blue-600 text-sm">{arrondissement.number} arrondissement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16 lg:py-24 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    {arrondissement.content.intro}
                  </p>

                  <p className="text-gray-700 mb-12 text-lg leading-relaxed">
                    Nos équipes de <strong>plombiers dépannage Paris {arrondissement.number}</strong> sont disponibles 24h/7j pour intervenir 
                    en urgence dans tout le {`750${arrondissement.number.replace(/\D/g, '').padStart(2, '0')}`}. Chaque déplacement est précédé d'un devis gratuit et transparent, 
                    et nous assurons une arrivée sur place en moins de 30 minutes en moyenne.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                    🚨 Dépannage plomberie urgent à Paris {arrondissement.number}
                  </h2>

                  <p className="text-gray-700 mb-6">
                    Nous couvrons toutes les urgences plomberie dans le {arrondissement.number} arrondissement :
                  </p>

                  <div className="bg-blue-50 rounded-2xl p-8 mb-12">
                    <ul className="space-y-4">
                      {arrondissement.content.services.map((service, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700"><strong>{service.split(':')[0]}:</strong> {service.split(':')[1]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                    ⚡ Rapidité et disponibilité 24h/7j
                  </h2>

                  <p className="text-gray-700 mb-6">
                    Parce qu'une urgence plomberie ne peut pas attendre :
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="font-bold text-green-900 mb-4">Service continu</h3>
                      <ul className="space-y-2 text-green-800">
                        <li>• Interventions de jour comme de nuit, sans interruption</li>
                        <li>• Déplacements garantis le week-end et les jours fériés</li>
                        <li>• Service de proximité couvrant {arrondissement.quartiers.join(', ')}</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="font-bold text-blue-900 mb-4">Quartiers couverts</h3>
                      <ul className="space-y-2 text-blue-800">
                        {arrondissement.quartiers.map((quartier, index) => (
                          <li key={index}>• {quartier}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12">
                    <p className="text-yellow-800 font-semibold">
                      👉 Dans le {arrondissement.number} arrondissement, nos plombiers assurent une intervention sous 30 minutes maximum, où que vous soyez.
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                    💶 Tarifs et devis dépannage Paris {arrondissement.number}
                  </h2>

                  <p className="text-gray-700 mb-6">
                    Nos engagements pour un service transparent :
                  </p>

                  <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Devis gratuit</h3>
                        <p className="text-gray-600 text-sm">Établi avant chaque intervention</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Award className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Tarifs clairs</h3>
                        <p className="text-gray-600 text-sm">Sans mauvaise surprise</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="h-8 w-8 text-purple-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Garantie</h3>
                        <p className="text-gray-600 text-sm">Sur toutes nos réparations</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                    ✅ Pourquoi choisir notre plombier dépannage à Paris {arrondissement.number} ?
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-4">
                      {arrondissement.content.advantages.slice(0, 3).map((advantage, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{advantage}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {arrondissement.content.advantages.slice(3).map((advantage, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                    ❓ FAQ – Dépannage plomberie Paris {arrondissement.number}
                  </h2>

                  <div className="space-y-6 mb-12">
                    {arrondissement.content.faq.map((faq, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">
                      📞 Appelez dès maintenant un plombier dépannage Paris {arrondissement.number}
                    </h2>
                    <p className="text-blue-100 mb-6">
                      Intervention rapide, efficace et garantie
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="tel:0988097855"
                        className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
                      >
                        09 88 09 78 55
                      </a>
                      <button
                        onClick={() => setShowQuoteModal(true)}
                        className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
                      >
                        Devis Gratuit
                      </button>
                    </div>
                  </div>

                  {/* Liens internes SEO */}
                  <div className="mt-16 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Nos autres services à Paris</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      <a href="/plomberie" className="text-blue-600 hover:text-blue-800 transition-colors">Plomberie Paris</a>
                      <a href="/chauffage" className="text-blue-600 hover:text-blue-800 transition-colors">Chauffage Paris</a>
                      <a href="/electricite" className="text-blue-600 hover:text-blue-800 transition-colors">Électricité Paris</a>
                      <a href="/blog" className="text-blue-600 hover:text-blue-800 transition-colors">Blog conseils</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer onScrollToSection={scrollToSection} onNavigate={navigate} />
        <FloatingCTA />
        <ScrollToTop />
        {showQuoteModal && (
          <QuoteModal onClose={() => setShowQuoteModal(false)} />
        )}
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllArrondissementSlugs();
  const paths = slugs.map((slug) => ({
    params: { arrondissement: slug }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const arrondissement = getArrondissementBySlug(params?.arrondissement as string);

  if (!arrondissement) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      arrondissement
    }
  };
};