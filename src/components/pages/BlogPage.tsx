import React, { useEffect, useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: string) => void;
  onRequestQuote: () => void;
}

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'plomberie' | 'chauffage' | 'electricite';
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onRequestQuote }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'plomberie' | 'chauffage' | 'electricite'>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const articles: Article[] = [
    // Articles Plomberie
    {
      id: 'fuite-eau-urgence',
      title: 'Comment réagir face à une fuite d\'eau en urgence ?',
      excerpt: 'Les bons réflexes à adopter en cas de fuite d\'eau importante pour limiter les dégâts.',
      content: `Une fuite d'eau peut rapidement causer des dégâts importants dans votre logement. Voici les étapes essentielles à suivre :

**1. Coupez l'arrivée d'eau principale**
Localisez le compteur d'eau et fermez la vanne d'arrêt. C'est la première action à effectuer pour stopper l'écoulement.

**2. Coupez l'électricité si nécessaire**
Si l'eau s'approche d'installations électriques, coupez le disjoncteur général par sécurité.

**3. Évacuez l'eau stagnante**
Utilisez des seaux, serpillières ou aspirateur à eau pour limiter les infiltrations.

**4. Contactez un plombier d'urgence**
Appelez immédiatement un professionnel pour une réparation durable.

**5. Prévenez votre assurance**
Déclarez le sinistre rapidement pour être indemnisé.

Notre équipe FKR MULTI-SERVICES intervient 24h/7j pour toutes urgences plomberie au 09 88 09 78 55.`,
      category: 'plomberie',
      author: 'Équipe FKR',
      date: '2025-01-20',
      readTime: '3 min',
      tags: ['urgence', 'fuite', 'dégâts des eaux'],
      image: '/fuite.png'
    },
    {
      id: 'deboucher-evier-naturel',
      title: 'Déboucher un évier : méthodes naturelles efficaces',
      excerpt: 'Solutions écologiques et économiques pour déboucher votre évier sans produits chimiques.',
      content: `Votre évier est bouché ? Avant d'utiliser des produits chimiques agressifs, essayez ces méthodes naturelles :

**1. Eau bouillante**
Versez lentement 2-3 litres d'eau bouillante dans l'évacuation. Efficace contre les graisses.

**2. Bicarbonate + Vinaigre blanc**
- Versez 100g de bicarbonate
- Ajoutez 200ml de vinaigre blanc
- Laissez agir 30 minutes
- Rincez à l'eau chaude

**3. Ventouse à évier**
Effectuez des mouvements de va-et-vient énergiques pour déloger le bouchon.

**4. Liquide vaisselle + Eau chaude**
Mélangez du liquide vaisselle avec de l'eau très chaude, laissez agir puis tirez la chasse.

**Quand faire appel à un professionnel ?**
Si le bouchon persiste, il peut s'agir d'un problème plus profond nécessitant l'intervention d'un plombier.`,
      category: 'plomberie',
      author: 'Marc Dubois',
      date: '2025-01-18',
      readTime: '4 min',
      tags: ['débouchage', 'écologique', 'DIY'],
      image: '/bicarbonate.png'
    },
    {
      id: 'choisir-chauffe-eau',
      title: 'Comment choisir le bon chauffe-eau pour votre logement ?',
      excerpt: 'Guide complet pour sélectionner le chauffe-eau adapté à vos besoins et votre budget.',
      content: `Le choix d'un chauffe-eau dépend de plusieurs critères importants :

**1. Capacité selon le nombre d'occupants**
- 1-2 personnes : 50-100L
- 3-4 personnes : 150-200L
- 5+ personnes : 250-300L

**2. Types de chauffe-eau**

**Électrique :**
- Installation simple
- Coût d'achat abordable
- Consommation électrique élevée

**Gaz :**
- Chauffe rapide
- Économique à l'usage
- Nécessite un conduit d'évacuation

**Thermodynamique :**
- Très économique (divise la facture par 3)
- Écologique
- Investissement initial plus élevé

**3. Critères de choix**
- Budget disponible
- Espace d'installation
- Consommation d'eau chaude
- Contraintes techniques

Notre équipe vous conseille gratuitement pour choisir la solution optimale.`,
      category: 'plomberie',
      author: 'Pierre Martin',
      date: '2025-01-15',
      readTime: '5 min',
      tags: ['chauffe-eau', 'installation', 'économies'],
      image: '/azzazs.png'
    },

    // Articles Chauffage
    {
      id: 'entretien-chaudiere-obligatoire',
      title: 'Entretien chaudière : pourquoi est-ce obligatoire ?',
      excerpt: 'Tout savoir sur l\'obligation légale d\'entretien annuel de votre chaudière et ses avantages.',
      content: `L'entretien annuel de votre chaudière est une obligation légale depuis 2009. Voici pourquoi :

**Obligations légales :**

**Décret n°2009-649 :**
- Entretien annuel obligatoire
- Par un professionnel qualifié
- Attestation d'entretien obligatoire
- Amende possible en cas de non-respect

**Avantages de l'entretien :**

**1. Sécurité**
- Détection des fuites de gaz
- Vérification de l'évacuation des fumées
- Contrôle des dispositifs de sécurité

**2. Économies d'énergie**
- Réduction de 8 à 12% de la consommation
- Optimisation du rendement
- Détection des dysfonctionnements

**3. Durée de vie prolongée**
- Prévention des pannes
- Remplacement préventif des pièces usées
- Maintien des performances

Notre équipe certifiée RGE assure l'entretien de tous types de chaudières.`,
      category: 'chauffage',
      author: 'Thomas Bernard',
      date: '2025-01-22',
      readTime: '4 min',
      tags: ['entretien', 'obligation', 'sécurité'],
      image: '/entretient.png'
    },
    {
      id: 'chaudiere-ne-demarre-pas',
      title: 'Ma chaudière ne démarre pas : que faire ?',
      excerpt: 'Diagnostic et solutions pour une chaudière qui refuse de démarrer.',
      content: `Votre chaudière ne démarre pas ? Voici les vérifications à effectuer avant d'appeler un professionnel :

**Vérifications de base :**

**1. Alimentation électrique**
- Vérifiez que la chaudière est sous tension
- Contrôlez les fusibles et disjoncteurs
- Vérifiez l'interrupteur de la chaudière

**2. Pression du circuit**
- La pression doit être entre 1 et 1,5 bar
- Si trop faible, ajoutez de l'eau via le robinet de remplissage
- Si trop élevée, purgez les radiateurs

**3. Thermostat**
- Vérifiez que la température demandée est supérieure à l'ambiante
- Changez les piles si nécessaire
- Testez en mode manuel

**Quand appeler un professionnel ?**
Si ces vérifications ne résolvent pas le problème, contactez un chauffagiste qualifié.`,
      category: 'chauffage',
      author: 'Laurent Petit',
      date: '2025-01-19',
      readTime: '5 min',
      tags: ['panne', 'diagnostic', 'dépannage'],
      image: '/demarrepas.png'
    },

    // Articles Électricité
    {
      id: 'mise-aux-normes-nfc15100',
      title: 'Mise aux normes électriques NF C 15-100 : guide complet',
      excerpt: 'Tout savoir sur la norme électrique NF C 15-100 et les obligations de mise en conformité.',
      content: `La norme NF C 15-100 régit toutes les installations électriques en France :

**Principales exigences :**

**1. Protection des personnes**
- Disjoncteur différentiel 30mA obligatoire
- Mise à la terre de tous les circuits
- Protection contre les surintensités

**2. Nombre de prises minimum**
- Salon : 5 prises minimum
- Chambre : 3 prises minimum
- Cuisine : 6 prises dont 4 sur plan de travail
- Salle de bain : 1 prise près du lavabo

**3. Éclairage**
- 1 point lumineux par pièce minimum
- Interrupteur à l'entrée de chaque pièce
- Éclairage extérieur obligatoire

**Sanctions en cas de non-conformité :**
- Refus de raccordement Enedis
- Problèmes d'assurance
- Danger pour les occupants

Notre équipe certifiée effectue diagnostics et mises en conformité.`,
      category: 'electricite',
      author: 'Alexandre Moreau',
      date: '2025-01-21',
      readTime: '6 min',
      tags: ['normes', 'sécurité', 'conformité'],
      image: '/nfc15100.png'
    },
    {
      id: 'disjoncteur-qui-saute',
      title: 'Disjoncteur qui saute : causes et solutions',
      excerpt: 'Comprendre pourquoi votre disjoncteur se déclenche et comment résoudre le problème.',
      content: `Un disjoncteur qui saute protège votre installation. Voici comment identifier la cause :

**Types de disjoncteurs :**

**1. Disjoncteur général**
Protège toute l'installation contre les surintensités.

**2. Disjoncteur différentiel**
Détecte les fuites de courant vers la terre.

**3. Disjoncteur divisionnaire**
Protège un circuit spécifique.

**Causes principales :**

**Surcharge électrique :**
- Trop d'appareils sur le même circuit
- Puissance totale > capacité du disjoncteur
- Solution : répartir les appareils

**Court-circuit :**
- Contact entre phase et neutre
- Appareil défaillant
- Câblage endommagé

**Quand faire appel à un électricien ?**
Si le problème persiste ou se répète fréquemment.`,
      category: 'electricite',
      author: 'Julien Lefebvre',
      date: '2025-01-17',
      readTime: '5 min',
      tags: ['disjoncteur', 'panne', 'sécurité'],
      image: '/disjoncteur.png'
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les articles', count: articles.length },
    { id: 'plomberie', label: 'Plomberie', count: articles.filter(a => a.category === 'plomberie').length },
    { id: 'chauffage', label: 'Chauffage', count: articles.filter(a => a.category === 'chauffage').length },
    { id: 'electricite', label: 'Électricité', count: articles.filter(a => a.category === 'electricite').length }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'plomberie': 'bg-blue-100 text-blue-800',
      'chauffage': 'bg-red-100 text-red-800',
      'electricite': 'bg-green-100 text-green-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const closeModal = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
  };

  const openModal = (article: Article) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Blog <span className="text-blue-600">MULTISERVICES</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Conseils d'experts, guides pratiques et actualités en plomberie, chauffage et électricité
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as any)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Aucun article trouvé pour votre recherche.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <article
                  key={article.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 delay-${index * 100} hover:scale-105 hover:shadow-xl cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  onClick={() => openModal(article)}
                >
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(article.date).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                      <span>Lire l'article</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedArticle.category)}`}>
                  {selectedArticle.category.charAt(0).toUpperCase() + selectedArticle.category.slice(1)}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedArticle.readTime}
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-6">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {selectedArticle.title}
              </h1>

              <div className="flex items-center justify-between mb-6 pb-6 border-b">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    {selectedArticle.author}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(selectedArticle.date).toLocaleDateString('fr-FR')}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag, idx) => (
                    <span key={idx} className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {selectedArticle.content.split('\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={idx} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                        {paragraph.slice(2, -2)}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('**') && paragraph.includes(':**')) {
                    return (
                      <h4 key={idx} className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                        {paragraph.replace(/\*\*/g, '')}
                      </h4>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={idx} className="text-gray-700 ml-4">
                        {paragraph.slice(2)}
                      </li>
                    );
                  }
                  if (paragraph.trim() === '') {
                    return <br key={idx} />;
                  }
                  return (
                    <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Besoin d'aide ?</h3>
                <p className="text-blue-800 mb-4">
                  Notre équipe MULTISERVICES intervient 24h/7j pour toutes urgences plomberie au 09 88 09 78 55.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:0988097855"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    09 88 09 78 55
                  </a>
                  <button
                    onClick={() => {
                      closeModal();
                      onRequestQuote();
                    }}
                    className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Demander un devis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;