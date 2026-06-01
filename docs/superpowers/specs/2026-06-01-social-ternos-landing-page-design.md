# Social Ternos — Landing Page Demo

**Data:** 2026-06-01  
**Objetivo:** Demo premium para apresentar ao dono da Social Ternos e mostrar potencial de presença digital profissional.

---

## Dados Reais da Loja

| Campo | Valor |
|-------|-------|
| Nome | Social Ternos |
| Instagram | @socialternos_patrocinio |
| Endereço | Rua Pinto Dias, 207, Centro — Patrocínio-MG |
| WhatsApp | (34) 3099-1519 |
| API WhatsApp | api.whatsapp.com/send?phone=553430991519 |
| Horário | Seg–Sex 9h–18h / Sáb 8h–12h |
| Segmento | Venda e aluguel de ternos adulto e infantil |

---

## Stack

**React 18 + Vite + Tailwind CSS**

Justificativa: deploy no GitHub Pages via GitHub Actions elimina a fricção de build. Tailwind acelera implementação de identidade visual premium sem CSS manual verboso. React facilita manutenção por componente.

---

## Identidade Visual

| Token | Valor |
|-------|-------|
| `color-black` | `#0a0a0a` |
| `color-graphite` | `#2a2a2a` |
| `color-gold` | `#c9a84c` |
| `color-offwhite` | `#f8f6f1` |
| `color-champagne` | `#e8e0d0` |
| `color-navy` | `#1a2744` |
| `font-heading` | Playfair Display (Google Fonts) |
| `font-body` | Inter (Google Fonts) |

**Princípios visuais:**
- Fundo off-white com seções alternando offwhite/champagne
- Títulos em Playfair Display, cor grafite ou preto
- Accent dourado usado com moderação: bordas, ícones, separadores
- Botões primários: preto com hover dourado
- Botões secundários: borda preta/dourada, fundo transparente
- Sem sombras pesadas, sem gradientes artificiais, sem brilhos

---

## Arquitetura de Arquivos

```
social-ternos/
├── public/
│   └── logo/
│       ├── social_ternos.png
│       └── social_ternos.svg
├── src/
│   ├── assets/
│   │   └── logo.svg          # cópia local da logo para import React
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Occasions.jsx
│   │   ├── Differentials.jsx
│   │   ├── Gallery.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Location.jsx
│   │   ├── FAQ.jsx
│   │   ├── FinalCTA.jsx
│   │   └── WhatsAppFloat.jsx
│   ├── constants/
│   │   ├── images.js     # todos os URLs de imagem — substituíveis
│   │   └── content.js    # textos, dados da loja, links
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css         # Tailwind directives + custom CSS
├── index.html            # SEO: title, meta description, OG tags
├── tailwind.config.js    # tokens de cor e fonte customizados
├── vite.config.js        # base URL para GitHub Pages
├── .github/
│   └── workflows/
│       └── deploy.yml    # build + deploy automático no push
└── package.json
```

---

## Seções (11 no total)

### 1. Hero
- Logo Social Ternos centralizada ou alinhada
- Título H1: *"Venda e aluguel de ternos para momentos especiais"*
- Subtítulo: *"Trajes adulto e infantil com atendimento personalizado em Patrocínio-MG."*
- CTA primário: "Agendar atendimento pelo WhatsApp" → link WhatsApp com mensagem pré-preenchida
- CTA secundário: "Ver serviços" → âncora para seção de serviços
- Imagem de fundo ou split: terno masculino premium, overlay escuro discreto

### 2. Apresentação da Loja
- Texto comercial sobre a Social Ternos: especialização em trajes masculinos, venda e aluguel adulto/infantil, Centro de Patrocínio-MG
- Tom: profissional, elegante, próximo — sem exagero
- Imagem lateral: ambiente de loja masculina ou detalhe de tecido

### 3. Serviços
6 cards em grid:
1. Venda de Ternos Masculinos
2. Aluguel Adulto
3. Aluguel Infantil
4. Noivos e Padrinhos
5. Formaturas e Eventos
6. Composição do Traje (camisa, gravata, acessórios)

