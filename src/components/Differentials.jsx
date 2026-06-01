import { DIFFERENTIALS } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'
import {
  UserCheck, Compass, Users, MapPin, Sparkles, Store
} from 'lucide-react'

const ICONS = {
  person:   <UserCheck size={32} strokeWidth={1.5} />,
  compass:  <Compass size={32} strokeWidth={1.5} />,
  sizes:    <Users size={32} strokeWidth={1.5} />,
  location: <MapPin size={32} strokeWidth={1.5} />,
  fit:      <Sparkles size={32} strokeWidth={1.5} />,
  store:    <Store size={32} strokeWidth={1.5} />,
}

export default function Differentials() {
  const ref = useFadeIn()

  return (
    <section className="bg-graphite py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="fade-in text-center mb-14">
          <p className="text-gold font-body text-xs tracking-widest uppercase mb-3">
            Por que escolher
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-offwhite leading-tight">
            Nossos diferenciais
          </h2>
          <span className="block w-12 h-px bg-gold mx-auto my-4" />
          <p className="font-body text-offwhite/60 max-w-xl mx-auto leading-relaxed">
            Mais do que um terno — um atendimento que respeita o seu momento.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((item) => (
            <DifferentialItem key={item.icon} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DifferentialItem({ item }) {
  const ref = useFadeIn()

  return (
    <div ref={ref} className="fade-in flex gap-5">
      <div className="text-gold flex-shrink-0 mt-1">
        {ICONS[item.icon]}
      </div>
      <div>
        <h3 className="font-heading text-lg text-offwhite mb-2">{item.title}</h3>
        <p className="font-body text-sm text-offwhite/60 leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}
