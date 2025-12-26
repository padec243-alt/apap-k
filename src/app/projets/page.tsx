'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Share2, MapPin, Filter, Music, Droplets, Sun, Heart, Stethoscope, Users, Calendar, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// DONNÉES LYON
const lyonData = [
  {
    id: 'lyon-1',
    title: "Festival NGOMA",
    description: "Festival culturel annuel célébrant la musique et la danse africaine à Lyon. Un rendez-vous incontournable pour découvrir les traditions congolaises.",
    category: "Culture",
    type: "activite",
    location: "Lyon, France",
    images: [
      "/activites/festival-ngoma/Ngomo___41_.JPG",
      "/activites/festival-ngoma/Ngomo___103_.JPG",
      "/activites/festival-ngoma/Ngomo___106_.JPG",
      "/activites/festival-ngoma/Ngomo___108_.JPG",
      "/activites/festival-ngoma/Ngomo___122_.JPG",
    ],
  },
  {
    id: 'lyon-2',
    title: "Concerts Class L Lissanga",
    description: "Groupe musical métissé créé en 2005. Styles variés : rumba congolaise, world music, ndombolo, reggae. Le groupe a accompagné Papa Wemba en 2008.",
    category: "Culture",
    type: "activite",
    location: "Lyon, France",
    images: [
      "/activites/concerts-lissanga/IMG_7994.jpg",
      "/activites/concerts-lissanga/IMG_8013.jpg",
      "/activites/concerts-lissanga/DSCF0021.JPG",
    ],
  },
  {
    id: 'lyon-3',
    title: "Journées Culturelles",
    description: "Organisation de journées culturelles avec animations variées : expositions, concerts, conférences-débats, défilés de mode dans des lieux variés (écoles, hôpitaux, salles de spectacle).",
    category: "Culture",
    type: "activite",
    location: "Lyon & Région",
    images: [
      "/activites/fontaines-sur-saone/DSC00288.JPG",
      "/activites/fontaines-sur-saone/DSC00290.JPG",
      "/activites/fontaines-sur-saone/DSC00305.JPG",
      "/activites/fontaines-sur-saone/DSC00335.JPG",
    ],
  },
  {
    id: 'lyon-4',
    title: "Partenariat COSIM",
    description: "Membre actif du COSIM Rhône-Alpes pour partager nos expériences et mutualiser les efforts afin de trouver des financements pour nos projets.",
    category: "Partenariat",
    type: "activite",
    location: "Lyon, France",
    images: [
      "/activites/cosim/IMG_0981.JPG",
      "/activites/cosim/IMG_0989.JPG",
      "/activites/cosim/CAPITALISATION_PROJET_EAU.jpg",
    ],
  },
  {
    id: 'lyon-5',
    title: "Équipe APAP-K France",
    description: "Notre équipe de bénévoles et membres actifs en France, composée de professionnels et amateurs engagés pour le développement du Kasaï.",
    category: "Équipe",
    type: "activite",
    location: "France",
    images: [
      "/activites/equipe-france/255161592_929852927955431_7690408250152233844_n__2_.jpg",
      "/activites/equipe-france/274495524_999277264346330_3396681154913004412_n.jpg",
    ],
  },
  {
    id: 'lyon-6',
    title: "Projet Frame Voice Report",
    description: "Sensibilisation sur le réchauffement climatique par conférences, publications et clip musical. Partenariat avec l'Université Lyon 3 et l'école de Fontaines-sur-Saône. Financé par l'Union Européenne via RESACOOP.",
    category: "Environnement",
    type: "projet",
    location: "Lyon & RDC",
    images: [
      "/activites/projet-odd/DSC00823.JPG",
      "/activites/projet-odd/DSC00824.JPG",
      "/activites/projet-odd/DSC00828.JPG",
    ],
  },
  {
    id: 'lyon-7',
    title: "Regards Croisés",
    description: "Événement d'échange interculturel permettant de croiser les regards entre la France et la RD Congo à travers l'art et la culture.",
    category: "Culture",
    type: "activite",
    location: "Lyon, France",
    images: [
      "/activites/fontaines-sur-saone/DSC00923.JPG",
      "/activites/fontaines-sur-saone/DSC00927.JPG",
    ],
  },
  {
    id: 'lyon-8',
    title: "Activités Périscolaires",
    description: "Interventions dans les écoles pour sensibiliser les jeunes à la culture congolaise et à la solidarité internationale.",
    category: "Jeunesse",
    type: "activite",
    location: "Fontaines-sur-Saône",
    images: [
      "/activites/fontaines-sur-saone/DSC00337.JPG",
      "/activites/fontaines-sur-saone/DSC00344.JPG",
    ],
  },
  {
    id: 'lyon-9',
    title: "Expositions & Conférences",
    description: "Organisation d'expositions d'art africain et de conférences-débats sur des thématiques liées au développement et à la culture.",
    category: "Culture",
    type: "activite",
    location: "Lyon, France",
    images: [
      "/activites/projet-odd/DSC00830.JPG",
      "/activites/projet-odd/DSC00842.JPG",
    ],
  },
];

