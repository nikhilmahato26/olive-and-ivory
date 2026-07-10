import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeLeft, fadeRight, viewportOnce } from '../animations/variants'

const benefits = [
  'Priority booking',
  'Member pricing on every visit',
  '15–20% discount across services',
  'Birthday offers',
  'VIP treatment',
  'Exclusive offers & previews',
  'Premium experience, always',
]

export default function Membership() {
  return (
    <section className="overflow-hidden py-24 md:py-32">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeLeft}
          className="order-2 lg:order-1"
        >
          <span className="eyebrow">Membership</span>
          <h2 className="heading-lg mt-5">
            The <em className="italic text-olive">Ivory Card</em>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-[1.9] text-stone md:text-base">
            An invitation to the inner circle. Ivory Card members enjoy preferred pricing, priority
            access and quiet privileges reserved for our most valued guests.
          </p>
          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-charcoal">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-olive/10 text-olive">
                  <Check size={12} strokeWidth={2} />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <a href="https://wa.me/919281116233" target="_blank" rel="noreferrer" className="btn-primary mt-10">
            Become A Member
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeRight}
          className="order-1 flex justify-center lg:order-2"
        >
          <motion.div
            whileHover={{ rotateX: 4, rotateY: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            style={{ perspective: 1000 }}
            className="relative aspect-[8/5] w-full max-w-md rounded-3xl bg-gradient-to-br from-charcoal via-[#1f221a] to-olive-deep p-8 shadow-2xl md:p-10"
          >
            <div className="absolute inset-0 rounded-3xl border border-gold/20" />
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <img src="/logo.png" alt="" className="h-12 w-12 object-contain opacity-90 brightness-0 invert" />
                <span className="text-[0.6rem] uppercase tracking-widest2 text-gold">Ivory Card</span>
              </div>
              <div>
                <p className="font-serif text-2xl italic text-ivory md:text-3xl">Olive &amp; Ivory</p>
                <div className="mt-4 flex items-end justify-between">
                  <p className="text-[0.6rem] uppercase tracking-widest2 text-ivory/50">
                    Private Member
                  </p>
                  <p className="font-serif text-lg tracking-[0.3em] text-gold">•• 0001</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
