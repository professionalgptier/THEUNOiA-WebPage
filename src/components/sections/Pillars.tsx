'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/animation/ScrollReveal'
import AnimationSlot from '@/components/animation/AnimationSlot'
import Eyebrow from '@/components/ui/Eyebrow'
import { PILLARS } from '@/lib/constants'

export default function Pillars() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'skillbridge':
        return (
          <svg width="44" height="44" viewBox="0 0 24 24" className="stroke-gold stroke-[1.6] fill-none mb-6">
            <path d="M3 12h18M3 6h18M3 18h12" strokeLinecap="round"/>
          </svg>
        )
      case 'mentorship':
        return (
          <svg width="44" height="44" viewBox="0 0 24 24" className="stroke-gold stroke-[1.6] fill-none mb-6">
            <circle cx="12" cy="8" r="3.2"/>
            <path d="M5 20c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5" strokeLinecap="round"/>
          </svg>
        )
      case 'connect':
        return (
          <svg width="44" height="44" viewBox="0 0 24 24" className="stroke-gold stroke-[1.6] fill-none mb-6">
            <path d="M4 15c2-4 5-6 8-6s6 2 8 6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 19c2-4 5-6 8-6s6 2 8 6" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
          </svg>
        )
      default:
        return null
    }
  }

  // Fallback data structure to use if PILLARS constants are not structured similarly
  const displayPillars = PILLARS || []

  return (
    <section id="pillars" className="py-32 px-6 text-center text-ivory">
      <ScrollReveal>
        <div className="max-w-[640px] mx-auto mb-[60px]">
          <Eyebrow>Three pillars, one ecosystem</Eyebrow>
          <h2 className="font-head text-[clamp(30px,4.5vw,48px)] mt-4">
            Where skills find their tide.
          </h2>
        </div>
      </ScrollReveal>

      <AnimationSlot id="pillars-stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
        {displayPillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ y: -6, backgroundColor: 'rgba(243, 239, 230, 0.09)' }}
            className="bg-ivory/[0.06] border border-ivory/[0.12] backdrop-blur-[14px] rounded-[18px] p-9 px-7 text-left group transition-colors flex flex-col items-start"
          >
            {getIcon(pillar.icon)}
            <h3 className="text-[22px] font-head mb-3">{pillar.title}</h3>
            <p className="text-[14.5px] opacity-[0.78] leading-[1.65] mb-[18px] flex-grow">
              {pillar.description}
            </p>
            <a href={pillar.link.href} className="text-terracotta text-[13.5px] font-bold no-underline">
              {pillar.link.label}
            </a>
          </motion.div>
        ))}
      </AnimationSlot>
    </section>
  )
}
