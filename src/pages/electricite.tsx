import React from 'react'
import Head from 'next/head'
import ElectricalPage from '../components/pages/ElectricalPage'

const noop = () => {}

export default function ElectriciteRoute() {
  return (
    <>
      <Head>
        <title>Électricité — FKR MULTI-SERVICES</title>
        <meta name="description" content="Mises aux normes, diagnostics, pannes électriques, installations." />
      </Head>
      <ElectricalPage onRequestQuote={noop} onNavigate={noop} />
    </>
  )
}

export async function getStaticProps() { 
  return { props: {} } 
}