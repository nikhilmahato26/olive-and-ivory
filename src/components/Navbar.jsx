import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Bridal', href: '/#bridal' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const solid = scrolled || open || pathname !== '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-sand/70 bg-ivory/85 shadow-[0_1px_20px_rgba(43,43,38,0.05)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Olive & Ivory home">
          <img src="/logo.png" alt="" className="h-11 w-11 rounded-full object-cover" />
          <span
            className={`font-serif text-xl tracking-wide ${
              solid ? 'text-olive' : 'text-ivory'
            } transition-colors duration-500`}
          >
            Olive <span className="text-gold">&amp;</span> Ivory
          </span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`link-underline font-serif text-[0.95rem] tracking-[0.08em] transition-colors duration-500 ${
                  solid ? 'text-charcoal hover:text-olive' : 'text-ivory/90 hover:text-ivory'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/919281116233" target="_blank" rel="noreferrer" className="btn-primary hidden md:inline-flex">
            Book Appointment
          </a>
          <button
            className={`lg:hidden ${solid ? 'text-olive' : 'text-ivory'}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-sand bg-ivory lg:hidden"
          >
            <ul className="container-page flex flex-col gap-5 py-8">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-2xl text-charcoal"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://wa.me/919281116233" target="_blank" rel="noreferrer" className="btn-primary mt-2 flex justify-center" onClick={() => setOpen(false)}>
                  Book Appointment
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
