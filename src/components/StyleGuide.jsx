import { Crown, Zap, Gem, Briefcase } from 'lucide-react'
import { STYLE_GUIDE } from '../constants'
import Words from './Words'

const ICONS = { crown: Crown, zap: Zap, gem: Gem, briefcase: Briefcase }

export default function StyleGuide() {
  return (
    <section className="relative bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl md:mb-20">
          <p className="eyebrow mb-5">Curadoria de estilo</p>
          <h2
            data-reveal
            className="r-up font-display text-[2.2rem] font-medium leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-[3.2rem]"
          >
            <Words text="Guia rápido de" step={55} />{' '}
            <span className="italic text-gold">
              <Words text="estilo." delay={180} step={70} />
            </span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STYLE_GUIDE.map((s, i) => {
            const Icon = ICONS[s.icon]
            return (
              <div
                key={s.id}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="r-up group relative border border-bone/12 bg-graphite/60 p-7 backdrop-blur-xl transition-colors duration-500 hover:border-gold/35"
              >
                <Icon size={26} strokeWidth={1.4} className="text-gold/80 transition-colors duration-300 group-hover:text-gold" />
                <h3 className="mt-5 font-display text-xl text-bone">{s.title}</h3>
                <p className="mt-3 font-body text-[13px] leading-relaxed text-bone/55">{s.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
