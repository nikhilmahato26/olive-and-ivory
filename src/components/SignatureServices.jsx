import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { signatureServices } from '../data/services'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'

export default function SignatureServices() {
  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Signature Services"
          title="Rituals of"
          italic="refinement"
          description="Eight disciplines, one philosophy — every service is a considered, unhurried experience."
        />
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {signatureServices.map((s) => (
            <motion.a
              key={s.title}
              href={s.anchor}
              variants={fadeUp}
              className="group overflow-hidden rounded-2xl bg-ivory shadow-sm transition-shadow duration-500 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <s.icon size={20} strokeWidth={1.3} className="text-olive" />
                  <h3 className="font-serif text-xl text-charcoal">{s.title}</h3>
                </div>
                <p className="mt-3 text-[0.82rem] leading-relaxed text-stone">{s.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-widest2 text-olive">
                  Explore
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
