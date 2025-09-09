import React from 'react'
import Head from 'next/head'
import LocalPage from '../../components/pages/LocalPage'

// Données statiques des départements
const departements = [
  {
    slug: '78-yvelines',
    number: '78',
    name: 'Yvelines',
    title: 'Plombier Yvelines (78) | FKR MULTI-SERVICES | Intervention 24h/7j',
    description: 'Services de plomberie, chauffage et électricité dans les Yvelines (78). Intervention rapide à Versailles, Saint-Germain-en-Laye, Poissy.'
  },
  {
    slug: '92-hauts-de-seine',
    number: '92',
    name: 'Hauts-de-Seine',
    title: 'Plombier Hauts-de-Seine (92) | FKR MULTI-SERVICES | Intervention 24h/7j',
    description: 'Services de plomberie, chauffage et électricité dans les Hauts-de-Seine (92). Intervention rapide à Boulogne-Billancourt, Neuilly-sur-Seine.'
  },
  {
    slug: '93-seine-saint-denis',
    number: '93',
    name: 'Seine-Saint-Denis',
    title: 'Plombier Seine-Saint-Denis (93) | FKR MULTI-SERVICES | Intervention 24h/7j',
    description: 'Services de plomberie, chauffage et électricité en Seine-Saint-Denis (93). Intervention rapide à Saint-Denis, Montreuil, Aubervilliers.'
  },
  {
    slug: '95-val-doise',
    number: '95',
    name: 'Val-d\'Oise',
    title: 'Plombier Val-d\'Oise (95) | FKR MULTI-SERVICES | Intervention 24h/7j',
    description: 'Services de plomberie, chauffage et électricité dans le Val-d\'Oise (95). Intervention rapide à Cergy, Pontoise, Argenteuil.'
  }
]

type Dept = {
  slug: string
  number: string
  name: string
  title: string
  description: string
}

const noop = () => {}

export default function DepartementPage({ pageData }: { pageData: Dept }) {
  if (!pageData) return null
  return (
    <>
      <Head>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
      </Head>
      <LocalPage
        title={pageData.title}
        location={pageData.number}
        description={pageData.description}
        onRequestQuote={noop}
        onNavigate={noop}
      />
    </>
  )
}

export async function getStaticPaths() {
  const paths = departements.map((d) => ({ params: { slug: d.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const pageData = departements.find((d) => d.slug === params.slug) || null
  return { props: { pageData } }
}