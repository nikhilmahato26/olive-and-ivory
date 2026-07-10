import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import useLenis from './hooks/useLenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'

const BookingPage = lazy(() => import('./pages/BookingPage'))

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function App() {
  useLenis()
  const location = useLocation()

  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} {...pageTransition}>
            <Suspense fallback={<div className="flex h-screen items-center justify-center font-serif text-2xl italic text-olive">Olive &amp; Ivory…</div>}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/book" element={<BookingPage />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
