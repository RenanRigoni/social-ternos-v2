import { SERVICES } from '../constants'
import LineIcon from './LineIcons'
import Words from './Words'

export default function Services() {
  return (
    <section id="servicos" className="relative bg-bone py-24 text-ink md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-14 text-center md:mb-20">
          <p className="font-body text-[11px] uppercase tracking-[0.35em] text-[#8a6d2e]">
            Nossos Serviços
          </p>
          <h2
            data-reveal
            className="r-up mt-5 font-display text-[2.2rem] font-medium leading-[1.06] tracking-tight text-ink sm:text-5xl md:text-[3.2rem]"
          >
            <Words text="Soluções para" step={55} />{' '}
            <span className="italic text-[#9a7a33]">
              <Words text="cada ocasião." delay={200} step={70} />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-7 lg:gap-y-0">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`r-up group flex flex-col items-center px-3 text-center lg:px-4 ${
                i > 0 ? 'lg:border-l lg:border-ink/10' : ''
              }`}
            >
              <div className="text-[#9a7a33] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                <LineIcon name={s.icon} size={34} />
              </div>
              <h3 className="mt-5 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">
                {s.title}
              </h3>
              <p className="mt-2.5 font-body text-[12.5px] leading-relaxed text-ink/60">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
