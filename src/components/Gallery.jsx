import { IMAGES } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'

const ALT_TEXTS = [
  'Homem com terno escuro — Social Ternos',
  'Detalhe de lapela e tecido de terno',
  'Homem jovem em traje social elegante',
  'Grupo de padrinhos com ternos combinando',
  'Alfaiate realizando ajuste personalizado em terno',
  'Homens em trajes sociais em evento formal',
  'Homem elegante com traje social completo',
  'Cerimônia com trajes formais e elegantes',
]

export default function Gallery() {
  const ref = useFadeIn()

  return (
    <section className="bg-[#0c0c0c] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header — sem eyebrow */}
        <div ref={ref} className="fade-in mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-offwhite leading-tight">
            Elegância em cada detalhe
          </h2>
          <span className="block w-12 h-px bg-gold mt-6" />
        </div>

        {/* Grid assimétrico — fotos sobre fundo escuro */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 auto-rows-[200px] md:auto-rows-[240px]">
          {IMAGES.gallery.map((src, i) => (
            <GalleryItem
              key={i}
              src={src}
              alt={ALT_TEXTS[i]}
              span={i === 0 || i === 5 ? 'col-span-2 row-span-2' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryItem({ src, alt, span }) {
  const ref = useFadeIn()

  return (
    <div ref={ref} className={`fade-in relative overflow-hidden group ${span}`}>
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
