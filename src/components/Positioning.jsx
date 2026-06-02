import { MARQUEE } from '../constants'
import Words from './Words'

export default function Positioning() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-36">

      {/* DIVISÓRIA MARQUEE — palavras correndo */}
      <div className="relative flex select-none border-y border-bone/10 py-5">
        <div className="flex w-max animate-marquee items-center" aria-hidden="true">
          {[...MARQUEE, ...MARQUEE].map((word, i) => (
            <span key={i} className="flex items-center">
              <span className="px-6 font-display text-2xl italic text-bone/25 md:text-3xl">
                {word}
              </span>
              <span className="h-3.5 w-px bg-gold/30" />
            </span>
          ))}
        </div>
      </div>

      {/* DECLARAÇÃO DE POSICIONAMENTO */}
      <div className="mx-auto max-w-5xl px-6 pt-20 md:pt-28">
        <p className="eyebrow mb-8">A presença começa no traje</p>
        <h2
          data-reveal
          className="r-up max-w-4xl font-display text-[2.4rem] font-medium leading-[1.04] tracking-tight text-bone sm:text-5xl md:text-6xl"
        >
          <Words text="Ternos para ocasiões que" step={55} />{' '}
          <span className="italic text-gold">
            <Words text="exigem presença." delay={260} step={70} />
          </span>
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-[auto_1fr] md:items-start md:gap-14">
          <span className="hairline mt-3 hidden md:block" />
          <p
            data-reveal
            className="r-blur max-w-xl font-body text-[15px] leading-relaxed text-bone/55"
            style={{ transitionDelay: '120ms' }}
          >
            Há momentos que pedem mais do que estar bem vestido. A Social Ternos
            cuida do caimento, do tecido e de cada detalhe para que você entre em
            cena com a confiança de quem está à altura da ocasião.
          </p>
        </div>
      </div>
    </section>
  )
}
