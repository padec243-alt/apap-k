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
  const sortedItems = useMemo(() => [...items].sort((a, b) => b.year - a.year), [items]);
  const [activeIndex, setActiveIndex] = useState(0);

  const radius = 180;
  const itemSize = 80;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + sortedItems.length) % sortedItems.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sortedItems.length);
  };

  const activeItem = sortedItems[activeIndex];
  const activeItemImage = PlaceHolderImages.find((img) => img.id === activeItem.imageId);

  return (
    <div className="relative mt-12 w-full max-w-6xl mx-auto py-8 flex flex-col items-center justify-center min-h-[600px]">
      <div className="relative h-96 w-96 md:h-[500px] md:w-[500px] flex items-center justify-center">
        
        {/* Central Display Circle */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.year}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="absolute z-10 flex h-64 w-64 md:h-80 md:w-80 flex-col items-center justify-center rounded-full border-4 border-primary bg-background shadow-2xl text-center overflow-hidden"
          >
            {activeItemImage && (
              <div className="relative w-full h-2/5">
                <Image
                  src={activeItemImage.imageUrl}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                  data-ai-hint={activeItemImage.imageHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
            )}
             <div className="flex flex-col p-4 justify-center items-center h-3/5">
                <div className="font-headline text-2xl md:text-4xl font-bold text-accent">{activeItem.year}</div>
                <p className="mt-1 text-sm md:text-base font-semibold text-primary">{activeItem.title}</p>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground line-clamp-2">{activeItem.details[0]}</p>
              </div>
          </motion.div>
        </AnimatePresence>

        {/* Orbiting Image Items */}
        <div className="absolute h-full w-full">
          {sortedItems.map((item, index) => {
            const angle = ((index - activeIndex) / sortedItems.length) * 2 * Math.PI - (Math.PI / 2);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const image = PlaceHolderImages.find((img) => img.id === item.imageId);

            return (
              <motion.div
                key={item.year}
                animate={{
                  x: x,
                  y: y,
                  scale: index === activeIndex ? 1.1 : 0.8,
                  opacity: index === activeIndex ? 1 : 0.6,
                  zIndex: index === activeIndex ? 20 : 10,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute top-1/2 left-1/2 flex items-center justify-center rounded-full border-2 border-primary/50 bg-background shadow-md overflow-hidden cursor-pointer"
                style={{
                  width: itemSize,
                  height: itemSize,
                  transform: `translate(-50%, -50%)`,
                }}
                onClick={() => setActiveIndex(index)}
              >
                {image && (
                   <Image
                    src={image.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {item.year}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
       {/* Navigation Buttons */}
       <div className="flex items-center gap-8 mt-8 md:mt-24 z-20">
          <Button variant="outline" size="icon" onClick={handlePrev} aria-label="Previous Year">
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next Year">
            <ChevronRight />
          </Button>
        </div>
    </div>
  );
}
