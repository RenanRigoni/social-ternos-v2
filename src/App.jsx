import { useRevealObserver } from './hooks/useScrollFx'
import TopNav from './components/TopNav'
import Hero from './components/Hero'
import Concierge from './components/Concierge'
import About from './components/About'
import Kit from './components/Kit'
import Positioning from './components/Positioning'
import Editorial from './components/Editorial'
import Occasions from './components/Occasions'
import Journey from './components/Journey'
import Catalog from './components/Catalog'
import Comparison from './components/Comparison'
import StyleGuide from './components/StyleGuide'
import Gallery from './components/Gallery'
import Experience from './components/Experience'
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
      <TopNav />
      <main>
        <Hero />
        <Concierge />
        <About />
        <Kit />
        <Positioning />
        <Editorial />
        <Occasions />
        <Journey />
        <Catalog />
        <Comparison />
        <StyleGuide />
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
