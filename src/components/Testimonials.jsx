import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/services'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Guest Notes" title="Words from our" italic="guests" />
        <Swiper
          modules={[Autoplay, Pagination]}
          className="mt-16 !pb-14"
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="!h-auto">
              <figure className="flex h-full flex-col rounded-2xl border border-sand bg-ivory p-8 shadow-sm">
                <Quote size={22} strokeWidth={1.2} className="text-gold" />
                <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-charcoal">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-sand pt-5">
                  <div className="mb-2 flex gap-1 text-gold" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-charcoal">{t.name}</p>
                  <p className="text-[0.65rem] uppercase tracking-widest2 text-stone">{t.service}</p>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
