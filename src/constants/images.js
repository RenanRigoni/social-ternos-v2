// IMAGENS PLACEHOLDER — todas do Unsplash (licença livre para uso comercial).
// IDs verificados (HTTP 200) e curados visualmente para moda masculina/alfaiataria.
// Substituir por fotos reais da loja antes do lançamento: basta trocar o ID em IDS
// mantendo a chave. Foto vertical (3:4) e bem iluminada — o tratamento editorial
// escuro é aplicado via CSS (.img-grade).
//
// Cada imagem expõe { src, srcSet }. O srcSet entrega larguras múltiplas e o
// browser escolhe a menor que serve o slot (ver SIZES) conforme viewport/DPR —
// no mobile (público primário) isso corta metade do peso.
//
// ⚠️ TROCAR POR FOTO REAL (não há bom stock gratuito de criança de terno):
//   - IMAGES.infantil  (Bloco editorial "Infantil")
//   - IMAGES.occasions.pajem  (Ocasião "Pajens")
// Hoje usam um detalhe de moda masculina neutro como placeholder.

const IDS = {
  hero: '1507679799987-c73779587ccf',         // homem ajustando o paletó, luz dramática
  adulto: '1594938298603-c8148c4dae35',        // terno azul de corte impecável
  infantil: '1602810318383-e386cc2a3ccf',      // ⚠ placeholder neutro — trocar por menino de terno
  experience: '1598808503746-f34c53b9323e',    // alfaiataria (atelier/prova)
  // Ocasiões
  casamento: '1606800052052-a08af7148866',     // alianças / casamento
  formatura: '1543132220-3ec99c6094dc',        // jovem em terno
  corporativo: '1560250097-0b93528c311a',      // executivo de terno
  pajem: '1490114538077-0a7f8cb49891',         // ⚠ placeholder neutro — trocar por pajem real
  'evento-social': '1593030103066-0093718efeb9', // homem em terno azul
  batizado: '1592878904946-b3cd8ae243d0',      // homem em terno marinho (cerimônias)
  // Galeria magazine
  g1: '1507679799987-c73779587ccf',
  g2: '1594938298603-c8148c4dae35',
  g3: '1519085360753-af0119f7cbe7',
  g4: '1593030761757-71fae45fa0e7',
  g5: '1490114538077-0a7f8cb49891',
  g6: '1606800052052-a08af7148866',
  g7: '1617127365659-c47fa864d8bc',
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
  full: '100vw',                              // hero full-bleed
  half: '(min-width: 768px) 50vw, 100vw',     // grids 2-col (editorial, experiência, galeria)
  tile: '(min-width: 768px) 33vw, 50vw',      // tiles de ocasião
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
    pajem: make(IDS.pajem, 800),
    'evento-social': make(IDS['evento-social'], 800),
    batizado: make(IDS.batizado, 800),
  },

  // Galeria magazine — 7 imagens (layout assimétrico), todas moda masculina
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

export const GALLERY_ALT = [
  'Homem ajustando o paletó de um terno escuro, Social Ternos',
  'Terno azul masculino de corte impecável',
  'Jovem em traje social completo e elegante',
  'Composição de camisa, gravata e sapatos sociais',
  'Detalhe de tecido e textura de terno premium',
  'Alianças em cerimônia de casamento',
  'Homem em terno preto elegante, Social Ternos',
]
