import { Instagram, ArrowRight } from 'lucide-react'

const quickLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Bridal', href: '/#bridal' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-olive-deep pb-10 pt-20 text-ivory">
      <div className="container-page">
        <div className="grid gap-14 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Olive & Ivory logo" className="h-12 w-12 object-contain brightness-0 invert opacity-90" />
              <span className="font-serif text-2xl">
                Olive <span className="text-gold">&amp;</span> Ivory
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
              Luxury Unisex Beauty Salon. Where timeless beauty meets modern luxury.
            </p>
            <a
              href="https://www.instagram.com/oliveandivorysalon?igsh=MXZsa2hwejI0a245Mg=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/25 text-ivory/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram size={17} strokeWidth={1.3} />
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow !text-ivory/50">Quick Links</p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="link-underline font-serif text-lg text-ivory/85 hover:text-ivory">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://wa.me/919281116233" target="_blank" rel="noreferrer" className="link-underline font-serif text-lg text-gold">
                  Book Appointment
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow !text-ivory/50">Newsletter</p>
            <p className="mt-5 text-sm leading-relaxed text-ivory/60">
              Occasional notes on new rituals, seasonal offers and member previews.
            </p>
            <form
              className="mt-6 flex overflow-hidden rounded-full border border-ivory/25"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="w-full bg-transparent px-5 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center bg-ivory px-5 text-olive transition-colors hover:bg-gold hover:text-charcoal"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/15 pt-8 md:flex-row">
          <p className="text-xs text-ivory/45">
            © {new Date().getFullYear()} Olive &amp; Ivory — Luxury Unisex Beauty Salon. All rights reserved.
          </p>
          <p className="font-serif text-sm italic text-ivory/45">Beauty crafted with elegance.</p>
        </div>
      </div>
    </footer>
  )
}
