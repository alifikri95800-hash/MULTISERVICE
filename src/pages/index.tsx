import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const noop = () => {}

export default function HomePage() {
  return (
    <>
      <Head>
        <title>FKR MULTI-SERVICES — Plomberie, Chauffage, Électricité</title>
        <meta name="description" content="Dépannage 24h/7j, devis gratuit en Île-de-France." />
      </Head>
      <Header currentPage="home" onNavigate={noop} onScrollToSection={noop} onRequestQuote={noop} />
      <main>
        <Hero onRequestQuote={noop} />
        <Services onNavigate={noop} />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer onScrollToSection={noop} onNavigate={noop} />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60
  };
}