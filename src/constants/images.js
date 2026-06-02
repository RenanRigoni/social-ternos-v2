// IMAGENS PLACEHOLDER — todas do Unsplash (licença livre para uso comercial).
// IDs verificados. Substituir por fotos reais da loja antes do lançamento:
// basta trocar a URL mantendo a chave. Recomenda-se foto vertical (3:4) e
// bem iluminada — o tratamento editorial escuro é aplicado via CSS (.img-grade).

const U = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

export const IMAGES = {
  // Hero — homem de terno escuro, luz dramática (full-bleed)
  hero: U('1507679799987-c73779587ccf', 1920),

  // Bloco editorial
  adulto: U('1617127365659-c47fa864d8bc', 1100),   // traje masculino completo
  infantil: U('1537640538966-79f369143f8f', 900),  // traje social formal (trocar por infantil real)

  // Seção experiência — alfaiate ajustando terno (prova/atendimento)
  experience: U('1554224155-6726b3ff858f', 1100),

  // Ocasiões
  occasions: {
    casamento: U('1606800052052-a08af7148866', 1300),
    formatura: U('1582966772680-860e372bb558', 800),
    corporativo: U('1560250097-0b93528c311a', 800),
    pajem: U('1537640538966-79f369143f8f', 800),
    'evento-social': U('1540575467063-178a50c2df87', 800),
    batizado: U('1529619768328-e37af76c6fe5', 800),
  },

  // Galeria magazine — 7 imagens (layout assimétrico)
  gallery: [
    U('1507679799987-c73779587ccf', 900), // retrato terno escuro
    U('1539109136881-3be0616acf4b', 700), // detalhe lapela/tecido
    U('1519085360753-af0119f7cbe7', 700), // jovem terno social
    U('1593030761757-71fae45fa0e7', 900), // grupo trajes formais
    U('1490114538077-0a7f8cb49891', 700), // trajes sociais evento
    U('1606800052052-a08af7148866', 700), // cerimônia bem vestida
    U('1617127365659-c47fa864d8bc', 900), // traje social completo
  ],
}

export const GALLERY_ALT = [
  'Homem com terno escuro elegante — Social Ternos',
  'Detalhe de lapela e tecido de terno premium',
  'Homem jovem com traje social impecável',
  'Grupo de padrinhos com ternos combinando',
  'Trajes sociais masculinos em evento formal',
  'Cerimônia com convidados bem vestidos',
  'Traje social masculino completo e elegante',
]
