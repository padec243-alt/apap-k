'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  Heart,
  Palette,
  Award,
  Music,
  Paintbrush,
  Disc,
  Calendar,
  User,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { history } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Timeline } from '@/components/common/timeline';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const bannerImages = [
  // Photos bannière
  '/baniere/DSC00288.JPG',
  '/baniere/DSC00290.JPG',
  '/baniere/DSC00305.JPG',
  '/baniere/DSC00335.JPG',
  '/baniere/DSC00337.JPG',
  '/baniere/DSC00344.JPG',
  '/baniere/DSC00354.JPG',
  '/baniere/DSC00359.JPG',
  '/baniere/DSC00363.JPG',
  '/baniere/DSC00923.JPG',
  '/baniere/DSC00927.JPG',
  '/baniere/DSC00928.JPG',
  '/baniere/DSC00929.JPG',
  '/baniere/DSC00931.JPG',
  '/baniere/DSC00937.JPG',
  '/baniere/DSC00943.JPG',
  '/baniere/DSC00945.JPG',
  // Actions au Kasaï - Projet Eau Bakwa Bowa
  '/activites/projet-eau-bakwa-bowa/70896936_10215673481252027_8021014664102019072_n.jpg',
  '/activites/projet-eau-bakwa-bowa/81014989_10216577119442417_2156204488900214784_n.jpg',
  '/activites/projet-eau-bakwa-bowa/IMG-20180702-WA0006.jpg',
  // Actions au Kasaï - Projet Eau Mpasa
  '/activites/projet-eau-mpasa/IMG_2581.JPG',
  '/activites/projet-eau-mpasa/IMG_2648.JPG',
  '/activites/projet-eau-mpasa/IMG_2775.JPG',
  // Actions au Kasaï - Projet Eau Ngandajika
  '/activites/projet-eau-ngandajika/Prospection__1_.JPG',
  '/activites/projet-eau-ngandajika/Prospection__3_.JPG',
  // Actions au Kasaï - Promotion Femme
  '/activites/promotion-femme/DSCN0134_-_Copie.JPG',
  '/activites/promotion-femme/DSCN0154.JPG',
  '/activites/promotion-femme/DSCN0175.JPG',
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const missionLyonImage = '/activites/festival-ngoma/Ngomo___41_.JPG';
  const missionKasaiImage = '/activites/projet-eau-bakwa-bowa/81014989_10216577119442417_2156204488900214784_n.jpg';
  const festivalNgomaImage = '/activites/festival-ngoma/Ngomo___103_.JPG';


  return (
    <>
      <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
        {bannerImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: currentIndex === index ? 1 : 0,
              x: currentIndex === index ? 0 : -100,
              zIndex: currentIndex === index ? 1 : 0
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <img
              src={image}
              alt={`Bannière ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 z-10" />
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1 
              className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Solidarité et Progrès
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg text-neutral-200 md:text-xl drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ensemble, agissons pour un avenir meilleur au Kasaï et célébrons la culture à Lyon.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild size="lg" className="shadow-lg">
                <Link href="/projets">
                  <Briefcase className="mr-2" /> Nos Projets
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Notre Mission
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              L'APAP-K est une Organisation de Solidarité Internationale issue des Migrations (OSIM)
              basée à Fontaines sur Saône. Notre activité est bipolarisée entre la région lyonnaise
              et le Kasaï en République Démocratique du Congo.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-1/3 relative min-h-[200px] md:min-h-full">
                <img src={missionLyonImage} alt="Mission à Lyon" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="font-headline text-2xl font-semibold text-primary">À Lyon</h3>
                <p className="mt-2 text-muted-foreground">
                  Promouvoir les valeurs culturelles de la R.D. Congo pour créer des liens d'amitié
                  et aboutir à une coopération décentralisée.
                </p>
              </div>
            </Card>
            <Card className="flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-1/3 relative min-h-[200px] md:min-h-full">
                <img src={missionKasaiImage} alt="Mission au Kasaï" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="font-headline text-2xl font-semibold text-primary">Au Kasaï</h3>
                <p className="mt-2 text-muted-foreground">
                  Soutenir le développement rural à travers des projets concrets dans les domaines de
                  l'eau, l'agriculture, l'élevage, la santé et l'éducation.
                </p>
              </div>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/about">
                En savoir plus <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Portrait de notre président
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
               Découvrez le parcours et la vision de notre président, Alain Mulaba Tshilumba, moteur de l'APAP-K.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="shadow-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/gTFq-jVes68?autoplay=0&controls=1"
                    title="Portrait du président"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2">
                   <User className="text-primary" /> Alain Mulaba Tshilumba
                </CardTitle>
                <CardDescription>Président de l'APAP-K</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Projets Phares
            </h2>
          </div>
          <div className="mt-12 grid max-w-6xl mx-auto gap-8 md:grid-cols-2">
            <Card className="shadow-lg flex flex-col">
               <div className="aspect-video relative">
                  <iframe
                    src="https://www.youtube.com/embed/kYAWa40G99g?autoplay=0&controls=1"
                    title="Coopération Décentralisée sur l'Eau"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-xl">
                  <Award className="text-accent" />
                  Coopération Décentralisée sur l'Eau
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Projet lauréat entre la ville de Fontaines-sur-Saône et le territoire de Sangu en RD Congo pour l'accès à l'eau potable.
                </p>
              </CardContent>
            </Card>
             <Card className="shadow-lg flex flex-col">
              <div className="aspect-video relative">
                <img src={festivalNgomaImage} alt="Festival Ngoma" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-xl">
                  <Award className="text-accent" />
                  Festival Ngoma aux Galeries Lafayette
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Projet lauréat mettant en lumière la culture congolaise à travers un festival vibrant organisé aux Galeries Lafayette.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Notre Histoire
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Quelques dates clés de notre parcours depuis la création en 2003.
            </p>
          </div>
          <Timeline items={history} />
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Vie Culturelle & Événements à Lyon
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Découvrez nos activités culturelles qui animent la région lyonnaise.
            </p>
          </div>
          <Tabs defaultValue="music" className="mt-12 mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
              <TabsTrigger value="music">
                <Music className="mr-2" /> Musique
              </TabsTrigger>
              <TabsTrigger value="painting">
                <Paintbrush className="mr-2" /> Peinture
              </TabsTrigger>
              <TabsTrigger value="dance">
                <Disc className="mr-2" /> Danse
              </TabsTrigger>
              <TabsTrigger value="events">
                <Calendar className="mr-2" /> Événements
              </TabsTrigger>
            </TabsList>
            <TabsContent value="music" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Groupe Class L Lissanga</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Créé en 2005, le groupe anime nos manifestations et promeut le métissage
                    culturel. "Lissanga" signifie "union" en lingala.
                  </p>
                  <p>
                    Avec des styles variés (Rumba, World Music, Ndombolo, Reggae...), le groupe a
                    accompagné des artistes de renom comme Papa Wemba. C'est aujourd'hui un concept
                    réunissant de nombreux artistes de la région.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="painting" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Artiste Peintre : Joe Okitawonya</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Membre de l'association, Joe Okitawonya est un peintre et plasticien diplômé de
                    l'Académie des Beaux-Arts de Kinshasa. Surnommé "Poingéïste", il explore le thème
                    de la gente féminine.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="https://www.joeokitawonya.com/" target="_blank" rel="noopener noreferrer">
                      Découvrir son site <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="dance" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Danseur : Terminator 45</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Terminator 45, danseur Afro Urbain et membre de l'APAP-K, anime nos événements
                    et partage sa passion pour la danse dans la région lyonnaise.
                  </p>
                   <Button asChild variant="outline" size="sm">
                    <Link href="https://www.youtube.com/channel/UCiBTtA_y2D_wa1R1mAmuFug" target="_blank" rel="noopener noreferrer">
                      Voir sa chaîne YouTube <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="events" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Nos Événements Marquants</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <h4 className="font-semibold text-foreground">Festival NGOMA</h4>
                  <p>
                    Un festival pour regrouper les artistes d'origine africaine, promouvoir les
                    talents de la région et créer des œuvres inédites avec le public.
                  </p>
                  <h4 className="font-semibold text-foreground">Regards Croisés</h4>
                  <p>
                    Un événement de sensibilisation sur l'accès à l'eau potable, avec des
                    expositions photo pour les écoles et le grand public.
                  </p>
                   <h4 className="font-semibold text-foreground">Conférences & Fête de la Musique</h4>
                  <p>
                    Nous organisons régulièrement des conférences sur des thèmes variés et tenons des stands avec une programmation africaine lors de la Fête de la Musique.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-primary/5 py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Soutenez Nos Actions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Votre don a un impact direct sur la vie des populations au Kasaï et soutient nos actions
            culturelles à Lyon. Chaque contribution compte.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="#">
                <Heart className="mr-2" />
                Faire un don
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
