import { useRevealObserver } from './hooks/useScrollFx'
import TopNav from './components/TopNav'
import Hero from './components/Hero'
import About from './components/About'
import Kit from './components/Kit'
import Journey from './components/Journey'
import Editorial from './components/Editorial'
import Occasions from './components/Occasions'
import MarqueeDivider from './components/MarqueeDivider'
import Catalog from './components/Catalog'
import StorePhotos from './components/StorePhotos'
import Concierge from './components/Concierge'
import FinalCTA from './components/FinalCTA'
import Location from './components/Location'
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
        <About />
        <Kit />
        <Journey />
        <Editorial />
        <Occasions />
        <MarqueeDivider />
        <Catalog />
        <StorePhotos />
        <Concierge />
        <FinalCTA />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
