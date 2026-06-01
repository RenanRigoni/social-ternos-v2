import { DIFFERENTIALS } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'
import {
  UserCheck, Compass, Users, MapPin, Sparkles, Store
} from 'lucide-react'

const ICONS = {
  person:   <UserCheck size={28} strokeWidth={1.5} />,
  compass:  <Compass size={28} strokeWidth={1.5} />,
  sizes:    <Users size={28} strokeWidth={1.5} />,
  location: <MapPin size={28} strokeWidth={1.5} />,
  fit:      <Sparkles size={28} strokeWidth={1.5} />,
  store:    <Store size={28} strokeWidth={1.5} />,
}

export default function Differentials() {
  const ref = useFadeIn()

  return (
    <section className="bg-graphite py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header — sem eyebrow, sem parágrafo redundante */}
        <div ref={ref} className="fade-in mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-offwhite leading-tight">
            Nossos diferenciais
          </h2>
          <span className="block w-12 h-px bg-gold mt-6" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
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
      <div className="text-gold flex-shrink-0 mt-0.5">
        {ICONS[item.icon]}
      </div>
      <div>
        <h3 className="font-heading text-xl text-offwhite mb-2">{item.title}</h3>
        <p className="font-body text-sm text-offwhite/55 leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}
