import { useEffect, useRef, useState } from 'react'

const canHover = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Magnetic element: nudges toward the pointer while hovered, springs back on
 * leave. Desktop/fine-pointer only. Returns a ref to attach.
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !canHover()) return

    let raf = 0
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
      })
    }
    const reset = () => {
      cancelAnimationFrame(raf)
      el.style.transform = 'translate(0, 0)'
    }

    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', reset)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', reset)
      cancelAnimationFrame(raf)
    }
  }, [strength])

  return ref
}

/**
 * 3D tilt: rotates the element toward the pointer in perspective. Returns a ref.
 */
export function useTilt(max = 9) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !canHover()) return

    let raf = 0
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) scale(1.02)`
      })
    }
    const reset = () => {
      cancelAnimationFrame(raf)
      el.style.transform = 'perspective(900px) rotateY(0) rotateX(0) scale(1)'
    }

    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', reset)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', reset)
      cancelAnimationFrame(raf)
    }
  }, [max])

  return ref
}

/**
 * Pointer spotlight: writes --mx/--my (0–100%) on the element so CSS can place a
 * radial light that follows the cursor. Falls back to a static center.
 */
export function usePointerSpotlight() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !canHover()) return

    let raf = 0
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width) * 100
      const y = ((e.clientY - r.top) / r.height) * 100
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${x}%`)
        el.style.setProperty('--my', `${y}%`)
      })
    }

    el.addEventListener('pointermove', move)
    return () => {
      el.removeEventListener('pointermove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return ref
}

/**
 * Scrollspy: returns the id of the section currently in view, from a list of ids.
 */
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [ids])

  return active
}
