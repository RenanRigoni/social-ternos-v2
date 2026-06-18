// IMAGENS PLACEHOLDER — Unsplash (licença livre p/ uso comercial), curadas
// VISUALMENTE para o nicho: só ternos lisos e clássicos. Sem xadrez, sem listras,
// sem estampas. Cores: preto, chumbo, cinza, azul marinho, azul médio.
//
// Reuso entre seções é permitido; dentro de um mesmo grid não há repetição.
// Substituir por fotos reais da loja: troque o ID mantendo a chave.

const IDS = {
  hero: '1507679799987-c73779587ccf',          // homem ajustando blazer navy liso
  adulto: '1617137968427-85924c800a22',        // terno azul escuro liso
  infantil: '1548454782-15b189d129ab',         // terno escuro liso (adulto — substituir por criança real)
  experience: '1598808503746-f34c53b9323e',   // terno em manequim no ateliê
  // Ocasiões
  casamento: '1519085360753-af0119f7cbe7',    // terno preto + gravata vermelha (noivo)
  formatura: '1617127365659-c47fa864d8bc',    // terno preto, estilo formando
  corporativo: '1560250097-0b93528c311a',     // blazer escuro corporativo
  padrinhos: '1617137968427-85924c800a22',    // terno azul marinho liso
  'evento-social': '1507679799987-c73779587ccf', // homem de terno navy liso
  batizado: '1548454782-15b189d129ab',        // terno escuro liso
  // Catálogo (g1–g7 — todos lisos, sem padrões)
  g1: '1519085360753-af0119f7cbe7',           // terno preto, gravata vermelha
  g2: '1617137968427-85924c800a22',           // terno azul marinho liso
  g3: '1617127365659-c47fa864d8bc',           // terno preto moderno
  g4: '1623880840102-7df0a9f3545b',           // blazer escuro liso
  g5: '1617137968427-85924c800a22',           // terno azul marinho liso
  g6: '1560250097-0b93528c311a',              // blazer corporativo
  g7: '1661385963299-c08f8590a652',           // acessórios noivo: sapato, relógio, gravata borboleta
}

const u = (id, w) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

// Larguras servidas. Cobrem mobile (480) até hero full-bleed em telão (1920).
const WIDTHS = [480, 768, 1100, 1600, 1920]
const srcSet = (id) => WIDTHS.map((w) => `${u(id, w)} ${w}w`).join(', ')

// fallback `w` para browsers sem suporte a srcset
const make = (id, w) => ({ src: u(id, w), srcSet: srcSet(id) })

// Valor do atributo `sizes` por contexto de layout (largura que a imagem ocupa).
export const SIZES = {
  full: '100vw',
  half: '(min-width: 768px) 50vw, 100vw',
  tile: '(min-width: 768px) 33vw, 50vw',
}

export const IMAGES = {
  hero: make(IDS.hero, 1920),

  // Bloco editorial
  adulto: make(IDS.adulto, 1100),
  infantil: make(IDS.infantil, 900),

  // Seção experiência
  experience: make(IDS.experience, 1100),

  // Ocasiões
  occasions: {
    casamento: make(IDS.casamento, 1300),
    formatura: make(IDS.formatura, 800),
    corporativo: make(IDS.corporativo, 800),
    padrinhos: make(IDS.padrinhos, 800),
    'evento-social': make(IDS['evento-social'], 800),
    batizado: make(IDS.batizado, 800),
  },

  // Galeria — 7 imagens, todas ternos lisos
  gallery: [
    make(IDS.g1, 900),
    make(IDS.g2, 900),
    make(IDS.g3, 700),
    make(IDS.g4, 900),
    make(IDS.g5, 700),
    make(IDS.g6, 700),
    make(IDS.g7, 900),
  ],
}

// Acesso por chave (g1..g7) — usado pelo catálogo interativo.
export const GALLERY_BY_KEY = {
  g1: IMAGES.gallery[0],
  g2: IMAGES.gallery[1],
  g3: IMAGES.gallery[2],
  g4: IMAGES.gallery[3],
  g5: IMAGES.gallery[4],
  g6: IMAGES.gallery[5],
  g7: IMAGES.gallery[6],
}

export const GALLERY_ALT = [
  'Homem em terno preto com gravata vermelha, Social Ternos',
  'Terno azul marinho liso, Social Ternos',
  'Homem em terno preto de corte moderno, Social Ternos',
  'Blazer escuro liso, Social Ternos',
  'Terno azul marinho liso, corte clássico, Social Ternos',
  'Homem de blazer escuro em ambiente corporativo, Social Ternos',
  'Acessórios para noivo: sapato, relógio e gravata, Social Ternos',
]
