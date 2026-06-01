import { OCCASIONS, IMAGES } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Occasions() {
  const ref = useFadeIn()

  return (
    <section id="ocasioes" className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="fade-in mb-14">
          <h2 className="font-heading text-4xl md:text-5xl text-offwhite leading-tight">
            Noivos, padrinhos, formandos e eventos sociais
          </h2>
          <span className="block w-12 h-px bg-gold mt-6" />
        </div>

        {/* Grid de ocasiões */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
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

      {/* Overlay base + hover intensifica */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-400" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />

      {/* Borda dourada no hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-colors duration-400" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <p className="font-heading text-offwhite text-sm leading-snug line-clamp-2">{occasion.label}</p>
        <span className="block h-px bg-gold mt-2.5 transition-all duration-400 w-6 group-hover:w-10" />
      </div>
    </div>
  )
}
