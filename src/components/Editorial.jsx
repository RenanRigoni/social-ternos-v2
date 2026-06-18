import { OFFERS, IMAGES, WHATSAPP } from '../constants'
import { useParallax } from '../hooks/useScrollFx'
import Words from './Words'

export default function Editorial() {
  return (
    <section id="colecao" className="relative bg-charcoal py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* CABEÇALHO EDITORIAL */}
        <div className="mb-16 max-w-3xl md:mb-24">
          <h2
            data-reveal
            className="r-up font-display text-[2.2rem] font-medium leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-[3.4rem]"
          >
            <Words text="Uma coleção para" step={55} />{' '}
            <span className="italic text-gold">
              <Words text="vestir presença." delay={220} step={75} />
            </span>
          </h2>
        </div>

        <div className="space-y-20 md:space-y-32">
          {OFFERS.map((offer, i) => (
            <OfferRow key={offer.n} offer={offer} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function OfferRow({ offer, flip }) {
  const parallax = useParallax(0.08)
  const wa = WHATSAPP.getLink(WHATSAPP.messages.occasion(offer.kicker.toLowerCase()))
  const fallbackImg = IMAGES[offer.image]
  const base = import.meta.env.BASE_URL

  function handleImgError(e) {
    const fb = fallbackImg?.src
    if (fb && e.target.src !== fb) e.target.src = fb
  }

  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
      {/* MÍDIA — cortina + parallax + número grande */}
      <div data-reveal className={`r-clip ${flip ? 'md:order-2' : ''}`}>
        <div className="group relative aspect-[4/5] overflow-hidden bg-graphite">
          <div ref={parallax} className="absolute inset-0 scale-110">
            <img
              src={`${base}${offer.localImage}`}
              alt={offer.title}
              className="img-grade h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              onError={handleImgError}
            />
          </div>
          <span className="pointer-events-none absolute left-5 top-4 font-display text-6xl italic text-bone mix-blend-difference md:text-7xl">
            {offer.n}
          </span>
        </div>
      </div>

      {/* TEXTO */}
      <div className={flip ? 'md:order-1' : ''}>
        <div data-reveal className="r-up">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="eyebrow text-bone/70">{offer.kicker}</span>
          </div>
          <h3 className="font-display text-3xl font-medium leading-[1.08] text-bone md:text-4xl">
            {offer.title}
          </h3>
          <p className="mt-5 max-w-md font-body text-[15px] leading-relaxed text-bone/55">
            {offer.text}
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="link-sweep mt-7 inline-block text-bone/80"
          >
            Consultar disponibilidade →
          </a>
        </div>
      </div>
    </div>
  )
}
