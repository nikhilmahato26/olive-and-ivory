import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { faqs } from '../data/services'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-page max-w-3xl">
        <SectionHeading eyebrow="Questions" title="Frequently" italic="asked" />
        <div className="mt-14 border-t border-sand">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-sand">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-serif text-lg text-charcoal md:text-xl">{f.q}</span>
                <span className="shrink-0 text-olive">
                  {open === i ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-[1.9] text-stone">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
