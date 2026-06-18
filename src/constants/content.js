// Dados reais da Social Ternos — editar conforme confirmação do cliente.

export const STORE = {
  name: 'Social Ternos',
  tagline: 'Venda e aluguel de ternos para momentos especiais',
  description:
    'Loja especializada em trajes masculinos no Centro de Patrocínio-MG. Venda e aluguel de ternos adulto e infantil, com atendimento personalizado e foco em caimento, conforto e elegância.',
  address: 'Rua Pinto Dias, 207, Centro',
  city: 'Patrocínio-MG',
  phone: '(34) 3099-1519',
  instagram: '@socialternos_patrocinio',
  instagramUrl: 'https://instagram.com/socialternos_patrocinio',
  hours: {
    weekdays: 'Segunda a Sexta · 9h às 18h',
    saturday: 'Sábado · 8h às 12h',
    sunday: 'Domingo · Fechado',
  },
}

export const WHATSAPP = {
  number: '553430991519',
  get baseUrl() {
    return `https://api.whatsapp.com/send?phone=${this.number}`
  },
  messages: {
    default:
      'Olá, vim pelo site da Social Ternos e gostaria de saber mais sobre venda ou aluguel de ternos.',
    hero: 'Olá! Vim pelo site da Social Ternos e gostaria de agendar um atendimento.',
    occasion: (label) =>
      `Olá! Vim pelo site da Social Ternos e tenho interesse em traje para ${label}. Poderia me ajudar?`,
    // Suit finder — gera mensagem a partir das seleções do widget "Encontre o traje ideal"
    finder: ({ occasion, intent, style, deadline } = {}) => {
      if (!occasion || !intent) {
        return 'Olá! Gostaria de ajuda para encontrar o terno ideal para uma ocasião especial.'
      }
      const stylePart = style ? `, prefiro um estilo ${style.toLowerCase()}` : ''
      const deadlinePart = deadline ? ` e preciso para ${deadline.toLowerCase()}` : ''
      return `Olá! Estou procurando um terno para ${occasion.toLowerCase()}. Tenho interesse em ${intent.toLowerCase()}${stylePart}${deadlinePart}. Pode me ajudar com opções?`
    },
    // Agendamento de prova — inclui o horário escolhido quando houver
    appointment: (slot) =>
      slot
        ? `Olá! Gostaria de agendar uma prova de terno no horário "${slot}". Vi a disponibilidade no site.`
        : 'Olá! Gostaria de agendar uma prova de terno. Vi alguns horários disponíveis no site.',
    suitModel: (name, occasion) =>
      `Olá! Gostaria de consultar disponibilidade do modelo ${name} para ${occasion}.`,
    rentHelp: 'Olá! Quero ajuda para alugar um terno para minha ocasião.',
    buyHelp: 'Olá! Quero ajuda para comprar um terno.',
    decideHelp:
      'Olá! Estou em dúvida entre alugar ou comprar um terno. Pode me ajudar a decidir?',
    fittingFinal: 'Olá! Gostaria de agendar uma prova de terno.',
  },
  getLink(message) {
    return `${this.baseUrl}&text=${encodeURIComponent(message)}`
  },
}

// Opções selecionáveis do widget "Encontre o traje ideal"
export const FINDER_OPTIONS = {
  occasion: ['Casamento', 'Formatura', 'Corporativo', 'Padrinho', 'Noivo', 'Gala / evento especial'],
  intent: ['Alugar', 'Comprar', 'Ainda não sei'],
  style: ['Clássico', 'Slim', 'Moderno', 'Premium'],
  deadline: ['Esta semana', 'Este mês', 'Estou pesquisando'],
}

// Horários de prova disponíveis (widget de agendamento)
export const FITTING_SLOTS = ['Hoje — 15:30', 'Amanhã — 09:00', 'Amanhã — 16:00', 'Sábado — 10:30']

// Mapa de badges de disponibilidade por ocasião (Occasions.jsx)
export const OCCASION_BADGES = {
  casamento: ['aluguel', 'venda'],
  formatura: ['aluguel', 'venda'],
  corporativo: ['venda'],
  padrinhos: ['aluguel', 'venda'],
  'evento-social': ['sob consulta'],
  batizado: ['aluguel'],
}

export const BADGE_LABEL = {
  aluguel: 'Aluguel',
  venda: 'Venda',
  'sob consulta': 'Sob consulta',
}

