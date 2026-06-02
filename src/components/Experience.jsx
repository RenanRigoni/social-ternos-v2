import { EXPERIENCE, IMAGES, WHATSAPP } from '../constants'
import { useParallax } from '../hooks/useScrollFx'
import { WhatsAppIcon } from './Icons'
import Words from './Words'

export default function Experience() {
  const parallax = useParallax(0.1)
  const wa = WHATSAPP.getLink(WHATSAPP.messages.default)

  return (
    <section id="experiencia" className="relative bg-ink py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16 lg:px-10">

        {/* MÍDIA — sticky no desktop, cortina + parallax */}
        <div data-reveal className="r-clip md:sticky md:top-24 md:self-start">
          <div className="group relative aspect-[3/4] overflow-hidden bg-graphite">
            <div ref={parallax} className="absolute inset-0 scale-110">
              <img
                src={IMAGES.experience}
                alt="Prova e ajuste de terno com atendimento personalizado na Social Ternos"
                className="img-grade h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
            <span className="absolute bottom-6 left-6 eyebrow text-bone/75">
              A experiência Social Ternos
            </span>
          </div>
        </div>

        {/* PASSOS */}
        <div>
          <h2
            data-reveal
            className="r-up mb-12 font-display text-[2.2rem] font-medium leading-[1.06] tracking-tight text-bone sm:text-5xl md:text-[3.2rem]"
          >
            <Words text="Do primeiro aperto de" step={45} />{' '}
            <span className="italic text-gold">
              <Words text="mão ao último ajuste." delay={260} step={60} />
            </span>
          </h2>

          <ol className="border-t border-bone/10">
            {EXPERIENCE.map((step, i) => (
              <li
                key={step.n}
                data-reveal
                className="r-up group flex gap-6 border-b border-bone/10 py-7"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="font-display text-2xl italic leading-none text-gold/70 transition-colors duration-300 group-hover:text-gold">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-xl text-bone md:text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-md font-body text-[14px] leading-relaxed text-bone/55">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-12"
            aria-label="Agendar atendimento pelo WhatsApp"
          >
            <span><WhatsAppIcon size={16} /></span>
            <span>Agendar atendimento</span>
          </a>
        </div>
      </div>
    </section>
  )
}
