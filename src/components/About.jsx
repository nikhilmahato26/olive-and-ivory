import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, scaleIn, viewportOnce } from '../animations/variants'

export default function About() {
  return (
    <section id="about" className="overflow-hidden py-24 md:py-36">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeLeft}
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/about-salon.png"
              alt="Olive & Ivory salon interior"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
            />
          </div>
          <motion.div
            variants={scaleIn}
            className="absolute -bottom-10 -right-4 hidden w-56 overflow-hidden rounded-2xl border-[6px] border-ivory shadow-xl md:block lg:-right-12"
          >
            <img
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=500&q=80"
              alt="Natural skincare products"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeRight}
        >
          <span className="eyebrow">The House of Olive &amp; Ivory</span>
          <h2 className="heading-lg mt-5">
            A boutique sanctuary of <em className="italic text-olive">quiet luxury</em>
          </h2>
          <p className="mt-7 max-w-lg text-sm leading-[1.9] text-stone md:text-base">
            Olive &amp; Ivory is a boutique luxury unisex salon offering premium beauty, hair and
            wellness experiences using world-class products and experienced professionals. Every
            ritual is unhurried, every detail considered — from the warmth of the light to the
            texture of the linen.
          </p>
          <blockquote className="mt-10 border-l-2 border-gold pl-6">
            <p className="font-serif text-2xl italic leading-snug text-charcoal md:text-3xl">
              “Luxury is not what you add. It is everything you refuse to compromise.”
            </p>
            <cite className="eyebrow mt-4 block not-italic">— The Olive &amp; Ivory Philosophy</cite>
          </blockquote>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-sand pt-8">
            {[
              ['Premium', 'Brands Only'],
              ['50+', 'Signature Rituals'],
              ['Luxury', 'Sanctuary'],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-serif text-2xl text-olive md:text-3xl lg:text-4xl">{num}</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-widest2 text-stone">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
