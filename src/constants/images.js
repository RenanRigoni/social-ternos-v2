// IMAGENS PLACEHOLDER — Unsplash (licença livre p/ uso comercial), curadas
// VISUALMENTE para o nicho: só ternos lisos e clássicos. Sem xadrez, sem listras,
// sem estampas. Cores: preto, chumbo, cinza, azul marinho, azul médio.
//
// Para usar imagens reais: substitua o ID do Unsplash por caminho local,
// ex: IDS.g1 = 'local:modelo-classic-black.png' e ajuste a fn make() abaixo.

const IDS = {
  hero:       '1507679799987-c73779587ccf',  // homem ajustando blazer navy liso
  adulto:     '1617137968427-85924c800a22',  // terno azul escuro liso
  infantil:   '1548454782-15b189d129ab',     // terno escuro liso (substituir por criança real)
  experience: '1598808503746-f34c53b9323e',  // terno em manequim no ateliê

  // Ocasiões
  casamento:          '1519085360753-af0119f7cbe7',  // terno preto (noivo)
  formatura:          '1617127365659-c47fa864d8bc',  // terno preto, formando
  corporativo:        '1560250097-0b93528c311a',     // blazer escuro corporativo
  padrinhos:          '1617137968427-85924c800a22',  // terno azul marinho liso
  noivo:              '1507679799987-c73779587ccf',  // homem em blazer navy elegante
  'cerimonia-premium':'1598808503746-f34c53b9323e',  // ateliê / traje formal

  // Catálogo (g1–g13 — todos ternos lisos, sem padrões)
  g1:  '1519085360753-af0119f7cbe7',  // Classic Black — preto + gravata
  g2:  '1617137968427-85924c800a22',  // Azul Marinho Premium — azul 3 peças
  g3:  '1617127365659-c47fa864d8bc',  // Black Contemporâneo — preto moderno
  g4:  '1560250097-0b93528c311a',     // Corporativo Grafite — blazer corporativo
  g5:  '1548454782-15b189d129ab',     // Noivo Claro — substituto claro (placeholder)
  g6:  '1623880840102-7df0a9f3545b',  // Cinza Prata — blazer escuro elegante
  g7:  '1507679799987-c73779587ccf',  // Verde Oliva — navy blazer (placeholder)
  g8:  '1598808503746-f34c53b9323e',  // Marrom Café — ateliê / manequim
  g9:  '1519085360753-af0119f7cbe7',  // Smoking Marsala — terno formal preto
  g10: '1617127365659-c47fa864d8bc',  // Black Tie — preto cerimônia
  g11: '1617137968427-85924c800a22',  // Azul Vivo — azul formal
  g12: '1661385963299-c08f8590a652',  // Composição Completa — acessórios noivo
  g13: '1548454782-15b189d129ab',     // Infantil / Pajem — placeholder (substituir)
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
  adulto:   make(IDS.adulto, 1100),
  infantil: make(IDS.infantil, 900),

  // Seção experiência
  experience: make(IDS.experience, 1100),

  // Ocasiões
  occasions: {
    casamento:          make(IDS.casamento, 1300),
    formatura:          make(IDS.formatura, 800),
    corporativo:        make(IDS.corporativo, 800),
    padrinhos:          make(IDS.padrinhos, 800),
    noivo:              make(IDS.noivo, 800),
    'cerimonia-premium':make(IDS['cerimonia-premium'], 800),
  },

  // Galeria — 13 imagens, todos ternos lisos
  gallery: [
    make(IDS.g1,  900),
    make(IDS.g2,  900),
    make(IDS.g3,  700),
    make(IDS.g4,  900),
    make(IDS.g5,  700),
    make(IDS.g6,  900),
    make(IDS.g7,  700),
    make(IDS.g8,  900),
    make(IDS.g9,  700),
    make(IDS.g10, 700),
    make(IDS.g11, 900),
    make(IDS.g12, 900),
    make(IDS.g13, 700),
  ],
}

// Acesso por chave (g1..g13) — usado pelo catálogo interativo.
export const GALLERY_BY_KEY = {
  g1:  IMAGES.gallery[0],
  g2:  IMAGES.gallery[1],
  g3:  IMAGES.gallery[2],
  g4:  IMAGES.gallery[3],
  g5:  IMAGES.gallery[4],
  g6:  IMAGES.gallery[5],
  g7:  IMAGES.gallery[6],
  g8:  IMAGES.gallery[7],
  g9:  IMAGES.gallery[8],
  g10: IMAGES.gallery[9],
  g11: IMAGES.gallery[10],
  g12: IMAGES.gallery[11],
  g13: IMAGES.gallery[12],
}

export const GALLERY_ALT = [
  'Terno preto clássico com gravata, Social Ternos',
  'Terno azul marinho três peças, Social Ternos',
  'Terno preto contemporâneo, Social Ternos',
  'Blazer grafite corporativo, Social Ternos',
  'Traje claro para noivo, Social Ternos',
  'Terno cinza prata elegante, Social Ternos',
  'Terno verde oliva elegante, Social Ternos',
  'Composição marrom café, Social Ternos',
  'Smoking marsala com lapela acetinada, Social Ternos',
  'Cerimônia black tie, Social Ternos',
  'Terno azul vivo para cerimônia, Social Ternos',
  'Composição completa noivo com acessórios, Social Ternos',
  'Traje infantil para pajens e batizados, Social Ternos',
]
