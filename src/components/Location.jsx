import { STORE, WHATSAPP, MAPS_URL } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'
import { MapPin, Clock, Phone } from 'lucide-react'

export default function Location() {
  const ref = useFadeIn()
  const whatsappLink = WHATSAPP.getLink(WHATSAPP.messages.default)

  return (
    <section className="bg-[#0a0a0a] py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Informações */}
          <div ref={ref} className="fade-in">
            <p className="section-label">Visite a Social Ternos no Centro de Patrocínio</p>
            <h2 className="section-title mb-5">Como nos encontrar</h2>
            <span className="gold-line" />

            <div className="space-y-6 mt-2">
              <div className="flex gap-4">
                <MapPin size={18} strokeWidth={1.5} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm font-medium text-offwhite">{STORE.address}</p>
                  <p className="font-body text-offwhite/50 text-sm">{STORE.city}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={18} strokeWidth={1.5} className="text-gold flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-body text-offwhite/75 text-sm">{STORE.hours.weekdays}</p>
                  <p className="font-body text-offwhite/75 text-sm">{STORE.hours.saturday}</p>
                  <p className="font-body text-offwhite/35 text-sm">{STORE.hours.sunday}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={18} strokeWidth={1.5} className="text-gold flex-shrink-0 mt-0.5" />
                <p className="font-body text-offwhite/75 text-sm">{STORE.phone}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="Falar com a Social Ternos pelo WhatsApp"
              >
                Falar pelo WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="Traçar rota no Google Maps"
              >
                Traçar rota
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="fade-in overflow-hidden h-80 md:h-[420px] border border-white/[0.07]">
            <iframe
              title="Localização da Social Ternos"
              src="https://maps.google.com/maps?q=Rua+Pinto+Dias,207,Patrocínio,MG,Brasil&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
