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
  },
  getLink(message) {
    return `${this.baseUrl}&text=${encodeURIComponent(message)}`
  },
}

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
    text: 'Trajes para crianças e pajens em casamentos, batizados e cerimônias de família — conforto e elegância sob medida para eles.',
    image: 'infantil',
    span: 'narrow',
  },
]

// Ocasiões — primeira é destaque (featured), demais formam grid assimétrico
export const OCCASIONS = [
  { id: 'casamento', label: 'Casamento', note: 'Noivos & padrinhos', featured: true },
  { id: 'formatura', label: 'Formatura' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'pajem', label: 'Pajens' },
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

export const MAPS_URL =
  'https://www.google.com/maps/search/Rua+Pinto+Dias,+207,+Centro,+Patroc%C3%ADnio,+MG'

export const MAPS_EMBED =
  'https://maps.google.com/maps?q=Rua+Pinto+Dias,207,Patroc%C3%ADnio,MG,Brasil&z=16&output=embed'