Cada card: ícone SVG discreto + título + descrição curta + CTA "Consultar pelo WhatsApp"

### 4. Ocasiões
Grid visual de 8 ocasiões:
- Casamentos, Formaturas, Eventos Sociais, Eventos Corporativos, Batizados/Cerimônias, Pajens, Convidados, Momentos Especiais
- Cada item: imagem placeholder + label sobreposto

### 5. Diferenciais
6 blocos com ícone + texto:
- Atendimento personalizado
- Orientação na escolha do traje
- Opções adulto e infantil
- Localização central (Centro de Patrocínio-MG)
- Foco em caimento, conforto e elegância
- Ambiente agradável

### 6. Galeria Visual
Grid masonry ou grid uniforme com 6–9 imagens placeholder:
- Ternos masculinos, terno infantil, noivo, padrinhos, detalhe de tecido, prova de traje, cabides com ternos
- Comentário claro no código: `// PLACEHOLDER — substituir por foto real da loja`

### 7. Como Funciona
4 passos numerados com linha conectora:
1. Escolha a ocasião
2. Fale com a loja pelo WhatsApp
3. Faça a prova ou consulte disponibilidade
4. Retire seu traje para o evento

### 8. Endereço e Horário
- Endereço: Rua Pinto Dias, 207, Centro — Patrocínio-MG
- Horários: Seg–Sex 9h–18h / Sáb 8h–12h
- Botão WhatsApp
- Botão "Ver no Google Maps" → link de busca pelo endereço
- Embed Google Maps (iframe) ou link externo se embed causar problemas de layout

### 9. FAQ
6 perguntas em accordion (abrir/fechar):
1. Vocês trabalham com venda e aluguel?
2. Têm opções infantis?
3. Preciso agendar atendimento?
4. Vocês atendem noivos e padrinhos?
5. Como consulto disponibilidade?
6. Em quais horários a loja funciona?

Respostas comerciais, sem inventar informações não confirmadas.

### 10. CTA Final
- Headline: *"Encontre o traje ideal para o seu momento especial."*
- Botão: "Falar com a Social Ternos" → WhatsApp
- Fundo escuro (grafite ou preto) para contraste com off-white das seções anteriores

### 11. Botão Flutuante WhatsApp
- Fixo canto inferior direito, z-index alto
- Ícone WhatsApp verde
- Mensagem pré-preenchida: *"Olá, vim pelo site da Social Ternos e gostaria de saber mais sobre venda ou aluguel de ternos."*
- Tooltip discreto ao hover: "Fale conosco"

---

## SEO Básico (index.html)

```html
<title>Social Ternos — Venda e Aluguel de Ternos em Patrocínio-MG</title>
<meta name="description" content="Loja especializada em venda e aluguel de ternos adulto e infantil em Patrocínio-MG. Atendimento personalizado para casamentos, formaturas e eventos sociais." />
<meta property="og:title" content="Social Ternos — Patrocínio-MG" />
<meta property="og:description" content="Venda e aluguel de ternos adulto e infantil com atendimento personalizado." />
```

---

## Imagens

Todas centralizadas em `src/constants/images.js`. Usar URLs do Unsplash como placeholder. Cada URL comentada com descrição do conteúdo ideal para substituição.

---

## Deploy

Arquivo `.github/workflows/deploy.yml`:
- Trigger: push na branch `main`
- Steps: checkout → setup Node → npm install → npm run build → deploy pasta `dist/` para branch `gh-pages`
- `vite.config.js`: `base: '/SocialTernos/'`

---

## Conteúdo Provisório vs. Real

| Item | Status |
|------|--------|
| Nome, endereço, WhatsApp, horários | ✅ Real |
| Logo | ✅ Real (PNG + SVG — recolocar em public/logo/ e src/assets/) |
| Descrição da loja | ✅ Real (adaptada) |
| Imagens de produto/loja | 🔄 Placeholder Unsplash |
| Textos comerciais | 🔄 Provisório — revisável |
| Depoimentos, avaliações | ❌ Não incluir |
| Preços, promoções | ❌ Não incluir |
| Tempo de mercado, prêmios | ❌ Não incluir |
