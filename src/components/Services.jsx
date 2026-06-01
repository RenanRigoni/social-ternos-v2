import { SERVICES, WHATSAPP } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Services() {
  const ref = useFadeIn()

  return (
    <section id="servicos" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className="fade-in mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-offwhite leading-tight">
            Para cada ocasião, um traje à altura
          </h2>
          <span className="block w-12 h-px bg-gold mt-6" />
        </div>

        {/* Lista editorial — hover revela descrição */}
        <div className="border-t border-white/[0.08]">
          {SERVICES.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceRow({ service, index }) {
  const ref = useFadeIn()
  const whatsappLink = WHATSAPP.getLink(WHATSAPP.messages.service(service.title))

  return (
    <a
      ref={ref}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fade-in group flex items-start md:items-center gap-6 md:gap-10 py-7 border-b border-white/[0.08] hover:border-gold/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
      aria-label={`Consultar sobre ${service.title} pelo WhatsApp`}
    >
      {/* Número */}
      <span className="font-body text-xs text-gold/25 group-hover:text-gold/55 transition-colors duration-300 flex-shrink-0 w-6 pt-1 md:pt-0">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Título + descrição */}
      <div className="flex-1 min-w-0 md:flex md:items-center md:gap-10">
        <h3 className="font-heading text-xl md:text-2xl lg:text-3xl text-offwhite/70 group-hover:text-offwhite group-hover:translate-x-1 transition-all duration-300 md:w-72 lg:w-80 flex-shrink-0">
          {service.title}
        </h3>
        <p className="font-body text-sm text-offwhite/0 group-hover:text-offwhite/40 transition-all duration-500 mt-2 md:mt-0 flex-1 leading-relaxed max-w-sm">
          {service.description}
        </p>
      </div>

      {/* Seta */}
      <span className="flex-shrink-0 text-gold/0 group-hover:text-gold transition-colors duration-300 text-xl self-center">
        &rarr;
      </span>
    </a>
  )
}