// DONNÉES RD CONGO
const rdcData = [
  {
    id: 'rdc-1',
    title: "Projet Eau à Bakwa Bowa",
    description: "Le plus grand projet de l'APAP-K. Forage de 100m, château d'eau de 50m³, réseau de 4km avec 8 bornes fontaines. Bénéficie à 7500 personnes. Coopération décentralisée avec Fontaines-sur-Saône via la loi Oudin-Santini.",
    category: "Eau",
    type: "projet",
    location: "Bakwa Bowa, Kasaï Oriental",
    images: [
      "/activites/projet-eau-bakwa-bowa/81014989_10216577119442417_2156204488900214784_n.jpg",
      "/activites/projet-eau-bakwa-bowa/70896936_10215673481252027_8021014664102019072_n.jpg",
      "/activites/projet-eau-bakwa-bowa/81038688_10216577122602496_982262817346289664_n.jpg",
      "/activites/projet-eau-bakwa-bowa/IMG-20180630-WA0000.jpg",
    ],
  },
  {
    id: 'rdc-2',
    title: "Projet Eau à Mpasa",
    description: "Forage de 110m, château d'eau de 20m³ et réseau de 2 bornes fontaines distantes de 500m. Bénéficie à 2000 personnes. Financé par la Ville de Paris, cofinancé par la Fondation Denise Nyakeru Tshisekedi.",
    category: "Eau",
    type: "projet",
    location: "Mpasa, Kinshasa",
    images: [
      "/activites/projet-eau-mpasa/IMG_2648.JPG",
      "/activites/projet-eau-mpasa/IMG_2581.JPG",
      "/activites/projet-eau-mpasa/IMG_2583.JPG",
      "/activites/projet-eau-mpasa/IMG_2634.JPG",
    ],
  },
  {
    id: 'rdc-3',
    title: "Projet Eau à Mpasa 2",
    description: "Modèle dupliqué : forage avec château d'eau de 20m³ et réseau de 2 bornes fontaines. Formation d'un comité de gestion. 1500 bénéficiaires. Financé par la Métropole de Lyon (FSDD).",
    category: "Eau",
    type: "projet",
    location: "Mpasa 2, Kinshasa",
    images: [
      "/activites/projet-eau-mpasa/IMG_2681.JPG",
      "/activites/projet-eau-mpasa/IMG_2775.JPG",
      "/activites/projet-eau-mpasa/IMG_2776.JPG",
    ],
  },
  {
    id: 'rdc-4',
    title: "Projet Eau à Ngandajika",
    description: "Puits rural moderne avec pompe manuelle pour 300 personnes + blocs sanitaires (douche, WC, lessive) pour 20 familles. Formation des villageois pour l'entretien. Projet 2011-2013.",
    category: "Eau",
    type: "projet",
    location: "Ngandajika, Kasaï Oriental",
    images: [
      "/activites/projet-eau-ngandajika/Prospection__1_.JPG",
      "/activites/projet-eau-ngandajika/Prospection__2_.JPG",
      "/activites/projet-eau-ngandajika/Prospection__3_.JPG",
    ],
  },
  {
    id: 'rdc-5',
    title: "Centrale Solaire Mbujimayi",
    description: "Centrale solaire de 3000W alimentant un centre médical, un bureau informatique et une épicerie-restaurant. Financé par le FORIM via PRAOSIM 2016. Système hybride solaire + groupe électrogène.",
    category: "Énergie",
    type: "projet",
    location: "Mbujimayi, Kasaï Oriental",
    images: [
      "/activites/projet-solaire-mbujimayi/IMG_3425.JPG",
      "/activites/projet-solaire-mbujimayi/IMG_Praosim2016_site_1.jpg",
      "/activites/projet-solaire-mbujimayi/IMG_site_2.jpg",
    ],
  },
  {
    id: 'rdc-6',
    title: "Promotion de la Femme Kasaïenne",
    description: "Campagne d'information et formation pour 3 millions de femmes. Tournée de sensibilisation (santé, sexualité, droits, économie). Partenariat avec le Ministère des Affaires Étrangères et le Ministère du Genre. 2012-2014.",
    category: "Social",
    type: "projet",
    location: "Kasaï Oriental",
    images: [
      "/activites/promotion-femme/DSCN0134_-_Copie.JPG",
      "/activites/promotion-femme/DSCN0143_-_Copie.JPG",
      "/activites/promotion-femme/DSCN0154.JPG",
      "/activites/promotion-femme/DSCN0166.JPG",
    ],
  },
  {
    id: 'rdc-7',
    title: "Un Revenu pour la Femme Kasaïenne",
    description: "Installation de moulins à céréales dans 4 sites (Ngandajika, Makasa, Bimpemba, Bakwa Bowa) pour donner du travail aux femmes. Financé par PRAOSIM 2018 et Région Auvergne-Rhône-Alpes.",
    category: "Social",
    type: "projet",
    location: "Kasaï Oriental",
    images: [
      "/activites/promotion-femme/DSCN0175.JPG",
      "/activites/promotion-femme/DSCN0575.JPG",
      "/activites/promotion-femme/DSCN0578.JPG",
    ],
  },
  {
    id: 'rdc-8',
    title: "Centre Dentaire Kinshasa",
    description: "Mobilisation d'équipements médicaux sophistiqués via Humatem France pour le centre médical Le Bon Berger à Mbuji-Mayi. Élévation du niveau de soins dentaires.",
    category: "Santé",
    type: "projet",
    location: "Kinshasa & Mbuji-Mayi",
    images: [
      "/activites/centre-dentaire-kinshasa/IMG_1175.JPG",
      "/activites/centre-dentaire-kinshasa/IMG_1180.JPG",
      "/activites/centre-dentaire-kinshasa/IMG_1183.JPG",
    ],
  },
  {
    id: 'rdc-9',
    title: "Agriculture Pilote à Makasa",
    description: "Mise en culture de 3 hectares de maïs pour lutter contre la famine. Formation aux techniques agricoles respectueuses de l'environnement. 120 bénéficiaires directs. Financé par la Région Rhône-Alpes via COSIM. 2011-2013.",
    category: "Agriculture",
    type: "projet",
    location: "Makasa, Kasaï Oriental",
    images: [
      "/activites/missions/Prospection__1_.JPG",
      "/activites/missions/Prospection__3_.JPG",
    ],
  },
  {
    id: 'rdc-10',
    title: "Équipe APAP-K Mbuji-Mayi",
    description: "Équipe technique de 10 personnes avec compétences diverses pour mener les projets sur le terrain. Encadrement et sensibilisation des populations locales.",
    category: "Équipe",
    type: "activite",
    location: "Mbuji-Mayi, RDC",
    images: [
      "/activites/equipe-mbujimayi/DSCN0117.JPG",
      "/activites/equipe-mbujimayi/IMG-20180718-WA0000.jpg",
      "/activites/equipe-mbujimayi/IMG-20180718-WA0001.jpg",
      "/activites/equipe-mbujimayi/ONFD6224.JPG",
    ],
  },
  {
    id: 'rdc-11',
    title: "Développement Rural Makasa-Bondo",
    description: "Concession de 480 hectares entre les villages Makasa et Bondo. Encadrement des populations pour lutter contre la famine. Objectif : 8000 bénéficiaires.",
    category: "Développement",
    type: "activite",
    location: "Makasa-Bondo, Kasaï",
    images: [
      "/activites/projet-odd/DSC00852.JPG",
      "/activites/projet-odd/IMG_0071.jpg",
      "/activites/projet-odd/IMG_0073.jpg",
    ],
  },
];

