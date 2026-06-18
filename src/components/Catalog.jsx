import { useMemo, useState } from 'react'
import { SUITS, CATALOG_FILTERS, BADGE_LABEL, WHATSAPP } from '../constants'
import { GALLERY_BY_KEY, SIZES } from '../constants/images'
import Words from './Words'

function matchesFilter(suit, filter) {
  if (filter === 'todos') return true
  return suit.occasion.includes(filter) || suit.availability.includes(filter)
}

export default function Catalog() {
  const [filter, setFilter] = useState('todos')
  const visible = useMemo(() => SUITS.filter((s) => matchesFilter(s, filter)), [filter])

  return (
    <section id="modelos" className="relative bg-charcoal py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <h2
            data-reveal
            className="r-up max-w-2xl font-display text-[2.2rem] font-medium leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-[3.2rem]"
          >
            <Words text="Modelos em" step={55} />{' '}
            <span className="italic text-gold">
              <Words text="destaque." delay={180} step={70} />
            </span>
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap gap-2.5 md:mb-14">
          {CATALOG_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={`rounded-full border px-4 py-2 font-body text-[12.5px] tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                filter === f.id
                  ? 'border-gold bg-gold text-ink'
                  : 'border-bone/20 text-bone/70 hover:border-bone/45 hover:text-bone'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((suit, i) => (
            <SuitCard key={suit.id} suit={suit} index={i} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-16 text-center font-body text-sm text-bone/45">
            Nenhum modelo nesse filtro ainda. Fale com a gente pelo WhatsApp para ver mais opções.
          </p>
        )}
      </div>
    </section>
  )
}

function SuitCard({ suit, index }) {
  const img = GALLERY_BY_KEY[suit.image]
  const wa = WHATSAPP.getLink(WHATSAPP.messages.suitModel(suit.name, suit.occasion[0]))

  return (
    <div
      data-reveal
      style={{ transitionDelay: `${index * 70}ms` }}
      className="r-up group relative flex flex-col overflow-hidden border border-bone/10 bg-graphite/40 transition-colors duration-500 hover:border-gold/30"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
        <img
          src={img.src}
          srcSet={img.srcSet}
          sizes={SIZES.tile}
          alt={`${suit.name} — ${suit.description}`}
          className="img-grade absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {suit.availability.map((a) => (
            <span
              key={a}
              className="bg-ink/70 px-2.5 py-1 font-body text-[10px] uppercase tracking-[0.12em] text-bone/85 backdrop-blur-sm"
            >
              {BADGE_LABEL[a]}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="eyebrow text-gold/75">{suit.style}</span>
        <h3 className="mt-2 font-display text-xl text-bone">{suit.name}</h3>
        <p className="mt-2 flex-1 font-body text-[13px] leading-relaxed text-bone/55">{suit.description}</p>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="link-sweep mt-5 self-start"
          aria-label={`Consultar disponibilidade de ${suit.name}`}
        >
          Consultar disponibilidade →
        </a>
      </div>
    </div>
  )
}
