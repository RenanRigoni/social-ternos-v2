import Words from './Words'

const CAPTIONS = [
  'Ambiente amplo',
  'Variedade de modelos',
  'Prova com orientação',
  'Acessórios para composição completa',
  'Atendimento personalizado',
  'Espaço exclusivo',
]

const SPANS = [
  'md:col-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-2',
]

const ASPECTS = [
  'aspect-[16/9]',
  'aspect-[4/5]',
  'aspect-[4/5]',
  'aspect-[4/5]',
  'aspect-[4/5]',
  'aspect-[16/9]',
]

export default function StorePhotos() {
  const base = import.meta.env.BASE_URL

  return (
    <section id="estrutura" className="relative bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="eyebrow mb-5">Nossa estrutura</p>
          <h2
            data-reveal
            className="r-up font-display text-[2.2rem] font-medium leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-[3.2rem]"
          >
            <Words text="Conheça nossa" step={55} />{' '}
            <span className="italic text-gold">
              <Words text="estrutura." delay={200} step={70} />
            </span>
          </h2>
          <p
            data-reveal
            className="r-blur mt-5 font-body text-[15px] leading-relaxed text-bone/55"
            style={{ transitionDelay: '120ms' }}
          >
            Um espaço preparado para escolher, provar e ajustar seu traje com tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-3">
          {[1, 2, 3, 4, 5, 6].map((n, i) => (
            <figure
              key={n}
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`r-clip group relative overflow-hidden bg-graphite ${SPANS[i]} ${ASPECTS[i]}`}
            >
              <img
                src={`${base}images/${n}.png`}
                alt={CAPTIONS[i]}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 border border-bone/10 transition-colors duration-500 group-hover:border-gold/30" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 font-body text-[11.5px] uppercase tracking-[0.14em] text-bone/80 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {CAPTIONS[i]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
