import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { galleryImages } from '../data/gallery'
import { fadeUp, viewportOnce } from '../animations/variants'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="The Space"
          title="Inside the"
          italic="atelier"
          description="Ivory walls, olive accents, warm light — a glimpse into our world."
        />
        <div className="mt-16 columns-2 gap-4 md:columns-3 lg:columns-4 [&>div]:mb-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              custom={i % 4}
              className="group overflow-hidden rounded-2xl break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 ${
                  img.tall ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
