import { STORE, WHATSAPP, IMAGES } from '../constants'
import { useParallax } from '../hooks/useScrollFx'
import { WhatsAppIcon } from './Icons'
import Words from './Words'

export default function Hero() {
  const whatsappHero = WHATSAPP.getLink(WHATSAPP.messages.hero)
  const parallax = useParallax(0.12)

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink">

      {/* CAMADA DE IMAGEM — full-bleed, ken-burns + parallax */}
      <div ref={parallax} className="absolute inset-0 -z-0 scale-110">
        <img
          src={IMAGES.hero}
          alt="Terno masculino de alta qualidade — Social Ternos"
          className="h-full w-full object-cover object-[50%_25%] animate-kenburns"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* OVERLAYS — vinheta quente + gradiente inferior para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-transparent to-ink/30" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_30%,transparent_45%,rgba(11,10,9,0.7)_100%)]" />

      {/* TOPO — logo + selo */}
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <img
          src={`${import.meta.env.BASE_URL}logo/social_ternos.svg`}
          alt={`Logo ${STORE.name}`}
          className="h-9 w-auto opacity-90 brightness-0 invert md:h-11"
        />
        <span className="hidden items-center gap-2.5 sm:flex">
          <span className="h-px w-7 bg-gold/60" />
          <span className="font-body text-[10px] uppercase tracking-[0.35em] text-bone/70">
            Venda &amp; Aluguel
          </span>
        </span>
      </header>

      {/* LATERAL DIREITA — rótulo vertical editorial */}
      <a
        href={STORE.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-7 top-1/2 z-20 hidden -translate-y-1/2 rotate-90 items-center gap-3 font-body text-[10px] uppercase tracking-[0.35em] text-bone/45 transition-colors duration-300 hover:text-gold lg:flex"
      >
        <span className="h-px w-8 bg-gold/40" />
        {STORE.instagram}
      </a>

      {/* CONTEÚDO — base, alinhado à esquerda */}
      <div
        data-reveal
        className="r-up absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-10 md:pb-20 lg:px-14 lg:pb-24"
      >
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow text-bone/70">{STORE.city} · Alfaiataria</span>
          </div>

          <h1 className="font-display text-[3rem] font-medium leading-[0.92] tracking-tight text-bone sm:text-6xl md:text-7xl lg:text-8xl">
            <Words text="Vista o seu" step={70} />
            <span className="mt-1 block italic text-gold">
              <Words text="grande momento." delay={220} step={80} />
            </span>
          </h1>

          <p className="mt-7 max-w-md font-body text-[15px] leading-relaxed text-bone/65">
            Ternos adulto e infantil para casamentos, formaturas e ocasiões que
            pedem presença — com atendimento personalizado em Patrocínio-MG.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappHero}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              aria-label="Agendar atendimento pelo WhatsApp"
            >
              <span><WhatsAppIcon size={16} /></span>
              <span>Agendar pelo WhatsApp</span>
            </a>
            <a href="#colecao" className="btn-ghost" aria-label="Ver a coleção">
              <span>Ver a coleção</span>
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL CUE */}
      <div className="absolute bottom-7 right-7 z-20 hidden flex-col items-center gap-3 md:flex">
        <span className="font-body text-[9px] uppercase tracking-[0.3em] text-bone/40 [writing-mode:vertical-rl]">
          Role
        </span>
        <span className="h-12 w-px overflow-hidden bg-bone/15">
          <span className="block h-1/2 w-full animate-floaty bg-gold" />
        </span>
      </div>
    </section>
  )
}
