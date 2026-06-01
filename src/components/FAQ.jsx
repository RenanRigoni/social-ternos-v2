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
    <section className="bg-offwhite py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="fade-in text-center mb-14">
          <p className="section-label">Dúvidas frequentes</p>
          <h2 className="section-title">Perguntas comuns</h2>
          <span className="gold-line mx-auto" />
        </div>

        {/* Accordion */}
        <div className="divide-y divide-champagne">
          {FAQ_DATA.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={open === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="py-5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-body font-medium text-graphite group-hover:text-gold transition-colors duration-200 leading-snug">
          {item.question}
        </span>
        <span className="text-gold flex-shrink-0">
          {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
        </span>
      </button>

      {isOpen && (
        <p className="font-body text-sm text-graphite/70 leading-relaxed mt-4 pr-8">
          {item.answer}
        </p>
      )}
    </div>
  )
}
