import Hero from '../components/Hero'
import About from '../components/About'
import SignatureServices from '../components/SignatureServices'
import PremiumServices from '../components/PremiumServices'
import Pricing from '../components/Pricing'
import Membership from '../components/Membership'
import WhyChoose from '../components/WhyChoose'
import BeforeAfter from '../components/BeforeAfter'
import Bridal from '../components/Bridal'
import Products from '../components/Products'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SignatureServices />
      <PremiumServices />
      <Pricing />
      <Membership />
      <WhyChoose />
      <BeforeAfter />
      <Bridal />
      <Products />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
