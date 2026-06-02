import { OCCASIONS, IMAGES, WHATSAPP, SIZES } from '../constants'
import Words from './Words'

// Spans por índice — grid editorial assimétrico (mobile 2-col, md 12-col).
function tileClass(occ, i) {
  if (occ.featured) return 'col-span-2 md:col-span-6 aspect-[4/3] md:aspect-[16/11]'
  if (i === 1 || i === 2) return 'col-span-1 md:col-span-3 aspect-[3/4]'
  if (i === 5) return 'col-span-2 md:col-span-4 aspect-[16/10] md:aspect-[5/6]'
  return 'col-span-1 md:col-span-4 aspect-[3/4] md:aspect-[5/6]'
}

export default function Occasions() {
  return (
    <section id="ocasioes" className="relative bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <h2
            data-reveal
            className="r-up max-w-2xl font-display text-[2.2rem] font-medium leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-[3.2rem]"
          >
            <Words text="Para cada ocasião," step={50} />{' '}
            <span className="italic text-gold">
              <Words text="uma presença à altura." delay={220} step={60} />
            </span>
          </h2>
          <p
            data-reveal
            className="r-blur max-w-xs font-body text-[14px] leading-relaxed text-bone/50"
            style={{ transitionDelay: '120ms' }}
          >
            Casamentos, formaturas, padrinhos, pajens e eventos corporativos. Trajes
            pensados para o seu papel no dia.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
          {OCCASIONS.map((occ, i) => (
            <OccasionTile key={occ.id} occ={occ} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function OccasionTile({ occ, index }) {
  const wa = WHATSAPP.getLink(WHATSAPP.messages.occasion(occ.label.toLowerCase()))
  const featured = occ.featured

  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      data-reveal
      style={{ transitionDelay: `${index * 70}ms` }}
      className={`r-clip group relative block overflow-hidden bg-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${tileClass(occ, index)}`}
      aria-label={`Traje para ${occ.label} — falar pelo WhatsApp`}
    >
      <img
        src={IMAGES.occasions[occ.id].src}
        srcSet={IMAGES.occasions[occ.id].srcSet}
        sizes={SIZES.tile}
        alt={occ.label}
        className="img-grade absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
      <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-gold/40" />

      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        {featured && occ.note && (
          <p className="eyebrow mb-2 text-bone/60">{occ.note}</p>
        )}
        <div className="flex items-end justify-between gap-2">
          <h3
            className={`font-display leading-none text-bone ${
              featured ? 'text-3xl md:text-5xl' : 'text-lg md:text-xl'
            }`}
          >
            {occ.label}
          </h3>
          <span className="translate-x-2 pb-1 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            →
          </span>
        </div>
        <span className="mt-3 block h-px w-6 bg-gold transition-all duration-500 group-hover:w-14" />
      </div>
    </a>
  )
}
