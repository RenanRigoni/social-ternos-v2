import { EXPERIENCE } from '../constants'
import Words from './Words'

export default function Journey() {
  return (
    <section className="relative bg-charcoal py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl md:mb-20">
          <p className="eyebrow mb-5">O caminho até o seu traje</p>
          <h2
            data-reveal
            className="r-up font-display text-[2.2rem] font-medium leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-[3.2rem]"
          >
            <Words text="Como" step={55} />{' '}
            <span className="italic text-gold">
              <Words text="funciona." delay={160} step={70} />
            </span>
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCE.map((step, i) => (
            <div
              key={step.n}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="r-up group relative flex flex-col gap-4 bg-ink p-7 md:p-8"
            >
              <span className="font-display text-3xl italic text-gold/70 transition-colors duration-300 group-hover:text-gold">
                {step.n}
              </span>
              <h3 className="font-display text-xl text-bone md:text-[1.4rem]">{step.title}</h3>
              <p className="font-body text-[13.5px] leading-relaxed text-bone/55">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
