'use client';

import { Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const actualites = [
  {
    id: 1,
    title: "Lancement du projet d'accès à l'eau potable à Sangu",
    date: "15 Décembre 2024",
    excerpt: "APAP-K lance officiellement son projet phare de coopération décentralisée entre Fontaines-sur-Saône et le territoire de Sangu en RD Congo.",
    image: "https://res.cloudinary.com/dy73hzkpm/image/upload/v1749595200/apap-k/eau-potable-sangu.jpg",
    category: "Projets"
  },
  {
    id: 2,
    title: "Partenariat renforcé avec la Métropole de Lyon",
    date: "28 Novembre 2024",
    excerpt: "Un nouveau partenariat stratégique avec la Métropole de Lyon pour soutenir nos actions de développement au Kasaï.",
    image: "https://res.cloudinary.com/dy73hzkpm/image/upload/v1749595200/apap-k/partenariat-lyon.jpg",
    category: "Partenariats"
  },
  {
    id: 3,
    title: "Formation agricole pour 50 familles au Kasaï",
    date: "10 Novembre 2024",
    excerpt: "Notre programme de formation agricole a permis à 50 familles de développer des techniques durables de culture.",
    image: "https://res.cloudinary.com/dy73hzkpm/image/upload/v1749595200/apap-k/formation-agricole.jpg",
    category: "Formation"
  },
  {
    id: 4,
    title: "Inauguration du centre de santé de Tshikapa",
    date: "25 Octobre 2024",
    excerpt: "Le nouveau centre de santé communautaire de Tshikapa est désormais opérationnel, offrant des soins de qualité à plus de 5000 habitants.",
    image: "https://res.cloudinary.com/dy73hzkpm/image/upload/v1749595200/apap-k/centre-sante.jpg",
    category: "Santé"
  },
  {
    id: 5,
    title: "Assemblée générale annuelle 2024",
    date: "15 Septembre 2024",
    excerpt: "Retour sur notre assemblée générale annuelle qui a réuni nos membres et partenaires pour dresser le bilan de l'année.",
    image: "https://res.cloudinary.com/dy73hzkpm/image/upload/v1749595200/apap-k/assemblee-generale.jpg",
    category: "Événements"
  },
  {
    id: 6,
    title: "Distribution de fournitures scolaires",
    date: "1 Septembre 2024",
    excerpt: "Plus de 500 enfants ont reçu des fournitures scolaires pour la rentrée grâce à la générosité de nos donateurs.",
    image: "https://res.cloudinary.com/dy73hzkpm/image/upload/v1749595200/apap-k/fournitures-scolaires.jpg",
    category: "Éducation"
  }
];

export default function ActualitesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-primary mb-4">
              Actualités
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Suivez nos dernières nouvelles, événements et avancées de nos projets au Kasaï et en France.
            </p>
          </div>
        </div>
      </section>

      {/* Actualités Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {actualites.map((actu) => (
              <Card key={actu.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="relative h-48 sm:h-56 bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      {actu.category}
                    </span>
                  </div>
                  <Image
                    src={actu.image}
                    alt={actu.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://res.cloudinary.com/dy73hzkpm/image/upload/v1749595200/apap-k/placeholder.jpg';
                    }}
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{actu.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold line-clamp-2 hover:text-primary transition-colors">
                    {actu.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {actu.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Lire la suite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-primary mb-4">
              Restez informé
            </h2>
            <p className="text-muted-foreground mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
