import { useRevealObserver } from './hooks/useScrollFx'
import TopNav from './components/TopNav'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Kit from './components/Kit'
import Positioning from './components/Positioning'
import Editorial from './components/Editorial'
import Occasions from './components/Occasions'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Location from './components/Location'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  useRevealObserver()

  return (
    <div className="grain relative">
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-ink focus:px-4 focus:py-2 focus:text-sm focus:font-body"
      >
        Pular para o conteúdo
      </a>
      <CustomCursor />
      <TopNav />
      <main>
        <Hero />
        <About />
        <Services />
        <Kit />
        <Positioning />
        <Editorial />
        <Occasions />
        <Gallery />
        <Experience />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
