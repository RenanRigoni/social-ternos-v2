import { useState } from 'react'
import { WHATSAPP, FINDER_OPTIONS } from '../constants'
import { WhatsAppIcon } from './Icons'

/* ─── Pill + PillGroup (SuitFinder) ─────────────────────────────────── */

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
  const groupId = `pg-${label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`
  return (
    <div role="group" aria-labelledby={groupId}>
      <p id={groupId} className="eyebrow mb-3 text-bone/55">{label}</p>
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
      <p className="eyebrow text-gold/85">Guia de escolha</p>
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

/* ─── Appointment helpers ────────────────────────────────────────────── */

const DAYS_PT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
const MONTHS_PT = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
]

function getThisMonday(fromDate) {
  const d = new Date(fromDate)
  d.setHours(0, 0, 0, 0)
  const dow = d.getDay()
  d.setDate(d.getDate() + (dow === 0 ? -6 : 1 - dow))
  return d
}

function buildSlots(date, today) {
  const dow = date.getDay()
  if (dow === 0) return []
  const endHour = dow === 6 ? 12 : 18
  const isToday = date.toDateString() === today.toDateString()
  const nowMins = isToday ? new Date().getHours() * 60 + new Date().getMinutes() : -1
  const slots = []
  for (let h = 9; h < endHour; h++) {
    for (const m of [0, 30]) {
      if (h * 60 + m > nowMins) {
        slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
      }
    }
  }
  return slots
}

function fmtWeekRange(monday) {
  const sat = new Date(monday)
  sat.setDate(monday.getDate() + 5)
  const sm = MONTHS_PT[monday.getMonth()]
  const em = MONTHS_PT[sat.getMonth()]
  return monday.getMonth() === sat.getMonth()
    ? `${monday.getDate()} a ${sat.getDate()} de ${sm}`
    : `${monday.getDate()} de ${sm} a ${sat.getDate()} de ${em}`
}

function fmtDayLabel(date, today) {
  if (date.toDateString() === today.toDateString()) return 'Hoje'
  const tom = new Date(today)
  tom.setDate(today.getDate() + 1)
  if (date.toDateString() === tom.toDateString()) return 'Amanhã'
  return DAYS_PT[date.getDay()]
}

/* ─── Appointment widget ─────────────────────────────────────────────── */

