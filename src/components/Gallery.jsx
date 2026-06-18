import { IMAGES, GALLERY_ALT, SIZES, STORE } from '../constants'
import { useTilt } from '../hooks/useInteractive'
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
        <div className="mb-12 text-center md:mb-16">
          <p className="eyebrow">Lookbook</p>
          <h2
            data-reveal
            className="r-up mt-5 font-display text-[2.2rem] font-medium leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-[3.2rem]"
          >
            <Words text="Inspiração em" step={55} />{' '}
            <span className="italic text-gold">
              <Words text="cada detalhe." delay={200} step={70} />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-12 md:gap-3">
          {IMAGES.gallery.map((image, i) => (
            <GalleryTile key={image.src} image={image} alt={GALLERY_ALT[i]} span={SPANS[i]} delay={i * 60} />
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <a
            href={STORE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="Ver mais looks no Instagram"
          >
            <span>Ver mais looks</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function GalleryTile({ image, alt, span, delay }) {
  const tilt = useTilt(7)

  return (
    <figure
      data-reveal
      style={{ transitionDelay: `${delay}ms` }}
      className={`r-clip group relative overflow-hidden bg-graphite ${span || 'col-span-1 md:col-span-4 aspect-[3/4]'}`}
    >
      <div ref={tilt} className="absolute inset-0 transition-transform duration-300 ease-out">
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={SIZES.half}
          alt={alt || 'Traje social masculino, Social Ternos'}
          className="img-grade absolute inset-0 h-full w-full scale-[1.06] object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
      <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-gold/30" />
    </figure>
  )
}
