import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import DrainCleaningPageComponent from '../../src/components/pages/DrainCleaningPage';

const QuoteModal = dynamic(() => import('../../src/components/QuoteModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('../../src/components/FloatingCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('../../src/components/ScrollToTop'), { ssr: false });

export default function DrainCleaningPage() {
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
    "name": "Débouchage Canalisations Paris - FKR MULTI-SERVICES",
    "description": "Service professionnel de débouchage canalisations à Paris. Intervention rapide 24h/7j pour WC, éviers, douches bouchés. Équipement haute pression.",
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
    "serviceType": "Débouchage Canalisations",
    "areaServed": ["Paris", "Yvelines", "Val-d'Oise", "Hauts-de-Seine", "Seine-Saint-Denis"]
  };

  return (
    <>
      <Head>
        <title>Débouchage Canalisations Paris | FKR MULTI-SERVICES | Intervention Rapide</title>
        <meta name="description" content="Débouchage canalisations Paris 24h/7j. WC, éviers, douches bouchés. Équipement haute pression. Intervention rapide départements 78, 95, 92, 93. Devis gratuit." />
        <link rel="canonical" href="https://example.com/plomberie/debouchage-canalisations" />
        <meta property="og:title" content="Débouchage Canalisations Paris | FKR MULTI-SERVICES" />
        <meta property="og:description" content="Service professionnel de débouchage canalisations à Paris. Intervention rapide 24h/7j." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/plomberie/debouchage-canalisations" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header 
          currentPage="drain-cleaning"
          onNavigate={navigate}
          onScrollToSection={scrollToSection}
          onRequestQuote={() => setShowQuoteModal(true)}
        />
        <main>
          <DrainCleaningPageComponent 
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