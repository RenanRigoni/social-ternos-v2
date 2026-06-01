import { STORE, IMAGES } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const ref = useFadeIn()

  return (
    <section className="bg-offwhite py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Imagem — PLACEHOLDER: substituir por foto do interior da loja ou ambiente de atendimento */}
          <div className="relative order-2 md:order-1">
            <img
              src={IMAGES.about}
              alt="Interior da Social Ternos — loja de ternos em Patrocínio-MG"
              className="w-full h-80 md:h-[480px] object-cover"
              loading="lazy"
            />
            {/* Detalhe dourado */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold hidden md:block" />
          </div>

          {/* Texto */}
          <div ref={ref} className="fade-in order-1 md:order-2">
            <p className="section-label">Sobre a loja</p>
            <h2 className="section-title mb-4">
              Especialistas em trajes sociais masculinos
            </h2>
            <span className="gold-line" />
            <p className="font-body text-graphite/80 leading-relaxed mb-6">
              A Social Ternos é uma loja especializada em trajes masculinos, localizada no
              Centro de Patrocínio-MG. Trabalhamos com venda e aluguel de ternos adulto e
              infantil, atendendo desde noivos e padrinhos até formandos e participantes de
              eventos corporativos e cerimônias.
            </p>
            <p className="font-body text-graphite/80 leading-relaxed mb-8">
              Nosso atendimento é personalizado: ajudamos você a escolher o modelo, o
              tecido e a composição ideal para a sua ocasião, com atenção ao caimento,
              conforto e elegância do traje.
            </p>

            {/* Mini stats — provisórias, apenas estruturais */}
            <div className="grid grid-cols-2 gap-6 border-t border-champagne pt-6">
              <div>
                <p className="font-heading text-2xl text-graphite mb-1">Adulto</p>
                <p className="font-body text-sm text-graphite/60 tracking-wide">e Infantil</p>
              </div>
              <div>
                <p className="font-heading text-2xl text-graphite mb-1">Centro</p>
                <p className="font-body text-sm text-graphite/60 tracking-wide">Patrocínio-MG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
