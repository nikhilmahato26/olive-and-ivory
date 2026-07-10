import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Leaf } from 'lucide-react'
import { fadeUp, staggerContainer } from '../animations/variants'

const HERO_IMAGE = '/hero-bg.png'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <motion.div style={{ y: mediaY }} className="absolute inset-0 scale-110">
        <img
          src={HERO_IMAGE}
          alt="Luxury salon interior with warm lighting"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />

      {/* floating botanicals */}
      <motion.span
        aria-hidden="true"
        className="absolute left-[8%] top-[22%] text-ivory/25"
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Leaf size={54} strokeWidth={1} />
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="absolute bottom-[24%] right-[10%] text-ivory/20"
        animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Leaf size={72} strokeWidth={1} />
      </motion.span>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative flex h-full items-center"
      >
        <motion.div
          className="container-page flex flex-col items-center text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeUp} className="eyebrow !text-ivory/80">
            Luxury Beauty Experience
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-4xl font-serif text-5xl font-medium leading-[1.05] text-ivory md:text-7xl lg:text-[5.5rem]"
          >
            Beauty Crafted <em className="italic text-gold/90">With Elegance</em>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-sm font-light leading-relaxed tracking-wide text-ivory/80 md:text-lg"
          >
            Where timeless beauty meets modern luxury.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.me/919281116233" target="_blank" rel="noreferrer" className="btn-ivory">
              Book Appointment
            </a>
            <a href="#services" className="btn border border-ivory/50 text-ivory hover:bg-ivory hover:text-olive">
              Explore Services
            </a>
            <a href="https://wa.me/919281116233" target="_blank" rel="noreferrer" className="btn border border-ivory/50 text-ivory hover:bg-ivory hover:text-olive">
              Book Consultation
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <span className="block h-12 w-px bg-gradient-to-b from-transparent via-ivory/70 to-transparent" />
      </motion.div>
    </section>
  )
}
