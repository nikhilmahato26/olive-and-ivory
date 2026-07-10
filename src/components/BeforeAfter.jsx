import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { MoveHorizontal } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { beforeAfterSlides } from '../data/gallery'
import { scaleIn, viewportOnce } from '../animations/variants'

function CompareSlider({ before, after, label }) {
  const ref = useRef(null)
  const [pos, setPos] = useState(50)

  const update = useCallback((clientX) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(96, Math.max(4, pct)))
  }, [])

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={scaleIn}
      className="group"
    >
      <div
        ref={ref}
        className="relative aspect-[3/4] cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl shadow-md"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId)
          update(e.clientX)
        }}
        onPointerMove={(e) => e.buttons === 1 && update(e.clientX)}
        role="slider"
        aria-label={`${label} before and after comparison`}
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <img src={after} alt={`${label} — after`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img src={before} alt={`${label} — before`} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-y-0 w-px bg-ivory" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-olive shadow-lg">
            <MoveHorizontal size={16} strokeWidth={1.5} />
          </span>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-charcoal/50 px-3 py-1 text-[0.6rem] uppercase tracking-widest2 text-ivory backdrop-blur-sm">
          Before
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-olive/70 px-3 py-1 text-[0.6rem] uppercase tracking-widest2 text-ivory backdrop-blur-sm">
          After
        </span>
      </div>
      <p className="mt-4 text-center font-serif text-lg text-charcoal">{label}</p>
    </motion.div>
  )
}

export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Transformations"
          title="Before &"
          italic="after"
          description="Drag to reveal — hair transformations, keratin, colour and hydra facial results."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {beforeAfterSlides.map((s) => (
            <CompareSlider key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