// Modelos do catálogo interativo ("Modelos em destaque")
export const SUITS = [
  {
    id: 'classic-black',
    name: 'Classic Black',
    occasion: ['casamento', 'gala'],
    availability: ['aluguel', 'venda'],
    style: 'clássico',
    image: 'g1',
    description: 'Elegância atemporal para cerimônias e eventos formais.',
  },
  {
    id: 'azul-tres-pecas',
    name: 'Azul Três-Peças',
    occasion: ['casamento', 'corporativo'],
    availability: ['venda'],
    style: 'premium',
    image: 'g2',
    description: 'Blazer, colete e calça em composição completa, acabamento premium.',
  },
  {
    id: 'moderno-black',
    name: 'Moderno Black',
    occasion: ['formatura', 'gala'],
    availability: ['aluguel'],
    style: 'moderno',
    image: 'g3',
    description: 'Corte contemporâneo para quem busca presença sem exagero.',
  },
  {
    id: 'windowpane-marinho',
    name: 'Windowpane Marinho',
    occasion: ['padrinho', 'corporativo'],
    availability: ['aluguel', 'venda'],
    style: 'slim',
    image: 'g5',
    description: 'Padronagem discreta e modelagem slim para o dia a dia profissional.',
  },
  {
    id: 'corporativo-grafite',
    name: 'Corporativo Grafite',
    occasion: ['corporativo'],
    availability: ['venda'],
    style: 'clássico',
    image: 'g6',
    description: 'Sobriedade e caimento perfeito para reuniões e apresentações.',
  },
  {
    id: 'composicao-completa',
    name: 'Composição Completa',
    occasion: ['noivo', 'gala'],
    availability: ['sob consulta'],
    style: 'premium',
    image: 'g7',
    description: 'Blazer, gravata, sapato e acessórios combinados para o noivo.',
  },
]

export const CATALOG_FILTERS = [
  { id: 'todos', label: 'Todos' },
  { id: 'casamento', label: 'Casamento' },
  { id: 'formatura', label: 'Formatura' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'padrinho', label: 'Padrinho' },
  { id: 'noivo', label: 'Noivo' },
  { id: 'venda', label: 'Venda' },
  { id: 'aluguel', label: 'Aluguel' },
]

// Aluguel vs compra
export const COMPARISON = {
  rent: {
    title: 'Aluguel',
    points: ['Ideal para evento único', 'Casamento', 'Formatura', 'Padrinho', 'Menor investimento inicial', 'Praticidade'],
    cta: 'Quero ajuda para alugar',
  },
  buy: {
    title: 'Compra',
    points: ['Ideal para uso recorrente', 'Eventos profissionais', 'Reuniões', 'Imagem pessoal', 'Longo prazo', 'Versatilidade'],
    cta: 'Quero ajuda para comprar',
  },
  helper: {
    title: 'Ainda em dúvida?',
    text: 'Conte sua ocasião e te ajudamos a decidir entre aluguel e compra.',
    cta: 'Me ajude a escolher',
  },
}

// Guia rápido de estilo
export const STYLE_GUIDE = [
  { id: 'classico', icon: 'crown', title: 'Clássico', text: 'Corte tradicional, linhas retas e atemporais. Para quem busca elegância sem pressa.' },
  { id: 'slim', icon: 'zap', title: 'Slim', text: 'Modelagem ajustada ao corpo, silhueta mais contemporânea e definida.' },
  { id: 'premium', icon: 'gem', title: 'Premium', text: 'Tecidos e acabamentos superiores para ocasiões que pedem o melhor.' },
  { id: 'corporativo', icon: 'briefcase', title: 'Corporativo', text: 'Sobriedade pensada para reuniões, apresentações e o dia a dia profissional.' },
]

// Palavras que correm na divisória editorial (marquee)
export const MARQUEE = [
  'Casamento',
  'Formatura',
  'Padrinhos',
  'Noivos',
  'Pajens',
  'Corporativo',
  'Cerimônias',
  'Eventos',
]

// Bloco editorial — venda & aluguel, adulto & infantil
export const OFFERS = [
  {
    n: '01',
    kicker: 'Adulto',
    title: 'Ternos para quem ocupa o centro da cena',
    text: 'Venda e aluguel para noivos, padrinhos, formandos e convidados. Caimento, tecido e composição orientados para a sua ocasião.',
    image: 'adulto',
    span: 'wide',
  },
  {
    n: '02',
    kicker: 'Infantil',
    title: 'Pequenos cavalheiros, grandes presenças',
    text: 'Trajes para crianças e pajens em casamentos, batizados e cerimônias de família: conforto e elegância sob medida para eles.',
    image: 'infantil',
    span: 'narrow',
  },
]

// Ocasiões — primeira é destaque (featured), demais formam grid assimétrico
export const OCCASIONS = [
  { id: 'casamento', label: 'Casamento', note: 'Noivos & padrinhos', featured: true },
  { id: 'formatura', label: 'Formatura' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'padrinhos', label: 'Padrinhos' },
  { id: 'evento-social', label: 'Evento Social' },
  { id: 'batizado', label: 'Cerimônias' },
]

