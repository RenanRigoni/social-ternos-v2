import { SERVICES, WHATSAPP } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Services() {
  const ref = useFadeIn()
  const featured = SERVICES.slice(0, 2)
  const rest = SERVICES.slice(2)

  return (
    <section id="servicos" className="bg-black py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header — sem eyebrow, direto ao título */}
        <div ref={ref} className="fade-in mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-offwhite leading-tight">
            Serviços da Social Ternos
          </h2>
          <span className="block w-12 h-px bg-gold mt-6" />
        </div>

        {/* Featured: 2 principais */}
        <div className="grid md:grid-cols-2 gap-px bg-gold/20 mb-px">
          {featured.map((service, i) => (
            <FeaturedServiceItem key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Restante: lista numerada escura */}
        <div className="divide-y divide-white/10">
          {rest.map((service, i) => (
            <CompactServiceItem key={service.id} service={service} number={i + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedServiceItem({ service, index }) {
  const ref = useFadeIn()
  const whatsappLink = WHATSAPP.getLink(WHATSAPP.messages.service(service.title))

  return (
    <div
      ref={ref}
      className="fade-in bg-[#0a0a0a] p-10 md:p-14 flex flex-col gap-6 group border-t-2 border-transparent hover:border-gold transition-colors duration-300"
    >
      <span className="font-heading text-7xl text-gold/10 leading-none select-none">
        0{index + 1}
      </span>
      <div>
        <h3 className="font-heading text-2xl text-offwhite mb-3 leading-snug">
          {service.title}
        </h3>
        <p className="font-body text-sm text-offwhite/50 leading-relaxed">
          {service.description}
        </p>
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-body font-medium text-gold/60 group-hover:text-gold transition-colors duration-200 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label={`Consultar sobre ${service.title} pelo WhatsApp`}
      >
        Consultar pelo WhatsApp &rarr;
      </a>
    </div>
  )
}

function CompactServiceItem({ service, number }) {
  const ref = useFadeIn()
  const whatsappLink = WHATSAPP.getLink(WHATSAPP.messages.service(service.title))

  return (
    <div
      ref={ref}
      className="fade-in flex items-center gap-6 px-2 py-6 group hover:bg-white/5 transition-colors duration-200"
    >
      <span className="font-heading text-lg text-gold/25 w-8 flex-shrink-0 select-none">
        {String(number).padStart(2, '0')}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="font-heading text-lg text-offwhite/75 group-hover:text-offwhite transition-colors duration-200">
          {service.title}
        </h3>
        <p className="font-body text-sm text-offwhite/40 leading-relaxed mt-1 hidden sm:block">
          {service.description}
        </p>
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 text-xs font-body font-medium text-white/30 group-hover:text-gold transition-colors duration-200 hidden md:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label={`Consultar sobre ${service.title} pelo WhatsApp`}
      >
        Consultar &rarr;
      </a>
    </div>
  )
}
