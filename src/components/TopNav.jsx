import { useEffect, useState } from 'react'
import { NAV, STORE, WHATSAPP } from '../constants'
import { useScrollSpy, useMagnetic } from '../hooks/useInteractive'
import { WhatsAppIcon } from './Icons'

const IDS = NAV.map((n) => n.href.slice(1))

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const active = useScrollSpy(IDS)
  const phoneRef = useMagnetic(0.4)
  const wa = WHATSAPP.getLink(WHATSAPP.messages.default)
  const logo = `${import.meta.env.BASE_URL}logo/logo_hor_w.svg`

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? y / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-500 ${
        scrolled || open ? 'bg-ink/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-10">
        <a
          href="#inicio"
          aria-label="Início — Social Ternos"
          className={`flex items-center transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}
        >
          <img
            src={logo}
            alt="Social Ternos"
            className={`w-auto transition-all duration-500 ${scrolled ? 'h-6' : 'h-8'}`}
          />
        </a>

        {/* Links desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => {
            const isActive = active === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative font-body text-[13px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                  isActive ? 'text-gold' : 'text-bone/70 hover:text-bone'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        {/* Telefone (desktop) */}
        <a
          ref={phoneRef}
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2.5 border border-gold/40 px-5 py-2.5 font-body text-[13px] tracking-wide text-bone transition-colors duration-300 hover:border-gold hover:text-gold lg:inline-flex"
        >
          <WhatsAppIcon size={15} />
          {STORE.phone}
        </a>

        {/* Hamburger mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="relative z-[80] flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-px w-6 bg-bone transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-bone transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-bone transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Barra de progresso de leitura */}
      <span
        className="absolute bottom-0 left-0 h-px origin-left bg-gold/80"
        style={{ width: '100%', transform: `scaleX(${progress})` }}
      />

      {/* Overlay mobile */}
      <div
        className={`fixed inset-0 z-[70] flex flex-col justify-center bg-ink px-8 transition-all duration-500 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-2">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-bone transition-all duration-500 hover:text-gold"
              style={{
                transitionDelay: open ? `${120 + i * 50}ms` : '0ms',
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(12px)',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="btn-gold mt-12 self-start"
        >
          <span><WhatsAppIcon size={16} /></span>
          <span>{STORE.phone}</span>
        </a>
      </div>
    </header>
  )
}
