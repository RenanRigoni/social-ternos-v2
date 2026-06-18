import { WHATSAPP } from '../constants'
import { WhatsAppIcon } from './Icons'

export default function WhatsAppFloat() {
  const link = WHATSAPP.getLink(WHATSAPP.messages.default)

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a Social Ternos pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Tooltip */}
      <span className="pointer-events-none translate-x-2 whitespace-nowrap border border-bone/15 bg-graphite/90 px-3 py-1.5 font-body text-xs tracking-wide text-bone opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        Fale conosco
      </span>

      {/* Botão */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-bone shadow-lg shadow-black/40 ring-1 ring-bone/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-whatsapp-hover group-active:scale-95">
        <span className="absolute inset-0 rounded-full bg-whatsapp/60 motion-safe:animate-ping" aria-hidden="true" />
        <span className="relative"><WhatsAppIcon size={26} /></span>
      </span>
    </a>
  )
}
