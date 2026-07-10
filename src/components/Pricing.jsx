import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { pricingCategories, formatPrice } from '../data/pricing'

function CategoryAccordion({ category, isOpen, onToggle }) {
  return (
    <div className="border-b border-sand">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-olive"
      >
        <span className="font-serif text-xl text-charcoal md:text-2xl">{category.category}</span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sand text-olive">
          {isOpen ? <Minus size={15} strokeWidth={1.5} /> : <Plus size={15} strokeWidth={1.5} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8">
              <div className="hidden grid-cols-[1fr_auto_auto] gap-x-10 border-b border-sand pb-3 md:grid">
                <span className="eyebrow">Service</span>
                <span className="eyebrow w-28 text-right">Non-Member</span>
                <span className="eyebrow w-28 text-right">Member</span>
              </div>
              <ul>
                {category.services.map((s, i) => (
                  <li
                    key={`${s.name}-${i}`}
                    className="grid grid-cols-1 gap-1 border-b border-sand/60 py-4 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-x-10"
                  >
                    <span className="text-sm text-charcoal md:text-[0.95rem]">{s.name}</span>
                    <span className="text-sm text-stone md:w-28 md:text-right">
                      <span className="mr-2 text-[0.6rem] uppercase tracking-widest2 text-stone/70 md:hidden">
                        Non-member
                      </span>
                      {formatPrice(s.nonMember)}
                    </span>
                    <span className="text-sm font-medium text-olive md:w-28 md:text-right">
                      <span className="mr-2 text-[0.6rem] uppercase tracking-widest2 text-stone/70 md:hidden">
                        Member
                      </span>
                      {formatPrice(s.member)}
                    </span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919281116233" target="_blank" rel="noreferrer" className="btn-outline mt-8">
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Pricing() {
  const [openId, setOpenId] = useState(pricingCategories[0].id)
  return (
    <section id="pricing" className="bg-cream py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Price List"
          title="The complete"
          italic="menu"
          description="Transparent pricing across every ritual. Members enjoy 15–20% preferred rates on most services."
        />
        <div className="mx-auto mt-16 max-w-4xl border-t border-sand">
          {pricingCategories.map((cat) => (
            <CategoryAccordion
              key={cat.id}
              category={cat}
              isOpen={openId === cat.id}
              onToggle={() => setOpenId(openId === cat.id ? null : cat.id)}
            />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-stone">
          Prices are in Indian Rupees (₹). “Onwards” indicates a starting price — the final cost may
          vary based on hair length and volume. Member prices typically offer a 15–20% discount.
        </p>
      </div>
    </section>
  )
}
