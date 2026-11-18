export const EVENT = {
  shortName: "CivilTec",
  name: "Congresso de Tecnologia em Construções",
  editionLabel: "Edição 2027",
  dateLabel: "3 a 6 de maio de 2027",
  dateShort: "03 — 06 MAI 2027",
  startISO: "2027-05-03T08:00:00-03:00",
  endISO: "2027-05-06T18:00:00-03:00",
  city: "Araruna · Paraíba",
  venue: "Campus VIII · Prof.ª Maria da Penha (CCTS/UEPB)",
  address: "Av. Cel. Pedro Targino, s/n · Centro, Araruna — PB, 58233-000",
  email: null,
  instagram: "@civiltec.uepb",
  instagramUrl: "https://www.instagram.com/civiltec.uepb/",
  whatsapp: null,
  whatsappUrl: null,
  issn: "2965-789X",
  map: { lat: -6.535202, lng: -35.7324759 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Cel.+Pedro+Targino%2C+s%2Fn%2C+Centro%2C+Araruna+-+PB%2C+58233-000",
  images: {
    hero: "https://media.db.com/images/public/6afdc4a9cf978caf479dc410/507689db9_generated_82f0fc1d.png",
    concrete:
      "https://media.db.com/images/public/6afdc4a9cf978caf479dc410/130f87d26_generated_2a0ef90e.png",
    venue:
      "https://media.db.com/images/public/6afdc4a9cf978caf479dc410/66846df81_generated_7cc8585f.png",
  },
};

export const STATS = [
  { value: "24", label: "palestras técnicas" },
  { value: "16", label: "minicursos práticos" },
  { value: "05", label: "dias de programação" },
  { value: "100%", label: "com certificado" },
];

export const PILLARS = [
  "Conteúdo técnico aplicado ao canteiro",
  "Networking com empresas e profissionais",
  "Prática em campo com visitas técnicas",
  "Publicação nos anais do congresso",
];

export const SPEAKERS = [];

export const AGENDA_DAYS = [
  { id: "dia-1", label: "Dia 1", date: "03 mai" },
  { id: "dia-2", label: "Dia 2", date: "04 mai" },
  { id: "dia-3", label: "Dia 3", date: "05 mai" },
  { id: "dia-4", label: "Dia 4", date: "06 mai" },
];

export const AGENDA_TYPES = [
  { id: "todos", label: "Tudo" },
  { id: "palestra", label: "Palestras" },
  { id: "minicurso", label: "Minicursos" },
  { id: "visita", label: "Visitas" },
  { id: "competicao", label: "Competições" },
  { id: "social", label: "Social" },
];

export const AGENDA = [];

export const TICKETS = [];

export const SUBMISSION_DEADLINES = [];

export const SUBMISSION_AREAS = [];

export const SUBMISSION_RULES = [];

export const FAQ = [
  {
    q: "Como faço minha inscrição?",
    a: "Pelo formulário de inscrição do site. Você preenche nome, e-mail, CPF, categoria e instituição. Depois do envio, aguarde a confirmação da comissão organizadora e as instruções oficiais de pagamento.",
  },
  {
    q: "Recebo certificado de participação?",
    a: "Sim. O certificado é emitido para quem tiver no mínimo 75% de presença nas atividades e fica disponível após o encerramento do congresso, com carga horária discriminada por atividade.",
  },
  {
    q: "Posso pedir reembolso?",
    a: "Cancelamentos até 15 dias antes da abertura têm reembolso integral. Depois desse prazo, a inscrição pode ser transferida para outra pessoa até 48 horas antes do evento.",
  },
  {
    q: "Há alimentação no local?",
    a: "O campus tem refeitório e lanchonetes com preços acessíveis. Nos eventos sociais, a comida está incluída na atividade.",
  },
  {
    q: "Como funciona o credenciamento?",
    a: "O credenciamento abre uma hora antes da primeira atividade de cada dia, na entrada do Campus VIII. Leve um documento com foto e o comprovante de inscrição.",
  },
  {
    q: "As vagas de minicurso são garantidas?",
    a: "Não. Cada minicurso tem de 25 a 40 vagas e a escolha é feita por ordem de chegada no momento do credenciamento, com prioridade para quem tem o plano com minicurso.",
  },
  {
    q: "Posso submeter trabalho sem estar inscrito?",
    a: "A submissão é aberta a todos, mas a publicação nos anais exige que ao menos um dos autores esteja com inscrição confirmada.",
  },
];

export const SPONSOR_TIERS = [
  { tier: "Diamante", slots: 1, note: "Cota principal do congresso" },
  { tier: "Ouro", slots: 2, note: "Patrocínio de atividade" },
  { tier: "Prata", slots: 3, note: "Apoio institucional" },
  { tier: "Apoio", slots: 4, note: "Universidades e entidades" },
];

export const VENUE_TIPS = [
  {
    title: "De carro",
    text: "Acesso pela PB-111, seguindo a sinalização para o Campus VIII da UEPB. Há estacionamento no campus durante o evento.",
  },
  {
    title: "De ônibus",
    text: "O terminal rodoviário de Araruna fica a 10 minutos do campus. Linhas urbanas passam na entrada do Campus VIII.",
  },
  {
    title: "De avião",
    text: "Os aeroportos mais próximos são Campina Grande e João Pessoa, com traslado rodoviário até Araruna.",
  },
];