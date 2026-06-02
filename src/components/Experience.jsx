import { REASONS, IMAGES, WHATSAPP, SIZES } from '../constants'
import { useParallax } from '../hooks/useScrollFx'
import { WhatsAppIcon } from './Icons'
import LineIcon from './LineIcons'
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
                src={IMAGES.experience.src}
                srcSet={IMAGES.experience.srcSet}
                sizes={SIZES.half}
                alt="Prova e ajuste de terno com atendimento personalizado na Social Ternos"
                className="img-grade h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
            <span className="absolute bottom-6 left-6 eyebrow text-bone/75">
              A experiência Social Ternos
            </span>
          </div>
        </div>

        {/* MOTIVOS */}
        <div>
          <h2
            data-reveal
            className="r-up font-display text-[2.2rem] font-medium leading-[1.06] tracking-tight text-bone sm:text-5xl md:text-[3.2rem]"
          >
            <Words text="O que nos torna a" step={50} />{' '}
            <span className="italic text-gold">
              <Words text="escolha certa." delay={240} step={70} />
            </span>
          </h2>

          <ul className="mt-10 border-t border-bone/10">
            {REASONS.map((r, i) => (
              <li
                key={r.title}
                data-reveal
                className="r-up group flex items-center gap-5 border-b border-bone/10 py-6"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="text-gold/80 transition-colors duration-300 group-hover:text-gold">
                  <LineIcon name={r.icon} size={30} />
                </span>
                <h3 className="font-display text-xl text-bone md:text-2xl">{r.title}</h3>
                <span className="ml-auto text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </li>
            ))}
          </ul>

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
