import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import ElectricalEmergencyPageComponent from '../../src/components/pages/ElectricalEmergencyPage';

const QuoteModal = dynamic(() => import('../../src/components/QuoteModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('../../src/components/FloatingCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('../../src/components/ScrollToTop'), { ssr: false });

export default function ElectricalEmergencyPage() {
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
    "name": "Urgence Électrique Paris - FKR MULTI-SERVICES",
    "description": "Service d'urgence électrique 24h/7j à Paris. Coupure électrique, court-circuit, disjoncteur. Intervention sous 1h.",
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
    "serviceType": "Urgence Électrique",
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
        <title>Urgence Électrique Paris | FKR MULTI-SERVICES | Dépannage 24h/7j</title>
        <meta name="description" content="Urgence électrique Paris 24h/7j. Coupure électrique, court-circuit, disjoncteur qui saute. Électricien d'urgence départements 78, 95, 92, 93. Appelez le 06 29 17 30 03." />
        <link rel="canonical" href="https://example.com/electricite/depannage-urgence" />
        <meta property="og:title" content="Urgence Électrique Paris | FKR MULTI-SERVICES" />
        <meta property="og:description" content="Service d'urgence électrique 24h/7j à Paris. Intervention sécurisée." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/electricite/depannage-urgence" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header 
          currentPage="electrical-emergency"
          onNavigate={navigate}
          onScrollToSection={scrollToSection}
          onRequestQuote={() => setShowQuoteModal(true)}
        />
        <main>
          <ElectricalEmergencyPageComponent 
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