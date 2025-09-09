import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import WaterHeaterInstallationPageComponent from '../../src/components/pages/WaterHeaterInstallationPage';

const QuoteModal = dynamic(() => import('../../src/components/QuoteModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('../../src/components/FloatingCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('../../src/components/ScrollToTop'), { ssr: false });

export default function WaterHeaterInstallationPage() {
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
    "name": "Installation Chauffe-eau Paris - FKR MULTI-SERVICES",
    "description": "Installation professionnelle de chauffe-eau à Paris. Électrique, gaz, thermodynamique, solaire. Plombiers certifiés, devis gratuit.",
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
    "serviceType": "Installation Chauffe-eau",
    "areaServed": ["Paris", "Yvelines", "Val-d'Oise", "Hauts-de-Seine", "Seine-Saint-Denis"]
  };

  return (
    <>
      <Head>
        <title>Installation Chauffe-eau Paris | FKR MULTI-SERVICES | Électrique, Gaz, Thermodynamique</title>
        <meta name="description" content="Installation chauffe-eau Paris et départements 78, 95, 92, 93. Électrique, gaz, thermodynamique, solaire. Plombiers certifiés, conseil personnalisé, devis gratuit." />
        <link rel="canonical" href="https://example.com/plomberie/installation-chauffe-eau" />
        <meta property="og:title" content="Installation Chauffe-eau Paris | FKR MULTI-SERVICES" />
        <meta property="og:description" content="Installation professionnelle de chauffe-eau à Paris. Tous types disponibles." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/plomberie/installation-chauffe-eau" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header 
          currentPage="water-heater-installation"
          onNavigate={navigate}
          onScrollToSection={scrollToSection}
          onRequestQuote={() => setShowQuoteModal(true)}
        />
        <main>
          <WaterHeaterInstallationPageComponent 
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