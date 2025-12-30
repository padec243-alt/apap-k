'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const partners = [
  { id: 1, logo: '/partenaires/logo2.png' },
  { id: 2, logo: '/partenaires/logo3.png' },
  { id: 3, logo: '/partenaires/logo4.png' },
  { id: 4, logo: '/partenaires/logo5.png' },
  { id: 5, logo: '/partenaires/logo6.png' },
  { id: 6, logo: '/partenaires/logo7.png' },
  { id: 7, logo: '/partenaires/logo8.png' },
  { id: 8, logo: '/partenaires/logo9.png' },
  { id: 9, logo: '/partenaires/logo10.png' },
  { id: 10, logo: '/partenaires/logo11.png' },
  { id: 11, logo: '/partenaires/logo12.png' },
  { id: 12, logo: '/partenaires/logo13.png' },
  { id: 13, logo: '/partenaires/logo14.png' },
  { id: 14, logo: '/partenaires/logo15.png' },
  { id: 15, logo: '/partenaires/logo16.png' },
];

function PartnerCard({ partner, keyId }: { partner: typeof partners[0]; keyId: string }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) return null;

  return (
    <motion.div
      key={keyId}
      className="flex-shrink-0 w-32 sm:w-40 md:w-48"
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6 h-24 sm:h-28 flex items-center justify-center border border-gray-200 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-400 transition-colors">
        <img
          src={partner.logo}
          alt="Partenaire"
          className="w-full h-full object-contain"
          onError={() => setImgError(true)}
        />
      </div>
    </motion.div>
  );
}

export function PartnersCarousel() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Partenaires
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Nous collaborons avec des organisations de confiance pour réaliser nos projets
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 sm:gap-8"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* First set */}
            {partners.map((partner) => (
              <PartnerCard key={`${partner.id}-1`} partner={partner} keyId={`${partner.id}-1`} />
            ))}

            {/* Second set for seamless loop */}
            {partners.map((partner) => (
              <PartnerCard key={`${partner.id}-2`} partner={partner} keyId={`${partner.id}-2`} />
            ))}
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
