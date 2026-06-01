// Dados reais da Social Ternos — editar conforme confirmação do cliente

export const STORE = {
  name: 'Social Ternos',
  tagline: 'Venda e aluguel de ternos para momentos especiais',
  description:
    'Loja especializada em trajes masculinos, localizada no Centro de Patrocínio-MG. Venda e aluguel de ternos adulto e infantil com atendimento personalizado, foco em caimento, conforto e elegância.',
  address: 'Rua Pinto Dias, 207, Centro',
  city: 'Patrocínio-MG',
  phone: '(34) 3099-1519',
  instagram: '@socialternos_patrocinio',
  instagramUrl: 'https://instagram.com/socialternos_patrocinio',
  hours: {
    weekdays: 'Segunda a Sexta: 9h às 18h',
    saturday: 'Sábado: 8h às 12h',
    sunday: 'Domingo: Fechado',
  },
}

export const WHATSAPP = {
  number: '553430991519',
  get baseUrl() {
    return `https://api.whatsapp.com/send?phone=${this.number}`
  },
  messages: {
    default: 'Olá, vim pelo site da Social Ternos e gostaria de saber mais sobre venda ou aluguel de ternos.',
    hero: 'Olá! Vim pelo site da Social Ternos e gostaria de agendar um atendimento.',
    service: (service) =>
      `Olá! Vim pelo site da Social Ternos e tenho interesse em: ${service}. Poderia me ajudar?`,
  },
  getLink(message) {
    return `${this.baseUrl}&text=${encodeURIComponent(message)}`
  },
}

export const SERVICES = [
  {
    id: 'venda',
    icon: 'suit',
    title: 'Venda de Ternos',
    description:
      'Ternos masculinos para compra, com orientação na escolha do modelo, tecido e acessórios ideais para cada ocasião.',
  },
  {
    id: 'aluguel-adulto',
    icon: 'hanger',
    title: 'Aluguel Adulto',
    description:
      'Aluguel de ternos masculinos para casamentos, formaturas, eventos corporativos e ocasiões especiais.',
  },
  {
    id: 'aluguel-infantil',
    icon: 'child',
    title: 'Aluguel Infantil',
    description:
      'Trajes para crianças e pajens, com opções adequadas para cerimônias e eventos de família.',
  },
  {
    id: 'noivos-padrinhos',
    icon: 'rings',
    title: 'Noivos e Padrinhos',
    description:
      'Atendimento dedicado para noivos e padrinhos, com consultoria para garantir harmonia e elegância no grande dia.',
  },
  {
    id: 'formaturas',
    icon: 'graduation',
    title: 'Formaturas e Eventos',
    description:
      'Opções para formandos, paraninfos e participantes de eventos sociais que precisam estar bem vestidos.',
  },
  {
    id: 'composicao',
    icon: 'tie',
    title: 'Composição do Traje',
    description:
      'Orientação para combinar camisa, gravata, colete e acessórios, formando um visual completo e alinhado.',
  },
]

export const OCCASIONS = [
  { id: 'casamento', label: 'Casamento' },
  { id: 'formatura', label: 'Formatura' },
  { id: 'evento-social', label: 'Evento Social' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'batizado', label: 'Batizado e Cerimônias' },
  { id: 'pajem', label: 'Pajens' },
  { id: 'convidados', label: 'Convidados' },
  { id: 'especial', label: 'Momentos Especiais' },
]

export const DIFFERENTIALS = [
  {
    icon: 'person',
    title: 'Atendimento Personalizado',
    description: 'Cada cliente recebe atenção individual para encontrar o traje certo para sua ocasião.',
  },
  {
    icon: 'compass',
    title: 'Orientação na Escolha',
    description: 'Ajudamos você a escolher o modelo, o tecido e a composição ideal, sem complicação.',
  },
  {
    icon: 'sizes',
    title: 'Adulto e Infantil',
    description: 'Opções completas para toda a família, do noivo ao pajem, adultos e crianças.',
  },
  {
    icon: 'location',
    title: 'Localização Central',
    description: 'No Centro de Patrocínio-MG, de fácil acesso para você e sua família.',
  },
  {
    icon: 'fit',
    title: 'Caimento e Conforto',
    description: 'Ternos com bom caimento, tecidos confortáveis e acabamento cuidadoso.',
  },
  {
    icon: 'store',
    title: 'Ambiente Agradável',
    description: 'Um espaço pensado para que você se sinta à vontade durante o atendimento.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Escolha a Ocasião',
    description: 'Casamento, formatura, evento social — nos conte qual é o momento especial.',
  },
  {
    step: '02',
    title: 'Fale pelo WhatsApp',
    description: 'Entre em contato para tirar dúvidas e verificar disponibilidade.',
  },
  {
    step: '03',
    title: 'Faça a Prova',
    description: 'Visite a loja para experimentar e ajustar o traje ideal para você.',
  },
  {
    step: '04',
    title: 'Retire no Dia',
    description: 'Retire seu traje pronto e elegante para o seu momento especial.',
  },
]

export const FAQ = [
  {
    question: 'Vocês trabalham com venda e aluguel de ternos?',
    answer:
      'Sim. A Social Ternos oferece tanto a venda quanto o aluguel de ternos masculinos adulto e infantil. Você escolhe a modalidade que faz mais sentido para a sua necessidade.',
  },
  {
    question: 'Têm opções de trajes infantis?',
    answer:
      'Sim, trabalhamos com trajes infantis para pajens e crianças em cerimônias e eventos de família.',
  },
  {
    question: 'Preciso agendar um atendimento antes de ir à loja?',
    answer:
      'Não é obrigatório, mas recomendamos entrar em contato pelo WhatsApp antes de visitar, especialmente em datas próximas a casamentos ou formaturas.',
  },
  {
    question: 'Vocês atendem noivos e padrinhos?',
    answer:
      'Sim. Temos opções e orientação específica para noivos e padrinhos, com atenção à harmonia do conjunto.',
  },
  {
    question: 'Como consulto disponibilidade para uma data específica?',
    answer:
      'Entre em contato pelo WhatsApp informando a data do evento. Verificamos disponibilidade e te orientamos sobre os próximos passos.',
  },
  {
    question: 'Quais são os horários de funcionamento?',
    answer:
      'Segunda a sexta, das 9h às 18h. Sábados, das 8h às 12h. Domingos, fechado.',
  },
]

export const MAPS_URL =
  'https://www.google.com/maps/search/Rua+Pinto+Dias,+207,+Centro,+Patrocínio,+MG'
