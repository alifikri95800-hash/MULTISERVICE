import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import LegalNotice from '../src/components/pages/LegalNotice';

const QuoteModal = dynamic(() => import('../src/components/QuoteModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('../src/components/FloatingCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('../src/components/ScrollToTop'), { ssr: false });

export default function LegalNoticePage() {
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
        <title>Mentions Légales | MULTISERVICES | Informations Légales Entreprise</title>
        <meta name="description" content="Mentions légales MULTISERVICES. Informations légales de l'entreprise de plomberie, chauffage et électricité à Paris et départements 78, 95, 92, 93." />
        <link rel="canonical" href="https://example.com/mentions-legales" />
        <meta property="og:title" content="Mentions Légales | MULTISERVICES" />
        <meta property="og:description" content="Informations légales de l'entreprise MULTISERVICES." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/mentions-legales" />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header 
          currentPage="legal"
          onNavigate={navigate}
          onScrollToSection={scrollToSection}
          onRequestQuote={() => setShowQuoteModal(true)}
        />
        <main>
          <LegalNotice />
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