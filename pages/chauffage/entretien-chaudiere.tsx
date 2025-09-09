import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import BoilerMaintenancePageComponent from '../../src/components/pages/BoilerMaintenancePage';

const QuoteModal = dynamic(() => import('../../src/components/QuoteModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('../../src/components/FloatingCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('../../src/components/ScrollToTop'), { ssr: false });

export default function BoilerMaintenancePage() {
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
    "name": "Entretien Chaudière Paris - FKR MULTI-SERVICES",
    "description": "Entretien chaudière obligatoire à Paris. Chauffagistes certifiés RGE. Gaz, fioul, condensation. Certificat fourni, intervention rapide.",
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
    "serviceType": "Entretien Chaudière",
    "areaServed": ["Paris", "Yvelines", "Val-d'Oise", "Hauts-de-Seine", "Seine-Saint-Denis"]
  };

  return (
    <>
      <Head>
        <title>Entretien Chaudière Paris | FKR MULTI-SERVICES | Obligatoire Annuel Certifié RGE</title>
        <meta name="description" content="Entretien chaudière obligatoire Paris et départements 78, 95, 92, 93. Chauffagistes certifiés RGE. Gaz, fioul, condensation. Certificat fourni, devis gratuit." />
        <link rel="canonical" href="https://example.com/chauffage/entretien-chaudiere" />
        <meta property="og:title" content="Entretien Chaudière Paris | FKR MULTI-SERVICES" />
        <meta property="og:description" content="Entretien chaudière obligatoire à Paris. Chauffagistes certifiés RGE." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/chauffage/entretien-chaudiere" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header 
          currentPage="boiler-maintenance"
          onNavigate={navigate}
          onScrollToSection={scrollToSection}
          onRequestQuote={() => setShowQuoteModal(true)}
        />
        <main>
          <BoilerMaintenancePageComponent 
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