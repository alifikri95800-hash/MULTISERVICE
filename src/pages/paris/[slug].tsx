import React from 'react'
import Head from 'next/head'
import LocalPage from '../../components/pages/LocalPage'

// Données statiques des arrondissements parisiens
const parisArrondissements = [
  {
    slug: '1er-arrondissement',
    number: '1er',
    title: 'Plombier Paris 1er | FKR MULTI-SERVICES | Intervention 24h/7j',
    description: 'Services de plomberie, chauffage et électricité dans le 1er arrondissement de Paris. Intervention rapide au Louvre, Châtelet, Les Halles.'
  },
  {
    slug: '2e-arrondissement',
    number: '2e',
    title: 'Plombier Paris 2e | FKR MULTI-SERVICES | Intervention 24h/7j',
    description: 'Services de plomberie, chauffage et électricité dans le 2e arrondissement de Paris. Intervention rapide à Bourse, Grands Boulevards.'
  },
  {
    slug: '3e-arrondissement',
    number: '3e',
    title: 'Plombier Paris 3e | FKR MULTI-SERVICES | Intervention 24h/7j',
    description: 'Services de plomberie, chauffage et électricité dans le 3e arrondissement de Paris. Intervention rapide au Marais, République.'
  },
  {
    slug: '4e-arrondissement',
    number: '4e',
    title: 'Plombier Paris 4e | FKR MULTI-SERVICES | Intervention 24h/7j',
    description: 'Services de plomberie, chauffage et électricité dans le 4e arrondissement de Paris. Intervention rapide à Notre-Dame, Île Saint-Louis.'
  },
  {
    slug: '5e-arrondissement',
    number: '5e',
    title: 'Plombier Paris 5e | FKR MULTI-SERVICES | Intervention 24h/7j',
    description: 'Services de plomberie, chauffage et électricité dans le 5e arrondissement de Paris. Intervention rapide au Quartier Latin, Panthéon.'
  }
]

type PageData = {
  slug: string
  number: string
  title: string
  description: string
}

const noop = () => {}

export default function ParisArrPage({ pageData }: { pageData: PageData }) {
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
  const paths = parisArrondissements.map((a) => ({ params: { slug: a.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const pageData = parisArrondissements.find((a) => a.slug === params.slug) || null
  return { props: { pageData } }
}