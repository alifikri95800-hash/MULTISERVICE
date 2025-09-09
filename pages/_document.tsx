import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="UTF-8" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Favicons - Generated online */}
        <link rel="icon" type="image/x-icon" href="https://api.faviconkit.com/plombierdepannageparis.fr/64" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://api.faviconkit.com/plombierdepannageparis.fr/180" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://api.faviconkit.com/plombierdepannageparis.fr/32" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://api.faviconkit.com/plombierdepannageparis.fr/16" />
        
        {/* Default Open Graph for social sharing */}
        <meta property="og:title" content="Plombier Dépannage Paris | Multi-Services Chauffage & Électricité" />
        <meta property="og:description" content="Interventions rapides à Paris dans tous les arrondissements. Plomberie, chauffage, électricité et dépannages d'urgence 24/7 par des artisans qualifiés." />
        <meta property="og:image" content="https://plombierdepannageparis.fr/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Plombier Dépannage Paris" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plombier Dépannage Paris | Multi-Services Chauffage & Électricité" />
        <meta name="twitter:description" content="Interventions rapides à Paris dans tous les arrondissements. Plomberie, chauffage, électricité et dépannages d'urgence 24/7 par des artisans qualifiés." />
        <meta name="twitter:image" content="https://plombierdepannageparis.fr/logo.png" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        
        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}