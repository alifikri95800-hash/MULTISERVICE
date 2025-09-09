export interface Departement {
  slug: string;
  number: string;
  name: string;
  title: string;
  description: string;
  cities: string[];
  content: {
    intro: string;
    services: string[];
    advantages: string[];
    faq: Array<{
      question: string;
      answer: string;
    }>;
  };
};

export const departements: Departement[] = [
  {
    slug: '78-yvelines',
    number: '78',
    name: 'Yvelines',
    title: 'Plombier Yvelines (78) | FKR MULTI-SERVICES | Intervention 24h/7j',
    description: 'Services de plomberie, chauffage et électricité dans les Yvelines (78). Intervention rapide à Versailles, Saint-Germain-en-Laye, Poissy, Mantes-la-Jolie.',
    cities: ['Versailles', 'Saint-Germain-en-Laye', 'Poissy', 'Mantes-la-Jolie', 'Sartrouville', 'Conflans-Sainte-Honorine'],
    content: {
      intro: 'Le département des Yvelines (78) fait partie de la grande couronne parisienne et concentre de nombreuses villes résidentielles, châteaux historiques, zones pavillonnaires, ainsi que des centres commerciaux et entreprises. De Versailles à Saint-Germain-en-Laye, en passant par Poissy et Mantes-la-Jolie, les interventions de plomberie concernent autant les maisons individuelles que les copropriétés : fuite d\'eau dans une villa de Saint-Germain-en-Laye, canalisation obstruée dans un pavillon de Sartrouville, ou chauffe-eau défaillant dans un appartement de Versailles.',
      services: [
        'Réparation de fuites d\'eau : robinetterie de maison, WC familiaux, colonnes de copropriété, chauffe-eau individuels, canalisations de jardin.',
        'Débouchage canalisation : éviers de cuisine familiale, lavabos de salle de bain, douches de maison, baignoires, WC de pavillon.',
        'Installation et dépannage chauffe-eau : électriques, gaz, thermodynamiques adaptés aux maisons individuelles.',
        'Maintenance préventive pour les copropriétés et les équipements de piscines privées.',
        'Interventions résidentielles : maisons individuelles, pavillons, copropriétés, châteaux, centres commerciaux des Yvelines.'
      ],
      advantages: [
        'Disponibilité 24h/7j dans tout le département',
        'Intervention rapide dans les Yvelines',
        'Plombiers spécialisés maisons individuelles',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers et copropriétés'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans les Yvelines ?',
          answer: 'Nos plombiers arrivent généralement en moins de 45 minutes, que vous soyez à Versailles, Saint-Germain-en-Laye, Poissy ou Mantes-la-Jolie.'
        },
        {
          question: '🏡 Intervenez-vous dans les maisons individuelles ?',
          answer: 'Oui, nous avons l\'expertise des installations de maisons individuelles et des systèmes de chauffage central.'
        },
        {
          question: '🚽 Prenez-vous en charge les fosses septiques ?',
          answer: 'Oui, nos équipes réalisent la maintenance et le dépannage des systèmes d\'assainissement individuel.'
        },
        {
          question: '🌙 Intervenez-vous la nuit dans les zones pavillonnaires ?',
          answer: 'Oui, notre service est disponible 24h/7j, avec intervention discrète pour respecter la tranquillité résidentielle.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie dans les Yvelines ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, sans frais de déplacement dans notre zone de couverture.'
        },
        {
          question: '🏰 Intervenez-vous aussi dans les châteaux et demeures historiques ?',
          answer: 'Oui, nous dépannons régulièrement les propriétés de prestige et respectons les contraintes patrimoniales.'
        },
        {
          question: '🛠 Proposez-vous des contrats d\'entretien pour les copropriétés ?',
          answer: 'Oui, nous proposons des contrats d\'entretien préventif adaptés aux copropriétés des Yvelines.'
        },
        {
          question: '🔍 Avez-vous des outils pour les grandes propriétés ?',
          answer: 'Oui, nos équipements s\'adaptent aux installations étendues des maisons individuelles et propriétés de caractère.'
        }
      ]
    }
  },
  {
    slug: '92-hauts-de-seine',
    number: '92',
    name: 'Hauts-de-Seine',
    title: 'Plombier Hauts-de-Seine (92) | FKR MULTI-SERVICES | Intervention 24h/7j',
    description: 'Services de plomberie, chauffage et électricité dans les Hauts-de-Seine (92). Intervention rapide à Boulogne-Billancourt, Neuilly-sur-Seine, Courbevoie, Nanterre.',
    cities: ['Boulogne-Billancourt', 'Neuilly-sur-Seine', 'Courbevoie', 'Nanterre', 'Levallois-Perret', 'Issy-les-Moulineaux'],
    content: {
      intro: 'Le département des Hauts-de-Seine (92) est le cœur économique de l\'Île-de-France. Entre La Défense, Boulogne-Billancourt, Neuilly-sur-Seine et Nanterre, il concentre de nombreux sièges sociaux, tours de bureaux, résidences de standing, ainsi que des centres commerciaux et équipements sportifs. Dans ce secteur d\'affaires et résidentiel huppé, les interventions de plomberie concernent des installations de qualité : fuite d\'eau dans un appartement de Neuilly-sur-Seine, canalisation obstruée dans une tour de La Défense, ou système de chauffage défaillant dans un bureau de Courbevoie.',
      services: [
        'Réparation de fuites d\'eau : robinetterie de standing, WC de bureau, colonnes de tour, systèmes centralisés, canalisations haute pression.',
        'Débouchage canalisation : éviers de restaurant d\'entreprise, lavabos de bureau, douches de salle de sport, baignoires de résidence, WC de centre commercial.',
        'Installation et maintenance de systèmes de chauffage central pour les tours et résidences.',
        'Intervention en milieu professionnel avec respect des contraintes d\'entreprise et des horaires de bureau.',
        'Interventions tertiaires : tours de bureaux, sièges sociaux, résidences de standing, centres commerciaux, équipements sportifs des Hauts-de-Seine.'
      ],
      advantages: [
        'Disponibilité 24h/7j pour les entreprises et particuliers',
        'Intervention rapide dans tout le département',
        'Plombiers spécialisés installations tertiaires',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour entreprises, syndics et particuliers'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans les Hauts-de-Seine ?',
          answer: 'Nos plombiers arrivent généralement en moins de 45 minutes, que vous soyez à La Défense, Boulogne-Billancourt, Neuilly-sur-Seine ou Nanterre.'
        },
        {
          question: '🏢 Intervenez-vous dans les tours de bureaux de La Défense ?',
          answer: 'Oui, nous avons l\'expertise des installations tertiaires et des systèmes centralisés des tours de bureaux.'
        },
        {
          question: '🚽 Prenez-vous en charge les sanitaires d\'entreprise ?',
          answer: 'Oui, nos équipes réalisent la maintenance et le dépannage des sanitaires collectifs d\'entreprise avec discrétion.'
        },
        {
          question: '🌙 Intervenez-vous la nuit dans les zones d\'affaires ?',
          answer: 'Oui, notre service est disponible 24h/7j, avec intervention adaptée aux contraintes de sécurité des zones d\'affaires.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie dans les Hauts-de-Seine ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, avec possibilité de facturation directe aux entreprises.'
        },
        {
          question: '🏬 Intervenez-vous aussi dans les centres commerciaux ?',
          answer: 'Oui, nous dépannons régulièrement les centres commerciaux et équipements collectifs, notamment à La Défense et Boulogne-Billancourt.'
        },
        {
          question: '🛠 Travaillez-vous avec les syndics de copropriété ?',
          answer: 'Oui, nous avons l\'habitude de travailler avec les syndics et proposons des contrats d\'entretien pour les copropriétés importantes.'
        },
        {
          question: '🔍 Avez-vous des outils pour les installations de grande envergure ?',
          answer: 'Oui, nos équipements professionnels s\'adaptent aux installations complexes des tours et centres d\'affaires.'
        }
      ]
    }
  },
  {
    slug: '93-seine-saint-denis',
    number: '93',
    name: 'Seine-Saint-Denis',
    title: 'Plombier Seine-Saint-Denis (93) | FKR MULTI-SERVICES | Intervention 24h/7j',
    description: 'Services de plomberie, chauffage et électricité en Seine-Saint-Denis (93). Intervention rapide à Saint-Denis, Montreuil, Aubervilliers, Bobigny.',
    cities: ['Saint-Denis', 'Montreuil', 'Aubervilliers', 'Bobigny', 'Pantin', 'Noisy-le-Grand'],
    content: {
      intro: 'Le département de Seine-Saint-Denis (93) est un territoire en pleine transformation urbaine. Entre Saint-Denis, Montreuil, Aubervilliers et Bobigny, il concentre de nombreux logements sociaux, zones industrielles reconverties, équipements sportifs, ainsi que des entreprises et startups. Dans ce secteur populaire et dynamique, les interventions de plomberie touchent des installations variées : fuite d\'eau dans un logement social de Saint-Denis, canalisation obstruée dans un loft de Montreuil, ou système de chauffage défaillant dans une entreprise d\'Aubervilliers.',
      services: [
        'Réparation de fuites d\'eau : robinetterie collective, WC de logement social, colonnes d\'immeuble, chauffe-eau électriques, canalisations PVC.',
        'Débouchage canalisation : éviers de cantine, lavabos collectifs, douches de salle de sport, baignoires de logement, WC de bureau.',
        'Installation et maintenance de systèmes de chauffage collectif pour les logements sociaux.',
        'Intervention sociale avec adaptation aux contraintes budgétaires et aux différentes communautés.',
        'Interventions populaires : logements sociaux, entreprises, équipements sportifs, zones industrielles reconverties, startups de Seine-Saint-Denis.'
      ],
      advantages: [
        'Disponibilité 24h/7j pour tous les publics',
        'Intervention rapide dans tout le département',
        'Plombiers expérimentés logements sociaux',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers, bailleurs et entreprises'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention en Seine-Saint-Denis ?',
          answer: 'Nos plombiers arrivent généralement en moins de 45 minutes, que vous soyez à Saint-Denis, Montreuil, Aubervilliers ou Bobigny.'
        },
        {
          question: '🏢 Intervenez-vous dans les logements sociaux ?',
          answer: 'Oui, nous avons l\'expertise des installations collectives et travaillons avec les bailleurs sociaux pour les interventions d\'urgence.'
        },
        {
          question: '🚽 Prenez-vous en charge les sanitaires collectifs ?',
          answer: 'Oui, nos équipes réalisent la maintenance et le dépannage des sanitaires collectifs dans les logements sociaux et entreprises.'
        },
        {
          question: '🌙 Intervenez-vous la nuit dans les zones sensibles ?',
          answer: 'Oui, notre service est disponible 24h/7j, avec intervention sécurisée dans toutes les zones du département.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie en Seine-Saint-Denis ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, avec des tarifs adaptés aux différents publics.'
        },
        {
          question: '🏭 Intervenez-vous aussi dans les zones industrielles ?',
          answer: 'Oui, nous dépannons régulièrement les entreprises et zones industrielles reconverties, notamment à Saint-Denis et Aubervilliers.'
        },
        {
          question: '🛠 Proposez-vous des solutions économiques ?',
          answer: 'Oui, nous adaptons nos solutions aux budgets variés et proposons des réparations durables et économiques.'
        },
        {
          question: '🔍 Avez-vous des outils pour les installations collectives ?',
          answer: 'Oui, nos équipements s\'adaptent aux installations collectives et aux systèmes centralisés des logements sociaux.'
        }
      ]
    }
  },
  {
    slug: '95-val-doise',
    number: '95',
    name: 'Val-d\'Oise',
    title: 'Plombier Val-d\'Oise (95) | FKR MULTI-SERVICES | Intervention 24h/7j',
    description: 'Services de plomberie, chauffage et électricité dans le Val-d\'Oise (95). Intervention rapide à Cergy, Pontoise, Argenteuil, Sarcelles.',
    cities: ['Cergy', 'Pontoise', 'Argenteuil', 'Sarcelles', 'Ermont', 'Franconville'],
    content: {
      intro: 'Le département du Val-d\'Oise (95) est notre zone d\'implantation principale. Entre Cergy-Pontoise, Argenteuil, Sarcelles et les communes rurales, il concentre de nombreuses villes nouvelles, zones pavillonnaires, logements collectifs, ainsi que des centres commerciaux et zones d\'activités. Basés à Cergy, nous connaissons parfaitement ce territoire : fuite d\'eau dans un pavillon de Pontoise, canalisation obstruée dans un immeuble d\'Argenteuil, ou chaudière défaillante dans une maison de Sarcelles.',
      services: [
        'Réparation de fuites d\'eau : robinetterie de pavillon, WC familiaux, colonnes d\'immeuble, chauffe-eau individuels, canalisations extérieures.',
        'Débouchage canalisation : éviers de maison, lavabos familiaux, douches de pavillon, baignoires, WC de logement collectif.',
        'Installation et entretien de chaudières gaz et fioul pour les maisons individuelles.',
        'Maintenance préventive pour les copropriétés de villes nouvelles et les équipements collectifs.',
        'Interventions locales : pavillons, villas, copropriétés, logements collectifs, centres commerciaux, zones d\'activités du Val-d\'Oise.'
      ],
      advantages: [
        'Basés à Cergy, connaissance parfaite du territoire',
        'Intervention rapide dans tout le département',
        'Plombiers spécialisés villes nouvelles',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers, syndics et entreprises'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le Val-d\'Oise ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, étant basés à Cergy. Intervention rapide à Pontoise, Argenteuil, Sarcelles et toutes les communes.'
        },
        {
          question: '🏡 Intervenez-vous dans les villes nouvelles comme Cergy-Pontoise ?',
          answer: 'Oui, nous connaissons parfaitement les spécificités des villes nouvelles et leurs installations standardisées.'
        },
        {
          question: '🚽 Prenez-vous en charge les copropriétés des années 70-80 ?',
          answer: 'Oui, nos équipes maîtrisent les installations de cette époque et proposent des solutions de modernisation.'
        },
        {
          question: '🌙 Intervenez-vous la nuit dans les zones rurales ?',
          answer: 'Oui, notre service est disponible 24h/7j dans tout le département, y compris les communes rurales.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie dans le Val-d\'Oise ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, sans frais de déplacement étant donné notre proximité.'
        },
        {
          question: '🏢 Intervenez-vous aussi dans les zones d\'activités ?',
          answer: 'Oui, nous dépannons régulièrement les entreprises et zones d\'activités, notamment à Cergy-Pontoise et Argenteuil.'
        },
        {
          question: '🛠 Proposez-vous un service de proximité ?',
          answer: 'Absolument, étant basés dans le département, nous offrons un véritable service de proximité avec des interventions très rapides.'
        },
        {
          question: '🔍 Connaissez-vous les spécificités locales ?',
          answer: 'Oui, notre connaissance approfondie du territoire nous permet d\'adapter nos interventions aux spécificités locales.'
        }
      ]
    }
  }
];

export const getDepartementBySlug = (slug: string): Departement | undefined => {
  return departements.find(dept => dept.slug === slug);
};

export const getAllDepartementSlugs = (): string[] => {
  return departements.map(dept => dept.slug);
};