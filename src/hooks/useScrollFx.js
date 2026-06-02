import { useEffect, useRef } from 'react'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Single IntersectionObserver for every [data-reveal] element on the page.
 * Adds `.in` when the element scrolls into view. Variants/stagger are pure CSS
 * (see index.css: .r-up / .r-right / .r-left / .r-blur / .r-clip / .word).
 * Mount once at the app root.
 */
export function useRevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    if (prefersReduced() || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/**
 * Shared scroll manager: ONE scroll/resize listener + ONE rAF drive every
 * parallax element on the page, instead of one pair per instance. Each
 * useParallax registers an update fn; the listeners bind on the first
 * subscriber and unbind when the last one leaves.
 */
const subscribers = new Set()
let raf = 0
let bound = false

function runAll() {
  raf = 0
  for (const fn of subscribers) fn()
}
function onScroll() {
  if (!raf) raf = requestAnimationFrame(runAll)
}
function ensureBound() {
  if (bound || typeof window === 'undefined') return
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  bound = true
}
function maybeUnbind() {
  if (!bound || subscribers.size > 0) return
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (raf) cancelAnimationFrame(raf)
  raf = 0
  bound = false
}

/**
 * Subtle scroll parallax. Returns a ref; element translates on the Y axis as it
 * moves through the viewport. `speed` ~0.1–0.3 stays tasteful. All instances
 * share a single listener + rAF via the manager above.
 */
export function useParallax(speed = 0.16) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReduced()) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      // -1 (below) → 0 (centered) → 1 (above)
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh
      el.style.transform = `translate3d(0, ${(progress * speed * 100).toFixed(2)}px, 0)`
    }

    subscribers.add(update)
    ensureBound()
    update() // set initial position

    return () => {
      subscribers.delete(update)
      maybeUnbind()
    }
  }, [speed])

  return ref
}
