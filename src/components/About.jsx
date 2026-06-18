import { ABOUT } from '../constants'
import Words from './Words'

export default function About() {
  const emblem = `${import.meta.env.BASE_URL}logo/social_ternos.svg`

  return (
    <section id="sobre" className="relative overflow-hidden bg-ink py-16 md:py-24">
      {/* glow quente de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_22%_45%,rgba(197,162,88,0.07),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-20 lg:px-10">
        {/* MARCA */}
        <div data-reveal className="r-right flex justify-center md:justify-start">
          <img
            src={emblem}
            alt="Emblema Social Ternos"
            className="h-36 w-auto opacity-90 md:h-44"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {/* TEXTO */}
        <div>
          <h2
            data-reveal
            className="r-up max-w-2xl font-display text-[2.2rem] font-medium leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-[3.2rem]"
          >
            <Words text="Mais que ternos," step={55} />{' '}
            <span className="italic text-gold">
              <Words text="criamos experiências." delay={220} step={65} />
            </span>
          </h2>

          <div className="mt-9 max-w-xl space-y-5">
            {ABOUT.paragraphs.map((p, i) => (
              <p
                key={i}
                data-reveal
                className="r-blur font-body text-[15px] leading-relaxed text-bone/65"
                style={{ transitionDelay: `${120 + i * 90}ms` }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
