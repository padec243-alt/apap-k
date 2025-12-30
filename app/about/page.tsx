'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Flower, Users, HeartHandshake, Zap, Goal, Calendar, MapPin, Target, Heart, Star, Globe, TrendingUp, Palette, Briefcase } from 'lucide-react';

// Composant pour animer les chiffres
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-4xl font-bold text-primary mb-2">
      {count}{suffix}
    </div>
  );
}

const historyEvents = [
  {
    year: "2003",
    title: "Création de l'association",
    date: "2003",
    description: "Création de l'association à Lyon (loi 1901)."
  },
  {
    year: "2004",
    title: "Expansion au Kasaï",
    date: "2004",
    description: "Création de l'APAP-K ASBL à Mbuji Mayi. Demande d'autorisation d'exercer sur le territoire."
  },
  {
    year: "2005",
    title: "Début des projets",
    date: "2005",
    description: "Création de l'orchestre Class L LISSANGA. Obtention de 300 hectares de terres à MAKASA. Partenariat avec Pharmaciens Sans Frontières."
  },
  {
    year: "2006",
    title: "Lancement à Lyon",
    date: "2006",
    description: "Organisation de la grande journée culturelle du 8 juillet. Membre du comité d'animation du SILYON."
  },
  {
    year: "2007",
    title: "Structuration",
    date: "2007",
    description: "Création du COSIM Rhône Alpes (APAP-K membre du CA). Organisation de plusieurs concerts."
  },
  {
    year: "2008",
    title: "Consolidation au Kasaï",
    date: "2008",
    description: "Mission pour renégocier les contrats des terres. Mission pour renouer le partenariat avec la chefferie."
  },
  {
    year: "2009",
    title: "Planification",
    date: "2009",
    description: "Élaboration de projets et demandes de financement (Agriculture, Eau, Culture)."
  },
  {
    year: "2010",
    title: "Partenariats & Célébration",
    date: "2010",
    description: "Mission pour formaliser des partenariats. Création du collectif Africa 50 (APAP-K membre du comité). Organisation d'une grande manifestation culturelle."
  },
  {
    year: "2011",
    title: "Projets Majeurs",
    date: "2011",
    description: "Lancement du projet Eau et assainissement à NGANDAJIKA. Lancement du projet pilote d'agriculture à MAKASA."
  },
  {
    year: "2012",
    title: "Promotion de la femme",
    date: "2012",
    description: "Lancement du programme pour la promotion de la femme kasaïenne."
  },
  {
    year: "2013",
    title: "10 ans d'actions",
    date: "2013",
    description: "Célébration des 10 ans de l'association avec de nombreuses activités."
  },
  {
    year: "2014",
    title: "Renforcement des capacités",
    date: "2014",
    description: "Formation des membres et renforcement des partenariats locaux."
  },
  {
    year: "2015",
    title: "Festival NGOMA",
    date: "2015",
    description: "Création du mini-festival culturel NGOMA à Lyon pour promouvoir les arts africains."
  },
  {
    year: "2016",
    title: "Développement culturel",
    date: "2016",
    description: "Expansion des activités culturelles et artistiques dans la région lyonnaise."
  },
  {
    year: "2017",
    title: "Nouveaux partenariats",
    date: "2017",
    description: "Établissement de nouveaux partenariats institutionnels en France et au Kasaï."
  },
  {
    year: "2018",
    title: "Coopération décentralisée",
    date: "2018",
    description: "Renforcement de la coopération décentralisée avec Fontaines-sur-Saône."
  },
  {
    year: "2019",
    title: "Reconnaissance",
    date: "2019",
    description: "Remise d'un tableau de Joe Okitawonya au Président de la RDC, Félix Tshisekedi."
  },
  {
    year: "2020",
    title: "Adaptation COVID",
    date: "2020",
    description: "Adaptation des activités face à la pandémie. Maintien du lien avec les communautés."
  },
  {
    year: "2021",
    title: "Lauréat PRAOSIM",
    date: "2021",
    description: "Lauréat du programme d'appui pour le projet d'accès à l'eau à MUPOMPA."
  },
  {
    year: "2022",
    title: "Projet Eau MUPOMPA",
    date: "2022",
    description: "Début du projet à MUPOMPA, bénéficiant à 1200 personnes. Inauguration du forage de Bakwa Bowa."
  },
  {
    year: "2023",
    title: "20 ans d'engagement",
    date: "2023",
    description: "Célébration des 20 ans de l'association. Bilan et perspectives pour l'avenir."
  },
  {
    year: "2024",
    title: "Développement et Partenariats",
    date: "2024",
    description: "Lancement de la campagne 'Eau pour Tous'. Gala de charité et exposition d'art pour le financement des projets."
  },
  {
    year: "2025",
    title: "Expansion des Projets",
    date: "2025",
    description: "Planification de l'expansion des projets agricoles avec de nouvelles coopératives. Recherche de financements pour un nouveau centre de santé communautaire."
  },
  {
    year: "2026",
    title: "Engagement environnemental",
    date: "2026",
    description: "Notre organisation s'engage à lutter contre les déchets, la saleté, les maladies liées à l'insalubrité et bien plus au Kasaï."
  }
];

