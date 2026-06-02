import { KIT, WHATSAPP } from '../constants'
import LineIcon from './LineIcons'
import Words from './Words'

export default function Kit() {
  const wa = WHATSAPP.getLink(WHATSAPP.messages.default)

  return (
    <section id="kit" className="relative overflow-hidden bg-charcoal py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(197,162,88,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-12 max-w-3xl md:mb-16">
          <p className="eyebrow mb-5">O kit completo</p>
          <h2
            data-reveal
            className="r-up font-display text-[2rem] font-medium leading-[1.07] tracking-tight text-bone sm:text-4xl md:text-[2.8rem]"
          >
            <Words text="O terno sai pronto," step={50} />{' '}
            <span className="italic text-gold">
              <Words text="da cabeça aos pés." delay={220} step={65} />
            </span>
          </h2>
          <p
            data-reveal
            className="r-blur mt-5 max-w-xl font-body text-[15px] leading-relaxed text-bone/60"
            style={{ transitionDelay: '120ms' }}
          >
            Você não monta nada por conta. O look já vai completo e combinado para
            a ocasião, do paletó ao sapato.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-5 md:gap-y-0">
          {KIT.map((item, i) => (
            <li
              key={item.label}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`r-up group flex flex-col items-center gap-4 px-3 text-center md:px-5 ${
                i > 0 ? 'md:border-l md:border-bone/10' : ''
              }`}
            >
              <span className="text-gold/85 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                <LineIcon name={item.icon} size={38} />
              </span>
              <span className="font-body text-[13px] uppercase tracking-[0.12em] text-bone">
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-14 text-center font-body text-[13px] text-bone/45">
          Disponível para{' '}
          <a href={wa} target="_blank" rel="noopener noreferrer" className="text-gold underline-offset-4 hover:underline">
            venda e aluguel
          </a>
          .
        </p>
      </div>
    </section>
  )
}
