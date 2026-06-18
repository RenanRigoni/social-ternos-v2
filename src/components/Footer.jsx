import { STORE, WHATSAPP, MAPS_URL, NAV } from '../constants'
import { WhatsAppIcon, InstagramIcon } from './Icons'

export default function Footer() {
  const whatsappLink = WHATSAPP.getLink(WHATSAPP.messages.default)
  const logo = `${import.meta.env.BASE_URL}logo/logo_hor_w.svg`

  return (
    <footer className="border-t border-bone/10 bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-12">

          {/* Marca */}
          <div>
            <img src={logo} alt="Social Ternos" className="mb-6 h-7 w-auto opacity-70" />
            <p className="max-w-[220px] font-body text-sm leading-relaxed text-bone/55">
              Elegância, qualidade e atendimento que fazem a diferença.
            </p>
            <a
              href={STORE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-3 text-sm text-bone/65 transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              aria-label="Instagram da Social Ternos"
            >
              <InstagramIcon size={16} />
              {STORE.instagram}
            </a>
          </div>

          {/* Navegação */}
          <nav>
            <p className="mb-5 font-body text-[10px] uppercase tracking-[0.22em] text-gold/75">Navegação</p>
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block py-1.5 font-body text-sm text-bone/65 transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Informações */}
          <div>
            <p className="mb-5 font-body text-[10px] uppercase tracking-[0.22em] text-gold/75">Informações</p>
            <address className="not-italic">
              <p className="mb-4 font-body text-sm leading-relaxed text-bone/65">
                {STORE.address}<br />
                {STORE.city}
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-2.5 font-body text-sm text-bone/65 transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                aria-label="WhatsApp da Social Ternos"
              >
                <WhatsAppIcon size={15} />
                {STORE.phone}
              </a>
              <div className="mt-3 space-y-1">
                <p className="font-body text-xs text-bone/55">{STORE.hours.weekdays}</p>
                <p className="font-body text-xs text-bone/55">{STORE.hours.saturday}</p>
              </div>
            </address>
          </div>

          {/* Fale Conosco */}
          <div>
            <p className="mb-5 font-body text-[10px] uppercase tracking-[0.22em] text-gold/75">Fale Conosco</p>
            <p className="mb-5 max-w-[220px] font-body text-sm leading-relaxed text-bone/55">
              Entre em contato pelo WhatsApp e encontre o terno ideal para o seu momento.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-whatsapp/60 px-4 py-2.5 font-body text-sm text-[#36c172] transition-colors duration-200 hover:border-whatsapp-hover hover:text-[#4dd68a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-whatsapp-hover"
              aria-label="Chamar no WhatsApp"
            >
              <WhatsAppIcon size={15} />
              <span>Chamar no WhatsApp</span>
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block py-2 font-body text-[10px] uppercase tracking-[0.18em] text-gold/70 transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            >
              Traçar rota no Google Maps &rarr;
            </a>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-bone/10 pt-6 sm:flex-row">
          <p className="font-body text-xs text-bone/50">
            &copy; {new Date().getFullYear()} Social Ternos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
