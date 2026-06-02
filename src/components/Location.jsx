import { STORE, WHATSAPP, MAPS_URL, MAPS_EMBED } from '../constants'
import { WhatsAppIcon } from './Icons'
import Words from './Words'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export default function Location() {
  const wa = WHATSAPP.getLink(WHATSAPP.messages.default)

  return (
    <section id="localizacao" className="relative bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid items-stretch gap-10 md:grid-cols-2 md:gap-14">

          {/* INFORMAÇÕES */}
          <div data-reveal className="r-right">
            <p className="eyebrow mb-6">No coração de Patrocínio</p>
            <h2 className="font-display text-[2.2rem] font-medium leading-[1.06] tracking-tight text-bone sm:text-5xl md:text-[3rem]">
              <Words text="Venha viver a" step={50} />{' '}
              <span className="italic text-gold">
                <Words text="experiência na loja." delay={220} step={60} />
              </span>
            </h2>

            <div className="mt-10 divide-y divide-bone/10 border-y border-bone/10">
              <InfoRow icon={MapPin}>
                <p className="text-bone">{STORE.address}</p>
                <p className="text-bone/45">{STORE.city}</p>
              </InfoRow>
              <InfoRow icon={Clock}>
                <p className="text-bone/75">{STORE.hours.weekdays}</p>
                <p className="text-bone/75">{STORE.hours.saturday}</p>
                <p className="text-bone/35">{STORE.hours.sunday}</p>
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
            className="r-clip group relative min-h-[340px] overflow-hidden border border-bone/10"
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
