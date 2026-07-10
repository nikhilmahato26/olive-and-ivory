import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { premiumServices } from '../data/services'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'

export default function PremiumServices() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="The Premium Edit"
          title="Signature"
          italic="indulgences"
          description="Our most requested luxury treatments — advanced, transformative and deeply restorative."
        />
        <motion.div
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {premiumServices.map((name) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="group relative flex min-h-[120px] flex-col justify-between rounded-2xl border border-sand bg-ivory p-5 transition-all duration-500 hover:-translate-y-1 hover:border-olive/30 hover:shadow-lg md:p-6"
            >
              <Sparkles size={16} strokeWidth={1.3} className="text-gold" />
              <div>
                <h3 className="font-serif text-lg leading-tight text-charcoal md:text-xl">{name}</h3>
                <a
                  href="https://wa.me/919281116233"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-[0.6rem] font-semibold uppercase tracking-widest2 text-olive opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  Book Now →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