function Appointment() {
  const [weekOffset, setWeekOffset] = useState(0)
  const [selDay, setSelDay] = useState(null)
  const [selTime, setSelTime] = useState(null)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const baseMonday = getThisMonday(today)
  const displayMonday = new Date(baseMonday)
  displayMonday.setDate(baseMonday.getDate() + weekOffset * 7)

  const weekDays = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(displayMonday)
    d.setDate(displayMonday.getDate() + i)
    return d
  })
  const visibleDays = weekDays.filter(d => d >= today)

  const slots = selDay ? buildSlots(selDay, today) : []
  const ready = Boolean(selDay && selTime)

  const waMsg = ready
    ? `Olá! Gostaria de agendar uma prova de traje para o dia ${
        String(selDay.getDate()).padStart(2, '0')}/${
        String(selDay.getMonth() + 1).padStart(2, '0')} às ${selTime
      }. Poderiam confirmar se esse horário está disponível?`
    : ''
  const waHref = ready ? WHATSAPP.getLink(waMsg) : undefined

  function pickDay(d) {
    const same = selDay?.toDateString() === d.toDateString()
    setSelDay(same ? null : d)
    setSelTime(null)
  }

  function navWeek(delta) {
    setWeekOffset(o => o + delta)
    setSelDay(null)
    setSelTime(null)
  }

  return (
    <div className="relative flex h-full flex-col border border-bone/12 bg-graphite/70 p-6 backdrop-blur-xl md:p-8">
      <div className="pointer-events-none absolute inset-0 border border-gold/0 transition-colors duration-500 hover:border-gold/25" />

      <p className="eyebrow text-gold/85">Prova sob medida</p>
      <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-bone md:text-3xl">
        Escolha um horário
      </h3>
      <p className="mt-2 font-body text-[13.5px] leading-relaxed text-bone/55">
        Indique sua preferência de data e horário. Vamos confirmar a disponibilidade pelo WhatsApp.
      </p>

      {/* Navegação de semana */}
      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => navWeek(-1)}
          disabled={weekOffset === 0}
          aria-label="Semana anterior"
          className="flex h-11 w-11 items-center justify-center font-body text-lg leading-none text-bone/40 transition-colors hover:text-bone/80 disabled:cursor-not-allowed disabled:opacity-25"
        >
          ‹
        </button>
        <span className="font-body text-[12px] tracking-wide text-bone/50">
          {fmtWeekRange(displayMonday)}
        </span>
        <button
          type="button"
          onClick={() => navWeek(1)}
          disabled={weekOffset >= 4}
          aria-label="Próxima semana"
          className="flex h-11 w-11 items-center justify-center font-body text-lg leading-none text-bone/40 transition-colors hover:text-bone/80 disabled:cursor-not-allowed disabled:opacity-25"
        >
          ›
        </button>
      </div>

      {/* Cards de dias */}
      <div
        className="mt-3 grid gap-1"
        style={{ gridTemplateColumns: `repeat(${visibleDays.length || 1}, 1fr)` }}
      >
        {visibleDays.length === 0 ? (
          <p className="font-body text-[12.5px] text-bone/35">
            Sem dias nesta semana — avance para a próxima.
          </p>
        ) : (
          visibleDays.map(d => {
            const isSel = selDay?.toDateString() === d.toDateString()
            const dd = String(d.getDate()).padStart(2, '0')
            const mm = String(d.getMonth() + 1).padStart(2, '0')
            return (
              <button
                key={d.toDateString()}
                type="button"
                aria-pressed={isSel}
                onClick={() => pickDay(d)}
                className={`flex flex-col items-center justify-center border py-3 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                  isSel
                    ? 'border-gold bg-gold/10 text-bone'
                    : 'border-bone/15 text-bone/55 hover:border-bone/35 hover:text-bone'
                }`}
              >
                <span className="font-body text-[10.5px] uppercase tracking-wider">
                  {fmtDayLabel(d, today)}
                </span>
                <span className="mt-0.5 font-body text-[12.5px] font-medium">
                  {dd}/{mm}
                </span>
              </button>
            )
          })
        )}
      </div>

      {/* Grade de horários */}
      {selDay && (
        <div className="mt-5">
          <p className="mb-2.5 font-body text-[10.5px] uppercase tracking-widest text-bone/35">
            Horários sugeridos para atendimento
          </p>
          {slots.length === 0 ? (
            <p className="font-body text-[12.5px] text-bone/40">
              Sem horários disponíveis para esse dia.
            </p>
          ) : (
            <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-5">
              {slots.map(t => (
                <button
                  key={t}
                  type="button"
                  aria-pressed={selTime === t}
                  onClick={() => setSelTime(prev => prev === t ? null : t)}
                  className={`border py-3 font-body text-[12px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                    selTime === t
                      ? 'border-gold bg-gold/10 text-bone'
                      : 'border-bone/15 text-bone/50 hover:border-bone/30 hover:text-bone'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* CTA */}
      <div className="mt-5">
        {!ready && (
          <p className="mb-3 font-body text-[12px] text-bone/45">
            {!selDay
              ? 'Escolha uma data e um horário para solicitar a confirmação.'
              : 'Agora escolha um horário disponível.'}
          </p>
        )}
        {ready && (
          <p className="mb-3 font-body text-[12.5px] text-bone/70">
            {'Selecionado: '}
            <span className="text-bone/90">
              {fmtDayLabel(selDay, today)}{' '}
              {String(selDay.getDate()).padStart(2, '0')}/{String(selDay.getMonth() + 1).padStart(2, '0')}{' '}
              às {selTime}
            </span>
          </p>
        )}
        <p className="mb-4 font-body text-[11.5px] text-bone/45">
          A confirmação é feita pelo WhatsApp e está sujeita à disponibilidade da loja.
        </p>
        <a
          href={waHref}
          target={ready ? '_blank' : undefined}
          rel="noopener noreferrer"
          className={`btn-gold w-full sm:w-auto ${!ready ? 'pointer-events-none opacity-40' : ''}`}
          aria-label="Solicitar agendamento pelo WhatsApp"
        >
          <span><WhatsAppIcon size={16} /></span>
          <span>Solicitar agendamento</span>
        </a>
      </div>
    </div>
  )
}

/* ─── Export ─────────────────────────────────────────────────────────── */

export default function Concierge() {
  return (
    <section id="agendamento" className="relative bg-charcoal py-16 px-6 md:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="eyebrow mb-4">Planeje sua visita</p>
          <h2 className="font-display text-[2.2rem] font-medium leading-[1.05] tracking-tight text-bone sm:text-4xl md:text-[2.8rem]">
            Encontre o traje ideal ou{' '}
            <span className="italic text-gold">agende sua prova.</span>
          </h2>
        </div>
        <div
          data-reveal
          className="r-up grid gap-4 md:grid-cols-2"
          style={{ transitionDelay: '120ms' }}
        >
          <SuitFinder />
          <Appointment />
        </div>
      </div>
    </section>
  )
}
