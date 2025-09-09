import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import TermsOfService from '../src/components/pages/TermsOfService';

const QuoteModal = dynamic(() => import('../src/components/QuoteModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('../src/components/FloatingCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('../src/components/ScrollToTop'), { ssr: false });

export default function TermsOfServicePage() {
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
        <title>Conditions Générales de Vente | MULTISERVICES | CGV Services</title>
        <meta name="description" content="Conditions générales de vente MULTISERVICES. CGV pour les services de plomberie, chauffage et électricité à Paris et départements 78, 95, 92, 93." />
        <link rel="canonical" href="https://example.com/conditions-generales-vente" />
        <meta property="og:title" content="Conditions Générales de Vente | MULTISERVICES" />
        <meta property="og:description" content="CGV pour les services de plomberie, chauffage et électricité." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/conditions-generales-vente" />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header 
          currentPage="terms"
          onNavigate={navigate}
          onScrollToSection={scrollToSection}
          onRequestQuote={() => setShowQuoteModal(true)}
        />
        <main>
          <TermsOfService />
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