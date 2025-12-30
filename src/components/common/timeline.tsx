'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Vos images Cloudinary
const timelineImages = [
  "https://res.cloudinary.com/dessrncgo/image/upload/v1766764867/apap-k/activites/festival-ngoma/Ngomo___41_.jpg",
  "https://res.cloudinary.com/dessrncgo/image/upload/v1766764526/apap-k/activites/festival-ngoma/Ngomo___103_.jpg",
  "https://res.cloudinary.com/dessrncgo/image/upload/v1766766509/apap-k/activites/projet-eau-bakwa-bowa/81014989_10216577119442417_2156204488900214784_n.jpg",
  "https://res.cloudinary.com/dessrncgo/image/upload/v1766766628/apap-k/activites/projet-eau-mpasa/IMG_2648.jpg",
  "https://res.cloudinary.com/dessrncgo/image/upload/v1766767297/apap-k/activites/projet-solaire-mbujimayi/IMG_3425.jpg",
  "https://res.cloudinary.com/dessrncgo/image/upload/v1766767375/apap-k/activites/promotion-femme/DSCN0134_-_Copie.jpg",
  "https://res.cloudinary.com/dessrncgo/image/upload/v1766764073/apap-k/activites/concerts-lissanga/IMG_7994.jpg",
  "https://res.cloudinary.com/dessrncgo/image/upload/v1766765389/apap-k/activites/fontaines-sur-saone/DSC00288.jpg",
  "https://res.cloudinary.com/dessrncgo/image/upload/v1766764107/apap-k/activites/cosim/IMG_0981.jpg",
  "https://res.cloudinary.com/dessrncgo/image/upload/v1766766462/apap-k/activites/missions/Prospection__1_.jpg",
];

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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sortedItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, sortedItems.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + sortedItems.length) % sortedItems.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % sortedItems.length);
  };

  const handleDotClick = (idx: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(idx);
  };

  const activeItem = sortedItems[activeIndex];
  
  // Images qui changent avec l'index
  const leftImageIndex = (activeIndex * 2) % timelineImages.length;
  const rightImageIndex = (activeIndex * 2 + 1) % timelineImages.length;
  const leftImage = timelineImages[leftImageIndex];
  const rightImage = timelineImages[rightImageIndex];

  // Animation de droite à gauche
  const slideVariants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 }
  };

  return (
    <div 
      className="mt-6 sm:mt-8 w-full max-w-2xl mx-auto px-4"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8">
        
        {/* Image gauche cercle */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`left-${activeIndex}`}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/30 shadow-md flex-shrink-0"
          >
            <img
              src={leftImage}
              alt="Histoire APAP-K"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Contenu central */}
        <div className="flex flex-col items-center flex-1 max-w-xs">
          
          {/* Année et navigation */}
          <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
            <button 
              onClick={handlePrev} 
              className="p-1 sm:p-1.5 rounded-full hover:bg-muted transition-colors"
            >
              <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            </button>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.year}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">{activeItem.year}</span>
              </motion.div>
            </AnimatePresence>
            
            <button 
              onClick={handleNext} 
              className="p-1 sm:p-1.5 rounded-full hover:bg-muted transition-colors"
            >
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Titre et description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.year}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h3 className="text-xs sm:text-sm font-semibold text-primary">{activeItem.title}</h3>
              <p className="mt-1 text-[10px] sm:text-xs text-muted-foreground line-clamp-2">{activeItem.details[0]}</p>
            </motion.div>
          </AnimatePresence>

          {/* Points indicateurs */}
          <div className="flex gap-1 sm:gap-1.5 mt-3 sm:mt-4 flex-wrap justify-center">
            {sortedItems.map((item, idx) => (
              <button
                key={item.year}
                onClick={() => handleDotClick(idx)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                  idx === activeIndex 
                    ? 'bg-primary w-3 sm:w-4' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image droite cercle */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`right-${activeIndex}`}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/30 shadow-md flex-shrink-0"
          >
            <img
              src={rightImage}
              alt="Histoire APAP-K"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
