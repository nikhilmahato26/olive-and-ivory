import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/919281116233"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 16 }}
        whileHover={{ scale: 1.08 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-olive text-ivory shadow-lg"
      >
        <MessageCircle size={20} strokeWidth={1.5} />
      </motion.a>
      <motion.a
        href="tel:+919281116233"
        aria-label="Call us"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.35, type: 'spring', stiffness: 200, damping: 16 }}
        whileHover={{ scale: 1.08 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal text-ivory shadow-lg"
      >
        <Phone size={20} strokeWidth={1.5} />
      </motion.a>
    </div>
  )
}
