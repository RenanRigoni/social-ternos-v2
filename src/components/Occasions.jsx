import { OCCASIONS, IMAGES } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Occasions() {
  const ref = useFadeIn()

  return (
    <section className="bg-offwhite py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="fade-in text-center mb-14">
          <p className="section-label">Para cada momento</p>
          <h2 className="section-title">Ocasiões que atendemos</h2>
          <span className="gold-line mx-auto" />
          <p className="font-body text-graphite/70 max-w-xl mx-auto leading-relaxed">
            Seja qual for o evento, a Social Ternos tem um traje adequado para você e
            para toda a família.
          </p>
        </div>

        {/* Grid de ocasiões */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {OCCASIONS.map((occasion) => (
            <OccasionCard key={occasion.id} occasion={occasion} />
          ))}
        </div>
      </div>
    </section>
  )
}

function OccasionCard({ occasion }) {
  const ref = useFadeIn()
  const imgSrc = IMAGES.occasions[occasion.id]

  return (
    <div
      ref={ref}
      className="fade-in relative group overflow-hidden aspect-[3/4] cursor-default"
    >
      {/* Imagem — PLACEHOLDER: substituir pela imagem real da ocasião correspondente */}
      <img
        src={imgSrc}
        alt={occasion.label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-heading text-offwhite text-base leading-tight">{occasion.label}</p>
        <span className="block w-8 h-px bg-gold mt-2" />
      </div>
    </div>
  )
}
