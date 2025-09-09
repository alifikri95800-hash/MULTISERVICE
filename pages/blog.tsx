import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import SEO from '../src/components/SEO';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import BlogPageComponent from '../src/components/pages/BlogPage';

const QuoteModal = dynamic(() => import('../src/components/QuoteModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('../src/components/FloatingCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('../src/components/ScrollToTop'), { ssr: false });

export default function BlogPage() {
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
      <SEO
        title="Blog MULTISERVICES | Conseils Experts Plomberie, Chauffage, Électricité Paris"
        description="Blog MULTISERVICES : conseils d'experts, guides pratiques et actualités en plomberie, chauffage et électricité à Paris. Articles techniques et astuces professionnelles."
        currentPage="blog"
      />
      
      <div className="min-h-screen bg-white">
        <Header 
          currentPage="blog"
          onNavigate={navigate}
          onScrollToSection={scrollToSection}
          onRequestQuote={() => setShowQuoteModal(true)}
        />
        <main>
          <BlogPageComponent onNavigate={navigate} onRequestQuote={() => setShowQuoteModal(true)} />
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