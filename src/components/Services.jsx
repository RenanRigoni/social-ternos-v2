import { SERVICES, WHATSAPP } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Services() {
  const ref = useFadeIn()

  // Dois serviços principais: destaque visual separado
  const featured = SERVICES.slice(0, 2)
  const rest = SERVICES.slice(2)

  return (
    <section id="servicos" className="bg-champagne py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="fade-in text-center mb-14">
          <p className="section-label">O que oferecemos</p>
          <h2 className="section-title">Serviços da Social Ternos</h2>
          <span className="gold-line mx-auto" />
        </div>

        {/* Featured: 2 serviços principais lado a lado, horizontal */}
        <div className="grid md:grid-cols-2 gap-px bg-gold/20 mb-px">
          {featured.map((service, i) => (
            <FeaturedServiceItem key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Restante: lista numerada com divisores */}
        <div className="divide-y divide-gold/20 bg-offwhite">
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
      className="fade-in bg-offwhite p-10 md:p-12 flex flex-col gap-6 group"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-heading text-4xl text-gold/30 leading-none select-none">
          0{index + 1}
        </span>
      </div>
      <div>
        <h3 className="font-heading text-2xl text-graphite mb-3 leading-snug">
          {service.title}
        </h3>
        <p className="font-body text-sm text-graphite/70 leading-relaxed">
          {service.description}
        </p>
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-body font-medium text-graphite border-b border-gold pb-0.5 w-fit transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        aria-label={`Consultar sobre ${service.title} pelo WhatsApp`}
      >
        Consultar pelo WhatsApp →
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
      className="fade-in flex items-center gap-6 px-8 py-6 group hover:bg-champagne/60 transition-colors duration-200"
    >
      <span className="font-heading text-lg text-gold/40 w-8 flex-shrink-0 select-none">
        {String(number).padStart(2, '0')}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="font-heading text-lg text-graphite">{service.title}</h3>
        <p className="font-body text-sm text-graphite/60 leading-relaxed mt-1 hidden sm:block">
          {service.description}
        </p>
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 text-xs font-body font-medium text-graphite/50 group-hover:text-gold transition-colors duration-200 hidden md:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        aria-label={`Consultar sobre ${service.title} pelo WhatsApp`}
      >
        Consultar →
      </a>
    </div>
  )
}
