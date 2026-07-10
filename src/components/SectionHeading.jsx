import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../animations/variants'

export default function SectionHeading({ eyebrow, title, italic, description, align = 'center' }) {
  const alignCls = align === 'left' ? 'items-start text-left' : 'items-center text-center'
  return (
    <motion.div
      className={`flex flex-col gap-4 ${alignCls}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading-lg max-w-2xl">
        {title} {italic && <em className="font-serif italic text-olive">{italic}</em>}
      </h2>
      {description && <p className="max-w-xl text-sm leading-relaxed text-stone md:text-base">{description}</p>}
      <span className="mt-2 inline-block h-px w-16 bg-gold" aria-hidden="true" />
    </motion.div>
  )
}
