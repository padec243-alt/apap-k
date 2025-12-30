'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + sortedItems.length) % sortedItems.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sortedItems.length);
  };

  const activeItem = sortedItems[activeIndex];

  return (
    <div className="mt-6 sm:mt-8 w-full max-w-md mx-auto px-4">
      {/* Timeline compacte */}
      <div className="flex flex-col items-center">
        
        {/* Année et navigation */}
        <div className="flex items-center gap-4 mb-3">
          <button 
            onClick={handlePrev} 
            className="p-1.5 rounded-full hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </button>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.year}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="text-center"
            >
              <span className="text-2xl sm:text-3xl font-bold text-accent">{activeItem.year}</span>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={handleNext} 
            className="p-1.5 rounded-full hover:bg-muted transition-colors"
          >
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        {/* Contenu */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.year}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="text-center"
          >
            <h3 className="text-sm font-semibold text-primary">{activeItem.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground max-w-xs">{activeItem.details[0]}</p>
          </motion.div>
        </AnimatePresence>

        {/* Points indicateurs */}
        <div className="flex gap-1.5 mt-4 flex-wrap justify-center max-w-xs">
          {sortedItems.map((item, idx) => (
            <button
              key={item.year}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === activeIndex 
                  ? 'bg-primary w-4' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
