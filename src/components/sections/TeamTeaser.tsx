'use client'

import ScrollReveal from '@/components/animation/ScrollReveal'
import AnimationSlot from '@/components/animation/AnimationSlot'
import LunaAnimation from '@/components/animation/LunaAnimation'
import Eyebrow from '@/components/ui/Eyebrow'

export default function TeamTeaser() {
  return (
    <section id="team-teaser" className="bg-ivory text-navy py-[120px] px-[8vw]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
        <ScrollReveal>
          <div>
            <Eyebrow className="text-navy">Meet the minds</Eyebrow>
            <h2 className="text-navy font-head text-[clamp(28px,4vw,42px)] mb-[18px] mt-4">
              Built by students,<br />for students.
            </h2>
            <p className="text-[16px] leading-[1.7] opacity-80">
              THEUNOiA was never built by individuals seeking titles — it was built by visionaries, developers, designers, and strategists who believe talent should never go unnoticed. Different backgrounds, different perspectives, one shared purpose.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <AnimationSlot id="team-luna">
            <LunaAnimation variant="thumbsup" className="w-full max-w-[400px] mx-auto" />
          </AnimationSlot>
        </ScrollReveal>
      </div>
    </section>
  )
}
