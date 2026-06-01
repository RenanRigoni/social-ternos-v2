import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Occasions from './components/Occasions'
import Differentials from './components/Differentials'
import Gallery from './components/Gallery'
import HowItWorks from './components/HowItWorks'
import Location from './components/Location'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <a
        href="#servicos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-black focus:text-offwhite focus:px-4 focus:py-2 focus:text-sm focus:font-body"
      >
        Pular para o conteúdo
      </a>
      <main>
        <Hero />
        <About />
        <Services />
        <Occasions />
        <Gallery />
        <Differentials />
        <HowItWorks />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
