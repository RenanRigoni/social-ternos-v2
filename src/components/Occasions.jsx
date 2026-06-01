import { OCCASIONS, IMAGES } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Occasions() {
  const ref = useFadeIn()

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header — sem eyebrow, sem parágrafo redundante */}
        <div ref={ref} className="fade-in text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl text-graphite leading-tight">
            Ocasiões que atendemos
          </h2>
          <span className="block w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Grid de ocasiões */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
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
      <img
        src={imgSrc}
        alt={occasion.label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

      {/* Borda dourada no hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/60 transition-colors duration-300" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-heading text-offwhite text-sm leading-tight line-clamp-2">{occasion.label}</p>
        <span className="block w-6 h-px bg-gold mt-2 transition-all duration-300 group-hover:w-10" />
      </div>
    </div>
  )
}
