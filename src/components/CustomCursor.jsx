import { useEffect, useRef, useState } from 'react'

// Anel dourado que segue o ponteiro com leve atraso (lerp) e cresce sobre
// elementos interativos. Só monta em ponteiro fino (desktop) e sem reduced-motion.
// Posição e estado-ativo são escritos direto no DOM (sem setState por frame).
export default function CustomCursor() {
  const ring = useRef(null)
  const dot = useRef(null)
  const [mount] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (!mount) return
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const pos = { ...target }
    let raf = 0

    const onMove = (e) => {
      target.x = e.clientX
      target.y = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
      const interactive = e.target.closest?.('a, button, [data-cursor]')
      if (ring.current) ring.current.classList.toggle('on', Boolean(interactive))
    }

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.18
      pos.y += (target.y - pos.y) * 0.18
      if (ring.current) {
        ring.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
      }
      raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)
    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [mount])

  if (!mount) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden lg:block" aria-hidden="true">
      <span ref={ring} className="cursor-ring" />
      <span ref={dot} className="cursor-dot" />
    </div>
  )
}
