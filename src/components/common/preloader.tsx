'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="absolute h-full w-full animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-background shadow-md">
          <Image
            src="https://res.cloudinary.com/dy73hzkpm/image/upload/v1763389734/logo_apap-k_tkx1cb.png"
            alt="APAP-K Logo"
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}
