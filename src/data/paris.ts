export interface ParisArrondissement {
  slug: string;
  number: string;
  title: string;
  description: string;
  quartiers: string[];
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

export const parisArrondissements: ParisArrondissement[] = [
  {
    slug: '1er-arrondissement',
    number: '1er',
    title: 'Plombier Dépannage Paris 1er (75001)',
    description: 'Urgences plomberie 24h/7j dans le 1er arrondissement de Paris. Intervention rapide près du Louvre, Châtelet et les Halles.',
    quartiers: ['Louvre et Tuileries', 'Châtelet-Les Halles', 'Saint-Germain l\'Auxerrois', 'Palais-Royal'],
    content: {
      intro: 'Le 1er arrondissement de Paris est le cœur historique de la capitale. Entre les quartiers du Louvre, Châtelet-Les Halles, Saint-Germain l\'Auxerrois et Palais-Royal, il concentre de nombreux immeubles anciens, des commerces prestigieux, ainsi que des bureaux et espaces culturels. Dans ce secteur dense et touristique, les problèmes de plomberie surviennent régulièrement : fuite d\'eau rue de Rivoli, canalisation bouchée rue Saint-Honoré, ou WC bloqué dans un appartement près du Louvre.',
      services: [
        'Réparation de fuites d\'eau : robinets, WC, colonnes d\'immeuble, ballons d\'eau chaude, canalisations encastrées.',
        'Débouchage canalisation : évier, lavabo, douche, baignoire, WC.',
        'Dépannage WC bouchés et remplacement de chasse d\'eau défectueuse.',
        'Sécurisation provisoire pour limiter les dégâts des eaux en attendant la réparation définitive.',
        'Interventions multi-secteurs : appartements, bureaux, commerces, hôtels du 1er arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris nuits et jours fériés',
        'Intervention rapide dans tout le 75001',
        'Plombiers qualifiés et certifiés',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers et professionnels'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 1er arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez au Louvre, Châtelet-Les Halles, rue de Rivoli ou rue Saint-Honoré.'
        },
        {
          question: '💧 Quels types de fuites réparez-vous ?',
          answer: 'Nous prenons en charge toutes les fuites : robinetterie, WC, colonnes d\'immeuble, ballons d\'eau chaude et canalisations encastrées.'
        },
        {
          question: '🚽 Prenez-vous en charge les WC bouchés ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 1er avec efficacité, même pour les obstructions complexes.'
        },
        {
          question: '🌙 Intervenez-vous la nuit et les jours fériés ?',
          answer: 'Oui, notre service est disponible 24h/7j, sans interruption.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 1er ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, afin d\'éviter toute mauvaise surprise.'
        },
        {
          question: '🏢 Intervenez-vous aussi dans les commerces du 1er ?',
          answer: 'Oui, nous dépannons régulièrement les commerces, bureaux et hôtels, notamment dans les quartiers du Louvre et Châtelet-Les Halles.'
        },
        {
          question: '🛠 Proposez-vous des réparations provisoires ?',
          answer: 'Oui, nous pouvons mettre en place une solution temporaire pour éviter un dégât des eaux avant la réparation définitive.'
        },
        {
          question: '🔍 Avez-vous des outils pour localiser les fuites ?',
          answer: 'Oui, grâce à la caméra d\'inspection et aux détecteurs modernes, nous localisons rapidement les fuites sans casser inutilement.'
        }
      ]
    }
  },
  {
    slug: '2e-arrondissement',
    number: '2e',
    title: 'Plombier Dépannage Paris 2e (75002)',
    description: 'Urgences plomberie 24h/7j dans le 2e arrondissement de Paris. Intervention rapide près de la Bourse, Grands Boulevards et Sentier.',
    quartiers: ['Bourse', 'Grands Boulevards', 'Sentier', 'Mail'],
    content: {
      intro: 'Le 2e arrondissement de Paris est le quartier des affaires par excellence. Entre la Bourse, les Grands Boulevards, le Sentier et le Mail, il concentre de nombreux bureaux, showrooms de mode, ateliers et commerces. Dans ce secteur dynamique et dense, les problèmes de plomberie surviennent régulièrement : fuite d\'eau rue Réaumur, canalisation bouchée boulevard de Bonne-Nouvelle, ou WC bloqué dans un bureau près de la Bourse.',
      services: [
        'Réparation de fuites d\'eau : robinets, WC, colonnes d\'immeuble, ballons d\'eau chaude, canalisations encastrées.',
        'Débouchage canalisation : évier, lavabo, douche, baignoire, WC.',
        'Dépannage WC bouchés et remplacement de chasse d\'eau défectueuse.',
        'Sécurisation provisoire pour limiter les dégâts des eaux en attendant la réparation définitive.',
        'Interventions multi-secteurs : bureaux, showrooms, ateliers et commerces du 2e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris nuits et jours fériés',
        'Intervention rapide dans tout le 75002',
        'Plombiers qualifiés et certifiés',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers et professionnels'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 2e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez à la Bourse, aux Grands Boulevards, au Sentier ou rue Réaumur.'
        },
        {
          question: '💧 Quels types de fuites réparez-vous ?',
          answer: 'Nous prenons en charge toutes les fuites : robinetterie, WC, colonnes d\'immeuble, ballons d\'eau chaude et canalisations encastrées.'
        },
        {
          question: '🚽 Prenez-vous en charge les WC bouchés ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 2e avec efficacité, même pour les obstructions complexes.'
        },
        {
          question: '🌙 Intervenez-vous la nuit et les jours fériés ?',
          answer: 'Oui, notre service est disponible 24h/7j, sans interruption.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 2e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, afin d\'éviter toute mauvaise surprise.'
        },
        {
          question: '🏢 Intervenez-vous aussi dans les bureaux et showrooms du 2e ?',
          answer: 'Oui, nous dépannons régulièrement les bureaux, showrooms et ateliers, notamment dans les quartiers de la Bourse et du Sentier.'
        },
        {
          question: '🛠 Proposez-vous des réparations provisoires ?',
          answer: 'Oui, nous pouvons mettre en place une solution temporaire pour éviter un dégât des eaux avant la réparation définitive.'
        },
        {
          question: '🔍 Avez-vous des outils pour localiser les fuites ?',
          answer: 'Oui, grâce à la caméra d\'inspection et aux détecteurs modernes, nous localisons rapidement les fuites sans casser inutilement.'
        }
      ]
    }
  },
  {
    slug: '3e-arrondissement',
    number: '3e',
    title: 'Plombier Dépannage Paris 3e (75003)',
    description: 'Urgences plomberie 24h/7j dans le 3e arrondissement de Paris. Intervention rapide dans le Marais, République et Temple.',
    quartiers: ['Le Marais', 'République', 'Temple', 'Arts-et-Métiers'],
    content: {
      intro: 'Le 3e arrondissement de Paris est l\'un des plus historiques de la capitale. Entre le Marais, République, Temple et Arts-et-Métiers, il concentre de nombreux immeubles anciens, des galeries d\'art, des boutiques tendance, ainsi que des lofts et appartements de caractère. Dans ce secteur prisé et dense, les problèmes de plomberie surviennent régulièrement : fuite d\'eau rue de Bretagne, canalisation bouchée rue Vieille du Temple, ou WC bloqué dans un appartement près de la place de la République.',
      services: [
        'Réparation de fuites d\'eau : robinets, WC, colonnes d\'immeuble, ballons d\'eau chaude, canalisations encastrées.',
        'Débouchage canalisation : évier, lavabo, douche, baignoire, WC.',
        'Dépannage WC bouchés et remplacement de chasse d\'eau défectueuse.',
        'Sécurisation provisoire pour limiter les dégâts des eaux en attendant la réparation définitive.',
        'Interventions multi-secteurs : appartements, lofts, galeries, boutiques du 3e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris nuits et jours fériés',
        'Intervention rapide dans tout le 75003',
        'Plombiers qualifiés et certifiés patrimoine',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers, galeries et boutiques'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 3e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez dans le Marais, à République, au Temple ou rue de Bretagne.'
        },
        {
          question: '🏛 Intervenez-vous dans les immeubles historiques du Marais ?',
          answer: 'Oui, nous avons l\'expertise des immeubles anciens et des contraintes patrimoniales du Marais. Nos interventions respectent le caractère historique des bâtiments.'
        },
        {
          question: '🚽 Prenez-vous en charge les WC bouchés ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 3e avec efficacité, même pour les obstructions complexes dans les canalisations anciennes.'
        },
        {
          question: '🌙 Intervenez-vous la nuit et les jours fériés ?',
          answer: 'Oui, notre service est disponible 24h/7j, sans interruption.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 3e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, afin d\'éviter toute mauvaise surprise.'
        },
        {
          question: '🎨 Intervenez-vous aussi dans les galeries et boutiques du 3e ?',
          answer: 'Oui, nous dépannons régulièrement les galeries d\'art, boutiques et commerces, notamment dans les quartiers du Marais et République.'
        }
      ]
    }
  },
  {
    slug: '4e-arrondissement',
    number: '4e',
    title: 'Plombier Dépannage Paris 4e (75004)',
    description: 'Urgences plomberie 24h/7j dans le 4e arrondissement de Paris. Intervention rapide près de Notre-Dame, Île Saint-Louis et Hôtel de Ville.',
    quartiers: ['Notre-Dame et Île de la Cité', 'Île Saint-Louis', 'Hôtel de Ville', 'Place des Vosges'],
    content: {
      intro: 'Le 4e arrondissement de Paris est le cœur touristique et patrimonial de la capitale. Entre Notre-Dame, l\'Île Saint-Louis, l\'Hôtel de Ville et la Place des Vosges, il concentre de nombreux monuments historiques, des hôtels de charme, des restaurants gastronomiques, ainsi que des appartements de prestige dans des immeubles classés. Dans ce secteur emblématique et fréquenté, les urgences de plomberie nécessitent une expertise particulière : fuite d\'eau rue des Rosiers, canalisation obstruée quai de Bourbon, ou sanitaires défaillants dans un hôtel près de Notre-Dame.',
      services: [
        'Réparation de fuites d\'eau : robinets anciens, WC, colonnes d\'immeuble classé, ballons d\'eau chaude, canalisations en plomb.',
        'Débouchage canalisation : éviers de restaurant, lavabos d\'hôtel, douches, baignoires anciennes, WC.',
        'Dépannage WC bouchés et remplacement de mécanismes de chasse d\'eau dans le respect du patrimoine.',
        'Sécurisation d\'urgence pour protéger les biens patrimoniaux en attendant la réparation définitive.',
        'Interventions spécialisées : appartements de prestige, hôtels de charme, restaurants gastronomiques, monuments historiques du 4e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris nuits et jours fériés',
        'Intervention rapide dans tout le 75004',
        'Plombiers qualifiés et certifiés patrimoine',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers, hôtels et restaurants'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 4e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez près de Notre-Dame, sur l\'Île Saint-Louis, à l\'Hôtel de Ville ou Place des Vosges.'
        },
        {
          question: '🏛 Intervenez-vous dans les immeubles classés monuments historiques ?',
          answer: 'Oui, nos plombiers sont formés aux contraintes du patrimoine historique et respectent les réglementations spécifiques aux immeubles classés.'
        },
        {
          question: '🚽 Prenez-vous en charge les WC bouchés ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 4e avec efficacité, même dans les canalisations anciennes des immeubles historiques.'
        },
        {
          question: '🌙 Intervenez-vous la nuit et les jours fériés ?',
          answer: 'Oui, notre service est disponible 24h/7j, sans interruption.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 4e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, afin d\'éviter toute mauvaise surprise.'
        },
        {
          question: '🏨 Intervenez-vous aussi dans les hôtels et restaurants du 4e ?',
          answer: 'Oui, nous dépannons régulièrement les hôtels de charme et restaurants gastronomiques, notamment près de Notre-Dame et Place des Vosges.'
        },
        {
          question: '🛠 Respectez-vous les contraintes patrimoniales ?',
          answer: 'Absolument, nos interventions respectent les réglementations des Bâtiments de France et préservent l\'intégrité des immeubles historiques.'
        },
        {
          question: '🔍 Avez-vous des outils pour localiser les fuites sans dégâts ?',
          answer: 'Oui, grâce à la caméra d\'inspection et aux détecteurs modernes, nous localisons rapidement les fuites sans endommager les éléments patrimoniaux.'
        }
      ]
    }
  },
  {
    slug: '5e-arrondissement',
    number: '5e',
    title: 'Plombier Dépannage Paris 5e (75005)',
    description: 'Urgences plomberie 24h/7j dans le 5e arrondissement de Paris. Intervention rapide au Quartier Latin, Panthéon et Sorbonne.',
    quartiers: ['Quartier Latin', 'Panthéon', 'Sorbonne', 'Jardin des Plantes'],
    content: {
      intro: 'Le 5e arrondissement de Paris est le quartier intellectuel et estudiantin de la capitale. Entre le Quartier Latin, le Panthéon, la Sorbonne et le Jardin des Plantes, il concentre de nombreuses universités, écoles prestigieuses, librairies anciennes, ainsi que des logements étudiants et des appartements bourgeois. Dans ce secteur culturel et académique, les problèmes de plomberie touchent autant les résidences étudiantes que les immeubles haussmanniens : fuite d\'eau boulevard Saint-Michel, canalisation bouchée rue Mouffetard, ou WC défaillant dans une résidence universitaire près de la Sorbonne.',
      services: [
        'Réparation de fuites d\'eau : robinets, WC, colonnes d\'immeuble, chauffe-eau électriques, canalisations cuivre et PVC.',
        'Débouchage canalisation : éviers de cuisine, lavabos, douches collectives, baignoires, WC.',
        'Dépannage WC bouchés et remplacement de mécanismes de chasse d\'eau dans les résidences étudiantes.',
        'Intervention d\'urgence pour limiter les dégâts des eaux dans les bibliothèques et établissements d\'enseignement.',
        'Interventions diversifiées : appartements étudiants, résidences universitaires, librairies, cafés, établissements scolaires du 5e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris nuits et jours fériés',
        'Intervention rapide dans tout le 75005',
        'Plombiers qualifiés et expérimentés',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour étudiants, particuliers et établissements'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 5e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez au Quartier Latin, près du Panthéon, à la Sorbonne ou rue Mouffetard.'
        },
        {
          question: '🎓 Intervenez-vous dans les résidences étudiantes ?',
          answer: 'Oui, nous avons l\'habitude des résidences universitaires et proposons des tarifs adaptés aux étudiants pour les dépannages urgents.'
        },
        {
          question: '🚽 Prenez-vous en charge les WC bouchés ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 5e avec efficacité, même dans les installations collectives des résidences étudiantes.'
        },
        {
          question: '🌙 Intervenez-vous la nuit et les jours fériés ?',
          answer: 'Oui, notre service est disponible 24h/7j, sans interruption.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 5e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, afin d\'éviter toute mauvaise surprise.'
        },
        {
          question: '🏫 Intervenez-vous aussi dans les établissements d\'enseignement ?',
          answer: 'Oui, nous dépannons régulièrement les universités, écoles et bibliothèques, notamment près de la Sorbonne et du Panthéon.'
        },
        {
          question: '🛠 Proposez-vous des tarifs étudiants ?',
          answer: 'Nous proposons des solutions adaptées aux budgets étudiants, avec possibilité de paiement échelonné selon les cas.'
        },
        {
          question: '🔍 Avez-vous des outils pour localiser les fuites ?',
          answer: 'Oui, grâce à la caméra d\'inspection et aux détecteurs modernes, nous localisons rapidement les fuites sans casser inutilement.'
        }
      ]
    }
  },
  {
    slug: '6e-arrondissement',
    number: '6e',
    title: 'Plombier Dépannage Paris 6e (75006)',
    description: 'Urgences plomberie 24h/7j dans le 6e arrondissement de Paris. Intervention rapide à Saint-Germain-des-Prés, Montparnasse et Luxembourg.',
    quartiers: ['Saint-Germain-des-Prés', 'Montparnasse', 'Luxembourg', 'Odéon'],
    content: {
      intro: 'Le 6e arrondissement de Paris est le quartier chic et culturel de la Rive Gauche. Entre Saint-Germain-des-Prés, Montparnasse, le Luxembourg et Odéon, il concentre de nombreuses galeries d\'art, maisons d\'édition prestigieuses, cafés littéraires, ainsi que des appartements bourgeois dans des immeubles de standing. Dans ce secteur élégant et recherché, les interventions de plomberie concernent autant les appartements de luxe que les commerces d\'art : fuite d\'eau boulevard Saint-Germain, canalisation obstruée rue de Rennes, ou sanitaires défaillants dans une galerie près du Luxembourg.',
      services: [
        'Réparation de fuites d\'eau : robinetterie de luxe, WC suspendus, colonnes d\'immeuble haussmannien, chauffe-eau haut de gamme, canalisations cuivre.',
        'Débouchage canalisation : éviers design, lavabos de marque, douches italiennes, baignoires îlot, WC design.',
        'Dépannage WC bouchés et remplacement de mécanismes haut de gamme dans le respect de l\'esthétique.',
        'Intervention discrète pour préserver la tranquillité des résidents et la réputation des commerces de luxe.',
        'Interventions haut de gamme : appartements de standing, galeries d\'art, maisons d\'édition, cafés littéraires, boutiques de luxe du 6e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris nuits et jours fériés',
        'Intervention rapide dans tout le 75006',
        'Plombiers qualifiés et certifiés',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers, galeries et commerces de luxe'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 6e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez à Saint-Germain-des-Prés, Montparnasse, près du Luxembourg ou boulevard Saint-Michel.'
        },
        {
          question: '🎨 Intervenez-vous dans les galeries d\'art et maisons d\'édition ?',
          answer: 'Oui, nous avons l\'habitude des lieux culturels et respectons les contraintes spécifiques des galeries, avec intervention discrète pour préserver les œuvres.'
        },
        {
          question: '🚽 Prenez-vous en charge les équipements haut de gamme ?',
          answer: 'Oui, nos équipes sont formées aux équipements de luxe et utilisent des pièces d\'origine pour préserver l\'esthétique et la qualité.'
        },
        {
          question: '🌙 Intervenez-vous la nuit et les jours fériés ?',
          answer: 'Oui, notre service est disponible 24h/7j, avec intervention discrète pour respecter la tranquillité du quartier.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 6e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, adapté aux exigences de qualité du 6e arrondissement.'
        },
        {
          question: '☕ Intervenez-vous aussi dans les cafés et restaurants du quartier ?',
          answer: 'Oui, nous dépannons régulièrement les cafés littéraires et restaurants gastronomiques, notamment à Saint-Germain-des-Prés et Montparnasse.'
        },
        {
          question: '🛠 Respectez-vous l\'esthétique des appartements de standing ?',
          answer: 'Absolument, nos interventions préservent l\'harmonie décorative et nous proposons des solutions esthétiques adaptées au standing du quartier.'
        },
        {
          question: '🔍 Avez-vous des outils pour localiser les fuites sans dégâts ?',
          answer: 'Oui, grâce à nos équipements de détection moderne, nous localisons les fuites sans endommager les revêtements de qualité.'
        }
      ]
    }
  },
  {
    slug: '7e-arrondissement',
    number: '7e',
    title: 'Plombier Dépannage Paris 7e (75007)',
    description: 'Urgences plomberie 24h/7j dans le 7e arrondissement de Paris. Intervention rapide près de la Tour Eiffel, Invalides et Assemblée Nationale.',
    quartiers: ['Tour Eiffel et Champ-de-Mars', 'Invalides', 'Assemblée Nationale', 'École Militaire'],
    content: {
      intro: 'Le 7e arrondissement de Paris est le quartier institutionnel et diplomatique de la capitale. Entre la Tour Eiffel, les Invalides, l\'Assemblée Nationale et le Champ-de-Mars, il concentre de nombreux ministères, ambassades, hôtels particuliers, ainsi que des appartements de prestige dans des immeubles de grand standing. Dans ce secteur prestigieux et sécurisé, les interventions de plomberie requièrent un savoir-faire particulier : fuite d\'eau avenue de la Bourdonnais, canalisation bouchée rue de Grenelle, ou sanitaires défaillants dans une ambassade près des Invalides.',
      services: [
        'Réparation de fuites d\'eau : robinetterie diplomatique, WC de prestige, colonnes d\'immeuble haussmannien, systèmes de chauffage central, canalisations haute pression.',
        'Débouchage canalisation : éviers professionnels, lavabos de réception, douches de service, baignoires de luxe, WC institutionnels.',
        'Dépannage WC bouchés et remplacement de mécanismes dans le respect des normes de sécurité diplomatique.',
        'Intervention sécurisée avec habilitation pour les zones sensibles et respect des protocoles institutionnels.',
        'Interventions institutionnelles : ministères, ambassades, hôtels particuliers, appartements de fonction, résidences diplomatiques du 7e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris nuits et jours fériés',
        'Intervention rapide dans tout le 75007',
        'Plombiers habilités zones sensibles',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour institutions et particuliers'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 7e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez près de la Tour Eiffel, aux Invalides, à l\'Assemblée Nationale ou avenue de la Bourdonnais.'
        },
        {
          question: '🏛 Intervenez-vous dans les institutions et ambassades ?',
          answer: 'Oui, nos techniciens sont habilités pour les zones sensibles et respectent les protocoles de sécurité des institutions diplomatiques et ministérielles.'
        },
        {
          question: '🚽 Prenez-vous en charge les équipements institutionnels ?',
          answer: 'Oui, nous intervenons sur tous types d\'équipements, des installations domestiques de prestige aux systèmes institutionnels complexes.'
        },
        {
          question: '🌙 Intervenez-vous la nuit et les jours fériés ?',
          answer: 'Oui, notre service est disponible 24h/7j, avec respect des contraintes de sécurité du quartier diplomatique.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 7e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, adapté aux exigences du secteur institutionnel.'
        },
        {
          question: '🏨 Intervenez-vous aussi dans les hôtels de prestige du quartier ?',
          answer: 'Oui, nous dépannons régulièrement les hôtels de luxe et résidences de prestige, notamment près de la Tour Eiffel et des Invalides.'
        },
        {
          question: '🛡 Respectez-vous les protocoles de sécurité ?',
          answer: 'Absolument, nos équipes sont formées aux contraintes sécuritaires et respectent les procédures d\'accès aux zones sensibles.'
        },
        {
          question: '🔍 Avez-vous des outils pour localiser les fuites discrètement ?',
          answer: 'Oui, nos équipements de détection permettent une localisation précise sans perturbation des activités institutionnelles.'
        }
      ]
    }
  },
  {
    slug: '8e-arrondissement',
    number: '8e',
    title: 'Plombier Dépannage Paris 8e (75008)',
    description: 'Urgences plomberie 24h/7j dans le 8e arrondissement de Paris. Intervention rapide aux Champs-Élysées, Madeleine et Faubourg Saint-Honoré.',
    quartiers: ['Champs-Élysées', 'Madeleine', 'Faubourg Saint-Honoré', 'Élysée'],
    content: {
      intro: 'Le 8e arrondissement de Paris est le quartier du luxe et du commerce de prestige. Entre les Champs-Élysées, la Madeleine, le Faubourg Saint-Honoré et l\'Élysée, il concentre de nombreuses boutiques de luxe, palaces, sièges sociaux d\'entreprises, ainsi que des appartements haut de gamme dans des immeubles exceptionnels. Dans ce secteur prestigieux et touristique, les interventions de plomberie demandent une expertise de haut niveau : fuite d\'eau avenue Montaigne, canalisation obstruée rue du Faubourg Saint-Honoré, ou sanitaires défaillants dans un palace près de la place Vendôme.',
      services: [
        'Réparation de fuites d\'eau : robinetterie de luxe, WC design, colonnes d\'immeuble de prestige, systèmes hydro-pneumatiques, canalisations haute qualité.',
        'Débouchage canalisation : éviers de cuisine gastronomique, lavabos de marque, douches de luxe, baignoires spa, WC suspendus design.',
        'Dépannage WC bouchés et remplacement de mécanismes haut de gamme dans le respect de l\'esthétique de luxe.',
        'Service VIP avec intervention discrète pour préserver l\'image de marque des établissements de prestige.',
        'Interventions de prestige : palaces, boutiques de luxe, sièges sociaux, appartements d\'exception, showrooms du 8e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris nuits et jours fériés',
        'Intervention rapide dans tout le 75008',
        'Plombiers spécialisés équipements de luxe',
        'Tarifs transparents, devis gratuit',
        'Service VIP garanti pour établissements de prestige'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 8e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez aux Champs-Élysées, à la Madeleine, au Faubourg Saint-Honoré ou avenue Montaigne.'
        },
        {
          question: '🏨 Intervenez-vous dans les palaces et hôtels de luxe ?',
          answer: 'Oui, nous sommes spécialisés dans les établissements de prestige et respectons les standards de qualité et de discrétion exigés par les palaces.'
        },
        {
          question: '🚽 Prenez-vous en charge les équipements de luxe ?',
          answer: 'Oui, nos équipes sont formées aux équipements haut de gamme et utilisent exclusivement des pièces d\'origine pour préserver la qualité et l\'esthétique.'
        },
        {
          question: '🌙 Intervenez-vous la nuit et les jours fériés ?',
          answer: 'Oui, notre service VIP est disponible 24h/7j, avec intervention discrète pour ne pas perturber l\'activité des établissements.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 8e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, adapté aux exigences de qualité du secteur du luxe.'
        },
        {
          question: '🛍 Intervenez-vous aussi dans les boutiques de luxe ?',
          answer: 'Oui, nous dépannons régulièrement les boutiques de prestige et showrooms, notamment sur les Champs-Élysées et le Faubourg Saint-Honoré.'
        },
        {
          question: '🤫 Garantissez-vous la discrétion ?',
          answer: 'Absolument, nos interventions sont menées avec la plus grande discrétion pour préserver l\'image de marque de nos clients prestigieux.'
        },
        {
          question: '🔍 Avez-vous des outils pour localiser les fuites sans dégâts ?',
          answer: 'Oui, nos équipements de pointe permettent une détection précise sans endommager les finitions de luxe et les matériaux nobles.'
        }
      ]
    }
  },
  {
    slug: '9e-arrondissement',
    number: '9e',
    title: 'Plombier Dépannage Paris 9e (75009)',
    description: 'Urgences plomberie 24h/7j dans le 9e arrondissement de Paris. Intervention rapide à Opéra, Pigalle et Grands Boulevards.',
    quartiers: ['Opéra', 'Pigalle', 'Grands Boulevards', 'Nouvelle Athènes'],
    content: {
      intro: 'Le 9e arrondissement de Paris est le quartier des spectacles et du divertissement. Entre l\'Opéra, Pigalle, les Grands Boulevards et la Nouvelle Athènes, il concentre de nombreux théâtres, cabarets, magasins de musique, ainsi que des immeubles bourgeois et des appartements d\'artistes. Dans ce secteur artistique et nocturne, les urgences de plomberie touchent autant les lieux de spectacle que les habitations : fuite d\'eau boulevard Haussmann, canalisation obstruée rue des Martyrs, ou sanitaires défaillants dans un théâtre près de l\'Opéra.',
      services: [
        'Réparation de fuites d\'eau : robinetterie de spectacle, WC publics, colonnes d\'immeuble haussmannien, chauffe-eau collectifs, canalisations fonte et cuivre.',
        'Débouchage canalisation : éviers de bar, lavabos de loge, douches d\'artistes, baignoires d\'époque, WC de théâtre.',
        'Dépannage WC bouchés et remplacement de mécanismes dans les lieux de spectacle et établissements nocturnes.',
        'Intervention nocturne spécialisée pour ne pas perturber les représentations et la vie nocturne du quartier.',
        'Interventions artistiques : théâtres, cabarets, salles de concert, magasins de musique, appartements d\'artistes du 9e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris pendant les représentations',
        'Intervention rapide dans tout le 75009',
        'Plombiers habitués aux lieux de spectacle',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers, théâtres et établissements'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 9e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez à l\'Opéra, Pigalle, aux Grands Boulevards ou rue des Martyrs.'
        },
        {
          question: '🎭 Intervenez-vous dans les théâtres et cabarets ?',
          answer: 'Oui, nous avons l\'habitude des lieux de spectacle et pouvons intervenir discrètement pendant les entractes ou après les représentations.'
        },
        {
          question: '🚽 Prenez-vous en charge les sanitaires publics des théâtres ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 9e et la maintenance des sanitaires collectifs avec efficacité.'
        },
        {
          question: '🌙 Intervenez-vous pendant les spectacles nocturnes ?',
          answer: 'Oui, notre service est disponible 24h/7j, avec intervention silencieuse pour ne pas perturber les représentations.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 9e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, adapté aux contraintes du milieu artistique.'
        },
        {
          question: '🎪 Intervenez-vous aussi dans les établissements nocturnes de Pigalle ?',
          answer: 'Oui, nous dépannons régulièrement les bars, clubs et cabarets, notamment dans le quartier de Pigalle et des Grands Boulevards.'
        },
        {
          question: '🛠 Proposez-vous des interventions programmées hors spectacles ?',
          answer: 'Oui, nous planifions nos interventions en fonction des programmations artistiques pour minimiser les perturbations.'
        },
        {
          question: '🔍 Avez-vous des outils pour localiser les fuites rapidement ?',
          answer: 'Oui, grâce à nos équipements de détection moderne, nous localisons les fuites sans perturber l\'activité artistique.'
        }
      ]
    }
  },
  {
    slug: '10e-arrondissement',
    number: '10e',
    title: 'Plombier Dépannage Paris 10e (75010)',
    description: 'Urgences plomberie 24h/7j dans le 10e arrondissement de Paris. Intervention rapide près des gares du Nord et de l\'Est, Canal Saint-Martin.',
    quartiers: ['Gares du Nord et de l\'Est', 'Canal Saint-Martin', 'République', 'Belleville'],
    content: {
      intro: 'Le 10e arrondissement de Paris est le quartier cosmopolite et en pleine mutation. Entre les gares du Nord et de l\'Est, le Canal Saint-Martin, République et Belleville, il concentre de nombreux logements sociaux, hôtels économiques, restaurants ethniques, ainsi que des espaces de coworking et startups. Dans ce secteur multiculturel et en développement, les problèmes de plomberie sont fréquents : fuite d\'eau rue du Faubourg Saint-Denis, canalisation bouchée quai de Valmy, ou WC défaillant dans un hôtel près de la gare du Nord.',
      services: [
        'Réparation de fuites d\'eau : robinets collectifs, WC d\'hôtel, colonnes d\'immeuble social, chauffe-eau électriques, canalisations PVC et fonte.',
        'Débouchage canalisation : éviers de restaurant ethnique, lavabos d\'hôtel, douches collectives, baignoires, WC de gare.',
        'Dépannage WC bouchés et remplacement de mécanismes dans les hôtels économiques et logements sociaux.',
        'Intervention multiculturelle avec communication adaptée aux différentes communautés du quartier.',
        'Interventions variées : logements sociaux, hôtels économiques, restaurants ethniques, espaces de coworking, startups du 10e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris pour les voyageurs',
        'Intervention rapide dans tout le 75010',
        'Plombiers expérimentés en milieu urbain dense',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers, hôtels et commerces'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 10e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez près des gares du Nord ou de l\'Est, au Canal Saint-Martin ou rue du Faubourg Saint-Denis.'
        },
        {
          question: '🚂 Intervenez-vous dans les hôtels près des gares ?',
          answer: 'Oui, nous avons l\'habitude des hôtels économiques et de la forte rotation de clientèle près des gares du Nord et de l\'Est.'
        },
        {
          question: '🚽 Prenez-vous en charge les sanitaires collectifs ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 10e et la maintenance des sanitaires collectifs dans les logements sociaux et hôtels.'
        },
        {
          question: '🌙 Intervenez-vous la nuit pour les urgences d\'hôtel ?',
          answer: 'Oui, notre service est disponible 24h/7j, particulièrement adapté aux contraintes hôtelières du quartier des gares.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 10e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, avec des tarifs adaptés aux différents types d\'établissements.'
        },
        {
          question: '🍜 Intervenez-vous aussi dans les restaurants ethniques du quartier ?',
          answer: 'Oui, nous dépannons régulièrement les restaurants ethniques et commerces, notamment près du Canal Saint-Martin et des gares.'
        },
        {
          question: '🛠 Proposez-vous des solutions économiques ?',
          answer: 'Oui, nous adaptons nos solutions aux budgets variés du quartier, avec des réparations durables et économiques.'
        },
        {
          question: '🔍 Avez-vous des outils pour les canalisations anciennes ?',
          answer: 'Oui, nos équipements modernes s\'adaptent aux canalisations anciennes et aux spécificités des immeubles du 10e arrondissement.'
        }
      ]
    }
  },
  {
    slug: '11e-arrondissement',
    number: '11e',
    title: 'Plombier Dépannage Paris 11e (75011)',
    description: 'Urgences plomberie 24h/7j dans le 11e arrondissement de Paris. Intervention rapide à Oberkampf, Bastille et République.',
    quartiers: ['République', 'Oberkampf', 'Bastille', 'Parmentier'],
    content: {
      intro: 'Le 11e arrondissement de Paris est l\'un des plus vivants de la capitale. Entre les quartiers Oberkampf, Bastille, République, Parmentier et Belleville, il concentre de nombreux logements anciens, des bars et restaurants réputés, ainsi que des bureaux et espaces de coworking. Dans ce secteur dense et animé, les problèmes de plomberie surviennent régulièrement : fuite d\'eau rue de la Roquette, canalisation bouchée boulevard Voltaire, ou WC bloqué dans un appartement près de la place de la République.',
      services: [
        'Réparation de fuites d\'eau : robinets, WC, colonnes d\'immeuble, ballons d\'eau chaude, canalisations encastrées.',
        'Débouchage canalisation : évier, lavabo, douche, baignoire, WC.',
        'Dépannage WC bouchés et remplacement de chasse d\'eau défectueuse.',
        'Sécurisation provisoire pour limiter les dégâts des eaux en attendant la réparation définitive.',
        'Interventions multi-secteurs : appartements, bureaux, restaurants, commerces, hôtels du 11e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris nuits et jours fériés',
        'Intervention rapide dans tout le 75011',
        'Plombiers qualifiés et certifiés',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers, commerces, restaurants et hôtels'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 11e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez à Oberkampf, Bastille, République ou boulevard Voltaire.'
        },
        {
          question: '💧 Quels types de fuites réparez-vous ?',
          answer: 'Nous prenons en charge toutes les fuites : robinetterie, WC, colonnes d\'immeuble, ballons d\'eau chaude et canalisations encastrées.'
        },
        {
          question: '🚽 Prenez-vous en charge les WC bouchés ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 11e avec efficacité, même pour les obstructions complexes.'
        },
        {
          question: '🌙 Intervenez-vous la nuit et les jours fériés ?',
          answer: 'Oui, notre service est disponible 24h/7j, sans interruption.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 11e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, afin d\'éviter toute mauvaise surprise.'
        },
        {
          question: '🏢 Intervenez-vous aussi dans les commerces et restaurants du 11e ?',
          answer: 'Oui, nous dépannons régulièrement les bars, restaurants et hôtels, notamment dans les quartiers Oberkampf et Bastille.'
        },
        {
          question: '🛠 Proposez-vous des réparations provisoires ?',
          answer: 'Oui, nous pouvons mettre en place une solution temporaire pour éviter un dégât des eaux avant la réparation définitive.'
        },
        {
          question: '🔍 Avez-vous des outils pour localiser les fuites ?',
          answer: 'Oui, grâce à la caméra d\'inspection et aux détecteurs modernes, nous localisons rapidement les fuites sans casser inutilement.'
        }
      ]
    }
  },
  {
    slug: '12e-arrondissement',
    number: '12e',
    title: 'Plombier Dépannage Paris 12e (75012)',
    description: 'Urgences plomberie 24h/7j dans le 12e arrondissement de Paris. Intervention rapide à Bercy, Gare de Lyon et Bois de Vincennes.',
    quartiers: ['Bercy', 'Gare de Lyon', 'Nation', 'Bois de Vincennes'],
    content: {
      intro: 'Le 12e arrondissement de Paris est le quartier moderne et verdoyant de l\'Est parisien. Entre Bercy, la Gare de Lyon, Nation et le Bois de Vincennes, il concentre de nombreux immeubles récents, complexes résidentiels, centres commerciaux, ainsi que des bureaux et équipements sportifs. Dans ce secteur dynamique et familial, les urgences de plomberie concernent autant les logements modernes que les infrastructures : fuite d\'eau avenue Daumesnil, canalisation obstruée dans un complexe résidentiel près de la Gare de Lyon.',
      services: [
        'Réparation de fuites d\'eau : robinetterie moderne, WC suspendus, colonnes d\'immeuble récent, chauffe-eau thermodynamiques, canalisations PER et multicouche.',
        'Débouchage canalisation : éviers de cuisine familiale, lavabos design, douches à l\'italienne, baignoires balnéo, WC modernes.',
        'Dépannage WC bouchés et remplacement de mécanismes dans les résidences modernes et complexes familiaux.',
        'Maintenance préventive pour les copropriétés récentes et les équipements sportifs du quartier.',
        'Interventions modernes : résidences familiales, centres commerciaux, bureaux, équipements sportifs, complexes résidentiels du 12e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris pour les voyageurs',
        'Intervention rapide dans tout le 75012',
        'Plombiers spécialisés équipements modernes',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers, copropriétés et entreprises'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 12e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez à Bercy, près de la Gare de Lyon, à Nation ou avenue Daumesnil.'
        },
        {
          question: '🏢 Intervenez-vous dans les complexes résidentiels modernes ?',
          answer: 'Oui, nous maîtrisons les installations modernes et les systèmes centralisés des résidences récentes de Bercy et Nation.'
        },
        {
          question: '🚽 Prenez-vous en charge les équipements récents ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 12e et la maintenance des équipements modernes avec les techniques adaptées.'
        },
        {
          question: '🌙 Intervenez-vous la nuit près de la Gare de Lyon ?',
          answer: 'Oui, notre service est disponible 24h/7j, particulièrement adapté aux contraintes des voyageurs et hôtels du quartier.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 12e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, adapté aux installations modernes du quartier.'
        },
        {
          question: '🏬 Intervenez-vous aussi dans les centres commerciaux de Bercy ?',
          answer: 'Oui, nous dépannons régulièrement les centres commerciaux et équipements collectifs, notamment à Bercy Village et Nation.'
        },
        {
          question: '🛠 Maîtrisez-vous les nouvelles technologies de plomberie ?',
          answer: 'Oui, nos plombiers sont formés aux équipements modernes : canalisations PER, robinetterie électronique, systèmes connectés.'
        },
        {
          question: '🔍 Avez-vous des outils pour les installations récentes ?',
          answer: 'Oui, nos équipements de diagnostic s\'adaptent parfaitement aux installations modernes et aux systèmes centralisés.'
        }
      ]
    }
  },
  {
    slug: '13e-arrondissement',
    number: '13e',
    title: 'Plombier Dépannage Paris 13e (75013)',
    description: 'Urgences plomberie 24h/7j dans le 13e arrondissement de Paris. Intervention rapide à Chinatown, Bibliothèque François Mitterrand et Place d\'Italie.',
    quartiers: ['Chinatown', 'Bibliothèque François Mitterrand', 'Place d\'Italie', 'Butte-aux-Cailles'],
    content: {
      intro: 'Le 13e arrondissement de Paris est le quartier multiculturel et moderne du Sud-Est parisien. Entre Chinatown, la Bibliothèque François Mitterrand, Place d\'Italie et la Butte-aux-Cailles, il concentre de nombreuses tours résidentielles, centres commerciaux asiatiques, bibliothèques universitaires, ainsi que des logements sociaux et des lofts d\'artistes. Dans ce secteur cosmopolite et en développement, les urgences de plomberie touchent des installations variées : fuite d\'eau avenue de Choisy, canalisation obstruée dans une tour de la ZAC Rive Gauche, ou sanitaires défaillants dans un restaurant asiatique près de la Place d\'Italie.',
      services: [
        'Réparation de fuites d\'eau : robinetterie de tour, WC collectifs, colonnes montantes haute pression, chauffe-eau centralisés, canalisations en hauteur.',
        'Débouchage canalisation : éviers de restaurant asiatique, lavabos de bibliothèque, douches de résidence étudiante, baignoires de loft, WC de centre commercial.',
        'Dépannage WC bouchés et remplacement de mécanismes dans les tours résidentielles et établissements multiculturels.',
        'Maintenance spécialisée pour les systèmes centralisés des tours et les installations communautaires.',
        'Interventions multiculturelles : restaurants asiatiques, tours résidentielles, bibliothèques, centres commerciaux, lofts d\'artistes du 13e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris pour les tours résidentielles',
        'Intervention rapide dans tout le 75013',
        'Plombiers spécialisés immeubles de grande hauteur',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers, commerces asiatiques et établissements'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 13e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez à Chinatown, près de la Bibliothèque François Mitterrand, Place d\'Italie ou avenue de Choisy.'
        },
        {
          question: '🏢 Intervenez-vous dans les tours résidentielles modernes ?',
          answer: 'Oui, nous maîtrisons les systèmes de plomberie des immeubles de grande hauteur et les installations centralisées des tours de la ZAC Rive Gauche.'
        },
        {
          question: '🚽 Prenez-vous en charge les installations collectives ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 13e et la maintenance des sanitaires collectifs dans les tours et résidences.'
        },
        {
          question: '🌙 Intervenez-vous la nuit dans les tours résidentielles ?',
          answer: 'Oui, notre service est disponible 24h/7j, avec accès sécurisé aux immeubles de grande hauteur.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 13e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, adapté aux spécificités des installations modernes.'
        },
        {
          question: '🥢 Intervenez-vous aussi dans les restaurants asiatiques de Chinatown ?',
          answer: 'Oui, nous dépannons régulièrement les restaurants asiatiques et commerces spécialisés, notamment avenue de Choisy et rue de Tolbiac.'
        },
        {
          question: '🛠 Maîtrisez-vous les systèmes de plomberie en hauteur ?',
          answer: 'Oui, nos plombiers sont formés aux contraintes des immeubles de grande hauteur : pression, surpresseurs, systèmes centralisés.'
        },
        {
          question: '🔍 Avez-vous des outils pour les installations modernes ?',
          answer: 'Oui, nos équipements de diagnostic s\'adaptent parfaitement aux installations récentes des tours et aux systèmes haute pression.'
        }
      ]
    }
  },
  {
    slug: '14e-arrondissement',
    number: '14e',
    title: 'Plombier Dépannage Paris 14e (75014)',
    description: 'Urgences plomberie 24h/7j dans le 14e arrondissement de Paris. Intervention rapide à Montparnasse, Denfert-Rochereau et Alésia.',
    quartiers: ['Montparnasse', 'Denfert-Rochereau', 'Alésia', 'Plaisance'],
    content: {
      intro: 'Le 14e arrondissement de Paris est le quartier résidentiel et familial du Sud parisien. Entre Montparnasse, Denfert-Rochereau, Alésia et Plaisance, il concentre de nombreux immeubles familiaux, crèches et écoles, centres médicaux, ainsi que des commerces de proximité et des espaces verts. Dans ce secteur paisible et résidentiel, les interventions de plomberie concernent principalement les logements familiaux : fuite d\'eau avenue du Maine, canalisation obstruée rue d\'Alésia, ou sanitaires défaillants dans une crèche près de Denfert-Rochereau.',
      services: [
        'Réparation de fuites d\'eau : robinetterie familiale, WC enfants, colonnes d\'immeuble résidentiel, chauffe-eau familiaux, canalisations domestiques.',
        'Débouchage canalisation : éviers de cuisine familiale, lavabos de salle de bain, douches parentales, baignoires enfants, WC familiaux.',
        'Dépannage WC bouchés et remplacement de mécanismes adaptés aux familles avec enfants.',
        'Intervention familiale avec respect de la tranquillité des enfants et des horaires scolaires.',
        'Interventions résidentielles : appartements familiaux, crèches, écoles, centres médicaux, commerces de proximité du 14e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris nuits et jours fériés',
        'Intervention rapide dans tout le 75014',
        'Plombiers sensibilisés aux contraintes familiales',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour familles, crèches et établissements'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 14e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez à Montparnasse, Denfert-Rochereau, Alésia ou avenue du Maine.'
        },
        {
          question: '👶 Intervenez-vous dans les crèches et écoles ?',
          answer: 'Oui, nous avons l\'habitude des établissements accueillant des enfants et respectons les normes d\'hygiène et de sécurité spécifiques.'
        },
        {
          question: '🚽 Prenez-vous en charge les sanitaires adaptés aux enfants ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 14e et la maintenance des équipements adaptés aux familles et établissements scolaires.'
        },
        {
          question: '🌙 Intervenez-vous la nuit dans les quartiers résidentiels ?',
          answer: 'Oui, notre service est disponible 24h/7j, avec intervention discrète pour respecter le repos des familles.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 14e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, avec des tarifs adaptés aux budgets familiaux.'
        },
        {
          question: '🏥 Intervenez-vous aussi dans les centres médicaux du quartier ?',
          answer: 'Oui, nous dépannons régulièrement les cabinets médicaux et centres de santé, notamment près de Montparnasse et Denfert-Rochereau.'
        },
        {
          question: '🛠 Proposez-vous des solutions adaptées aux familles ?',
          answer: 'Oui, nous privilégions les réparations durables et sécurisées, particulièrement importantes dans les logements avec enfants.'
        },
        {
          question: '🔍 Avez-vous des outils pour minimiser les nuisances ?',
          answer: 'Oui, nos équipements permettent des interventions rapides et silencieuses, idéales pour les quartiers résidentiels familiaux.'
        }
      ]
    }
  },
  {
    slug: '15e-arrondissement',
    number: '15e',
    title: 'Plombier Dépannage Paris 15e (75015)',
    description: 'Urgences plomberie 24h/7j dans le 15e arrondissement de Paris. Intervention rapide à Vaugirard, Convention et Front de Seine.',
    quartiers: ['Vaugirard', 'Convention', 'Front de Seine', 'Grenelle'],
    content: {
      intro: 'Le 15e arrondissement de Paris est le plus grand et le plus peuplé de la capitale. Entre Vaugirard, la Convention, le Front de Seine et Grenelle, il concentre de nombreuses copropriétés modernes, centres commerciaux, bureaux d\'entreprises, ainsi que des équipements sportifs et culturels. Dans ce secteur dense et résidentiel, les problèmes de plomberie affectent de nombreux foyers : fuite d\'eau rue de Vaugirard, canalisation obstruée dans une copropriété du Front de Seine, ou sanitaires défaillants dans un centre commercial près de la Convention.',
      services: [
        'Réparation de fuites d\'eau : robinetterie de copropriété, WC de bureau, colonnes montantes d\'immeuble, chauffe-eau collectifs, canalisations de grande capacité.',
        'Débouchage canalisation : éviers de cantine, lavabos d\'entreprise, douches de salle de sport, baignoires de résidence, WC de centre commercial.',
        'Dépannage WC bouchés et remplacement de mécanismes dans les copropriétés et établissements recevant du public.',
        'Gestion de copropriété avec coordination syndic pour les interventions dans les parties communes.',
        'Interventions diversifiées : copropriétés modernes, centres commerciaux, bureaux d\'entreprises, équipements sportifs, établissements culturels du 15e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris nuits et jours fériés',
        'Intervention rapide dans tout le 75015',
        'Plombiers expérimentés grandes copropriétés',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers, syndics et entreprises'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 15e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez à Vaugirard, Convention, Front de Seine ou rue de Grenelle.'
        },
        {
          question: '🏢 Intervenez-vous dans les grandes copropriétés ?',
          answer: 'Oui, nous avons l\'expertise des copropriétés importantes et travaillons en coordination avec les syndics pour les interventions d\'urgence.'
        },
        {
          question: '🚽 Prenez-vous en charge les systèmes collectifs ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 15e et la maintenance des installations collectives des grandes résidences.'
        },
        {
          question: '🌙 Intervenez-vous la nuit dans les tours du Front de Seine ?',
          answer: 'Oui, notre service est disponible 24h/7j, avec accès sécurisé aux immeubles de grande hauteur du Front de Seine.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 15e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, avec possibilité de facturation directe aux syndics.'
        },
        {
          question: '🏬 Intervenez-vous aussi dans les centres commerciaux ?',
          answer: 'Oui, nous dépannons régulièrement les centres commerciaux et équipements collectifs, notamment à Vaugirard et Convention.'
        },
        {
          question: '🛠 Travaillez-vous avec les syndics de copropriété ?',
          answer: 'Oui, nous avons l\'habitude de travailler avec les syndics et proposons des contrats d\'entretien pour les copropriétés importantes.'
        },
        {
          question: '🔍 Avez-vous des outils pour les grandes installations ?',
          answer: 'Oui, nos équipements professionnels s\'adaptent aux installations de grande envergure des copropriétés et centres commerciaux.'
        }
      ]
    }
  },
  {
    slug: '16e-arrondissement',
    number: '16e',
    title: 'Plombier Dépannage Paris 16e (75016)',
    description: 'Urgences plomberie 24h/7j dans le 16e arrondissement de Paris. Intervention rapide à Passy, Trocadéro et Auteuil.',
    quartiers: ['Passy', 'Trocadéro', 'Auteuil', 'Bois de Boulogne'],
    content: {
      intro: 'Le 16e arrondissement de Paris est le quartier résidentiel huppé de l\'Ouest parisien. Entre Passy, le Trocadéro, Auteuil et Bois de Boulogne, il concentre de nombreux hôtels particuliers, appartements de standing, écoles privées prestigieuses, ainsi que des clubs sportifs et centres culturels. Dans ce secteur élégant et recherché, les interventions de plomberie concernent des installations de qualité : fuite d\'eau avenue Foch, canalisation obstruée dans un hôtel particulier de Passy, ou sanitaires haut de gamme défaillants près du Trocadéro.',
      services: [
        'Réparation de fuites d\'eau : robinetterie de luxe, WC design, colonnes d\'hôtel particulier, systèmes de chauffage central, canalisations cuivre et inox.',
        'Débouchage canalisation : éviers de cuisine équipée, lavabos de marbre, douches à l\'italienne, baignoires balnéo, WC suspendus haut de gamme.',
        'Dépannage WC bouchés et remplacement de mécanismes de prestige dans le respect de l\'esthétique résidentielle.',
        'Service résidentiel haut de gamme avec intervention discrète et respectueuse du standing du quartier.',
        'Interventions de prestige : hôtels particuliers, appartements de standing, écoles privées, clubs sportifs, centres culturels du 16e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris nuits et jours fériés',
        'Intervention rapide dans tout le 75016',
        'Plombiers spécialisés installations de prestige',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers, clubs et établissements privés'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 16e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez à Passy, Trocadéro, Auteuil ou avenue Foch.'
        },
        {
          question: '🏰 Intervenez-vous dans les hôtels particuliers ?',
          answer: 'Oui, nous avons l\'expertise des installations de prestige et respectons les exigences de qualité des hôtels particuliers du 16e arrondissement.'
        },
        {
          question: '🚽 Prenez-vous en charge les équipements de luxe ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 16e et la maintenance des équipements haut de gamme avec les pièces d\'origine.'
        },
        {
          question: '🌙 Intervenez-vous la nuit dans les quartiers résidentiels ?',
          answer: 'Oui, notre service est disponible 24h/7j, avec intervention discrète pour respecter la tranquillité des quartiers résidentiels.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 16e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, adapté aux exigences de qualité du quartier résidentiel.'
        },
        {
          question: '🎾 Intervenez-vous aussi dans les clubs sportifs privés ?',
          answer: 'Oui, nous dépannons régulièrement les clubs sportifs et centres culturels, notamment près du Bois de Boulogne et Trocadéro.'
        },
        {
          question: '🛠 Respectez-vous l\'esthétique des intérieurs de prestige ?',
          answer: 'Absolument, nos interventions préservent l\'harmonie décorative et nous utilisons des matériaux de qualité équivalente.'
        },
        {
          question: '🔍 Avez-vous des outils pour préserver les finitions de luxe ?',
          answer: 'Oui, nos équipements de détection permettent une localisation précise sans endommager les revêtements et matériaux nobles.'
        }
      ]
    }
  },
  {
    slug: '17e-arrondissement',
    number: '17e',
    title: 'Plombier Dépannage Paris 17e (75017)',
    description: 'Urgences plomberie 24h/7j dans le 17e arrondissement de Paris. Intervention rapide aux Batignolles, Monceau et Ternes.',
    quartiers: ['Batignolles', 'Monceau', 'Ternes', 'Clichy-Batignolles'],
    content: {
      intro: 'Le 17e arrondissement de Paris est le quartier bourgeois et résidentiel du Nord-Ouest parisien. Entre les Batignolles, Monceau, les Ternes et Clichy-Batignolles, il concentre de nombreux immeubles haussmanniens, parcs et jardins, cliniques privées, ainsi que des commerces de qualité et des bureaux d\'entreprises. Dans ce secteur bourgeois et verdoyant, les interventions de plomberie concernent des installations soignées : fuite d\'eau avenue de Wagram, canalisation obstruée dans un immeuble haussmannien des Batignolles, ou sanitaires défaillants dans une clinique près du parc Monceau.',
      services: [
        'Réparation de fuites d\'eau : robinetterie bourgeoise, WC de standing, colonnes haussmanniennes, systèmes de chauffage central, canalisations cuivre et fonte.',
        'Débouchage canalisation : éviers de cuisine bourgeoise, lavabos de clinique, douches familiales, baignoires d\'époque, WC de bureau.',
        'Dépannage WC bouchés et remplacement de mécanismes dans les immeubles bourgeois et établissements médicaux.',
        'Maintenance haussmannienne avec respect de l\'architecture et des matériaux d\'époque.',
        'Interventions bourgeoises : immeubles haussmanniens, cliniques privées, bureaux d\'entreprises, commerces de qualité, parcs et jardins du 17e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris pour les cliniques privées',
        'Intervention rapide dans tout le 75017',
        'Plombiers spécialisés immeubles haussmanniens',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers, cliniques et entreprises'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 17e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez aux Batignolles, Monceau, aux Ternes ou avenue de Wagram.'
        },
        {
          question: '🏥 Intervenez-vous dans les cliniques privées ?',
          answer: 'Oui, nous avons l\'expertise des établissements médicaux et respectons les normes d\'hygiène strictes des cliniques privées du quartier.'
        },
        {
          question: '🚽 Prenez-vous en charge les installations haussmanniennes ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 17e et la maintenance des installations d\'époque avec respect du patrimoine architectural.'
        },
        {
          question: '🌙 Intervenez-vous la nuit dans les quartiers résidentiels ?',
          answer: 'Oui, notre service est disponible 24h/7j, avec intervention discrète pour respecter la tranquillité des quartiers bourgeois.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 17e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, adapté aux exigences de qualité du quartier bourgeois.'
        },
        {
          question: '🌳 Intervenez-vous aussi près des parcs et jardins ?',
          answer: 'Oui, nous dépannons régulièrement les immeubles et commerces près du parc Monceau et des espaces verts des Batignolles.'
        },
        {
          question: '🛠 Respectez-vous l\'architecture haussmannienne ?',
          answer: 'Absolument, nos interventions préservent l\'intégrité architecturale et nous utilisons des matériaux compatibles avec l\'époque.'
        },
        {
          question: '🔍 Avez-vous des outils pour les canalisations d\'époque ?',
          answer: 'Oui, nos équipements s\'adaptent aux spécificités des canalisations haussmanniennes et aux contraintes patrimoniales.'
        }
      ]
    }
  },
  {
    slug: '18e-arrondissement',
    number: '18e',
    title: 'Plombier Dépannage Paris 18e (75018)',
    description: 'Urgences plomberie 24h/7j dans le 18e arrondissement de Paris. Intervention rapide à Montmartre, Pigalle et Goutte d\'Or.',
    quartiers: ['Montmartre', 'Pigalle', 'Goutte d\'Or', 'Clignancourt'],
    content: {
      intro: 'Le 18e arrondissement de Paris est le quartier artistique et populaire du Nord parisien. Entre Montmartre, Pigalle, la Goutte d\'Or et Clignancourt, il concentre de nombreux immeubles anciens, ateliers d\'artistes, cabarets historiques, ainsi que des logements sociaux et des commerces multiculturels. Dans ce secteur pittoresque et cosmopolite, les urgences de plomberie touchent des installations variées : fuite d\'eau rue Lepic, canalisation obstruée dans un atelier de Montmartre, ou sanitaires défaillants dans un cabaret près de Pigalle.',
      services: [
        'Réparation de fuites d\'eau : robinetterie d\'atelier, WC de cabaret, colonnes d\'immeuble montmartrois, chauffe-eau d\'artiste, canalisations en pente.',
        'Débouchage canalisation : éviers d\'atelier, lavabos de loge, douches d\'artiste, baignoires anciennes, WC de spectacle.',
        'Dépannage WC bouchés et remplacement de mécanismes dans les ateliers d\'artistes et établissements de spectacle.',
        'Intervention artistique avec respect des contraintes créatives et des horaires de spectacle.',
        'Interventions montmartroises : ateliers d\'artistes, cabarets historiques, logements sociaux, commerces multiculturels, sites touristiques du 18e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris pour les espaces alternatifs',
        'Intervention rapide dans tout le 75018',
        'Plombiers adaptés aux contraintes artistiques',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour artistes, particuliers et établissements'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 18e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez à Montmartre, Pigalle, Goutte d\'Or ou rue Lepic.'
        },
        {
          question: '🎨 Intervenez-vous dans les ateliers d\'artistes de Montmartre ?',
          answer: 'Oui, nous avons l\'habitude des ateliers d\'artistes et respectons les contraintes créatives et les œuvres en cours.'
        },
        {
          question: '🚽 Prenez-vous en charge les installations en pente de Montmartre ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 18e et maîtrisent les spécificités des canalisations en pente de la Butte.'
        },
        {
          question: '🌙 Intervenez-vous la nuit dans les cabarets de Pigalle ?',
          answer: 'Oui, notre service est disponible 24h/7j, avec intervention adaptée aux horaires nocturnes des établissements de spectacle.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 18e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, avec des tarifs adaptés aux différents types d\'établissements.'
        },
        {
          question: '🎭 Intervenez-vous aussi dans les cabarets historiques ?',
          answer: 'Oui, nous dépannons régulièrement les cabarets et établissements de spectacle, notamment dans les quartiers de Montmartre et Pigalle.'
        },
        {
          question: '🛠 Gérez-vous les contraintes d\'accès de Montmartre ?',
          answer: 'Oui, nos équipes connaissent parfaitement les accès difficiles de la Butte et s\'adaptent aux contraintes topographiques.'
        },
        {
          question: '🔍 Avez-vous des outils pour les canalisations en pente ?',
          answer: 'Oui, nos équipements s\'adaptent aux spécificités topographiques de Montmartre et aux canalisations en dénivelé.'
        }
      ]
    }
  },
  {
    slug: '19e-arrondissement',
    number: '19e',
    title: 'Plombier Dépannage Paris 19e (75019)',
    description: 'Urgences plomberie 24h/7j dans le 19e arrondissement de Paris. Intervention rapide aux Buttes-Chaumont, Villette et Belleville.',
    quartiers: ['Buttes-Chaumont', 'Villette', 'Belleville', 'Stalingrad'],
    content: {
      intro: 'Le 19e arrondissement de Paris est le quartier verdoyant et culturel du Nord-Est parisien. Entre les Buttes-Chaumont, la Villette, Belleville et Stalingrad, il concentre de nombreux espaces verts, équipements culturels, logements sociaux rénovés, ainsi que des startups et espaces de coworking. Dans ce secteur en pleine transformation urbaine, les problèmes de plomberie touchent des installations mixtes : fuite d\'eau avenue Jean Jaurès, canalisation obstruée dans un logement rénové des Buttes-Chaumont, ou sanitaires défaillants dans un équipement culturel de la Villette.',
      services: [
        'Réparation de fuites d\'eau : robinetterie rénovée, WC écologiques, colonnes d\'immeuble social, chauffe-eau solaires, canalisations mixtes ancien/moderne.',
        'Débouchage canalisation : éviers de coworking, lavabos d\'équipement culturel, douches de logement social, baignoires rénovées, WC collectifs.',
        'Dépannage WC bouchés et remplacement de mécanismes dans les logements sociaux rénovés et équipements publics.',
        'Rénovation urbaine avec adaptation aux projets de transformation et aux nouvelles normes environnementales.',
        'Interventions transformées : logements sociaux rénovés, équipements culturels, espaces de coworking, startups, parcs et jardins du 19e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris pour les équipements culturels',
        'Intervention rapide dans tout le 75019',
        'Plombiers adaptés aux projets de rénovation urbaine',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour particuliers, équipements culturels et startups'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 19e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez aux Buttes-Chaumont, à la Villette, Belleville ou avenue Jean Jaurès.'
        },
        {
          question: '🎪 Intervenez-vous dans les équipements culturels de la Villette ?',
          answer: 'Oui, nous avons l\'expertise des équipements culturels et respectons les contraintes techniques des salles de spectacle et musées.'
        },
        {
          question: '🚽 Prenez-vous en charge les installations rénovées ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 19e et maîtrisent les installations modernes des logements sociaux rénovés.'
        },
        {
          question: '🌙 Intervenez-vous la nuit dans les équipements publics ?',
          answer: 'Oui, notre service est disponible 24h/7j, avec intervention adaptée aux contraintes des équipements culturels et espaces publics.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 19e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, adapté aux différents types d\'installations du quartier.'
        },
        {
          question: '🌳 Intervenez-vous aussi près des parcs et espaces verts ?',
          answer: 'Oui, nous dépannons régulièrement les équipements et logements près des Buttes-Chaumont et des espaces verts du quartier.'
        },
        {
          question: '🛠 Maîtrisez-vous les installations écologiques ?',
          answer: 'Oui, nos plombiers sont formés aux nouvelles technologies écologiques intégrées dans les projets de rénovation urbaine.'
        },
        {
          question: '🔍 Avez-vous des outils pour les installations mixtes ?',
          answer: 'Oui, nos équipements s\'adaptent aux installations mixtes combinant ancien et moderne, typiques des rénovations urbaines.'
        }
      ]
    }
  },
  {
    slug: '20e-arrondissement',
    number: '20e',
    title: 'Plombier Dépannage Paris 20e (75020)',
    description: 'Urgences plomberie 24h/7j dans le 20e arrondissement de Paris. Intervention rapide à Belleville, Ménilmontant et Père Lachaise.',
    quartiers: ['Belleville', 'Ménilmontant', 'Père Lachaise', 'Gambetta'],
    content: {
      intro: 'Le 20e arrondissement de Paris est le quartier alternatif et créatif de l\'Est parisien. Entre Belleville, Ménilmontant, le Père Lachaise et Gambetta, il concentre de nombreux ateliers d\'artistes, bars alternatifs, squats artistiques, ainsi que des logements sociaux et des espaces culturels indépendants. Dans ce secteur bohème et en gentrification, les urgences de plomberie concernent des installations atypiques : fuite d\'eau rue de Belleville, canalisation obstruée dans un atelier de Ménilmontant, ou sanitaires défaillants dans un espace culturel près du Père Lachaise.',
      services: [
        'Réparation de fuites d\'eau : robinetterie d\'atelier, WC alternatifs, colonnes d\'immeuble populaire, chauffe-eau bricolés, canalisations détournées.',
        'Débouchage canalisation : éviers de bar alternatif, lavabos d\'atelier, douches collectives, baignoires récupérées, WC de squat artistique.',
        'Dépannage WC bouchés et remplacement de mécanismes dans les espaces alternatifs et logements atypiques.',
        'Adaptation créative avec solutions sur-mesure pour les installations non-conventionnelles et projets artistiques.',
        'Interventions alternatives : ateliers d\'artistes, bars alternatifs, espaces culturels indépendants, logements atypiques, squats artistiques du 20e arrondissement.'
      ],
      advantages: [
        'Disponibilité 24h/7j, y compris pour les espaces alternatifs',
        'Intervention rapide dans tout le 75020',
        'Plombiers adaptés aux installations atypiques',
        'Tarifs transparents, devis gratuit',
        'Service garanti pour artistes, particuliers et espaces culturels'
      ],
      faq: [
        {
          question: '⏱ Combien de temps faut-il pour une intervention dans le 20e arrondissement ?',
          answer: 'Nos plombiers arrivent généralement en moins de 30 minutes, que vous soyez à Belleville, Ménilmontant, près du Père Lachaise ou rue de Bagnolet.'
        },
        {
          question: '🎨 Intervenez-vous dans les ateliers d\'artistes de Belleville ?',
          answer: 'Oui, nous avons l\'habitude des ateliers d\'artistes et nous adaptons aux installations créatives et aux contraintes budgétaires.'
        },
        {
          question: '🚽 Prenez-vous en charge les installations non-conventionnelles ?',
          answer: 'Oui, nos équipes réalisent le débouchage WC Paris 20e et s\'adaptent aux installations atypiques des espaces alternatifs.'
        },
        {
          question: '🌙 Intervenez-vous la nuit dans les bars alternatifs ?',
          answer: 'Oui, notre service est disponible 24h/7j, avec intervention adaptée aux horaires nocturnes des établissements alternatifs.'
        },
        {
          question: '💶 Quels sont vos tarifs pour un dépannage plomberie Paris 20e ?',
          answer: 'Un devis gratuit et transparent est fourni avant intervention, avec des solutions adaptées aux budgets créatifs.'
        },
        {
          question: '🍺 Intervenez-vous aussi dans les bars et espaces culturels indépendants ?',
          answer: 'Oui, nous dépannons régulièrement les bars alternatifs et espaces culturels, notamment dans les quartiers de Belleville et Ménilmontant.'
        },
        {
          question: '🛠 Proposez-vous des solutions créatives et économiques ?',
          answer: 'Oui, nous adaptons nos solutions aux projets créatifs et proposons des réparations durables respectant l\'esprit alternatif.'
        },
        {
          question: '🔍 Avez-vous des outils pour les installations bricolées ?',
          answer: 'Oui, nos équipements s\'adaptent aux installations atypiques et nous proposons des solutions de mise aux normes respectueuses.'
        }
      ]
    }
  }
];

export const getArrondissementBySlug = (slug: string): ParisArrondissement | undefined => {
  return parisArrondissements.find(arr => arr.slug === slug);
};

export const getAllArrondissementSlugs = (): string[] => {
  return parisArrondissements.map(arr => arr.slug);
};