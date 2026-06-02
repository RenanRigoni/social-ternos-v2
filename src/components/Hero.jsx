import { STORE, WHATSAPP, IMAGES, SIZES } from '../constants'
import { useParallax } from '../hooks/useScrollFx'
import { usePointerSpotlight, useMagnetic } from '../hooks/useInteractive'
import { WhatsAppIcon } from './Icons'
import Words from './Words'

export default function Hero() {
  const whatsappHero = WHATSAPP.getLink(WHATSAPP.messages.hero)
  const parallax = useParallax(0.12)
  const spotlight = usePointerSpotlight()
  const magA = useMagnetic(0.3)
  const magB = useMagnetic(0.3)

  return (
    <section
      id="inicio"
      ref={spotlight}
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* CAMADA DE IMAGEM — full-bleed, ken-burns + parallax */}
      <div ref={parallax} className="absolute inset-0 -z-0 scale-110">
        <img
          src={IMAGES.hero.src}
          srcSet={IMAGES.hero.srcSet}
          sizes={SIZES.full}
          alt="Atendimento de alfaiataria na Social Ternos: cliente provando terno com auxílio do alfaiate"
          className="h-full w-full object-cover object-[50%_25%] animate-kenburns"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* OVERLAYS — vinheta quente + gradiente inferior para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-transparent to-ink/30" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_30%,transparent_45%,rgba(11,10,9,0.7)_100%)]" />

      {/* SPOTLIGHT — luz de ateliê que segue o ponteiro */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] hidden lg:block"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx, 70%) var(--my, 30%), rgba(197,162,88,0.16), transparent 60%)',
        }}
      />

      {/* LATERAL DIREITA — rótulo vertical editorial */}
      <a
        href={STORE.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-7 top-1/2 z-20 hidden -translate-y-1/2 rotate-90 items-center gap-3 font-body text-[10px] uppercase tracking-[0.35em] text-bone/55 transition-colors duration-300 hover:text-gold lg:flex"
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
            <span className="eyebrow text-bone/70">Venda &amp; Aluguel de Ternos</span>
          </div>

          <h1 className="font-display text-[3rem] font-medium leading-[0.95] tracking-tight text-bone sm:text-6xl md:text-7xl lg:text-[5.4rem]">
            <Words text="Elegância para" step={70} />
            <span className="block">
              <Words text="momentos que pedem" delay={160} step={70} />
            </span>
            <span className="italic text-gold">
              <Words text="presença." delay={460} step={80} />
            </span>
          </h1>

          <p className="mt-7 max-w-md font-body text-[15px] leading-relaxed text-bone/70">
            Ternos adulto e infantil com caimento impecável, acabamento premium e
            atendimento personalizado em Patrocínio-MG.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <span ref={magA} className="inline-block">
              <a
                href={whatsappHero}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto"
                aria-label="Falar no WhatsApp"
              >
                <span><WhatsAppIcon size={16} /></span>
                <span>Fale no WhatsApp</span>
              </a>
            </span>
            <span ref={magB} className="inline-block">
              <a href="#localizacao" className="btn-ghost w-full sm:w-auto" aria-label="Agendar visita à loja">
                <span>Agendar visita</span>
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* SCROLL CUE */}
      <div className="absolute bottom-7 right-7 z-20 hidden flex-col items-center gap-3 md:flex">
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-bone/55 [writing-mode:vertical-rl]">
          Role
        </span>
        <span className="h-12 w-px overflow-hidden bg-bone/15">
          <span className="block h-1/2 w-full animate-floaty bg-gold" />
        </span>
      </div>
    </section>
  )
}
