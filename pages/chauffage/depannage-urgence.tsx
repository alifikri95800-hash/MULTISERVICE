import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import HeatingEmergencyPageComponent from '../../src/components/pages/HeatingEmergencyPage';

const QuoteModal = dynamic(() => import('../../src/components/QuoteModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('../../src/components/FloatingCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('../../src/components/ScrollToTop'), { ssr: false });

export default function HeatingEmergencyPage() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

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
    "@type": "EmergencyService",
    "name": "Urgence Chauffage Paris - FKR MULTI-SERVICES",
    "description": "Service d'urgence chauffage 24h/7j à Paris. Panne chaudière, plus d'eau chaude, radiateurs froids. Intervention sous 2h.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FKR MULTI-SERVICES",
      "telephone": "06 29 17 30 03",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cergy",
        "postalCode": "95000",
        "addressCountry": "FR"
      }
    },
    "serviceType": "Urgence Chauffage",
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": "06 29 17 30 03",
      "availableLanguage": "French"
    },
    "hoursAvailable": "24/7"
  };

  return (
    <>
      <Head>
        <title>Urgence Chauffage Paris | FKR MULTI-SERVICES | Dépannage Chaudière 24h/7j</title>
        <meta name="description" content="Urgence chauffage Paris 24h/7j. Panne chaudière, plus d'eau chaude, radiateurs froids. Chauffagiste d'urgence départements 78, 95, 92, 93. Appelez le 06 29 17 30 03." />
        <link rel="canonical" href="https://example.com/chauffage/depannage-urgence" />
        <meta property="og:title" content="Urgence Chauffage Paris | FKR MULTI-SERVICES" />
        <meta property="og:description" content="Service d'urgence chauffage 24h/7j à Paris. Intervention sous 2h." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/chauffage/depannage-urgence" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header 
          currentPage="heating-emergency"
          onNavigate={navigate}
          onScrollToSection={scrollToSection}
          onRequestQuote={() => setShowQuoteModal(true)}
        />
        <main>
          <HeatingEmergencyPageComponent 
            onRequestQuote={() => setShowQuoteModal(true)} 
            onNavigate={navigate}
          />
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