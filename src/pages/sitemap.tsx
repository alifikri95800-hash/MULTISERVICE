import React from 'react'
import Head from 'next/head'
import Sitemap from '../components/pages/Sitemap'

const noop = () => {}

export default function SitemapRoute() {
  return (
    <>
      <Head>
        <title>Plan du site — FKR MULTI-SERVICES</title>
        <meta name="description" content="Navigation complète du site." />
      </Head>
      <Sitemap onNavigate={noop} onScrollToSection={noop} />
    </>
  )
}

export async function getStaticProps() { 
  return { props: {} } 
}