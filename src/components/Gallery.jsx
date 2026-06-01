import { IMAGES } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'

const ALT_TEXTS = [
  'Homem com terno escuro elegante — Social Ternos',
  'Detalhe de lapela e tecido de terno premium',
  'Homem jovem com traje social impecável',
  'Grupo de padrinhos com ternos combinando',
  'Alfaiate realizando ajuste personalizado em terno',
  'Homens em trajes sociais em cerimônia',
  'Homem elegante com traje social completo',
  'Cerimônia com trajes formais e sofisticados',
]

export default function Gallery() {
  const ref = useFadeIn()

  return (
    <section className="bg-black pt-24 md:pt-32">
      {/* Header dentro do container */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div ref={ref} className="fade-in">
          <h2 className="font-heading text-4xl md:text-5xl text-offwhite leading-tight">
            Detalhes que fazem diferença no caimento
          </h2>
          <span className="block w-12 h-px bg-gold mt-6" />
        </div>
      </div>

      {/* Grid full-bleed — sem container, imagens vão até as bordas */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[280px] gap-px bg-gold/[0.12]">
        {IMAGES.gallery.map((src, i) => (
          <GalleryItem key={i} src={src} alt={ALT_TEXTS[i]} />
        ))}
      </div>
    </section>
  )
}

function GalleryItem({ src, alt }) {
  return (
    <div className="relative overflow-hidden group">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />
    </div>
  )
}
