import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import PrivacyPolicy from '../src/components/pages/PrivacyPolicy';

const QuoteModal = dynamic(() => import('../src/components/QuoteModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('../src/components/FloatingCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('../src/components/ScrollToTop'), { ssr: false });

export default function PrivacyPolicyPage() {
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

  return (
    <>
      <Head>
        <title>Politique de Confidentialité | MULTISERVICES | Protection des Données</title>
        <meta name="description" content="Politique de confidentialité MULTISERVICES. Protection des données personnelles et respect de la vie privée. Conformité RGPD." />
        <link rel="canonical" href="https://example.com/politique-confidentialite" />
        <meta property="og:title" content="Politique de Confidentialité | MULTISERVICES" />
        <meta property="og:description" content="Protection des données personnelles et respect de la vie privée." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/politique-confidentialite" />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header 
          currentPage="privacy"
          onNavigate={navigate}
          onScrollToSection={scrollToSection}
          onRequestQuote={() => setShowQuoteModal(true)}
        />
        <main>
          <PrivacyPolicy />
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