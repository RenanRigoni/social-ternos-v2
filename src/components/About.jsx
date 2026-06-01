import { STORE, IMAGES } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const ref = useFadeIn()

  return (
    <section className="bg-[#0f0f0f] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Imagem */}
          <div className="relative order-2 md:order-1">
            <img
              src={IMAGES.about}
              alt="Atendimento personalizado na Social Ternos — escolha do traje ideal"
              className="w-full h-80 md:h-[520px] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/50 hidden md:block" />
          </div>

          {/* Texto */}
          <div ref={ref} className="fade-in order-1 md:order-2">
            <p className="text-gold font-body text-xs tracking-[0.25em] uppercase mb-5">Sobre a loja</p>
            <h2 className="font-heading text-4xl md:text-5xl text-offwhite leading-tight mb-6">
              Especialistas em trajes sociais masculinos
            </h2>
            <span className="block w-12 h-px bg-gold mb-8" />
            <p className="font-body text-offwhite/65 leading-relaxed mb-5">
              A Social Ternos é especializada em trajes masculinos, localizada no Centro de Patrocínio-MG.
              Trabalhamos com venda e aluguel de ternos adulto e infantil, atendendo noivos, padrinhos,
              formandos e famílias em eventos especiais.
            </p>
            <p className="font-body text-offwhite/65 leading-relaxed mb-10">
              Nosso atendimento é personalizado: ajudamos você a escolher o modelo, o tecido e a
              composição ideal para a sua ocasião, com atenção ao caimento e elegância.
            </p>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border border-gold/40 text-gold font-body font-medium tracking-wide px-8 py-4 transition-all duration-300 hover:border-gold hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
