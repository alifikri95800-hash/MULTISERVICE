import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import SmartHomePageComponent from '../../src/components/pages/SmartHomePage';

const QuoteModal = dynamic(() => import('../../src/components/QuoteModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('../../src/components/FloatingCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('../../src/components/ScrollToTop'), { ssr: false });

export default function SmartHomePage() {
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
    "@type": "Service",
    "name": "Domotique Connectée Paris - FKR MULTI-SERVICES",
    "description": "Installation domotique et maison connectée à Paris. Éclairage connecté, volets automatiques, thermostat intelligent. Électriciens spécialisés.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FKR MULTI-SERVICES",
      "telephone": "09 88 09 78 55",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cergy",
        "postalCode": "95000",
        "addressCountry": "FR"
      }
    },
    "serviceType": "Domotique Connectée",
    "areaServed": ["Paris", "Yvelines", "Val-d'Oise", "Hauts-de-Seine", "Seine-Saint-Denis"]
  };

  return (
    <>
      <Head>
        <title>Domotique Connectée Paris | FKR MULTI-SERVICES | Maison Intelligente</title>
        <meta name="description" content="Domotique connectée Paris et départements 78, 95, 92, 93. Maison intelligente, éclairage connecté, volets automatiques. Électriciens spécialisés, devis gratuit." />
        <link rel="canonical" href="https://example.com/electricite/domotique-connectee" />
        <meta property="og:title" content="Domotique Connectée Paris | FKR MULTI-SERVICES" />
        <meta property="og:description" content="Installation domotique et maison connectée à Paris. Confort et économies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/electricite/domotique-connectee" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header 
          currentPage="smart-home"
          onNavigate={navigate}
          onScrollToSection={scrollToSection}
          onRequestQuote={() => setShowQuoteModal(true)}
        />
        <main>
          <SmartHomePageComponent 
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