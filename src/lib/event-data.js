export const EVENT = {
  shortName: "CivilTec",
  name: "Congresso de Tecnologia em Construções",
  editionLabel: "Edição 2027",
  dateLabel: "4 a 8 de novembro de 2027",
  dateShort: "04 — 08 NOV 2027",
  startISO: "2027-11-04T08:00:00-03:00",
  endISO: "2027-11-08T18:00:00-03:00",
  city: "Araruna · Paraíba",
  venue: "Campus VIII · UEPB (CCTS)",
  address: "Av. Cel. Pedro Targino, s/n · Centro, Araruna — PB, 58233-000",
  email: null,
  instagram: "@civiltec.uepb",
  instagramUrl: "https://www.instagram.com/civiltec.uepb/",
  whatsapp: null,
  whatsappUrl: null,
  issn: "2965-789X",
  map: { lat: -6.7703, lng: -37.8006 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Jairo+Vieira+Feitosa+1770+Pombal+PB",
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

export const SPEAKERS = [
  {
    id: "normando-perazzo",
    name: "Normando Perazzo",
    org: "UFCG · Laboratório de Geotecnia",
    area: "Sustentabilidade",
    talk: "Construção Sustentável: Realidade ou Sonho?",
    abstract:
      "A palestra discute os desafios e possibilidades da construção sustentável no cenário atual, destacando práticas, materiais e tecnologias que tornam viável a redução do impacto ambiental na engenharia civil.",
  },
  {
    id: "carlos-nitao",
    name: "Carlos Nitão",
    org: "Fiscalização de obras públicas",
    area: "IA & Gestão pública",
    talk:
      "Inteligência Artificial na Fiscalização de Obras Sustentáveis: Caminhos para uma Gestão Pública Segura",
    abstract:
      "O uso da inteligência artificial na fiscalização de obras, explorando como ferramentas digitais podem aprimorar a transparência, a eficiência e a segurança na gestão pública de empreendimentos sustentáveis.",
  },
  {
    id: "rafaela-gomes",
    name: "Rafaela Gomes",
    org: "Geotecnia e proteção costeira",
    area: "Geotecnia",
    talk: "Taludes em Proteção Costeira: Desafios e Soluções",
    abstract:
      "As principais técnicas e desafios na estabilização de taludes e estruturas de proteção costeira, com enfoque em soluções de engenharia voltadas à mitigação de riscos e à sustentabilidade ambiental.",
  },
  {
    id: "amanda-leite",
    name: "Amanda Leite",
    org: "Corpo de Bombeiros Militar da Paraíba",
    area: "Segurança",
    talk:
      "Atividades Técnicas no CBMPB: Da Análise de Projetos à Vistoria Técnica",
    abstract:
      "O trabalho técnico desenvolvido pelo Corpo de Bombeiros Militar da Paraíba: análise de projetos, vistorias e medidas preventivas voltadas à segurança das edificações e da população.",
  },
  {
    id: "andre-agra",
    name: "André Agra",
    org: "Tecnologia e clima",
    area: "Clima & Inovação",
    talk: "Revolução Tecnológica e Crise Climática",
    abstract:
      "O papel da tecnologia frente à crise climática global, destacando inovações, desafios éticos e oportunidades para a engenharia no enfrentamento das mudanças ambientais.",
  },
  {
    id: "daniel-britto",
    name: "Daniel Britto",
    org: "Engenharia diagnóstica",
    area: "Patologia",
    talk:
      "O Passo a Passo do Diagnóstico das Não Conformidades em Edificações",
    abstract:
      "As etapas do diagnóstico técnico de não conformidades em edificações: métodos de inspeção, análise de falhas e elaboração de laudos, com foco na prevenção de patologias.",
  },
  {
    id: "cintia-lins",
    name: "Cíntia Lins",
    org: "Arquitetura bioclimática",
    area: "Conforto ambiental",
    talk: "Projetando em Clima Quente",
    abstract:
      "Estratégias arquitetônicas e de conforto térmico para edificações em regiões de clima quente, com soluções bioclimáticas, materiais adequados e técnicas passivas de ventilação e sombreamento.",
  },
  {
    id: "matheus-vieira",
    name: "Matheus Vieira",
    org: "Geotecnologia e aerolevantamento",
    area: "Dados & Campo",
    talk: "Aerolevantamento LiDAR Embarcado em RPA (Drone)",
    abstract:
      "Os fundamentos do aerolevantamento com tecnologia LiDAR embarcada em drones: princípios de funcionamento, processamento de dados e aplicações em topografia, mapeamento e monitoramento ambiental.",
  },
  {
    id: "jonathan-iohanatas",
    name: "Jonathan Iohanatas",
    org: "Inteligência computacional",
    area: "IA aplicada",
    talk: "Inteligência Computacional e seu Potencial na Engenharia Civil",
    abstract:
      "Aplicações da inteligência computacional na engenharia civil: algoritmos, modelagem preditiva e aprendizado de máquina para otimização de processos e decisão baseada em evidências.",
  },
  {
    id: "heber-de-paula",
    name: "Heber de Paula",
    org: "BIM e patrimônio construído",
    area: "BIM & RV",
    talk: "Realidade Virtual e BIM na Conservação do Patrimônio Construído",
    abstract:
      "O uso integrado da Realidade Virtual e do BIM como ferramentas de preservação do patrimônio construído, com exemplos de aplicação em diagnóstico, documentação e reabilitação de edificações históricas.",
  },
  {
    id: "enio-pazini",
    name: "Ênio Pazini",
    org: "Estruturas de concreto",
    area: "Estruturas",
    talk:
      "Diagnóstico e reabilitação da Ponte Costa e Silva: obra premiada no CONPAT",
    abstract:
      "Técnicas e metodologias empregadas na reabilitação de estruturas de concreto, do diagnóstico de patologias à escolha de materiais e execução de reparos, com foco na recuperação da capacidade estrutural.",
  },
  {
    id: "marina-grinover",
    name: "Marina Grinover",
    org: "Arquitetura e desenho urbano",
    area: "Urbanismo",
    talk: "Ética e Poética, Arquitetura e Desenho Urbano",
    abstract:
      "Uma reflexão sobre o papel ético e poético da arquitetura e do urbanismo na construção das cidades, equilibrando funcionalidade, estética e compromisso social com o espaço urbano.",
  },
];

export const AGENDA_DAYS = [
  { id: "dia-1", label: "Dia 1", date: "04 nov" },
  { id: "dia-2", label: "Dia 2", date: "05 nov" },
  { id: "dia-3", label: "Dia 3", date: "06 nov" },
  { id: "dia-4", label: "Dia 4", date: "07 nov" },
  { id: "dia-5", label: "Dia 5", date: "08 nov" },
];

export const AGENDA_TYPES = [
  { id: "todos", label: "Tudo" },
  { id: "palestra", label: "Palestras" },
  { id: "minicurso", label: "Minicursos" },
  { id: "visita", label: "Visitas" },
  { id: "competicao", label: "Competições" },
  { id: "social", label: "Social" },
];

export const AGENDA = [
  // Dia 1
  { day: "dia-1", time: "07h — 08h", title: "Construção Sustentável: Realidade ou Sonho?", type: "palestra", typeLabel: "Palestra", who: "Normando Perazzo", room: "Auditório" },
  { day: "dia-1", time: "08h — 09h", title: "Inteligência Artificial na Fiscalização de Obras Sustentáveis", type: "palestra", typeLabel: "Palestra", who: "Carlos Nitão", room: "Auditório" },
  { day: "dia-1", time: "08h — 09h", title: "Impermeabilizar Corretamente: Custo ou Benefício?", type: "palestra", typeLabel: "Palestra", who: "Nelcimar Rodrigues", room: "Mini Auditório" },
  { day: "dia-1", time: "09h30 — 10h30", title: "Taludes em Proteção Costeira: Desafios e Soluções", type: "palestra", typeLabel: "Palestra", who: "Rafaela Gomes", room: "Auditório" },
  { day: "dia-1", time: "09h30 — 10h30", title: "Atividades Técnicas no CBMPB", type: "palestra", typeLabel: "Palestra", who: "Amanda Leite", room: "Mini Auditório" },
  { day: "dia-1", time: "10h30 — 11h30", title: "Revolução Tecnológica e Crise Climática", type: "palestra", typeLabel: "Palestra", who: "André Agra", room: "Auditório" },
  { day: "dia-1", time: "13h — 17h", title: "Membranas de Alta Performance para Impermeabilização", type: "minicurso", typeLabel: "Minicurso", who: "Nelcimar Rodrigues", room: "Sala de Aula" },
  { day: "dia-1", time: "13h — 17h", title: "Dimensionamento de Sistemas de Esgotamento Sanitário", type: "minicurso", typeLabel: "Minicurso", who: "Rodrigo Santos", room: "Mini Auditório" },
  { day: "dia-1", time: "13h — 17h", title: "Agindo com Segurança: Do Combate ao Fogo ao Atendimento às Vítimas", type: "minicurso", typeLabel: "Minicurso", who: "Jardel Leite · CBMPB", room: "Sala de Aula" },
  { day: "dia-1", time: "13h — 17h", title: "Fundamentos da Construção com Terra", type: "minicurso", typeLabel: "Minicurso", who: "Normando Perazzo · UFCG", room: "Lab. de Geotecnia" },
  { day: "dia-1", time: "17h", title: "Competição de Realidade Aumentada", type: "competicao", typeLabel: "Competição", who: "Equipes inscritas", room: "CCTA" },
  { day: "dia-1", time: "19h", title: "Noite da Pizza", type: "social", typeLabel: "Social", who: "Integração dos participantes", room: "Área de convivência" },

  // Dia 2
  { day: "dia-2", time: "07h — 08h", title: "O Passo a Passo do Diagnóstico das Não Conformidades em Edificações", type: "palestra", typeLabel: "Palestra", who: "Daniel Britto", room: "Auditório" },
  { day: "dia-2", time: "08h — 09h", title: "Concreto Protendido: Viabilidade Econômica", type: "palestra", typeLabel: "Palestra", who: "Henri Netto", room: "Auditório" },
  { day: "dia-2", time: "08h — 09h", title: "Gestão em SST: Hard Skills e Soft Skills", type: "palestra", typeLabel: "Palestra", who: "Leandro Arruda", room: "Mini Auditório" },
  { day: "dia-2", time: "09h30 — 10h30", title: "Engenharia de Prompt: Produtividade e Criatividade com IA Generativa", type: "palestra", typeLabel: "Palestra", who: "Eliane & Leandro", room: "Auditório" },
  { day: "dia-2", time: "09h30 — 10h30", title: "Projetando em Clima Quente", type: "palestra", typeLabel: "Palestra", who: "Cíntia Lins", room: "Mini Auditório" },
  { day: "dia-2", time: "10h30 — 11h30", title: "Aerolevantamento LiDAR Embarcado em RPA (Drone)", type: "palestra", typeLabel: "Palestra", who: "Matheus Vieira", room: "Mini Auditório" },
  { day: "dia-2", time: "13h — 17h", title: "A Influência da Tecnologia e da IA na Engenharia Diagnóstica", type: "minicurso", typeLabel: "Minicurso", who: "Daniel Britto", room: "Auditório" },
  { day: "dia-2", time: "13h — 17h", title: "Programa de Gerenciamento de Riscos: da teoria à prática", type: "minicurso", typeLabel: "Minicurso", who: "Leandro Arruda", room: "Mini Auditório" },
  { day: "dia-2", time: "13h — 17h", title: "Oficina de Engenharia de Prompt com IA Generativa", type: "minicurso", typeLabel: "Minicurso", who: "Eliane & Leandro", room: "Laboratório 1" },
  { day: "dia-2", time: "13h — 17h", title: "Oficina de Acessibilidade na Prática", type: "minicurso", typeLabel: "Minicurso", who: "Tio Géra", room: "Sala de Aula" },
  { day: "dia-2", time: "13h — 17h", title: "Aerolevantamento LiDAR", type: "minicurso", typeLabel: "Minicurso", who: "Matheus Vieira", room: "Em campo" },
  { day: "dia-2", time: "13h30 — 17h30", title: "Visita técnica: Museu e Mina Escola", type: "visita", typeLabel: "Visita técnica", who: "Grupo de 40 vagas", room: "Saída do CCTA" },
  { day: "dia-2", time: "19h", title: "Noite dos Jogos", type: "social", typeLabel: "Social", who: "Times e duplas", room: "Área de convivência" },

  // Dia 3
  { day: "dia-3", time: "07h — 08h", title: "Inteligência Computacional e seu Potencial na Engenharia Civil", type: "palestra", typeLabel: "Palestra", who: "Jonathan Iohanatas", room: "Auditório" },
  { day: "dia-3", time: "08h — 09h", title: "Realidade Virtual e BIM na Conservação do Patrimônio Construído", type: "palestra", typeLabel: "Palestra", who: "Heber de Paula", room: "Auditório" },
  { day: "dia-3", time: "08h — 09h", title: "Tubulações de Alta Resistência e Suas Aplicações", type: "palestra", typeLabel: "Palestra", who: "Tauil Selingardi Junior", room: "Mini Auditório" },
  { day: "dia-3", time: "09h30 — 10h30", title: "Princípios do Planejamento de Transportes", type: "palestra", typeLabel: "Palestra", who: "João Carlos", room: "Auditório" },
  { day: "dia-3", time: "09h30 — 10h30", title: "Inovação na Construção Civil", type: "palestra", typeLabel: "Palestra", who: "Alessandro Rodrigues · Light Wall", room: "Mini Auditório" },
  { day: "dia-3", time: "10h30 — 11h30", title: "Diagnóstico e reabilitação da Ponte Costa e Silva", type: "palestra", typeLabel: "Palestra", who: "Ênio Pazini", room: "Auditório" },
  { day: "dia-3", time: "13h — 17h", title: "Diagnóstico de Manifestações Patológicas em Concreto Armado", type: "minicurso", typeLabel: "Minicurso", who: "Ênio Pazini", room: "Auditório" },
  { day: "dia-3", time: "13h — 17h", title: "A Importância da Prevenção Contra Incêndios no Projeto", type: "minicurso", typeLabel: "Minicurso", who: "João Carlos", room: "Mini Auditório" },
  { day: "dia-3", time: "13h — 17h", title: "Ferramentas Digitais para Realidade Virtual em Obras e Projetos", type: "minicurso", typeLabel: "Minicurso", who: "Heber de Paula", room: "Laboratório 1" },
  { day: "dia-3", time: "13h — 17h", title: "Argamassas Estabilizadas e Autonivelantes: Critérios Normativos", type: "minicurso", typeLabel: "Minicurso", who: "Aline · RejuntaMix", room: "Lab. de Materiais" },
  { day: "dia-3", time: "13h30 — 17h30", title: "Visita técnica: Santuário do Pai Todo-Poderoso", type: "visita", typeLabel: "Visita técnica", who: "Grupo de 40 vagas", room: "Saída do CCTA" },
  { day: "dia-3", time: "19h", title: "Noite do Karaokê", type: "social", typeLabel: "Social", who: "Microfone aberto", room: "Área de convivência" },

  // Dia 4
  { day: "dia-4", time: "07h — 08h", title: "BIM na Prática: Entrega de Valor para Construtoras", type: "palestra", typeLabel: "Palestra", who: "Erijohnson Ferreira · Mellius", room: "Auditório" },
  { day: "dia-4", time: "08h — 09h", title: "Ética e Poética, Arquitetura e Desenho Urbano", type: "palestra", typeLabel: "Palestra", who: "Marina Grinover", room: "Auditório" },
  { day: "dia-4", time: "08h — 09h", title: "A Agenda ESG como Estratégia para a Construção Civil", type: "palestra", typeLabel: "Palestra", who: "Maria das Vitórias", room: "Mini Auditório" },
  { day: "dia-4", time: "09h30 — 10h30", title: "A Importância do Planejamento de Obras", type: "palestra", typeLabel: "Palestra", who: "Gustavo Bezerra · Collinas Engenharia", room: "Auditório" },
  { day: "dia-4", time: "09h30 — 10h30", title: "Automação Residencial", type: "palestra", typeLabel: "Palestra", who: "Adriano Costa", room: "Mini Auditório" },
  { day: "dia-4", time: "10h30 — 11h30", title: "Elementos Estruturais com Seção Parcialmente Pré-Moldada", type: "palestra", typeLabel: "Palestra", who: "José Guilherme Silva Melo · IFPA", room: "Auditório" },
  { day: "dia-4", time: "13h — 17h", title: "Ensaio de Aderência de Revestimentos Cerâmicos: da teoria à prática", type: "minicurso", typeLabel: "Minicurso", who: "Felipe Casanova", room: "Auditório" },
  { day: "dia-4", time: "13h — 17h", title: "Análise de Edifícios em Paredes de Concreto", type: "minicurso", typeLabel: "Minicurso", who: "Lucas Canninghia de Sousa", room: "Mini Auditório" },
  { day: "dia-4", time: "13h — 17h", title: "Equipamentos de Mobilidade em Estruturas de Madeira", type: "minicurso", typeLabel: "Minicurso", who: "Marina Grinover", room: "Laboratório 1" },
  { day: "dia-4", time: "19h", title: "Noite do São João Fora de Época", type: "social", typeLabel: "Social", who: "Forró e comidas típicas", room: "Área de convivência" },

  // Dia 5
  { day: "dia-5", time: "08h — 09h30", title: "Visita técnica: Parque dos Dinossauros", type: "visita", typeLabel: "Visita técnica", who: "Grupo de 40 vagas", room: "Saída do CCTA" },
  { day: "dia-5", time: "09h — 11h", title: "Apresentação de artigos aprovados", type: "palestra", typeLabel: "Apresentação", who: "Autores dos trabalhos", room: "Auditório" },
  { day: "dia-5", time: "11h", title: "Premiação das competições e encerramento", type: "social", typeLabel: "Encerramento", who: "Comissão organizadora", room: "Auditório" },
];

export const TICKETS = [
  {
    id: "estudante",
    name: "Estudante",
    note: "Graduação e pós-graduação",
    price: 110,
    previous: 90,
    lote: "2º lote",
    features: [
      "Acesso a todas as palestras",
      "Visitas técnicas (sujeitas a vaga)",
      "Certificado de participação",
      "Kit do congressista",
    ],
  },
  {
    id: "estudante-minicurso",
    name: "Estudante + Minicurso",
    note: "O mais escolhido",
    price: 160,
    previous: 130,
    lote: "2º lote",
    features: [
      "Tudo do plano Estudante",
      "1 minicurso à escolha",
      "Material didático do minicurso",
      "Prioridade nas visitas técnicas",
    ],
    highlight: true,
  },
  {
    id: "profissional",
    name: "Profissional",
    note: "Engenheiros e arquitetos",
    price: 240,
    previous: 190,
    lote: "2º lote",
    features: [
      "Acesso a todas as palestras",
      "Visitas técnicas (sujeitas a vaga)",
      "Certificado de participação",
      "Acesso aos anais do congresso",
    ],
  },
];

export const SUBMISSION_DEADLINES = [
  { label: "Submissão de resumos", date: "até 15 de setembro" },
  { label: "Notificação dos avaliadores", date: "30 de setembro" },
  { label: "Envio da versão final", date: "10 de outubro" },
  { label: "Publicação nos anais", date: "durante o congresso" },
];

export const SUBMISSION_AREAS = [
  "Estruturas",
  "Geotecnia",
  "Construção e materiais",
  "Saneamento e recursos hídricos",
  "Transportes",
  "Tecnologia e inovação",
  "Sustentabilidade",
];

export const SUBMISSION_RULES = [
  "Resumo entre 300 e 500 palavras, em português, com objetivo, método, resultados e conclusão.",
  "Título, nomes dos autores, instituição e e-mail do autor responsável no topo do arquivo.",
  "Arquivo em PDF, formato A4, margens de 2,5 cm, fonte Arial 12 e espaçamento 1,5.",
  "Até quatro autores por trabalho, sendo ao menos um inscrito no congresso.",
  "Trabalhos aprovados são publicados nos anais do congresso, com ISSN 2965-789X.",
];

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
    a: "O credenciamento abre uma hora antes da primeira atividade de cada dia, na entrada do CCTA. Leve um documento com foto e o comprovante de inscrição.",
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
    text: "Acesso pela BR-230, saída para o centro de Pombal. Há estacionamento gratuito no campus durante o evento.",
  },
  {
    title: "De ônibus",
    text: "O terminal rodoviário de Pombal fica a 10 minutos do campus. Linhas urbanas passam na entrada do CCTA.",
  },
  {
    title: "De avião",
    text: "Os aeroportos mais próximos são Campina Grande e João Pessoa, com traslado rodoviário até Pombal.",
  },
];