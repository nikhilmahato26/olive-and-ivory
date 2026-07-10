import { motion } from 'framer-motion'
import { Gem } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { brands } from '../data/services'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'

export default function Products() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="In Our Hands"
          title="Only the world's"
          italic="finest"
          description="We partner exclusively with professional luxury houses."
        />
        <motion.div
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {brands.map((b) => (
            <motion.div
              key={b}
              variants={fadeUp}
              className="group flex min-h-[110px] flex-col items-center justify-center gap-3 rounded-2xl border border-sand bg-ivory p-6 text-center transition-all duration-500 hover:border-gold/50 hover:shadow-md"
            >
              <Gem
                size={16}
                strokeWidth={1.2}
                className="text-sand transition-colors duration-500 group-hover:text-gold"
              />
              <span className="font-serif text-lg text-charcoal md:text-xl">{b}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
