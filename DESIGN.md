# Social Ternos — Design System

## Color Strategy
Restrained com accent dourado — tinted neutrals (preto/grafite/off-white) + dourado ≤10% como accent.

## Colors
- `black`: #0a0a0a — fundo hero, botões primários, CTA final
- `graphite`: #2a2a2a — texto principal, headings
- `gold`: #c9a84c — accent: bordas, separadores, ícones, hover states
- `gold-light`: #e0c06a — hover do dourado em contextos claros
- `offwhite`: #f8f6f1 — fundo principal alternado
- `champagne`: #e8e0d0 — fundo secundário alternado
- `navy`: #1a2744 — reserva (não usado ativamente)
- WhatsApp green: #25D366 / #1ebe5d

## Typography
- Heading: Playfair Display (serif) — títulos, subtítulos, números de passo
- Body: Inter (sans-serif) — parágrafos, labels, botões, captions
- Scale: 3xl/4xl para section titles, 5xl/6xl para hero H1
- Letter spacing: `tracking-widest` (0.2em) para labels uppercase

## Elevation / Shadows
Mínimo. Sem sombras pesadas. `shadow-md` pontual em hover de cards (Services). Sem glassmorphism.

## Components
- `btn-primary`: bg-black, text-offwhite, hover: bg-gold text-black
- `btn-secondary`: border-graphite, hover: border-gold text-gold
- `btn-whatsapp`: bg-[#25D366], hover: bg-[#1ebe5d]
- `section-label`: text-gold, xs, tracking-widest, uppercase
- `section-title`: font-heading, 3xl/4xl, text-graphite
- `gold-line`: w-12 h-px bg-gold (separador decorativo)
- `fade-in` / `.visible`: animation via Intersection Observer

## Layout
- Max-width: max-w-6xl (1152px) para seções de conteúdo, max-w-5xl para passos, max-w-3xl para FAQ/CTA
- Seções alternam: offwhite → champagne → graphite (escuro) → offwhite → champagne → offwhite → champagne → offwhite → black
- Padding vertical: py-20 md:py-28

## Motion
- fade-in on scroll via Intersection Observer (opacity + translateY 24px → 0)
- Transition duration: 300ms (hover), 500ms (gallery hover scale), 600ms (fade-in)
- Animação Hero scroll arrow: animate-bounce (Tailwind built-in)
