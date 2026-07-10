import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { fadeLeft, fadeRight, viewportOnce } from '../animations/variants'

const details = [
  { icon: Phone, label: 'Phone', value: '+91 92811 16233, +91 91000 86327', href: 'tel:+919281116233' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+91 92811 16233, +91 91000 86327', href: 'https://wa.me/919281116233' },
  { icon: Mail, label: 'Email', value: 'oliveandivory1@gmail.com', href: 'mailto:oliveandivory1@gmail.com' },
  { icon: MapPin, label: 'Address', value: "B Block, Sree Hanuma's Pagadala Pride, Bachupally X Roads, Flat No. 303, Hyderabad, Telangana 500090 (Above Angaara Restaurant)", href: "https://maps.google.com/?q=Sree+Hanuma's+Pagadala+Pride,+Bachupally,+Hyderabad" },
  { icon: Clock, label: 'Hours', value: 'Mon – Sun · 10:00 AM – 8:00 PM' },
]

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const onSubmit = () => reset(undefined, { keepIsSubmitSuccessful: true })

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Visit Us" title="Begin your" italic="ritual" />
        <div className="mt-16 grid gap-14 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
            <ul className="space-y-7">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sand text-olive">
                    <d.icon size={17} strokeWidth={1.3} />
                  </span>
                  <div>
                    <p className="eyebrow">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="mt-1 block font-serif text-lg text-charcoal hover:text-olive">
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-serif text-lg text-charcoal">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 overflow-hidden rounded-2xl border border-sand">
              <iframe
                title="Olive & Ivory location"
                src="https://www.google.com/maps?q=Sree+Hanuma's+Pagadala+Pride,+Bachupally,+Hyderabad&output=embed"
                className="h-64 w-full grayscale-[40%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeRight}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl bg-cream p-8 md:p-10"
          >
            <h3 className="heading-md">Send us a note</h3>
            <div className="mt-8 space-y-5">
              <div>
                <input
                  placeholder="Full name"
                  {...register('name', { required: 'Please enter your name' })}
                  className="w-full rounded-2xl border border-sand bg-ivory px-5 py-4 text-sm outline-none focus:border-olive"
                />
                {errors.name && <p className="mt-2 text-xs text-red-800">{errors.name.message}</p>}
              </div>
              <div>
                <input
                  placeholder="Phone number"
                  type="tel"
                  {...register('phone', { required: 'Please enter your phone number' })}
                  className="w-full rounded-2xl border border-sand bg-ivory px-5 py-4 text-sm outline-none focus:border-olive"
                />
                {errors.phone && <p className="mt-2 text-xs text-red-800">{errors.phone.message}</p>}
              </div>
              <textarea
                placeholder="How can we help?"
                rows={4}
                {...register('message')}
                className="w-full rounded-2xl border border-sand bg-ivory px-5 py-4 text-sm outline-none focus:border-olive"
              />
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
              {isSubmitSuccessful && (
                <p className="text-center text-sm text-olive">
                  Thank you — we will be in touch very soon.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
