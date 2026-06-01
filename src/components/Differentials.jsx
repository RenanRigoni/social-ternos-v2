import { DIFFERENTIALS } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'
import {
  UserCheck, Compass, Users, MapPin, Sparkles, Store
} from 'lucide-react'

const ICONS = {
  person:   <UserCheck size={24} strokeWidth={1.5} />,
  compass:  <Compass size={24} strokeWidth={1.5} />,
  sizes:    <Users size={24} strokeWidth={1.5} />,
  location: <MapPin size={24} strokeWidth={1.5} />,
  fit:      <Sparkles size={24} strokeWidth={1.5} />,
  store:    <Store size={24} strokeWidth={1.5} />,
}

export default function Differentials() {
  const ref = useFadeIn()

  return (
    <section className="bg-graphite py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="fade-in mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-offwhite leading-tight">
            Atendimento que ajuda na escolha do traje
          </h2>
          <span className="block w-12 h-px bg-gold mt-6" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
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
    <div ref={ref} className="fade-in">
      <div className="text-gold mb-4">
        {ICONS[item.icon]}
      </div>
      <h3 className="font-heading text-xl text-offwhite mb-2">{item.title}</h3>
      <p className="font-body text-sm text-offwhite/50 leading-relaxed">{item.description}</p>
    </div>
  )
}
