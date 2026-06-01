import { useState } from 'react'
import { FAQ as FAQ_DATA } from '../constants'
import { useFadeIn } from '../hooks/useFadeIn'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const ref = useFadeIn()
  const [open, setOpen] = useState(null)

  function toggle(index) {
    setOpen(open === index ? null : index)
  }

  return (
    <section className="bg-[#0f0f0f] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className="fade-in mb-14">
          <p className="section-label">Dúvidas frequentes</p>
          <h2 className="section-title">Perguntas comuns</h2>
          <span className="gold-line" />
        </div>

        <div className="divide-y divide-white/[0.08]">
          {FAQ_DATA.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={open === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ item, index, isOpen, onToggle }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-btn-${index}`

  return (
    <div className="py-1">
      <button
        id={buttonId}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left group py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-body font-medium text-offwhite/70 group-hover:text-gold transition-colors duration-200 leading-snug">
          {item.question}
        </span>
        <span className="text-gold/60 flex-shrink-0 group-hover:text-gold transition-colors duration-200" aria-hidden="true">
          {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
      >
        <p className="font-body text-sm text-offwhite/50 leading-relaxed pb-5 pr-8">
          {item.answer}
        </p>
      </div>
    </div>
  )
}
