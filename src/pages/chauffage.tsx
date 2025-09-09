import React from 'react'
import Head from 'next/head'
import HeatingPage from '../components/pages/HeatingPage'

const noop = () => {}

export default function ChauffageRoute() {
  return (
    <>
      <Head>
        <title>Chauffage — FKR MULTI-SERVICES</title>
        <meta name="description" content="Entretien chaudière, dépannage, installation et réglages de chauffage." />
      </Head>
      <HeatingPage onRequestQuote={noop} onNavigate={noop} />
    </>
  )
}

export async function getStaticProps() { 
  return { props: {} } 
}