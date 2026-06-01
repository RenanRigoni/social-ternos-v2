import { STORE, WHATSAPP, MAPS_URL } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'
import { MapPin, Clock, Phone } from 'lucide-react'

export default function Location() {
  const ref = useFadeIn()
  const whatsappLink = WHATSAPP.getLink(WHATSAPP.messages.default)

  return (
    <section className="bg-[#f5f4f0] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Informações */}
          <div ref={ref} className="fade-in">
            <p className="section-label">Onde estamos</p>
            <h2 className="section-title mb-4">Visite a loja</h2>
            <span className="gold-line" />

            <div className="space-y-6 mt-2">
              <div className="flex gap-4">
                <MapPin size={20} strokeWidth={1.5} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-body font-medium text-graphite">{STORE.address}</p>
                  <p className="font-body text-graphite/60 text-sm">{STORE.city}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={20} strokeWidth={1.5} className="text-gold flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="font-body text-graphite text-sm">{STORE.hours.weekdays}</p>
                  <p className="font-body text-graphite text-sm">{STORE.hours.saturday}</p>
                  <p className="font-body text-graphite/50 text-sm">{STORE.hours.sunday}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={20} strokeWidth={1.5} className="text-gold flex-shrink-0 mt-1" />
                <p className="font-body text-graphite">{STORE.phone}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Falar com a Social Ternos pelo WhatsApp"
              >
                WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="Ver localização da Social Ternos no Google Maps"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="fade-in overflow-hidden h-80 md:h-[400px] border border-graphite/15">
            <iframe
              title="Localização da Social Ternos no mapa"
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
