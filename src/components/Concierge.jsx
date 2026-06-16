import { useState } from 'react'
import { WHATSAPP, FINDER_OPTIONS, FITTING_SLOTS } from '../constants'
import { WhatsAppIcon } from './Icons'

function Pill({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 font-body text-[12.5px] tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
        active
          ? 'border-gold bg-gold text-ink'
          : 'border-bone/20 text-bone/70 hover:border-bone/45 hover:text-bone'
      }`}
    >
      {children}
    </button>
  )
}

function PillGroup({ label, options, value, onChange }) {
  return (
    <div>
      <p className="eyebrow mb-3 text-bone/55">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <Pill key={opt} active={value === opt} onClick={() => onChange(opt === value ? '' : opt)}>
            {opt}
          </Pill>
        ))}
      </div>
    </div>
  )
}

function SuitFinder() {
  const [occasion, setOccasion] = useState('')
  const [intent, setIntent] = useState('')
  const [style, setStyle] = useState('')
  const [deadline, setDeadline] = useState('')

  const message = WHATSAPP.messages.finder({ occasion, intent, style, deadline })
  const wa = WHATSAPP.getLink(message)
  const ready = Boolean(occasion && intent)

  return (
    <div className="relative flex h-full flex-col border border-bone/12 bg-graphite/70 p-6 backdrop-blur-xl md:p-8">
      <div className="pointer-events-none absolute inset-0 border border-gold/0 transition-colors duration-500 hover:border-gold/25" />
      <p className="eyebrow text-gold/85">Concierge digital</p>
      <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-bone md:text-3xl">
        Encontre o traje ideal
      </h3>
      <p className="mt-2 max-w-sm font-body text-[13.5px] leading-relaxed text-bone/55">
        Responda em poucos toques e receba uma sugestão personalizada direto no WhatsApp.
      </p>

      <div className="mt-7 flex flex-col gap-6">
        <PillGroup label="Ocasião" options={FINDER_OPTIONS.occasion} value={occasion} onChange={setOccasion} />
        <PillGroup label="Interesse" options={FINDER_OPTIONS.intent} value={intent} onChange={setIntent} />
        <PillGroup label="Estilo" options={FINDER_OPTIONS.style} value={style} onChange={setStyle} />
        <PillGroup label="Prazo" options={FINDER_OPTIONS.deadline} value={deadline} onChange={setDeadline} />
      </div>

      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-gold mt-8 w-full sm:w-auto ${!ready ? 'opacity-70' : ''}`}
        aria-label="Receber sugestão de traje no WhatsApp"
      >
        <span><WhatsAppIcon size={16} /></span>
        <span>Receber sugestão no WhatsApp</span>
      </a>
    </div>
  )
}

function Appointment() {
  const [slot, setSlot] = useState('')
  const wa = WHATSAPP.getLink(WHATSAPP.messages.appointment(slot))

  return (
    <div className="relative flex h-full flex-col border border-bone/12 bg-graphite/70 p-6 backdrop-blur-xl md:p-8">
      <p className="eyebrow text-gold/85">Prova sob medida</p>
      <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-bone md:text-3xl">
        Agende sua prova
      </h3>
      <p className="mt-2 font-body text-[13.5px] leading-relaxed text-bone/55">
        Horários para prova disponíveis
      </p>

      <div className="mt-6 flex flex-col gap-2.5">
        {FITTING_SLOTS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSlot(s === slot ? '' : s)}
            aria-pressed={slot === s}
            className={`flex items-center justify-between border px-4 py-3 text-left font-body text-[13.5px] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
              slot === s
                ? 'border-gold bg-gold/10 text-bone'
                : 'border-bone/12 text-bone/70 hover:border-bone/30 hover:text-bone'
            }`}
          >
            <span>{s}</span>
            <span className={`h-1.5 w-1.5 rounded-full ${slot === s ? 'bg-gold' : 'bg-bone/20'}`} />
          </button>
        ))}
      </div>

      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost mt-7 w-full sm:w-auto"
        aria-label="Agendar prova pelo WhatsApp"
      >
        <span>Agendar prova</span>
      </a>
      <p className="mt-4 font-body text-[12px] text-bone/40">Confirmação pelo WhatsApp</p>
    </div>
  )
}

export default function Concierge() {
  return (
    <section className="relative z-10 -mt-10 px-6 md:-mt-16 lg:px-10">
      <div
        data-reveal
        className="r-up mx-auto grid max-w-6xl gap-4 md:grid-cols-2"
        style={{ transitionDelay: '120ms' }}
      >
        <SuitFinder />
        <Appointment />
      </div>
    </section>
  )
}
