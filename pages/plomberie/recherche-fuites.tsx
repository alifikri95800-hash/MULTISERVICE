import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import LeakDetectionPageComponent from '../../src/components/pages/LeakDetectionPage';

const QuoteModal = dynamic(() => import('../../src/components/QuoteModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('../../src/components/FloatingCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('../../src/components/ScrollToTop'), { ssr: false });

export default function LeakDetection() {
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
    "name": "Recherche de Fuites Paris - FKR MULTI-SERVICES",
    "description": "Détection professionnelle de fuites d'eau sans casse à Paris. Équipement de pointe pour localisation précise. Intervention rapide 24h/7j.",
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
    "serviceType": "Recherche de Fuites",
    "areaServed": ["Paris", "Yvelines", "Val-d'Oise", "Hauts-de-Seine", "Seine-Saint-Denis"]
  };

  return (
    <>
      <Head>
        <title>Recherche de Fuites Paris | FKR MULTI-SERVICES | Détection sans Casse</title>
        <meta name="description" content="Recherche de fuites d'eau Paris sans casse. Détection professionnelle avec équipement de pointe. Intervention rapide 24h/7j départements 78, 95, 92, 93. Devis gratuit." />
        <link rel="canonical" href="https://example.com/plomberie/recherche-fuites" />
        <meta property="og:title" content="Recherche de Fuites Paris | FKR MULTI-SERVICES" />
        <meta property="og:description" content="Détection professionnelle de fuites d'eau sans casse à Paris. Équipement de pointe." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/plomberie/recherche-fuites" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header 
          currentPage="leak-detection"
          onNavigate={navigate}
          onScrollToSection={scrollToSection}
          onRequestQuote={() => setShowQuoteModal(true)}
        />
        <main>
          <LeakDetectionPageComponent 
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