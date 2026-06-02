import { WHATSAPP, STORE } from '../constants'
import { WhatsAppIcon } from './Icons'
import Words from './Words'

export default function FinalCTA() {
  const wa = WHATSAPP.getLink(WHATSAPP.messages.default)

  return (
    <section id="contato" className="relative overflow-hidden bg-ink py-28 md:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,rgba(197,162,88,0.10),transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 mx-auto h-px w-24 bg-gold/40" />

      <div data-reveal className="r-up relative mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow mb-8">Social Ternos · Patrocínio-MG</p>
        <h2 className="font-display text-[2.6rem] font-medium leading-[1.04] tracking-tight text-bone sm:text-6xl md:text-7xl">
          <Words text="Encontre o traje" step={60} />
          <span className="mt-1 block italic text-gold">
            <Words text="do seu momento." delay={240} step={80} />
          </span>
        </h2>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            aria-label="Agendar atendimento pelo WhatsApp"
          >
            <span><WhatsAppIcon size={16} /></span>
            <span>Agendar atendimento</span>
          </a>
          <a href="#localizacao" className="btn-ghost">
            <span>Ver localização</span>
          </a>
        </div>

        <p className="mt-10 font-body text-xs tracking-wide text-bone/35">
          {STORE.hours.weekdays} &nbsp;·&nbsp; {STORE.hours.saturday}
        </p>
      </div>
    </section>
  )
}
