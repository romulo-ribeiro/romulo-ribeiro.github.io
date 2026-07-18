import { Translation } from './translation';

export const pt: Translation = {
  languageLabel: 'Idioma',
  navLabel: 'Navegação principal',
  skipToContent: 'Ir para o conteúdo principal',
  languageNames: { en: 'Inglês', es: 'Espanhol', pt: 'Português' },
  nav: [
    { href: '#about', label: 'Sobre' },
    { href: '#capabilities', label: 'Capacidades' },
    { href: '#projects', label: 'Experiência' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#contact', label: 'Contato' },
  ],
  hero: {
    eyebrow: 'Engenheiro químico e de software',
    titleBefore: 'Software full stack para',
    titleAccent: 'operações industriais.',
    text: 'Engenheiro de software com mais de 6 anos de experiência no desenvolvimento de aplicações empresariais, industriais, logísticas, IoT, de IA e em nuvem para manufatura, armazenagem, mineração, serviços financeiros e operações.',
    primaryAction: 'Ver áreas de experiência',
    secondaryAction: 'Sobre minha abordagem',
    profile: 'Perfil',
    profileSummary:
      'Foco principal em .NET e Angular, apoiado por formação em engenharia química, análise de processos e restrições operacionais.',
    profilePhoto: 'Romulo Barbosa Ribeiro trabalhando em uma estação de engenharia de software',
    stats: [
      { value: '6+ anos', label: 'software empresarial e industrial' },
      { value: 'Engenheiro sênior', label: 'plataformas full stack e de IA' },
      { value: 'Engenheiro químico', label: 'pensamento sistêmico e análise de processos' },
    ],
  },
  capabilities: {
    eyebrow: 'Capacidades',
    title: 'Áreas de especialidade.',
    items: [
      {
        title: 'Aplicações web empresariais',
        description:
          'Plataformas internas, portais de clientes e fluxos de trabalho que apoiam as operações diárias.',
        tags: ['Angular', 'Next.js', '.NET'],
      },
      {
        title: 'Integração de sistemas',
        description:
          'Conexões com ERP, bancos, faturamento, sistemas fiscais e APIs externas, com registros e tratamento de erros integrados.',
        tags: ['REST APIs', 'ERP', 'Pagamentos'],
      },
      {
        title: 'Dashboards em tempo real',
        description: 'Dashboards para telemetria, mapas, alertas e dados históricos.',
        tags: ['MQTT', 'SignalR', 'TimescaleDB'],
      },
      {
        title: 'Integração de IA',
        description:
          'Funcionalidades de produto com IA, visão computacional, busca por linguagem e fluxos inteligentes conectados a sistemas operacionais.',
        tags: ['AI', 'Computer vision', 'NLP'],
      },
    ],
  },
  about: {
    eyebrow: 'Sobre',
    title: 'Uma carreira em engenharia de software fundamentada na engenharia química.',
    bio: 'Sou Romulo Barbosa Ribeiro, engenheiro de software sênior com mais de 6 anos de experiência no desenvolvimento de aplicações empresariais, industriais, logísticas, IoT, de IA e em nuvem. Comecei em um programa de formação em tecnologia, trabalhei com plataformas MES e sistemas empresariais e atualmente desenvolvo produtos de segurança com IA. Minha stack principal inclui .NET, Angular, React, Next.js, SQL Server, PostgreSQL, Azure, AWS e Docker.',
    contextPhoto: 'Trabalho em contexto',
    portraitPhoto: 'Romulo Barbosa Ribeiro em uma instalação industrial moderna',
    method:
      'Minha formação em engenharia química estabeleceu uma abordagem orientada a processos para o desenvolvimento de software. Analiso o fluxo de trabalho, as restrições e os modos de falha antes de definir a solução. Esse método apoiou integrações com ERP, sistemas de pagamento e telemetria industrial.',
    quote:
      'Prefiro código rastreável, interfaces claras e decisões técnicas que possam ser explicadas e mantidas.',
  },
  projects: {
    eyebrow: 'Áreas de experiência',
    title: 'Sistemas, ferramentas e tecnologias.',
    overview:
      'Uma visão concisa dos domínios e tecnologias que utilizo para projetar, construir, integrar e operar software.',
    viewLabel: 'Visualização de experiência',
    filterLabel: 'Filtrar áreas de experiência',
    filters: {
      all: 'Todos',
      industrial: 'Industrial',
      enterprise: 'Empresarial',
      logistics: 'Logística',
      ai: 'IA',
      product: 'Web e mobile',
    },
    views: { projects: 'Projetos', experience: 'Áreas de experiência' },
    projectType: 'Projeto',
    experienceType: 'Experiência consolidada',
    projectResults: 'projetos exibidos',
    experienceResults: 'áreas de experiência exibidas',
    missingImage: 'Espaço reservado para imagem',
    confidentiality:
      'Nomes, elementos visuais e detalhes operacionais são generalizados quando necessário para proteger a confidencialidade de clientes e empregadores.',
    outcomeLabel: 'Resultado',
  },
  caseStudy: {
    eyebrow: 'Estudo de caso conceitual',
    title: 'Manutenção preditiva para um processo industrial contínuo',
    lead: 'Uma plataforma proposta de monitoramento e aprendizado de máquina para um processo multivariável em que pequenas alterações de temperatura, pressão, vazão e composição podem anteceder falhas de equipamentos ou de qualidade.',
    imageAlt: 'Dashboard de processo industrial com indicadores de manutenção preditiva',
    roleLabel: 'Seu papel',
    validationLabel: 'Validação',
    facts: [
      {
        label: 'Problema',
        text: 'Os operadores dependiam de alarmes e inspeções periódicas, que poderiam identificar condições anormais apenas depois que as variáveis do processo já tivessem se desviado.',
      },
      {
        label: 'Abordagem',
        text: 'MQTT transportava leituras de sensores para serviços de orquestração .NET, enquanto modelos em Python detectavam anomalias, estimavam risco de falha e expunham sinais de manutenção no Angular.',
      },
      {
        label: 'Valor esperado',
        text: 'Alertas antecipados poderiam ajudar as equipes a investigar falhas emergentes, programar janelas de manutenção e reduzir interrupções evitáveis sem substituir o julgamento do operador.',
      },
    ],
    flow: [
      { label: 'Sensores de processo', detail: 'Temperatura, pressão, vazão e composição' },
      { label: 'Telemetria MQTT', detail: 'Leituras com timestamp e estado do equipamento' },
      { label: 'Orquestração .NET', detail: 'Validação, armazenamento, APIs e alertas' },
      { label: 'Serviço ML em Python', detail: 'Detecção de anomalias e pontuação de risco' },
      { label: 'Operações no Angular', detail: 'Tendências, alertas, explicações e manutenção' },
    ],
    technical: [
      {
        label: 'Foco de modelagem',
        text: 'Um modelo base aprenderia o comportamento multivariável normal, identificaria desvios e combinaria tendências recentes com o contexto operacional para estimar a probabilidade de uma falha próxima.',
      },
      {
        label: 'Manutenção preventiva',
        text: 'As pontuações de risco seriam mostradas com variáveis contribuintes, eventos recentes e uma janela de investigação recomendada para que as decisões de manutenção continuem rastreáveis.',
      },
    ],
    architectureLabel: 'Arquitetura de manutenção preditiva',
  },
  skills: {
    eyebrow: 'Habilidades',
    title: 'Ferramentas que uso em produção.',
    principles: [
      {
        title: 'Processo antes da implementação',
        description:
          'Cada projeto começa com uma análise do fluxo de trabalho, suas restrições e seus modos de falha.',
      },
      {
        title: 'Sistemas sustentáveis',
        description:
          'Interfaces e código devem continuar claros para os desenvolvedores responsáveis por sua evolução.',
      },
      {
        title: 'Continuidade operacional',
        description:
          'Um sistema entregue deve continuar compreensível para seus usuários e prático para a equipe que o mantém.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Perfis profissionais.',
    text: 'O código público está disponível no GitHub. A experiência profissional e as informações de contato estão disponíveis no LinkedIn.',
  },
};
