# Social Ternos — Design System

Editorial warm-dark. Tema único (sem dark/light toggle): a página É escura por design,
alfaiataria premium sob luz baixa. Fonte de verdade: `tailwind.config.js` + `src/index.css`.

## Color Strategy
Restrained — neutros quentes (quase-preto → off-white quente) + dourado champanhe como
accent ≤10% (bordas, separadores, ícones, hover, headings em itálico).

## Colors (neutros tintados para o âmbar da marca)
- `ink`: #0b0a09 — fundo base, quase preto levemente quente
- `charcoal`: #141210 — seções alternadas
- `graphite`: #1b1815 — painéis / placeholder de mídia
- `gold`: #c5a258 — accent champanhe-dourado controlado
- `gold-light`: #e0c47e — sweep/hover do dourado
- `champagne`: #cdbd9c — texto de destaque quente
- `bone`: #efe9dd — off-white quente (texto principal)
- WhatsApp: #1f8f4e / #23a259 (hover)
- Aliases compat (evitar em código novo): `offwhite`=bone, `black`=ink, `navy`=#1a2744 (reserva)

Hierarquia de texto via OPACIDADE de `bone` sobre `ink`. Piso de legibilidade AA:
texto informativo ≥ `bone/55` (~5.4:1). `bone/50` (~4.6:1) só para fine print.
< `bone/50` apenas decorativo não essencial (marquee, labels verticais).

## Typography
- Display/Heading: `Bodoni Moda` (didone alto-contraste, eixo variável 6..96 opt, 400..900)
- Body: `Inter` (300–700)
- Carregadas via `<link>` no `index.html` (preconnect + display=swap). NÃO usar @import.
- Scale: section titles 2.2–3.4rem; hero/CTA H1 2.6rem–7xl. Itálico dourado na 2ª linha.
- Letter spacing: `widest` 0.2em; `ultra` 0.35em (labels uppercase / eyebrow)

## Elevation / Shadows
Mínimo. Sem glassmorphism (exceção: tooltip do float WhatsApp). Sombra só no botão flutuante.

## Components (`src/index.css` @layer components)
- `btn-gold`: fill dourado, sweep vertical (`::before` gold-light) + foco com ring
- `btn-ghost`: hairline `bone/25`, preenche no hover, foco com ring
- `btn-whatsapp`: verde WhatsApp
- `eyebrow`: 11px, gold/80, tracking ultra, uppercase
- `hairline`: w-12 h-px gold/70 (separador)
- `link-sweep`: link com underline animado (origin-right→left), py-1.5 p/ tap, foco com ring

## Imagery
- Placeholders Unsplash em `src/constants/images.js` — cada imagem `{ src, srcSet }`.
- `srcSet` multi-largura [480…1920] + `SIZES` por contexto (full/half/tile) p/ mobile leve.
- Tratamento `.img-grade`: grayscale/contrast/brightness/saturate, desbota no hover do grupo.
- Hero `loading="eager"` + preload + `fetchpriority`; resto `loading="lazy"`.

## Layout
- Max-width: `max-w-6xl` conteúdo, `max-w-5xl`/`max-w-4xl` declarações, `max-w-3xl` CTA
- Seções alternam ink ↔ charcoal (warm-dark contínuo, não claro/escuro)
- Padding vertical: `py-24 md:py-36`
- Grids editoriais assimétricos (2-col mobile → 12-col md) em Ocasiões e Galeria

## Motion
- Reveal on scroll: 1 IntersectionObserver (`useRevealObserver`) adiciona `.in`.
  Variantes CSS: `.r-up / .r-right / .r-left / .r-blur / .r-clip / .r-scale`, `.word` (palavra-a-palavra).
- Parallax: `useParallax` — 1 listener + 1 rAF compartilhado p/ todos os elementos (translate3d).
- Keyframes: `kenburns` (hero), `marquee` (divisória), `floaty` (scroll cue), `shimmer`.
- Easing: `cubic-bezier(0.16,1,0.3,1)` (ease-out-expo). Sem bounce/elastic.
- `prefers-reduced-motion`: zera animações/transições e revela tudo (override global).
