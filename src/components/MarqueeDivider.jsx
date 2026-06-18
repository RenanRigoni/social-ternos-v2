import { MARQUEE } from '../constants'

export default function MarqueeDivider() {
  return (
    <div className="relative flex select-none overflow-hidden border-y border-bone/10 bg-ink py-5">
      <div className="flex w-max animate-marquee items-center" aria-hidden="true">
        {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-display text-2xl italic text-bone/25 md:text-3xl">
              {word}
            </span>
            <span className="h-3.5 w-px bg-gold/30" />
          </span>
        ))}
      </div>
    </div>
  )
}
