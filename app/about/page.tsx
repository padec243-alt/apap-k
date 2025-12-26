import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Flower, Users, HeartHandshake, Zap, Goal } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
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
          <CardTitle className="font-headline text-3xl">Notre Histoire</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Basée à Fontaines-sur-Saône, notre association œuvre pour le développement des milieux
            ruraux du Grand Kasaï en RD Congo, une région où tout est à construire. Notre motivation
            est soutenue par un engagement profond à aider des populations qui manquent de tout.
          </p>
          <p>
            Au fil des années, l'APAP-K a tissé un réseau important tant dans le milieu officiel que
            dans la société civile, avec des relations étroites avec les chefs coutumiers et les
            populations locales.
          </p>
          <p>
            Parallèlement, à Lyon, nous menons des actions pour la promotion des valeurs culturelles
            de la RD Congo, favorisant l'échange et l'amitié entre les peuples, ce qui a abouti à une
            coopération décentralisée avec la ville de Fontaines-sur-Saône.
          </p>
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
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="inline-flex rounded-full bg-primary/10 p-3">
              <Droplets className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-xl font-semibold">Eau et Assainissement</h3>
            <p className="text-muted-foreground">
              Lutte contre les maladies d'origine hydrique par la construction de puits et de
              forages pour garantir l'accès à l'eau potable.
            </p>
          </div>
          <div className="space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="inline-flex rounded-full bg-primary/10 p-3">
              <Flower className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-xl font-semibold">Agriculture et Élevage</h3>
            <p className="text-muted-foreground">
              Accompagnement vers l'autosuffisance alimentaire pour lutter contre
              la famine, suite au déclin du secteur minier.
            </p>
          </div>
          <div className="space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="inline-flex rounded-full bg-primary/10 p-3">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-xl font-semibold">Promotion du Genre</h3>
            <p className="text-muted-foreground">
              Aide à l'autonomisation des femmes pour qu'elles participent activement au
              développement de leur communauté.
            </p>
          </div>
          <div className="space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="inline-flex rounded-full bg-primary/10 p-3">
              <HeartHandshake className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-xl font-semibold">Éducation et Santé</h3>
            <p className="text-muted-foreground">
              Recherche de partenaires pour construire des écoles et des centres de premiers soins
              dans les zones reculées.
            </p>
          </div>
          <div className="space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="inline-flex rounded-full bg-primary/10 p-3">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-xl font-semibold">Énergies Propres</h3>
            <p className="text-muted-foreground">
              Promotion des énergies renouvelables pour lutter contre le réchauffement climatique
              et améliorer les conditions de vie.
            </p>
          </div>
          <div className="space-y-3 rounded-lg border bg-card p-6 text-center shadow-sm">
            <div className="inline-flex rounded-full bg-primary/10 p-3">
              <Goal className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-xl font-semibold">Activités Génératrices de Revenus</h3>
            <p className="text-muted-foreground">
              Encadrement et mobilisation de fonds pour aider les populations à créer des activités
              économiques et à atteindre l'autonomie.
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
    </div>
  );
}
