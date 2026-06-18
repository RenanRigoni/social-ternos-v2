import { useEffect, useState } from 'react'
import { STORE, WHATSAPP, MAPS_URL, MAPS_EMBED, storeStatus } from '../constants'
import { WhatsAppIcon } from './Icons'
import Words from './Words'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export default function Location() {
  const wa = WHATSAPP.getLink(WHATSAPP.messages.default)
  const [status, setStatus] = useState(() => storeStatus())

  useEffect(() => {
    const t = setInterval(() => setStatus(storeStatus()), 60000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="como-chegar" className="relative bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid items-stretch gap-10 md:grid-cols-2 md:gap-14">

          {/* INFORMAÇÕES */}
          <div data-reveal className="r-right">
            <p className="eyebrow mb-6">Como chegar</p>
            <h2 className="font-display text-[2.2rem] font-medium leading-[1.06] tracking-tight text-bone sm:text-5xl md:text-[3rem]">
              <Words text="Visite" step={60} />{' '}
              <span className="italic text-gold">
                <Words text="nossa loja." delay={180} step={70} />
              </span>
            </h2>

            <div className="mt-10 divide-y divide-bone/10 border-y border-bone/10">
              <InfoRow icon={MapPin}>
                <p className="text-bone">{STORE.address}</p>
                <p className="text-bone/55">{STORE.city}</p>
              </InfoRow>
              <InfoRow icon={Clock}>
                <div className="mb-2 flex items-center gap-2.5">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      status.open ? 'bg-[#23a259] motion-safe:animate-pulse' : 'bg-bone/40'
                    }`}
                  />
                  <span className={`font-body text-[13px] font-semibold tracking-wide ${status.open ? 'text-[#36c172]' : 'text-bone/55'}`}>
                    {status.label}
                  </span>
                </div>
                <p className="text-bone/75">{STORE.hours.weekdays}</p>
                <p className="text-bone/75">{STORE.hours.saturday}</p>
                <p className="text-bone/55">{STORE.hours.sunday}</p>
              </InfoRow>
              <InfoRow icon={Phone}>
                <a href={wa} className="text-bone/75 transition-colors hover:text-gold">
                  {STORE.phone}
                </a>
              </InfoRow>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                aria-label="Falar com a Social Ternos pelo WhatsApp"
              >
                <span><WhatsAppIcon size={16} /></span>
                <span>Falar pelo WhatsApp</span>
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label="Traçar rota no Google Maps"
              >
                <span><Navigation size={15} /></span>
                <span>Traçar rota</span>
              </a>
            </div>
          </div>

          {/* MAPA INCORPORADO */}
          <div
            data-reveal
            className="r-clip group relative min-h-[340px] overflow-hidden rounded-2xl border border-bone/10"
          >
            <iframe
              title="Localização da Social Ternos no Centro de Patrocínio-MG"
              src={MAPS_EMBED}
              className="absolute inset-0 h-full w-full grayscale-[0.35] contrast-[1.05] transition-[filter] duration-700 group-hover:grayscale-0"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/30" />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon: Icon, children }) {
  return (
    <div className="flex gap-4 py-5">
      <Icon size={18} strokeWidth={1.4} className="mt-0.5 flex-shrink-0 text-gold" />
      <div className="space-y-1 font-body text-sm">{children}</div>
    </div>
  )
}
