import React from 'react'
import Head from 'next/head'
import PlumbingPage from '../components/pages/PlumbingPage'

const noop = () => {}

export default function PlomberieRoute() {
  return (
    <>
      <Head>
        <title>Plomberie — FKR MULTI-SERVICES</title>
        <meta name="description" content="Interventions plomberie rapides, fuites, débouchage, remplacement." />
      </Head>
      <PlumbingPage onRequestQuote={noop} onNavigate={noop} />
    </>
  )
}

export async function getStaticProps() { 
  return { props: {} } 
}