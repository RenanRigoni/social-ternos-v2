// Quebra um texto em palavras com reveal vertical escalonado.
// Use dentro de um container que ganha `.in` (via [data-reveal] + observer).
import { Fragment } from 'react'

export default function Words({ text, delay = 0, step = 70, className = '' }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="word">
            <span style={{ transitionDelay: `${delay + i * step}ms` }}>{w}</span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </span>
  )
}
