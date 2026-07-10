import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Check, ChevronLeft, CalendarDays, Clock, User, Scissors, Sparkles } from 'lucide-react'
import { pricingCategories } from '../data/pricing'
import { timeSlots } from '../data/services'

const steps = ['Service', 'Date', 'Time', 'Details', 'Confirmed']

const stepVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.3 } },
}

function OptionCard({ selected, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
        selected
          ? 'border-olive bg-olive text-ivory shadow-md'
          : 'border-sand bg-ivory text-charcoal hover:border-olive/40 hover:shadow-sm'
      }`}
    >
      {children}
    </button>
  )
}

export default function Booking() {
  const [step, setStep] = useState(0)
  const [booking, setBooking] = useState({ service: '', date: '', time: '' })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const serviceOptions = useMemo(
    () => pricingCategories.map((c) => c.category),
    []
  )

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))
  const pick = (key, value) => {
    setBooking((b) => ({ ...b, [key]: value }))
    next()
  }

  const minDate = new Date().toISOString().split('T')[0]

  const onSubmit = (data) => {
    setBooking((b) => ({ ...b, ...data }))
    next()
  }

  return (
    <section className="min-h-screen bg-cream pb-24 pt-32 md:pt-40">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <span className="eyebrow">Reservations</span>
          <h1 className="heading-lg mt-4">
            Book your <em className="italic text-olive">experience</em>
          </h1>
        </div>

        {/* progress */}
        <div className="mt-12 flex items-center justify-between" role="list" aria-label="Booking progress">
          {steps.map((label, i) => (
            <div key={label} className="flex flex-1 items-center last:flex-none" role="listitem">
              <div className="flex flex-col items-center gap-2">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs transition-all duration-500 ${
                    i < step
                      ? 'border-olive bg-olive text-ivory'
                      : i === step
                        ? 'border-olive text-olive'
                        : 'border-sand text-stone'
                  }`}
                >
                  {i < step ? <Check size={13} /> : i + 1}
                </span>
                <span className="hidden text-[0.55rem] uppercase tracking-widest2 text-stone md:block">
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <span
                  className={`mx-2 h-px flex-1 transition-colors duration-500 ${
                    i < step ? 'bg-olive' : 'bg-sand'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-ivory p-6 shadow-sm md:p-10">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="service" variants={stepVariants} initial="enter" animate="center" exit="exit">
                <h2 className="heading-md flex items-center gap-3">
                  <Scissors size={22} strokeWidth={1.3} className="text-olive" /> Choose a service
                </h2>
                <div className="mt-8 grid max-h-[26rem] gap-3 overflow-y-auto pr-1 sm:grid-cols-2">
                  {serviceOptions.map((s) => (
                    <OptionCard key={s} selected={booking.service === s} onClick={() => pick('service', s)}>
                      <span className="font-serif text-lg">{s}</span>
                    </OptionCard>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="date" variants={stepVariants} initial="enter" animate="center" exit="exit">
                <h2 className="heading-md flex items-center gap-3">
                  <CalendarDays size={22} strokeWidth={1.3} className="text-olive" /> Choose a date
                </h2>
                <input
                  type="date"
                  min={minDate}
                  value={booking.date}
                  onChange={(e) => setBooking((b) => ({ ...b, date: e.target.value }))}
                  className="mt-8 w-full rounded-2xl border border-sand bg-cream px-5 py-4 font-serif text-lg text-charcoal outline-none focus:border-olive"
                />
                <button className="btn-primary mt-8" disabled={!booking.date} onClick={next}>
                  Continue
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="time" variants={stepVariants} initial="enter" animate="center" exit="exit">
                <h2 className="heading-md flex items-center gap-3">
                  <Clock size={22} strokeWidth={1.3} className="text-olive" /> Choose a time
                </h2>
                <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-5">
                  {timeSlots.map((t) => (
                    <OptionCard key={t} selected={booking.time === t} onClick={() => pick('time', t)}>
                      <span className="block text-center text-sm">{t}</span>
                    </OptionCard>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="details" variants={stepVariants} initial="enter" animate="center" exit="exit">
                <h2 className="heading-md flex items-center gap-3">
                  <Sparkles size={22} strokeWidth={1.3} className="text-olive" /> Your details
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                  <div>
                    <input
                      placeholder="Full name"
                      {...register('name', { required: 'Please enter your name' })}
                      className="w-full rounded-2xl border border-sand bg-cream px-5 py-4 text-sm outline-none focus:border-olive"
                    />
                    {errors.name && <p className="mt-2 text-xs text-red-800">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input
                      placeholder="Phone number"
                      type="tel"
                      {...register('phone', {
                        required: 'Please enter your phone number',
                        pattern: { value: /^[0-9+\-\s]{10,15}$/, message: 'Enter a valid phone number' },
                      })}
                      className="w-full rounded-2xl border border-sand bg-cream px-5 py-4 text-sm outline-none focus:border-olive"
                    />
                    {errors.phone && <p className="mt-2 text-xs text-red-800">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <input
                      placeholder="Email (optional)"
                      type="email"
                      {...register('email', {
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                      })}
                      className="w-full rounded-2xl border border-sand bg-cream px-5 py-4 text-sm outline-none focus:border-olive"
                    />
                    {errors.email && <p className="mt-2 text-xs text-red-800">{errors.email.message}</p>}
                  </div>
                  <textarea
                    placeholder="Notes (optional)"
                    rows={3}
                    {...register('notes')}
                    className="w-full rounded-2xl border border-sand bg-cream px-5 py-4 text-sm outline-none focus:border-olive"
                  />
                  <button type="submit" className="btn-primary w-full">
                    Confirm Appointment
                  </button>
                </form>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="confirmed"
                variants={stepVariants}
                initial="enter"
                animate="center"
                className="py-6 text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-olive text-ivory"
                >
                  <Check size={28} strokeWidth={1.5} />
                </motion.span>
                <h2 className="heading-md mt-6">You&apos;re booked, {booking.name}</h2>
                <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-stone">
                  {booking.service} on {booking.date} at {booking.time}. We
                  will confirm shortly on {booking.phone}. We look forward to welcoming you.
                </p>
                <a href="/" className="btn-outline mt-8">
                  Return Home
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {step > 0 && step < 4 && (
            <button
              onClick={back}
              className="mt-8 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-widest2 text-stone transition-colors hover:text-olive"
            >
              <ChevronLeft size={14} /> Back
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
