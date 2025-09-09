import React from 'react'
import Head from 'next/head'
import BlogPage from '../components/pages/BlogPage'

const noop = () => {}

export default function BlogRoute() {
  return (
    <>
      <Head>
        <title>Conseils & Blog — FKR MULTI-SERVICES</title>
        <meta name="description" content="Astuces d'entretien, prévention des pannes et infos techniques." />
      </Head>
      <BlogPage onNavigate={noop} onRequestQuote={noop} />
    </>
  )
}

export async function getStaticProps() { 
  return { props: {} } 
}