// Seção de experiência — atendimento, prova, escolha, orientação
export const EXPERIENCE = [
  {
    n: '01',
    title: 'Atendimento',
    text: 'Você é recebido com atenção individual, sem pressa, para entender o evento e o estilo.',
  },
  {
    n: '02',
    title: 'Escolha do traje',
    text: 'Modelos, cores e tecidos selecionados junto com você, de acordo com a ocasião.',
  },
  {
    n: '03',
    title: 'Prova e ajuste',
    text: 'Experimente na loja e veja o caimento. Acertamos os detalhes para o seu corpo.',
  },
  {
    n: '04',
    title: 'Orientação',
    text: 'Camisa, gravata, colete e acessórios combinados em um visual completo e coerente.',
  },
]

// Navegação do topo — âncoras para as seções
export const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Ternos', href: '#colecao' },
  { label: 'Ocasiões', href: '#ocasioes' },
  { label: 'Lookbook', href: '#galeria' },
  { label: 'Como chegar', href: '#como-chegar' },
  { label: 'Contato', href: '#contato' },
]

// Bloco "Sobre" — momento de marca
export const ABOUT = {
  eyebrow: 'Sobre a Social Ternos',
  title: 'Mais que ternos, criamos experiências.',
  paragraphs: [
    'Loja especializada em trajes masculinos no Centro de Patrocínio-MG, referência em venda e aluguel de ternos adulto e infantil.',
    'Atendimento personalizado para o seu maior conforto. No nosso acervo você encontra ternos com acabamento premium e caimento impecável, num ambiente agradável e exclusivo.',
  ],
}

// Seção "Soluções para cada ocasião" — ícones desenháveis (ver LineIcons.jsx)
export const SERVICES = [
  { icon: 'jacket', title: 'Venda', text: 'Ternos e acessórios com design sofisticado e caimento perfeito.' },
  { icon: 'hanger', title: 'Aluguel', text: 'Trajes para todas as ocasiões, com praticidade e ótimo custo-benefício.' },
  { icon: 'adult', title: 'Adulto', text: 'Modelagens modernas e clássicas para todos os estilos.' },
  { icon: 'child', title: 'Infantil', text: 'Elegância também para os pequenos grandes momentos.' },
  { icon: 'rings', title: 'Casamentos', text: 'Do noivo aos padrinhos, a elegância que marca o grande dia.' },
  { icon: 'cap', title: 'Formaturas', text: 'Conquiste esse momento com estilo e personalidade.' },
  { icon: 'bowtie', title: 'Ocasiões especiais', text: 'Eventos sociais, jantares, aniversários e muito mais.' },
]

// Kit completo — o terno sai pronto, da cabeça aos pés
export const KIT = [
  { icon: 'jacket', label: 'Blazer' },
  { icon: 'pants', label: 'Calça social' },
  { icon: 'shirt', label: 'Camisa social' },
  { icon: 'tie', label: 'Gravata' },
  { icon: 'shoe', label: 'Sapato' },
]

// Seção "O que nos torna a escolha certa"
export const REASONS = [
  { icon: 'care', title: 'Atendimento personalizado' },
  { icon: 'scissors', title: 'Caimento impecável' },
  { icon: 'medal', title: 'Acabamento premium' },
  { icon: 'comfort', title: 'Conforto em cada detalhe' },
  { icon: 'store', title: 'Ambiente exclusivo' },
]

// Horário de funcionamento estruturado (para status em tempo real)
const SCHEDULE = {
  1: [540, 1080], 2: [540, 1080], 3: [540, 1080], 4: [540, 1080], 5: [540, 1080], // seg–sex 9h–18h
  6: [480, 720], // sáb 8h–12h
  // domingo (0): fechado
}

// Calcula se a loja está aberta agora (horário local do visitante).
export function storeStatus(now = new Date()) {
  const day = now.getDay()
  const mins = now.getHours() * 60 + now.getMinutes()
  const window = SCHEDULE[day]
  const open = !!window && mins >= window[0] && mins < window[1]
  return { open, label: open ? 'Aberto agora' : 'Fechado agora' }
}

export const MAPS_URL =
  'https://www.google.com/maps/search/Rua+Pinto+Dias,+207,+Centro,+Patroc%C3%ADnio,+MG'

export const MAPS_EMBED =
  'https://maps.google.com/maps?q=Rua+Pinto+Dias,207,Patroc%C3%ADnio,MG,Brasil&z=16&output=embed'
