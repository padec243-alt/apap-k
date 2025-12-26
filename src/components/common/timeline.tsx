'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface TimelineItemProps {
  year: number;
  title: string;
  details: string[];
  imageId: string;
}

interface TimelineProps {
  items: TimelineItemProps[];
}

export function Timeline({ items }: TimelineProps) {
  const sortedItems = useMemo(() => [...items].sort((a, b) => a.year - b.year), [items]);
  const [activeIndex, setActiveIndex] = useState(0);

  const radius = 380; // rayon inchangé
  const itemSize = 80;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + sortedItems.length) % sortedItems.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sortedItems.length);
  };

  const activeItem = sortedItems[activeIndex];
  const activeItemImage = PlaceHolderImages.find((img) => img.id === activeItem.imageId);

  // For the four images around the circle
  const imageIds = ["ngandajika-2013", "femme-kasaienne", "bj-2016-etude-eau", "ngoma-2016"];
  const fourImages = PlaceHolderImages.filter(img => imageIds.includes(img.id));


  return (
    <div className="relative mt-12 w-full max-w-6xl mx-auto py-8 flex flex-col items-center justify-center min-h-[700px]">
      <div className="relative h-[600px] w-[600px]">

        {/* Central Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.year}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="absolute top-1/2 left-[38%] -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <Card className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-primary flex flex-col justify-center items-center">
              <CardHeader className="p-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center">
                 <CardTitle className="font-headline text-xl md:text-2xl font-bold text-accent text-center">{activeItem.year}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-center flex flex-col items-center justify-center h-full">
                <p className="mt-1 text-base md:text-xl font-semibold text-primary">{activeItem.title}</p>
                <p className="mt-2 text-sm md:text-lg text-muted-foreground line-clamp-3">{activeItem.details.join(' ')}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
        
        {/* Orbiting Year Items */}
        {sortedItems.map((item, index) => {
          const angle = (index / sortedItems.length) * 2 * Math.PI - (Math.PI / 2);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={item.year}
              initial={{ x: 0, y: 0, scale: 0.8, opacity: 0.6 }}
              animate={{
                x: x,
                y: y,
                scale: index === activeIndex ? 1.2 : 0.9,
                opacity: index === activeIndex ? 1 : 0.7,
                zIndex: index === activeIndex ? 15 : 10,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="absolute top-1/2 left-1/2 flex items-center justify-center rounded-full border-2 border-primary/50 bg-background shadow-md overflow-hidden cursor-pointer"
              style={{
                width: itemSize,
                height: itemSize,
                transform: `translate(-50%, -50%)`,
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="text-center">
                <div className="font-bold text-lg">{item.year}</div>
              </div>
            </motion.div>
          );
        })}

        {/* Four images around the circle */}
        {fourImages.map((image, index) => {
          const angle = (index / 4) * 2 * Math.PI;
          const imageRadius = radius + 100;
          const x = Math.cos(angle) * imageRadius;
          const y = Math.sin(angle) * imageRadius;
          return (
            <motion.div
                key={image.id}
                animate={{ x: x, y: y, }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute top-1/2 left-1/2 rounded-full overflow-hidden shadow-lg border-2 border-secondary cursor-pointer"
                 style={{
                  width: '100px',
                  height: '100px',
                  transform: `translate(-50%, -50%)`,
                }}
            >
                <Image
                    src={image.imageUrl}
                    alt={image.id}
                    fill
                    className="object-cover"
                />
            </motion.div>
          );
        })}

      </div>
      
      {/* Navigation Buttons */}
      <div className="w-full flex items-center justify-center mt-8 space-x-4 z-30" style={{transform: 'translateX(34px)'}}>
        <Button onClick={handlePrev} variant="outline" size="icon" className="rounded-full">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button onClick={handleNext} variant="outline" size="icon" className="rounded-full">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
