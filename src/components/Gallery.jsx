import { IMAGES } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'

// PLACEHOLDER — todas as imagens abaixo devem ser substituídas por fotos reais da loja
// Ver src/constants/images.js para trocar as URLs

const ALT_TEXTS = [
  'Terno masculino em manequim — Social Ternos',
  'Detalhe de tecido e lapela de terno',
  'Noivo bem vestido com terno elegante',
  'Grupo de padrinhos com ternos combinando',
  'Prova de terno com ajuste personalizado',
  'Cabides com ternos na loja Social Ternos',
  'Terno infantil para criança em cerimônia',
  'Detalhes de acessórios: gravata e abotoaduras',
]

export default function Gallery() {
  const ref = useFadeIn()

  return (
    <section className="bg-champagne py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="fade-in text-center mb-14">
          <p className="section-label">Visual</p>
          <h2 className="section-title">Elegância em cada detalhe</h2>
          <span className="gold-line mx-auto" />
        </div>

        {/* Grid assimétrico */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[220px]">
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
      {/* PLACEHOLDER — substituir src pela URL da foto real */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </div>
  )
}
