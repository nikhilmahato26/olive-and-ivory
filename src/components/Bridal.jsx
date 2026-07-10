import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, viewportOnce } from '../animations/variants'
import { bridalServices } from '../data/gallery'

export default function Bridal() {
  return (
    <section id="bridal" className="bg-olive py-24 text-ivory md:py-32">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeLeft}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.pexels.com/photos/29368881/pexels-photo-29368881.jpeg"
              alt="Bridal makeup and styling at Olive & Ivory"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
            />
          </div>
          <span className="pointer-events-none absolute -left-4 -top-6 font-serif text-[7rem] italic leading-none text-ivory/10 md:text-[10rem]">
            Bride
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeRight}
        >
          <span className="eyebrow !text-ivory/60">The Bridal Collection</span>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight md:text-5xl">
            Composed for the <em className="italic text-gold">aisle</em>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-[1.9] text-ivory/70 md:text-base">
            From the trial to the toast — a complete bridal atelier with in-salon and at-venue
            artistry, styled with editorial restraint and photographed-for-life polish.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-x-8">
            {bridalServices.map((s) => (
              <li
                key={s}
                className="border-b border-ivory/15 py-4 font-serif text-lg text-ivory/90 md:text-xl"
              >
                {s}
              </li>
            ))}
          </ul>
          <a href="https://wa.me/919281116233" target="_blank" rel="noreferrer" className="btn-ivory mt-10">
            Reserve Your Date
          </a>
        </motion.div>
      </div>
    </section>
  )
}
