import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import SEO from '../src/components/SEO';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import Zones from '../src/components/Zones';
import Reviews from '../src/components/Reviews';
import About from '../src/components/About';
import FAQ from '../src/components/FAQ';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import CookieConsent from '../src/components/CookieConsent';

// Dynamic imports
const QuoteModal = dynamic(() => import('../src/components/QuoteModal'), { ssr: false });
const FloatingCTA = dynamic(() => import('../src/components/FloatingCTA'), { ssr: false });
const ScrollToTop = dynamic(() => import('../src/components/ScrollToTop'), { ssr: false });

export default function HomePage() {
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
    } else if (page.startsWith('paris-')) {
      const arrondissement = page.replace('paris-', '');
      window.location.href = `/paris/${arrondissement}`;
    } else if (page.startsWith('departement-')) {
      const dept = page.replace('departement-', '');
      window.location.href = `/departements/${dept}`;
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FKR MULTI-SERVICES",
    "description": "Services de plomberie, chauffage et électricité à Paris et départements 78, 95, 92, 93",
    "url": "https://example.com",
    "telephone": "09 88 09 78 55",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cergy",
      "addressLocality": "Cergy",
      "postalCode": "95000",
      "addressCountry": "FR"
    },
    "identifier": "521 945 147 00028",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.0370,
      "longitude": 2.0781
    },
    "openingHours": "Mo-Su 24:00",
    "priceRange": "€€",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 49.0370,
        "longitude": 2.0781
      },
      "geoRadius": "40000"
    }
  };

  return (
    <>
      <SEO
        title="MULTISERVICES | Plombier, Chauffagiste, Électricien à Paris | Service 24h/7j"
        description="MULTISERVICES : Interventions rapides en plomberie, chauffage et électricité à Paris et départements 78, 95, 92, 93. Devis gratuit, techniciens certifiés, service 24h/7j."
        currentPage="home"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Header 
          currentPage="home"
          onNavigate={navigate}
          onScrollToSection={scrollToSection}
          onRequestQuote={() => setShowQuoteModal(true)}
        />
        <main>
          <Hero onRequestQuote={() => setShowQuoteModal(true)} />
          <Services onNavigate={navigate} />
          <Zones onNavigate={navigate} />
          <Reviews />
          <About />
          <FAQ />
          <Contact />
        </main>
        <Footer onScrollToSection={scrollToSection} onNavigate={navigate} />
        <CookieConsent />
        <FloatingCTA />
        <ScrollToTop />
        {showQuoteModal && (
          <QuoteModal onClose={() => setShowQuoteModal(false)} />
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60
  };
}