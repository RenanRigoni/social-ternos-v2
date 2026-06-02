import { IMAGES, GALLERY_ALT } from '../constants'
import Words from './Words'

// Layout magazine — mobile 2-col, md 12-col com 3 fileiras que fecham em 12.
const SPANS = [
  'col-span-2 md:col-span-7 aspect-[4/3]',
  'col-span-1 md:col-span-5 aspect-[3/4] md:aspect-[4/3]',
  'col-span-1 md:col-span-4 aspect-[3/4]',
  'col-span-1 md:col-span-4 aspect-[3/4]',
  'col-span-1 md:col-span-4 aspect-[3/4]',
  'col-span-2 md:col-span-7 aspect-[16/10]',
  'col-span-2 md:col-span-5 aspect-[16/10]',
]

export default function Gallery() {
  return (
    <section id="galeria" className="relative bg-charcoal py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
          <h2
            data-reveal
            className="r-up font-display text-[2.2rem] font-medium leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-[3.2rem]"
          >
            <Words text="O caimento está" step={50} />{' '}
            <span className="italic text-gold">
              <Words text="nos detalhes." delay={200} step={70} />
            </span>
          </h2>
          <span className="hidden font-body text-[10px] uppercase tracking-[0.35em] text-bone/35 [writing-mode:vertical-rl] md:block">
            Galeria
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-12 md:gap-3">
          {IMAGES.gallery.map((src, i) => (
            <figure
              key={i}
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`r-clip group relative overflow-hidden bg-graphite ${SPANS[i] || 'col-span-1 md:col-span-4 aspect-[3/4]'}`}
            >
              <img
                src={src}
                alt={GALLERY_ALT[i] || 'Traje social masculino — Social Ternos'}
                className="img-grade absolute inset-0 h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
