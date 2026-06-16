import { COMPARISON, WHATSAPP } from '../constants'
import Words from './Words'

export default function Comparison() {
  const waRent = WHATSAPP.getLink(WHATSAPP.messages.rentHelp)
  const waBuy = WHATSAPP.getLink(WHATSAPP.messages.buyHelp)
  const waDecide = WHATSAPP.getLink(WHATSAPP.messages.decideHelp)

  return (
    <section className="relative bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl md:mb-20">
          <p className="eyebrow mb-5">Sua decisão, sem pressa</p>
          <h2
            data-reveal
            className="r-up font-display text-[2.2rem] font-medium leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-[3.2rem]"
          >
            <Words text="Alugar ou" step={55} />{' '}
            <span className="italic text-gold">
              <Words text="comprar?" delay={150} step={70} />
            </span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <CompareCard data={COMPARISON.rent} wa={waRent} delay={0} />
          <CompareCard data={COMPARISON.buy} wa={waBuy} delay={100} />
        </div>

        <div
          data-reveal
          style={{ transitionDelay: '220ms' }}
          className="r-up mt-5 flex flex-col items-start justify-between gap-5 border border-gold/25 bg-gradient-to-r from-graphite/60 to-graphite/20 p-7 md:flex-row md:items-center md:p-9"
        >
          <div>
            <h3 className="font-display text-xl text-bone md:text-2xl">{COMPARISON.helper.title}</h3>
            <p className="mt-2 max-w-md font-body text-[13.5px] leading-relaxed text-bone/60">
              {COMPARISON.helper.text}
            </p>
          </div>
          <a href={waDecide} target="_blank" rel="noopener noreferrer" className="btn-gold w-full shrink-0 sm:w-auto">
            <span>{COMPARISON.helper.cta}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function CompareCard({ data, wa, delay }) {
  return (
    <div
      data-reveal
      style={{ transitionDelay: `${delay}ms` }}
      className="r-up group relative flex flex-col border border-bone/12 bg-graphite/50 p-7 backdrop-blur-xl transition-colors duration-500 hover:border-gold/30 md:p-9"
    >
      <h3 className="font-display text-2xl text-bone md:text-3xl">{data.title}</h3>
      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {data.points.map((point) => (
          <li key={point} className="flex items-center gap-3 font-body text-[13.5px] text-bone/65">
            <span className="h-px w-4 shrink-0 bg-gold/60" />
            {point}
          </li>
        ))}
      </ul>
      <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-8 w-full sm:w-auto">
        <span>{data.cta}</span>
      </a>
    </div>
  )
}
