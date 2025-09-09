import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  currentPage?: string;
  noIndex?: boolean;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, currentPage, noIndex = false, image }) => {
  const router = useRouter();
  const baseUrl = "https://plombierdepannageparis.fr";
  
  // Default values for social sharing
  const defaultTitle = "Plombier Dépannage Paris | Multi-Services Chauffage & Électricité";
  const defaultDescription = "Interventions rapides à Paris dans tous les arrondissements. Plomberie, chauffage, électricité et dépannages d'urgence 24/7 par des artisans qualifiés.";
  const defaultImage = `${baseUrl}/logo.png`;
  
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalImage = image || defaultImage;
  
  // Generate canonical URL
  const canonicalUrl = `${baseUrl}${router.asPath.split('?')[0]}`;
  
  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Plombier Dépannage Paris" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="fr" />
      <meta name="geo.region" content="FR-75" />
      <meta name="geo.placename" content="Paris" />
      <meta name="geo.position" content="48.8566;2.3522" />
      <meta name="ICBM" content="48.8566, 2.3522" />
    </Head>
  );
};

export default SEO;