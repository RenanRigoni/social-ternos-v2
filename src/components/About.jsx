import { IMAGES } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const ref = useFadeIn()

  return (
    <section className="bg-[#0f0f0f] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Imagem */}
          <div className="relative order-2 md:order-1">
            <div className="overflow-hidden">
              <img
                src={IMAGES.about}
                alt="Atendimento personalizado na Social Ternos, Patrocínio-MG"
                className="w-full h-80 md:h-[520px] object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 border border-gold/30 hidden md:block pointer-events-none" />
          </div>

          {/* Texto */}
          <div ref={ref} className="fade-in order-1 md:order-2">
            <p className="section-label">Venda e aluguel em um só lugar</p>
            <h2 className="font-heading text-4xl md:text-5xl text-offwhite leading-tight mb-6">
              Especialistas em trajes sociais masculinos
            </h2>
            <span className="block w-12 h-px bg-gold mb-8" />
            <p className="font-body text-offwhite/60 leading-relaxed mb-5">
              A Social Ternos é uma loja especializada em trajes masculinos, localizada no
              Centro de Patrocínio-MG. Trabalhamos com venda e aluguel de ternos adulto e
              infantil, atendendo noivos, padrinhos, formandos e famílias em eventos especiais.
            </p>
            <p className="font-body text-offwhite/60 leading-relaxed">
              Nosso atendimento é personalizado: ajudamos você a escolher o modelo, o
              tecido e a composição ideal para a sua ocasião, com atenção ao caimento e elegância.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
