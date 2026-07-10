import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { whyChoose } from '../data/services'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'

export default function WhyChoose() {
  return (
    <section className="bg-sage/20 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="The Difference"
          title="Why choose"
          italic="Olive & Ivory"
        />
        <motion.div
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {whyChoose.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-2xl bg-ivory p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
            >
              <item.icon size={22} strokeWidth={1.2} className="text-olive" />
              <h3 className="mt-4 font-serif text-lg leading-tight text-charcoal">{item.title}</h3>
              <p className="mt-2 text-[0.78rem] leading-relaxed text-stone">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
