import { Translation } from './translation';

export const es: Translation = {
  languageLabel: 'Idioma',
  navLabel: 'Navegación principal',
  skipToContent: 'Saltar al contenido principal',
  languageNames: { en: 'Inglés', es: 'Español', pt: 'Portugués' },
  nav: [
    { href: '#about', label: 'Sobre mí' },
    { href: '#capabilities', label: 'Capacidades' },
    { href: '#projects', label: 'Experiencia' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#contact', label: 'Contacto' },
  ],
  hero: {
    eyebrow: 'Ingeniero químico y de software',
    titleBefore: 'Software full stack para',
    titleAccent: 'operaciones industriales.',
    text: 'Construyo sistemas full stack para operaciones complejas, con más de 6 años de experiencia en manufactura, almacenes, logística, IA, aplicaciones en la nube y servicios financieros.',
    primaryAction: 'Ver áreas de experiencia',
    secondaryAction: 'Sobre mi enfoque',
    profile: 'Perfil',
    profileSummary:
      'Enfoque principal en .NET y Angular, respaldado por formación en ingeniería química, análisis de procesos y restricciones operativas.',
    profilePhoto: 'Romulo Barbosa Ribeiro trabajando en una estación de ingeniería de software',
    stats: [
      { value: '6+ años', label: 'software empresarial e industrial' },
      { value: 'Ingeniero sénior', label: 'plataformas full stack y de IA' },
      { value: 'Ingeniero químico', label: 'pensamiento sistémico y análisis de procesos' },
    ],
  },
  capabilities: {
    eyebrow: 'Capacidades',
    title: 'Áreas de especialidad.',
    items: [
      {
        title: 'Aplicaciones web empresariales',
        description:
          'Plataformas internas, portales de clientes y flujos de trabajo que respaldan las operaciones diarias.',
        tags: ['Angular', 'Next.js', '.NET'],
      },
      {
        title: 'Integración de sistemas',
        description:
          'Conexiones con ERP, bancos, facturación, sistemas fiscales y APIs externas, con registros y gestión de errores integrados.',
        tags: ['REST APIs', 'ERP', 'Pagos'],
      },
      {
        title: 'Paneles en tiempo real',
        description: 'Paneles para telemetría, mapas, alertas y datos históricos.',
        tags: ['MQTT', 'SignalR', 'TimescaleDB'],
      },
      {
        title: 'Integración de IA',
        description:
          'Funciones de producto con IA, visión por computador, búsqueda por lenguaje y flujos inteligentes conectados a sistemas operativos.',
        tags: ['AI', 'Computer vision', 'NLP'],
      },
    ],
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Una carrera en ingeniería de software basada en la ingeniería química.',
    bio: 'Soy Romulo Barbosa Ribeiro, ingeniero de software sénior con más de 6 años de experiencia construyendo aplicaciones empresariales, industriales, logísticas, IoT, de IA y en la nube. Comencé en un programa de formación tecnológica, trabajé en plataformas MES y sistemas empresariales, y actualmente desarrollo productos de seguridad con IA. Mi stack principal incluye .NET, Angular, React, Next.js, SQL Server, PostgreSQL, Azure, AWS y Docker.',
    contextPhoto: 'Trabajo en contexto',
    portraitPhoto: 'Romulo Barbosa Ribeiro en una planta industrial moderna',
    method:
      'Mi formación en ingeniería química estableció un enfoque orientado a procesos para el desarrollo de software. Analizo el flujo de trabajo, las restricciones y los posibles fallos antes de definir la solución. Este método ha respaldado integraciones con ERP, sistemas de pago y telemetría industrial.',
    quote:
      'Prefiero código trazable, interfaces claras y decisiones técnicas que puedan explicarse y mantenerse.',
  },
  projects: {
    eyebrow: 'Áreas de experiencia',
    title: 'Sistemas, herramientas y tecnologías.',
    overview:
      'Una visión concisa de los dominios y tecnologías que utilizo para diseñar, construir, integrar y operar software.',
    viewLabel: 'Vista de experiencia',
    filterLabel: 'Filtrar áreas de experiencia',
    filters: {
      all: 'Todos',
      industrial: 'Industrial',
      enterprise: 'Empresarial',
      logistics: 'Logística',
      ai: 'IA',
      product: 'Web y móvil',
    },
    views: { projects: 'Proyectos', experience: 'Áreas de experiencia' },
    projectType: 'Proyecto',
    experienceType: 'Experiencia consolidada',
    projectResults: 'proyectos mostrados',
    experienceResults: 'áreas de experiencia mostradas',
    missingImage: 'Espacio reservado para imagen',
    confidentiality:
      'Los nombres, elementos visuales y detalles operativos se generalizan cuando es necesario para proteger la confidencialidad de clientes y empleadores.',
    outcomeLabel: 'Resultado',
  },
  caseStudy: {
    eyebrow: 'Caso de estudio conceptual',
    title: 'Mantenimiento predictivo para un proceso industrial continuo',
    lead: 'Una plataforma propuesta de monitorización y aprendizaje automático para un proceso multivariable donde pequeños cambios de temperatura, presión, flujo y composición pueden anticipar fallos de equipos o de calidad.',
    imageAlt: 'Panel de proceso industrial con indicadores de mantenimiento predictivo',
    roleLabel: 'Tu rol',
    validationLabel: 'Validación',
    facts: [
      {
        label: 'Problema',
        text: 'Los operadores dependían de alarmas e inspecciones periódicas, que podían identificar condiciones anómalas solo después de que las variables del proceso ya se hubieran desviado.',
      },
      {
        label: 'Enfoque',
        text: 'MQTT transportaba lecturas de sensores a servicios de orquestación .NET, mientras modelos Python detectaban anomalías, estimaban riesgo de fallo y exponían señales de mantenimiento en Angular.',
      },
      {
        label: 'Valor esperado',
        text: 'Las alertas tempranas podrían ayudar a investigar fallos emergentes, programar ventanas de mantenimiento y reducir interrupciones evitables sin sustituir el criterio del operador.',
      },
    ],
    flow: [
      { label: 'Sensores de proceso', detail: 'Temperatura, presión, flujo y composición' },
      { label: 'Telemetría MQTT', detail: 'Lecturas con marca de tiempo y estado del equipo' },
      { label: 'Orquestación .NET', detail: 'Validación, almacenamiento, APIs y alertas' },
      { label: 'Servicio ML en Python', detail: 'Detección de anomalías y puntuación de riesgo' },
      {
        label: 'Operaciones en Angular',
        detail: 'Tendencias, alertas, explicaciones y mantenimiento',
      },
    ],
    technical: [
      {
        label: 'Enfoque de modelado',
        text: 'Un modelo base aprendería el comportamiento normal multivariable, identificaría desviaciones y combinaría tendencias recientes con el contexto operativo para estimar la probabilidad de un fallo próximo.',
      },
      {
        label: 'Mantenimiento preventivo',
        text: 'Las puntuaciones de riesgo se mostrarían junto con variables contribuyentes, eventos recientes y una ventana de investigación recomendada para que las decisiones de mantenimiento sigan siendo trazables.',
      },
    ],
    architectureLabel: 'Arquitectura de mantenimiento predictivo',
  },
  skills: {
    eyebrow: 'Habilidades',
    title: 'Herramientas que utilizo en producción.',
    principles: [
      {
        title: 'Proceso antes de la implementación',
        description:
          'Cada proyecto comienza con un análisis del flujo de trabajo, sus restricciones y sus posibles fallos.',
      },
      {
        title: 'Sistemas mantenibles',
        description:
          'Las interfaces y el código deben seguir siendo claros para los desarrolladores responsables de ampliarlos.',
      },
      {
        title: 'Continuidad operativa',
        description:
          'Un sistema entregado debe seguir siendo comprensible para sus usuarios y práctico para el equipo que lo mantiene.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Perfiles profesionales.',
    text: 'El código público está disponible en GitHub. La experiencia profesional y la información de contacto están disponibles en LinkedIn.',
  },
};
