import { useState } from 'react'
import { EXPERIENCE } from '../constants'
import Words from './Words'

export default function Journey() {
  const [active, setActive] = useState(null)

  return (
    <section id="como-funciona" className="relative bg-charcoal py-16 md:py-24">
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

        <div className="grid items-start gap-px overflow-hidden border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCE.map((step, i) => {
            const isActive = active === step.n
            const revealClass = isActive
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100'
            const numClass = isActive
              ? 'text-gold'
              : 'text-gold/70 group-hover:text-gold'
            const ringClass = isActive
              ? 'ring-1 ring-inset ring-gold/[0.22]'
              : 'hover:ring-1 hover:ring-inset hover:ring-gold/[0.22]'

            return (
              <div
                key={step.n}
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
                className={`r-up group relative flex flex-col gap-4 bg-ink p-7 md:p-8 cursor-pointer select-none ${ringClass}`}
                onClick={() => setActive(isActive ? null : step.n)}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-5 right-5 font-body text-[18px] leading-none transition-all duration-300 ${
                    isActive ? 'rotate-45 text-gold' : 'text-gold/50 group-hover:text-gold/80'
                  }`}
                >+</span>
                <span className={`font-display text-3xl italic transition-colors duration-300 ${numClass}`}>
                  {step.n}
                </span>
                <h3 className="font-display text-xl text-bone md:text-[1.4rem]">{step.title}</h3>
                <p className="font-body text-[13.5px] leading-relaxed text-bone/55">{step.text}</p>

                <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${revealClass}`}>
                  <div className="border-t border-bone/10 pt-4">
                      <p className="font-body text-[13px] leading-relaxed text-bone/65">
                        {step.detail}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {step.bullets.map(b => (
                          <li key={b} className="flex items-start gap-2 font-body text-[12px] text-bone/45">
                            <span className="mt-px shrink-0 select-none text-gold/50">—</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
