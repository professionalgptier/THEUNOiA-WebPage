'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LunaAnimationProps {
  variant: 'working' | 'excited' | 'thumbsup';
  className?: string;
}

export default function LunaAnimation({ variant, className = '' }: LunaAnimationProps) {
  const images = {
    working: '/assets/luna/luna-working.png',
    excited: '/assets/luna/luna-excited.png',
    thumbsup: '/assets/luna/luna-thumbsup.png',
  };

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Image
        src={images[variant]}
        alt={`Luna ${variant}`}
        width={300}
        height={300}
        className="w-full h-auto object-contain"
      />
    </motion.div>
  );
}