function HistoryTimeline({ events }: { events: typeof historyEvents }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, events.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % events.length);
  };

  const activeEvent = events[activeIndex];

  return (
    <div 
      className="w-full"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Barre des années */}
      <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
        {events.map((event, idx) => (
          <button
            key={event.year}
            onClick={() => { setIsAutoPlaying(false); setActiveIndex(idx); }}
            className={`px-3 py-2 rounded-full text-sm font-bold transition-all ${
              idx === activeIndex 
                ? 'bg-primary text-primary-foreground shadow-lg scale-110' 
                : 'bg-muted text-muted-foreground hover:bg-primary/20'
            }`}
          >
            {event.year}
          </button>
        ))}
      </div>

      {/* Contenu de l'année sélectionnée */}
      <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 min-h-[200px]">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-primary">{activeEvent.year}</div>
          </div>
          
          <button 
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        <h3 className="text-xl font-headline font-semibold text-center text-foreground mb-4">
          {activeEvent.title}
        </h3>
        
        {activeEvent.description && (
          <p className="text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto">
            {activeEvent.description}
          </p>
        )}
      </div>

      {/* Indicateurs */}
      <div className="flex justify-center gap-2 mt-4">
        {events.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setIsAutoPlaying(false); setActiveIndex(idx); }}
            className={`h-2 rounded-full transition-all ${
              idx === activeIndex 
                ? 'bg-primary w-6' 
                : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Qui sommes-nous ?
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          L'Action pour la Promotion Agropastorale du Kasaï (APAP-K) est une association loi 1901
          créée à Lyon le 10 septembre 2003, avec une représentation légale au Kasaï depuis le 17
          février 2004.
        </p>
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="font-headline text-3xl flex items-center gap-3">
            <Calendar className="h-8 w-8 text-primary" />
            Notre Histoire
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Découvrez les moments clés qui ont façonné l'APAP-K depuis sa création. Cliquez sur une date pour en savoir plus.
          </p>
          
          {/* Timeline slider style */}
          <HistoryTimeline events={historyEvents} />
        </CardContent>
      </Card>

      <div className="mt-16">
        <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Nos Domaines d'Intervention au Kasaï
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-muted-foreground">
          Notre action se concentre sur les besoins essentiels des populations rurales pour
          construire un avenir durable.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="inline-flex rounded-full bg-primary/10 p-3">
              <Droplets className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-lg font-semibold">Eau, Énergie et Assainissement</h3>
            <p className="text-muted-foreground text-sm">
              Lutte contre les maladies d'origine hydrique par la construction de puits et de
              forages pour garantir l'accès à l'eau potable grâce à l'énergie propre.
            </p>
          </div>
          <div className="space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="inline-flex rounded-full bg-primary/10 p-3">
              <Flower className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-lg font-semibold">Agriculture et Élevage</h3>
            <p className="text-muted-foreground text-sm">
              Accompagnement vers l'autosuffisance alimentaire pour lutter contre
              la famine, suite au déclin du secteur minier.
            </p>
          </div>
          <div className="space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="inline-flex rounded-full bg-primary/10 p-3">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-lg font-semibold">Promotion du Genre et de la Jeunesse</h3>
            <p className="text-muted-foreground text-sm">
              Aide à l'autonomisation des femmes et des jeunes pour qu'ils participent activement au
              développement de leur communauté.
            </p>
          </div>
          <div className="space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="inline-flex rounded-full bg-primary/10 p-3">
              <HeartHandshake className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-lg font-semibold">Éducation et Santé</h3>
            <p className="text-muted-foreground text-sm">
              Recherche de partenaires pour construire des écoles et des centres de premiers soins
              dans les zones reculées.
            </p>
          </div>
          <div className="space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="inline-flex rounded-full bg-primary/10 p-3">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-lg font-semibold">ODD - Objectifs de Développement Durable</h3>
            <p className="text-muted-foreground text-sm">
              Contribution aux objectifs de développement durable des Nations Unies pour un avenir meilleur et plus durable pour tous.
            </p>
          </div>
          <div className="space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="inline-flex rounded-full bg-primary/10 p-3">
              <Goal className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-lg font-semibold">Activités Génératrices de Revenus</h3>
            <p className="text-muted-foreground text-sm">
              Encadrement et mobilisation de fonds pour aider les populations à créer des activités
              économiques et à atteindre l'autonomie.
            </p>
          </div>
          <div className="space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="inline-flex rounded-full bg-primary/10 p-3">
              <Palette className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-lg font-semibold">Culture et Interculturalité</h3>
            <p className="text-muted-foreground text-sm">
              Promotion des échanges culturels entre la France et le Kasaï, valorisation du patrimoine congolais et dialogue interculturel.
            </p>
          </div>
          <div className="space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="inline-flex rounded-full bg-primary/10 p-3">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-lg font-semibold">Réseautage</h3>
            <p className="text-muted-foreground text-sm">
              Création et renforcement de partenariats avec les institutions, ONG et acteurs locaux pour maximiser l'impact de nos actions.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Nos Activités Culturelles à Lyon
        </h2>
        <Accordion type="single" collapsible className="mt-8 w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-headline text-xl">Musique</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Notre groupe musical, Class L Lissanga, est au cœur de nos actions culturelles.
              "Lissanga" signifie "union" en Lingala. Le groupe, par son métissage de rythmes et
              de membres, anime nos manifestations et se produit lors de divers événements pour
              partager la richesse de la musique congolaise et du monde (Rumba, World Music,
              Ndombolo, Reggae...).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-headline text-xl">
              Expositions et Conférences
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Nous organisons des journées culturelles avec des expositions d'artistes peintres et
              plasticiens qui représentent l'art congolais. Des conférences sur des thèmes variés
              sont également proposées pour enrichir le dialogue interculturel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-headline text-xl">
              Partenariats et Échanges
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              L'APAP-K se positionne comme un pont entre la région Auvergne-Rhône-Alpes et le
              Kasaï. Nous sommes membres de plusieurs réseaux associatifs comme le FORIM et le COSIM
              Auvergne-Rhône-Alpes pour mutualiser les efforts et partager nos expériences.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Notre Couverture */}
      <div className="mt-16">
        <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl flex items-center justify-center gap-3">
          <MapPin className="h-8 w-8" />
          Notre Couverture
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                En France
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <ul className="space-y-2">
                <li>• Siège social à Fontaines-sur-Saône (69)</li>
                <li>• Actions culturelles dans la région Auvergne-Rhône-Alpes</li>
                <li>• Partenariats avec les collectivités locales</li>
                <li>• Événements à Lyon et ses environs</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-accent/10">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                En RD Congo
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <ul className="space-y-2">
                <li>• Représentation à Mbuji-Mayi (Kasaï-Oriental)</li>
                <li>• Bureau de liaison à Kinshasa</li>
                <li>• Projets dans les territoires ruraux du Grand Kasaï</li>
                <li>• Partenariats avec les chefferies locales</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Nos Objectifs */}
      <div className="mt-16">
        <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl flex items-center justify-center gap-3">
          <Target className="h-8 w-8" />
          Nos Objectifs
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Améliorer l'accès à l'eau potable",
            "Développer l'agriculture durable",
            "Promouvoir l'éducation pour tous",
            "Renforcer les soins de santé",
            "Autonomiser les femmes",
            "Créer des emplois locaux",
            "Préserver l'environnement",
            "Valoriser la culture congolaise"
          ].map((obj, idx) => (
            <div key={idx} className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2 font-bold text-sm">
                {idx + 1}
              </div>
              <p className="text-sm text-muted-foreground">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nos Missions */}
      <div className="mt-16">
        <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl flex items-center justify-center gap-3">
          <Briefcase className="h-8 w-8" />
          Nos Missions
        </h2>
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
              <h3 className="font-headline text-lg font-semibold mb-3">Mission Humanitaire</h3>
              <p className="text-muted-foreground text-sm">
                Apporter une aide concrète aux populations vulnérables du Kasaï à travers des projets d'accès à l'eau, de santé, d'éducation et de sécurité alimentaire.
              </p>
            </div>
            <div className="bg-accent/10 rounded-xl p-6 border-l-4 border-accent">
              <h3 className="font-headline text-lg font-semibold mb-3">Mission Culturelle</h3>
              <p className="text-muted-foreground text-sm">
                Promouvoir et valoriser la culture congolaise en France à travers des événements artistiques, musicaux et des échanges interculturels.
              </p>
            </div>
            <div className="bg-accent/10 rounded-xl p-6 border-l-4 border-accent">
              <h3 className="font-headline text-lg font-semibold mb-3">Mission de Développement</h3>
              <p className="text-muted-foreground text-sm">
                Accompagner les communautés rurales vers l'autonomie économique par la formation, le soutien aux activités génératrices de revenus et l'agriculture durable.
              </p>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
              <h3 className="font-headline text-lg font-semibold mb-3">Mission de Coopération</h3>
              <p className="text-muted-foreground text-sm">
                Créer des ponts entre la France et la RD Congo à travers des partenariats institutionnels et des projets de coopération décentralisée.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nos Valeurs */}
      <div className="mt-16">
        <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl flex items-center justify-center gap-3">
          <Heart className="h-8 w-8" />
          Nos Valeurs
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-3">
              <Heart className="h-10 w-10" />
            </div>
            <p className="font-semibold text-lg">Solidarité</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-3">
              <Target className="h-10 w-10" />
            </div>
            <p className="font-semibold text-lg">Engagement</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-10 w-10" />
            </div>
            <p className="font-semibold text-lg">Efficacité</p>
          </div>
        </div>
      </div>

      {/* Notre Rôle */}
      <div className="mt-16">
        <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl flex items-center justify-center gap-3">
          <Star className="h-8 w-8" />
          Notre Rôle
        </h2>
        <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-headline text-lg font-semibold text-primary mb-2">Facilitateur</h3>
              <p className="text-muted-foreground text-sm">
                Nous facilitons les échanges entre les communautés du Kasaï et les partenaires en France.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold text-primary mb-2">Médiateur</h3>
              <p className="text-muted-foreground text-sm">
                Nous servons de pont culturel et institutionnel entre deux continents.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold text-primary mb-2">Acteur de terrain</h3>
              <p className="text-muted-foreground text-sm">
                Nous mettons en œuvre des projets concrets avec les populations locales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Notre Impact */}
      <div className="mt-16">
        <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl flex items-center justify-center gap-3">
          <TrendingUp className="h-8 w-8" />
          Notre Impact
        </h2>
        
        {/* Impact en France */}
        <div className="mt-8">
          <h3 className="font-headline text-xl font-semibold text-center mb-4 flex items-center justify-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            En France
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center bg-primary/5 border rounded-xl p-5 hover:shadow-lg transition-shadow">
              <AnimatedCounter target={20} suffix="+" />
              <p className="text-sm text-muted-foreground">Années d'engagement</p>
            </div>
            <div className="text-center bg-primary/5 border rounded-xl p-5 hover:shadow-lg transition-shadow">
              <AnimatedCounter target={100} suffix="+" />
              <p className="text-sm text-muted-foreground">Événements culturels</p>
            </div>
            <div className="text-center bg-primary/5 border rounded-xl p-5 hover:shadow-lg transition-shadow">
              <AnimatedCounter target={30} suffix="+" />
              <p className="text-sm text-muted-foreground">Partenaires français</p>
            </div>
            <div className="text-center bg-primary/5 border rounded-xl p-5 hover:shadow-lg transition-shadow">
              <AnimatedCounter target={5000} suffix="+" />
              <p className="text-sm text-muted-foreground">Participants aux événements</p>
            </div>
          </div>
        </div>

        {/* Impact au Kasaï */}
        <div className="mt-8">
          <h3 className="font-headline text-xl font-semibold text-center mb-4 flex items-center justify-center gap-2">
            <Globe className="h-5 w-5 text-accent" />
            Au Kasaï
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center bg-accent/10 border rounded-xl p-5 hover:shadow-lg transition-shadow">
              <AnimatedCounter target={50000} suffix="+" />
              <p className="text-sm text-muted-foreground">Bénéficiaires directs</p>
            </div>
            <div className="text-center bg-accent/10 border rounded-xl p-5 hover:shadow-lg transition-shadow">
              <AnimatedCounter target={15} suffix="+" />
              <p className="text-sm text-muted-foreground">Projets réalisés</p>
            </div>
            <div className="text-center bg-accent/10 border rounded-xl p-5 hover:shadow-lg transition-shadow">
              <AnimatedCounter target={20} suffix="+" />
              <p className="text-sm text-muted-foreground">Partenaires locaux</p>
            </div>
            <div className="text-center bg-accent/10 border rounded-xl p-5 hover:shadow-lg transition-shadow">
              <AnimatedCounter target={300} suffix=" ha" />
              <p className="text-sm text-muted-foreground">Terres agricoles</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions Socio-Culturelles */}
      <div className="mt-16">
        <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl flex items-center justify-center gap-3">
          <Palette className="h-8 w-8" />
          Actions Socio-Culturelles
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-lg">Festival NGOMA</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Mini-festival culturel annuel à Lyon regroupant artistes, musiciens et danseurs pour célébrer la culture africaine et congolaise.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-lg">Regards Croisés</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Expositions photographiques de sensibilisation sur l'accès à l'eau potable, présentées dans les écoles et lieux publics.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-lg">Concerts Class L Lissanga</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Performances musicales mêlant Rumba, World Music et Ndombolo pour promouvoir le métissage culturel.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-lg">Journées Culturelles</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Événements annuels avec expositions d'art, conférences et animations pour faire découvrir la richesse culturelle congolaise.
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Actions Socio-Économiques */}
      <div className="mt-16">
        <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl flex items-center justify-center gap-3">
          <Briefcase className="h-8 w-8" />
          Actions Socio-Économiques
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="font-headline text-lg flex items-center gap-2">
                <Droplets className="h-5 w-5 text-primary" />
                Projets Eau
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Construction de forages et puits pour garantir l'accès à l'eau potable. Projet MUPOMPA bénéficiant à 1200 personnes.
            </CardContent>
          </Card>
          <Card className="bg-accent/10">
            <CardHeader>
              <CardTitle className="font-headline text-lg flex items-center gap-2">
                <Flower className="h-5 w-5 text-primary" />
                Agriculture
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Exploitation de 300 hectares à MAKASA. Formation aux techniques agricoles durables et création de coopératives.
            </CardContent>
          </Card>
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="font-headline text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Autonomisation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Programme de promotion de la femme kasaïenne. Soutien aux activités génératrices de revenus et microfinance.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