const categoryIcons: Record<string, any> = {
  "Culture": Music,
  "Eau": Droplets,
  "Énergie": Sun,
  "Social": Heart,
  "Santé": Stethoscope,
  "Équipe": Users,
  "Partenariat": Users,
  "Environnement": Globe,
  "Jeunesse": Users,
  "Agriculture": Globe,
  "Développement": Globe,
};

const categoryColors: Record<string, string> = {
  "Culture": "bg-purple-500",
  "Eau": "bg-blue-500",
  "Énergie": "bg-amber-500",
  "Social": "bg-rose-500",
  "Santé": "bg-green-500",
  "Équipe": "bg-indigo-500",
  "Partenariat": "bg-teal-500",
  "Environnement": "bg-emerald-500",
  "Jeunesse": "bg-pink-500",
  "Agriculture": "bg-lime-600",
  "Développement": "bg-cyan-500",
};

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length, isAutoPlaying]);

  return (
    <div 
      className="relative w-full overflow-hidden bg-gray-200 dark:bg-gray-800"
      style={{ aspectRatio: '4/3' }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <img 
        src={images[current]} 
        alt={`${title} - ${current + 1}`} 
        className="w-full h-full object-cover"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <ChevronLeft className="h-4 w-4 text-gray-800" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <ChevronRight className="h-4 w-4 text-gray-800" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === current ? 'bg-white w-6' : 'bg-white/50 w-1.5'
                }`}
              />
            ))}
          </div>

          <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 rounded-full text-white text-xs font-medium">
            {current + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ item }: { item: typeof lyonData[0] }) {
  const Icon = categoryIcons[item.category] || Globe;
  const colorClass = categoryColors[item.category] || "bg-gray-500";

  const handleShare = async () => {
    const shareData = {
      title: item.title,
      text: item.description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copier le lien
        await navigator.clipboard.writeText(window.location.href);
        alert('Lien copié !');
      }
    } catch (err) {
      console.log('Partage annulé');
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <ImageCarousel images={item.images} title={item.title} />
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className={`${colorClass} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1`}>
            <Icon className="h-3 w-3" />
            {item.category}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            item.type === 'projet' 
              ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' 
              : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
          }`}>
            {item.type === 'projet' ? 'Projet' : 'Activité'}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {item.title}
        </h3>

        <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
          <MapPin className="h-4 w-4" />
          <span>{item.location}</span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
          {item.description}
        </p>

        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <span className="text-xs text-gray-400">{item.images.length} photos</span>
          <button 
            onClick={handleShare}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            title="Partager"
          >
            <Share2 className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function Section({ title, subtitle, data, gradient }: { 
  title: string; 
  subtitle: string; 
  data: typeof lyonData;
  gradient: string;
}) {
  const [filter, setFilter] = useState<'all' | 'projet' | 'activite'>('all');
  
  const filteredData = data.filter(item => 
    filter === 'all' ? true : item.type === filter
  );

  const projectCount = data.filter(d => d.type === 'projet').length;
  const activityCount = data.filter(d => d.type === 'activite').length;

  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 mb-8 shadow-lg border border-gray-100 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-2 text-green-600">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{subtitle}</p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'all' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Tout ({data.length})
          </button>
          <button
            onClick={() => setFilter('projet')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'projet' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Projets ({projectCount})
          </button>
          <button
            onClick={() => setFilter('activite')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'activite' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Activités ({activityCount})
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredData.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<'lyon' | 'rdc'>('lyon');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero */}
      <div className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/2KK.png')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Nos Projets & Activités
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 max-w-2xl mx-auto"
          >
            Découvrez nos actions à Lyon et en RD Congo : culture, développement, solidarité.
          </motion.p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex">
            <button
              onClick={() => setActiveTab('lyon')}
              className={`flex-1 py-4 text-center font-semibold transition-all relative ${
                activeTab === 'lyon' 
                  ? 'text-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              🇫🇷 À Lyon
              {activeTab === 'lyon' && (
                <motion.div 
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('rdc')}
              className={`flex-1 py-4 text-center font-semibold transition-all relative ${
                activeTab === 'rdc' 
                  ? 'text-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              🇨🇩 En RD Congo
              {activeTab === 'rdc' && (
                <motion.div 
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          {activeTab === 'lyon' ? (
            <motion.div
              key="lyon"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <Section 
                title="À Lyon" 
                subtitle="Promotion culturelle, événements et recherche de financements pour nos projets solidaires."
                data={lyonData}
                gradient="bg-gradient-to-r from-blue-600 to-indigo-600"
              />
            </motion.div>
          ) : (
            <motion.div
              key="rdc"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Section 
                title="En RD Congo" 
                subtitle="Développement rural, accès à l'eau, énergie solaire et promotion de la femme au Kasaï Oriental."
                data={rdcData}
                gradient="bg-gradient-to-r from-green-600 to-emerald-600"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
