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
import { motion, AnimatePresence } from 'framer-motion';

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

const bannerSlides = [
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763710/apap-k/baniere/DSC00288.jpg',
    title: 'Solidarité et Progrès',
    description: 'Ensemble, agissons pour un avenir meilleur au Kasaï et célébrons la culture à Lyon.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763719/apap-k/baniere/DSC00290.jpg',
    title: 'Culture Congolaise',
    description: 'Promouvoir les valeurs culturelles de la R.D. Congo à travers nos événements.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763734/apap-k/baniere/DSC00305.jpg',
    title: 'Développement Rural',
    description: 'Soutenir le développement durable au Kasaï Oriental.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763742/apap-k/baniere/DSC00335.jpg',
    title: 'Accès à l\'Eau',
    description: 'Nos projets d\'eau potable transforment les communautés.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763756/apap-k/baniere/DSC00337.jpg',
    title: 'Jeunesse & Éducation',
    description: 'Investir dans l\'avenir des jeunes générations.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763769/apap-k/baniere/DSC00344.jpg',
    title: 'Événements Culturels',
    description: 'Festival NGOMA et Regards Croisés animent la région.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763779/apap-k/baniere/DSC00354.jpg',
    title: 'Coopération Décentralisée',
    description: 'Partenariat entre Fontaines-sur-Saône et le Kasaï.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763790/apap-k/baniere/DSC00359.jpg',
    title: 'Promotion de la Femme',
    description: 'Autonomisation économique et sociale des femmes kasaïennes.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763800/apap-k/baniere/DSC00363.jpg',
    title: 'Énergie Solaire',
    description: 'Centrale solaire pour l\'accès à l\'électricité.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763806/apap-k/baniere/DSC00923.jpg',
    title: 'Échanges Interculturels',
    description: 'Créer des ponts entre la France et la R.D. Congo.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763815/apap-k/baniere/DSC00927.jpg',
    title: 'Musique & Danse',
    description: 'Groupe Class L Lissanga et artistes locaux.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763823/apap-k/baniere/DSC00928.jpg',
    title: 'Agriculture Durable',
    description: 'Projets agricoles pour lutter contre la famine.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763829/apap-k/baniere/DSC00929.jpg',
    title: 'Santé & Bien-être',
    description: 'Améliorer l\'accès aux services de santé.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763841/apap-k/baniere/DSC00931.jpg',
    title: 'Engagement Communautaire',
    description: 'Mobiliser les populations pour le changement.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763860/apap-k/baniere/DSC00937.jpg',
    title: 'Partenariats Stratégiques',
    description: 'Collaborations avec institutions et organisations.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763870/apap-k/baniere/DSC00943.jpg',
    title: 'Impact Social',
    description: 'Mesurer et amplifier notre impact positif.'
  },
  {
    image: 'https://res.cloudinary.com/dessrncgo/image/upload/v1766763879/apap-k/baniere/DSC00945.jpg',
    title: 'Vision 2030',
    description: 'Nos objectifs pour un développement durable.'
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const missionLyonImage = 'https://res.cloudinary.com/dessrncgo/image/upload/v1766764867/apap-k/activites/festival-ngoma/Ngomo___41_.jpg';
  const missionKasaiImage = 'https://res.cloudinary.com/dessrncgo/image/upload/v1766766462/apap-k/activites/missions/Prospection__1_.jpg';
  const festivalNgomaImage = 'https://res.cloudinary.com/dessrncgo/image/upload/v1766764526/apap-k/activites/festival-ngoma/Ngomo___103_.jpg';

  const currentSlide = bannerSlides[currentIndex];


  return (
    <>
      <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
        {bannerSlides.map((slide, index) => (
          <motion.div
            key={slide.image}
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
              src={slide.image}
              alt={`Bannière ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        
        {/* Overlay avec gradient plus visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10" />
        
        {/* Indicateurs de navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {bannerSlides.map((_, index) => (
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

        {/* Contenu texte animé */}
        <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="bg-black/60 backdrop-blur-sm rounded-xl px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 max-w-3xl mx-auto"
              >
                <h1 className="font-headline text-2xl font-extrabold tracking-tight sm:text-3xl md:text-5xl lg:text-6xl">
                  {currentSlide.title}
                </h1>
                <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-neutral-100 md:text-xl">
                  {currentSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>
            
            <motion.div 
              className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild size="sm" className="shadow-lg sm:size-default">
                <Link href="/projets">
                  <Briefcase className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Nos Projets
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Notre Mission
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base text-muted-foreground md:text-lg">
              L'APAP-K est une Organisation de Solidarité Internationale issue des Migrations (OSIM)
              basée à Fontaines sur Saône. Notre activité est bipolarisée entre la région lyonnaise
              et le Kasaï en République Démocratique du Congo.
            </p>
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
            <Card className="flex flex-col overflow-hidden">
              <div className="h-40 sm:h-48 md:w-1/3 md:h-auto relative md:min-h-full">
                <img src={missionLyonImage} alt="Mission à Lyon" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-headline text-lg sm:text-xl font-semibold text-primary md:text-2xl">À Lyon</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground md:text-base">
                  Promouvoir les valeurs culturelles de la R.D. Congo pour créer des liens d'amitié
                  et aboutir à une coopération décentralisée.
                </p>
              </div>
            </Card>
            <Card className="flex flex-col overflow-hidden">
              <div className="h-40 sm:h-48 md:w-1/3 md:h-auto relative md:min-h-full">
                <img src={missionKasaiImage} alt="Mission au Kasaï" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-headline text-lg sm:text-xl font-semibold text-primary md:text-2xl">Au Kasaï</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground md:text-base">
                  Soutenir le développement rural à travers des projets concrets dans les domaines de
                  l'eau, l'agriculture, l'élevage, la santé et l'éducation.
                </p>
              </div>
            </Card>
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <Button asChild variant="outline" size="sm" className="sm:size-default">
              <Link href="/about">
                En savoir plus <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Portrait de notre président
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base text-muted-foreground md:text-lg">
               Découvrez le parcours et la vision de notre président, Alain Mulaba Tshilumba, moteur de l'APAP-K.
            </p>
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 max-w-4xl mx-auto">
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
                <CardTitle className="font-headline text-base sm:text-lg md:text-xl flex items-center gap-2">
                   <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary" /> Alain Mulaba Tshilumba
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Président de l'APAP-K</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Projets Phares
            </h2>
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 grid max-w-6xl mx-auto gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
            <Card className="shadow-lg flex flex-col">
               <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dessrncgo/image/upload/v1766766509/apap-k/activites/projet-eau-bakwa-bowa/81014989_10216577119442417_2156204488900214784_n.jpg"
                    alt="Coopération Décentralisée sur l'Eau"
                    className="w-full h-full object-cover"
                  />
                </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 sm:gap-3 font-headline text-base sm:text-lg md:text-xl">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  Coopération Décentralisée sur l'Eau
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-xs sm:text-sm text-muted-foreground md:text-base">
                  Projet lauréat entre la ville de Fontaines-sur-Saône et le territoire de Sangu en RD Congo pour l'accès à l'eau potable.
                </p>
              </CardContent>
            </Card>
             <Card className="shadow-lg flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img src={festivalNgomaImage} alt="Festival Ngoma" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 sm:gap-3 font-headline text-base sm:text-lg md:text-xl">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  Festival Ngoma aux Galeries Lafayette
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-xs sm:text-sm text-muted-foreground md:text-base">
                  Projet lauréat mettant en lumière la culture congolaise à travers un festival vibrant organisé aux Galeries Lafayette.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Notre Histoire
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground md:text-lg">
              Quelques dates clés de notre parcours depuis la création en 2003.
            </p>
          </div>
          <Timeline items={history} />
        </div>
      </section>

      <section className="bg-muted py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Vie Culturelle & Événements à Lyon
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground md:text-lg">
              Découvrez nos activités culturelles qui animent la région lyonnaise.
            </p>
          </div>
          <Tabs defaultValue="music" className="mt-8 sm:mt-10 md:mt-12 mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2">
              <TabsTrigger value="music" className="text-xs sm:text-sm">
                <Music className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> <span className="hidden sm:inline">Musique</span><span className="sm:hidden">Musique</span>
              </TabsTrigger>
              <TabsTrigger value="painting" className="text-xs sm:text-sm">
                <Paintbrush className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> <span className="hidden sm:inline">Peinture</span><span className="sm:hidden">Peinture</span>
              </TabsTrigger>
              <TabsTrigger value="dance" className="text-xs sm:text-sm">
                <Disc className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> <span className="hidden sm:inline">Danse</span><span className="sm:hidden">Danse</span>
              </TabsTrigger>
              <TabsTrigger value="events" className="text-xs sm:text-sm">
                <Calendar className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" /> <span className="hidden sm:inline">Événements</span><span className="sm:hidden">Événements</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="music" className="pt-4 sm:pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-base sm:text-lg md:text-xl">Groupe Class L Lissanga</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground md:text-base">
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
            <TabsContent value="painting" className="pt-4 sm:pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-base sm:text-lg md:text-xl">Artiste Peintre : Joe Okitawonya</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground md:text-base">
                  <p>
                    Membre de l'association, Joe Okitawonya est un peintre et plasticien diplômé de
                    l'Académie des Beaux-Arts de Kinshasa. Surnommé "Poingéïste", il explore le thème
                    de la gente féminine.
                  </p>
                  <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm">
                    <Link href="https://www.joeokitawonya.com/" target="_blank" rel="noopener noreferrer">
                      Découvrir son site <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="dance" className="pt-4 sm:pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-base sm:text-lg md:text-xl">Danseur : Terminator 45</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground md:text-base">
                  <p>
                    Terminator 45, danseur Afro Urbain et membre de l'APAP-K, anime nos événements
                    et partage sa passion pour la danse dans la région lyonnaise.
                  </p>
                   <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm">
                    <Link href="https://www.youtube.com/channel/UCiBTtA_y2D_wa1R1mAmuFug" target="_blank" rel="noopener noreferrer">
                      Voir sa chaîne YouTube <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="events" className="pt-4 sm:pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-base sm:text-lg md:text-xl">Nos Événements Marquants</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground md:text-base">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Festival NGOMA</h4>
                    <p className="mt-1">
                      Un festival pour regrouper les artistes d'origine africaine, promouvoir les
                      talents de la région et créer des œuvres inédites avec le public.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Regards Croisés</h4>
                    <p className="mt-1">
                      Un événement de sensibilisation sur l'accès à l'eau potable, avec des
                      expositions photo pour les écoles et le grand public.
                    </p>
                  </div>
                   <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Conférences & Fête de la Musique</h4>
                    <p className="mt-1">
                      Nous organisons régulièrement des conférences sur des thèmes variés et tenons des stands avec une programmation africaine lors de la Fête de la Musique.
                    </p>
                   </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-primary/5 py-8 sm:py-12 md:py-16 lg:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Soutenez Nos Actions
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground md:text-lg">
            Votre don a un impact direct sur la vie des populations au Kasaï et soutient nos actions
            culturelles à Lyon. Chaque contribution compte.
          </p>
          <div className="mt-6 sm:mt-8">
            <Button
              size="sm"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 sm:size-default"
            >
              <Link href="#">
                <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Faire un don
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
