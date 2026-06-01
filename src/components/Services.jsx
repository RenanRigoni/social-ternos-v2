import { SERVICES, WHATSAPP } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'
import {
  ShoppingBag, Shirt, Baby, Heart, GraduationCap, Layers
} from 'lucide-react'

const ICONS = {
  suit:       <ShoppingBag size={28} strokeWidth={1.5} />,
  hanger:     <Shirt size={28} strokeWidth={1.5} />,
  child:      <Baby size={28} strokeWidth={1.5} />,
  rings:      <Heart size={28} strokeWidth={1.5} />,
  graduation: <GraduationCap size={28} strokeWidth={1.5} />,
  tie:        <Layers size={28} strokeWidth={1.5} />,
}

export default function Services() {
  const ref = useFadeIn()

  return (
    <section id="servicos" className="bg-champagne py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="fade-in text-center mb-14">
          <p className="section-label">O que oferecemos</p>
          <h2 className="section-title">Serviços da Social Ternos</h2>
          <span className="gold-line mx-auto" />
          <p className="font-body text-graphite/70 max-w-xl mx-auto leading-relaxed">
            Do terno adulto ao infantil, da venda ao aluguel — encontre a solução certa
            para o seu evento.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  const ref = useFadeIn()
  const whatsappLink = WHATSAPP.getLink(WHATSAPP.messages.service(service.title))

  return (
    <div
      ref={ref}
      className="fade-in bg-offwhite p-8 flex flex-col group hover:shadow-md transition-shadow duration-300"
    >
      {/* Ícone */}
      <div className="text-gold mb-5 w-10">
        {ICONS[service.icon]}
      </div>

      {/* Conteúdo */}
      <h3 className="font-heading text-xl text-graphite mb-3">{service.title}</h3>
      <p className="font-body text-sm text-graphite/70 leading-relaxed flex-1 mb-6">
        {service.description}
      </p>

      {/* CTA */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-body font-medium text-graphite border-b border-gold pb-0.5 w-fit transition-colors duration-200 hover:text-gold"
        aria-label={`Consultar sobre ${service.title} pelo WhatsApp`}
      >
        Consultar pelo WhatsApp →
      </a>
    </div>
  )
}
