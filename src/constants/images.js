// IMAGENS PLACEHOLDER — todas do Unsplash (licença livre para uso comercial).
// IDs verificados (HTTP 200) e curados visualmente para moda masculina/alfaiataria.
// Substituir por fotos reais da loja antes do lançamento: basta trocar a URL
// mantendo a chave. Foto vertical (3:4) e bem iluminada — o tratamento editorial
// escuro é aplicado via CSS (.img-grade).
//
// ⚠️ TROCAR POR FOTO REAL (não há bom stock gratuito de criança de terno):
//   - IMAGES.infantil  (Bloco editorial "Infantil")
//   - IMAGES.occasions.pajem  (Ocasião "Pajens")
// Hoje usam um detalhe de moda masculina neutro como placeholder.

const U = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

export const IMAGES = {
  // Hero — homem ajustando o paletó, luz dramática (full-bleed)
  hero: U('1507679799987-c73779587ccf', 1920),

  // Bloco editorial
  adulto: U('1594938298603-c8148c4dae35', 1100),   // terno azul de corte impecável
  infantil: U('1602810318383-e386cc2a3ccf', 900),  // ⚠ placeholder neutro — trocar por menino de terno

  // Seção experiência — terno em forma de alfaiataria (atelier/prova)
  experience: U('1598808503746-f34c53b9323e', 1100),

  // Ocasiões
  occasions: {
    casamento: U('1606800052052-a08af7148866', 1300),   // alianças / casamento
    formatura: U('1543132220-3ec99c6094dc', 800),        // jovem em terno
    corporativo: U('1560250097-0b93528c311a', 800),      // executivo de terno
    pajem: U('1490114538077-0a7f8cb49891', 800),         // ⚠ placeholder neutro — trocar por pajem real
    'evento-social': U('1593030103066-0093718efeb9', 800), // homem em terno azul
    batizado: U('1592878904946-b3cd8ae243d0', 800),      // homem em terno marinho (cerimônias)
  },

  // Galeria magazine — 7 imagens (layout assimétrico), todas moda masculina
  gallery: [
    U('1507679799987-c73779587ccf', 900), // homem ajustando o paletó
    U('1594938298603-c8148c4dae35', 900), // terno azul de corte impecável
    U('1519085360753-af0119f7cbe7', 700), // jovem em traje social
    U('1593030761757-71fae45fa0e7', 900), // composição camisa, gravata e sapatos
    U('1490114538077-0a7f8cb49891', 700), // detalhe de tecido e textura
    U('1606800052052-a08af7148866', 700), // alianças — cerimônia
    U('1617127365659-c47fa864d8bc', 900), // homem em terno preto elegante
  ],
}

export const GALLERY_ALT = [
  'Homem ajustando o paletó de um terno escuro — Social Ternos',
  'Terno azul masculino de corte impecável',
  'Jovem em traje social completo e elegante',
  'Composição de camisa, gravata e sapatos sociais',
  'Detalhe de tecido e textura de terno premium',
  'Alianças em cerimônia de casamento',
  'Homem em terno preto elegante — Social Ternos',
]
