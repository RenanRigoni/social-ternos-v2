import { WHATSAPP, STORE } from '../constants'
import { WhatsAppIcon } from './Icons'
import Words from './Words'

export default function FinalCTA() {
  const wa = WHATSAPP.getLink(WHATSAPP.messages.hero)

  return (
    <section id="contato" className="relative overflow-hidden bg-ink py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,rgba(197,162,88,0.10),transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 mx-auto h-px w-24 bg-gold/40" />

      <div data-reveal className="r-up relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-[2.4rem] font-medium leading-[1.04] tracking-tight text-bone sm:text-5xl md:text-6xl">
          <Words text="Pronto para escolher" step={60} />
          <span className="mt-1 block italic text-gold">
            <Words text="seu traje?" delay={220} step={80} />
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-md font-body text-[15px] leading-relaxed text-bone/55">
          Agende sua prova e receba orientação para montar um visual completo para a ocasião.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full sm:w-auto"
            aria-label="Falar no WhatsApp"
          >
            <span><WhatsAppIcon size={16} /></span>
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        <p className="mt-8 font-body text-xs tracking-wide text-bone/35">
          {STORE.hours.weekdays} &nbsp;·&nbsp; {STORE.hours.saturday}
        </p>
      </div>
    </section>
  )
}
