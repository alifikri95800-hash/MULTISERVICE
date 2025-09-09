import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import LightingInstallationPageComponent from '../../src/components/pages/LightingInstallationPage';

const QuoteModal = dynamic(() => import('../../src/components/QuoteModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('../../src/components/FloatingCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('../../src/components/ScrollToTop'), { ssr: false });

export default function LightingInstallationPage() {
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
    "name": "Installation Éclairage Paris - FKR MULTI-SERVICES",
    "description": "Installation éclairage LED et luminaires à Paris. Spots, variateurs, éclairage connecté. Économies jusqu'à 80%. Électriciens certifiés.",
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
    "serviceType": "Installation Éclairage",
    "areaServed": ["Paris", "Yvelines", "Val-d'Oise", "Hauts-de-Seine", "Seine-Saint-Denis"]
  };

  return (
    <>
      <Head>
        <title>Installation Éclairage Paris | FKR MULTI-SERVICES | LED & Luminaires</title>
        <meta name="description" content="Installation éclairage Paris et départements 78, 95, 92, 93. LED, spots, luminaires, variateurs. Économies jusqu'à 80%. Électriciens certifiés, devis gratuit." />
        <link rel="canonical" href="https://example.com/electricite/installation-eclairage" />
        <meta property="og:title" content="Installation Éclairage Paris | FKR MULTI-SERVICES" />
        <meta property="og:description" content="Installation éclairage LED et luminaires à Paris. Économies garanties." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/electricite/installation-eclairage" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header 
          currentPage="lighting-installation"
          onNavigate={navigate}
          onScrollToSection={scrollToSection}
          onRequestQuote={() => setShowQuoteModal(true)}
        />
        <main>
          <LightingInstallationPageComponent 
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