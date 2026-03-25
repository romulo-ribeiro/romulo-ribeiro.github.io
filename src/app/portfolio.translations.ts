import { PortfolioLanguage } from './portfolio.models';
import BR from 'country-flag-icons/string/3x2/BR';
import DK from 'country-flag-icons/string/3x2/DK';
import ES from 'country-flag-icons/string/3x2/ES';
import FR from 'country-flag-icons/string/3x2/FR';
import US from 'country-flag-icons/string/3x2/US';

const toDataUri = (svg: string): string =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

export const LANGUAGE_OPTIONS: readonly {
  code: PortfolioLanguage;
  label: string;
  shortLabel: string;
  flagSrc: string;
}[] = [
  { code: 'en', label: 'English', shortLabel: 'EN', flagSrc: toDataUri(US) },
  { code: 'pt', label: 'Português', shortLabel: 'PT', flagSrc: toDataUri(BR) },
  { code: 'es', label: 'Español', shortLabel: 'ES', flagSrc: toDataUri(ES) },
  { code: 'fr', label: 'Français', shortLabel: 'FR', flagSrc: toDataUri(FR) },
  { code: 'da', label: 'Dansk', shortLabel: 'DA', flagSrc: toDataUri(DK) }
] as const;

export const PORTFOLIO_TRANSLATIONS = {
  en: {
    header: {
      languageLabel: 'Language',
      themeLight: 'Light',
      themeDark: 'Dark',
      themeToggleAria: 'Toggle dark mode'
    },
    nav: ['About', 'Projects', 'Skills', 'Contact'],
    hero: {
      eyebrow: 'Chemical engineer building software',
      title: 'Clear software for technical problems.',
      body:
        'I work where process logic, product delivery, and operational reality meet. The goal is simple: make complex systems easier to operate, explain, and ship.',
      primaryAction: 'View selected work',
      secondaryAction: 'Start a conversation',
      panelLabel: 'Current focus',
      panelNote:
        'Interfaces, internal tooling, and domain-heavy products shaped by process thinking.',
      stats: [
        {
          value: 'Technical domains',
          label: 'industrial workflows, operations, calculations, and reporting'
        },
        {
          value: 'Delivery stack',
          label: 'Angular, TypeScript, .NET, and API integration'
        },
        {
          value: 'Working style',
          label: 'structured discovery, readable UI, and production-minded delivery'
        }
      ]
    },
    about: {
      eyebrow: 'About',
      title: 'Engineering discipline shapes the way I build software.',
      body:
        'Chemical engineering trained me to map variables, constraints, and failure modes before choosing a solution. In software, that becomes calmer architecture, clearer interfaces, and fewer surprises once the product is in real use.',
      quote:
        '"I do my best work where domain complexity still needs a usable product surface."'
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected directions, with proof instead of posture.',
      cards: [
        {
          title: 'Process software for real operators',
          summary:
            'Interfaces and internal tools that turn dense engineering workflows into software people can run without a manual on the second screen.',
          outcome:
            'A strong fit for calculators, simulations, operational dashboards, and workflow automation tied to technical environments.',
          tags: ['Domain modeling', 'Data-heavy UI', 'Applied engineering'],
          linkLabel: 'Request walkthrough'
        },
        {
          title: 'Internal platforms with clearer decisions',
          summary:
            'Web applications for reporting, operations, and decision support where readability matters more than decoration.',
          outcome:
            'The emphasis is on reliable flows, understandable data, and interfaces teams can keep extending.',
          tags: ['Angular', 'API integration', 'Maintainable architecture'],
          linkLabel: 'Discuss platform work'
        },
        {
          title: 'Cross-disciplinary delivery, end to end',
          summary:
            'Projects that benefit from both engineering framing and software execution, from scoping the problem to shipping the result.',
          outcome:
            'This is the overlap where domain knowledge changes product quality, not just implementation speed.',
          tags: ['Systems thinking', 'Technical communication', 'End-to-end ownership'],
          linkLabel: 'Start a project conversation'
        }
      ]
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Tools and habits that keep delivery grounded.',
      stack: [
        'Angular 21',
        'TypeScript',
        'SCSS',
        'C# / .NET',
        'APIs',
        'Data visualization',
        'Responsive layouts',
        'Accessibility',
        'GitHub Actions'
      ],
      principles: [
        {
          title: 'Engineering first',
          description:
            'I start by understanding the process, the constraints, and the failure modes before choosing the shape of the solution.'
        },
        {
          title: 'Clear software',
          description:
            'I prefer interfaces and codebases that explain themselves quickly and can evolve without accumulating noise.'
        },
        {
          title: 'Practical delivery',
          description:
            'The target is dependable delivery: software that solves a real problem and stays maintainable after launch.'
        }
      ]
    },
    contact: {
      eyebrow: 'Contact',
      title: 'If the problem sits between operations, systems, and product, I am interested.',
      body:
        'GitHub is the public record for code, experiments, and ongoing work. It is the best place to review how I build and start a conversation.',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@example.com',
        messageLabel: 'Project or question',
        messagePlaceholder: 'What are you trying to build, fix, or improve?',
        submitLabel: 'Send',
        note: ''
      },
      links: [
        { label: 'GitHub' },
        { label: 'LinkedIn' }
      ]
    }
  },
  pt: {
    header: {
      languageLabel: 'Idioma',
      themeLight: 'Claro',
      themeDark: 'Escuro',
      themeToggleAria: 'Alternar modo escuro'
    },
    nav: ['Sobre', 'Projetos', 'Competências', 'Contato'],
    hero: {
      eyebrow: 'Engenheiro químico que constrói software',
      title: 'Software claro para problemas técnicos.',
      body:
        'Atuo no encontro entre lógica de processo, entrega de produto e operação real. O objetivo é simples: tornar sistemas complexos mais fáceis de operar, explicar e colocar em produção.',
      primaryAction: 'Ver trabalhos selecionados',
      secondaryAction: 'Iniciar conversa',
      panelLabel: 'Foco atual',
      panelNote:
        'Interfaces, ferramentas internas e produtos com muito contexto de domínio, guiados por pensamento de processo.',
      stats: [
        {
          value: 'Domínios técnicos',
          label: 'fluxos industriais, operações, cálculos e relatórios'
        },
        {
          value: 'Stack de entrega',
          label: 'Angular, TypeScript, .NET e integração com APIs'
        },
        {
          value: 'Forma de trabalho',
          label: 'descoberta estruturada, UI legível e entrega pensada para produção'
        }
      ]
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Disciplina de engenharia molda a forma como construo software.',
      body:
        'A engenharia química me treinou para mapear variáveis, restrições e modos de falha antes de escolher a solução. Em software, isso vira arquitetura mais calma, interfaces mais claras e menos surpresa quando o produto entra em uso real.',
      quote:
        '"Meu melhor trabalho aparece quando a complexidade do domínio ainda precisa caber em uma interface usável."'
    },
    projects: {
      eyebrow: 'Projetos',
      title: 'Direções selecionadas, com prova em vez de pose.',
      cards: [
        {
          title: 'Software de processo para operação real',
          summary:
            'Interfaces e ferramentas internas que transformam fluxos densos de engenharia em software que as pessoas conseguem usar sem depender de ruído visual.',
          outcome:
            'Funciona bem para calculadoras, simulações, dashboards operacionais e automação de fluxos ligados a ambientes técnicos.',
          tags: ['Modelagem de domínio', 'UI com muitos dados', 'Engenharia aplicada'],
          linkLabel: 'Solicitar walkthrough'
        },
        {
          title: 'Plataformas internas com decisões mais claras',
          summary:
            'Aplicações voltadas a relatórios, operações e apoio à decisão, em que legibilidade vale mais do que decoração.',
          outcome:
            'A ênfase está em fluxos confiáveis, dados compreensíveis e interfaces que o time consegue evoluir.',
          tags: ['Angular', 'Integração com APIs', 'Arquitetura sustentável'],
          linkLabel: 'Conversar sobre plataformas'
        },
        {
          title: 'Entrega multidisciplinar de ponta a ponta',
          summary:
            'Projetos que se beneficiam tanto do enquadramento de engenharia quanto da execução em software, do recorte do problema ao rollout.',
          outcome:
            'É nessa interseção que conhecimento de domínio muda a qualidade do produto, não apenas a velocidade da entrega.',
          tags: ['Pensamento sistêmico', 'Comunicação técnica', 'Responsa de ponta a ponta'],
          linkLabel: 'Iniciar conversa de projeto'
        }
      ]
    },
    skills: {
      eyebrow: 'Competências',
      title: 'Ferramentas e hábitos que mantêm a entrega no chão.',
      stack: [
        'Angular 21',
        'TypeScript',
        'SCSS',
        'C# / .NET',
        'APIs',
        'Visualização de dados',
        'Layouts responsivos',
        'Acessibilidade',
        'GitHub Actions'
      ],
      principles: [
        {
          title: 'Engenharia primeiro',
          description:
            'Começo entendendo processo, restrições e modos de falha antes de escolher a forma da solução.'
        },
        {
          title: 'Software claro',
          description:
            'Prefiro interfaces e bases de código que se expliquem rápido e possam evoluir sem acumular ruído.'
        },
        {
          title: 'Entrega prática',
          description:
            'O alvo é entrega confiável: software que resolve um problema real e continua sustentável depois do lançamento.'
        }
      ]
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Se o problema fica entre operação, sistemas e produto, eu tenho interesse.',
      body:
        'O GitHub é o registro público de código, experimentos e trabalho em andamento. É o melhor lugar para revisar como eu construo e começar uma conversa.',
      form: {
        nameLabel: 'Nome',
        namePlaceholder: 'Seu nome',
        emailLabel: 'Email',
        emailPlaceholder: 'voce@exemplo.com',
        messageLabel: 'Projeto ou pergunta',
        messagePlaceholder: 'O que você quer construir, corrigir ou melhorar?',
        submitLabel: 'Enviar',
        note: ''
      },
      links: [
        { label: 'GitHub' },
        { label: 'LinkedIn' }
      ]
    }
  },
  es: {
    header: {
      languageLabel: 'Idioma',
      themeLight: 'Claro',
      themeDark: 'Oscuro',
      themeToggleAria: 'Cambiar modo oscuro'
    },
    nav: ['Acerca', 'Proyectos', 'Habilidades', 'Contacto'],
    hero: {
      eyebrow: 'Ingeniero químico que construye software',
      title: 'Software claro para problemas técnicos.',
      body:
        'Trabajo donde la lógica de procesos, la entrega de producto y la operación real se cruzan. El objetivo es sencillo: hacer que sistemas complejos sean más fáciles de operar, explicar y entregar.',
      primaryAction: 'Ver trabajo seleccionado',
      secondaryAction: 'Iniciar conversación',
      panelLabel: 'Enfoque actual',
      panelNote:
        'Interfaces, herramientas internas y productos cargados de contexto técnico guiados por pensamiento de proceso.',
      stats: [
        {
          value: 'Dominios técnicos',
          label: 'flujos industriales, operaciones, cálculos e informes'
        },
        {
          value: 'Stack de entrega',
          label: 'Angular, TypeScript, .NET e integración de APIs'
        },
        {
          value: 'Forma de trabajo',
          label: 'descubrimiento estructurado, UI legible y entrega pensada para producción'
        }
      ]
    },
    about: {
      eyebrow: 'Acerca',
      title: 'La disciplina de ingeniería define cómo construyo software.',
      body:
        'La ingeniería química me enseñó a mapear variables, restricciones y modos de fallo antes de elegir una solución. En software, eso se traduce en arquitectura más serena, interfaces más claras y menos sorpresas cuando el producto entra en uso real.',
      quote:
        '"Mi mejor trabajo aparece cuando la complejidad del dominio todavía necesita una superficie de producto usable."'
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Direcciones seleccionadas, con prueba en lugar de pose.',
      cards: [
        {
          title: 'Software de procesos para operadores reales',
          summary:
            'Interfaces y herramientas internas que convierten flujos densos de ingeniería en software que la gente puede usar sin fricción innecesaria.',
          outcome:
            'Encaja bien en calculadoras, simulaciones, paneles operativos y automatización de flujos dentro de entornos técnicos.',
          tags: ['Modelado de dominio', 'UI intensiva en datos', 'Ingeniería aplicada'],
          linkLabel: 'Solicitar recorrido'
        },
        {
          title: 'Plataformas internas con decisiones más claras',
          summary:
            'Aplicaciones web para reportes, operaciones y soporte de decisiones donde la legibilidad importa más que la decoración.',
          outcome:
            'El foco está en flujos confiables, datos entendibles e interfaces que los equipos pueden seguir ampliando.',
          tags: ['Angular', 'Integración de APIs', 'Arquitectura mantenible'],
          linkLabel: 'Hablar sobre plataformas'
        },
        {
          title: 'Entrega interdisciplinaria de extremo a extremo',
          summary:
            'Proyectos que se benefician tanto del encuadre de ingeniería como de la ejecución en software, desde la definición del problema hasta producción.',
          outcome:
            'Es la zona donde el conocimiento del dominio cambia la calidad del producto, no solo la velocidad de implementación.',
          tags: ['Pensamiento sistémico', 'Comunicación técnica', 'Responsabilidad end-to-end'],
          linkLabel: 'Iniciar conversación de proyecto'
        }
      ]
    },
    skills: {
      eyebrow: 'Habilidades',
      title: 'Herramientas y hábitos que mantienen la entrega con los pies en la tierra.',
      stack: [
        'Angular 21',
        'TypeScript',
        'SCSS',
        'C# / .NET',
        'APIs',
        'Visualización de datos',
        'Diseños responsivos',
        'Accesibilidad',
        'GitHub Actions'
      ],
      principles: [
        {
          title: 'Ingeniería primero',
          description:
            'Empiezo por entender el proceso, las restricciones y los modos de fallo antes de elegir la forma de la solución.'
        },
        {
          title: 'Software claro',
          description:
            'Prefiero interfaces y bases de código que se expliquen rápido y puedan evolucionar sin acumular ruido.'
        },
        {
          title: 'Entrega práctica',
          description:
            'La meta es una entrega confiable: software que resuelve un problema real y sigue siendo sostenible después del lanzamiento.'
        }
      ]
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Si el problema está entre operaciones, sistemas y producto, me interesa.',
      body:
        'GitHub es el registro público de código, experimentos y trabajo en curso. Es el mejor lugar para revisar cómo construyo y empezar una conversación.',
      form: {
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre',
        emailLabel: 'Email',
        emailPlaceholder: 'tu@ejemplo.com',
        messageLabel: 'Proyecto o pregunta',
        messagePlaceholder: '¿Qué quieres construir, corregir o mejorar?',
        submitLabel: 'Enviar',
        note: ''
      },
      links: [
        { label: 'GitHub' },
        { label: 'LinkedIn' }
      ]
    }
  },
  fr: {
    header: {
      languageLabel: 'Langue',
      themeLight: 'Clair',
      themeDark: 'Sombre',
      themeToggleAria: 'Basculer le mode sombre'
    },
    nav: ['À propos', 'Projets', 'Compétences', 'Contact'],
    hero: {
      eyebrow: 'Ingénieur chimiste qui construit du logiciel',
      title: 'Du logiciel clair pour des problèmes techniques.',
      body:
        'Je travaille là où se rencontrent logique de procédé, livraison produit et réalité opérationnelle. Le but est simple : rendre des systèmes complexes plus faciles à exploiter, expliquer et livrer.',
      primaryAction: 'Voir une sélection',
      secondaryAction: 'Démarrer un échange',
      panelLabel: 'Focalisation actuelle',
      panelNote:
        'Interfaces, outils internes et produits à forte densité métier guidés par une pensée de procédé.',
      stats: [
        {
          value: 'Domaines techniques',
          label: 'flux industriels, opérations, calculs et reporting'
        },
        {
          value: 'Stack de livraison',
          label: 'Angular, TypeScript, .NET et intégration API'
        },
        {
          value: 'Méthode de travail',
          label: 'découverte structurée, UI lisible et livraison pensée pour la production'
        }
      ]
    },
    about: {
      eyebrow: 'À propos',
      title: 'La discipline d’ingénierie façonne ma manière de construire du logiciel.',
      body:
        'Le génie chimique m’a appris à cartographier variables, contraintes et modes de défaillance avant de choisir une solution. En logiciel, cela se traduit par une architecture plus calme, des interfaces plus claires et moins de surprises en usage réel.',
      quote:
        '"Je donne le meilleur de moi-même quand la complexité métier doit encore tenir dans une surface produit utilisable."'
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Quelques directions choisies, avec des preuves plutôt que de la posture.',
      cards: [
        {
          title: 'Logiciels de procédé pour de vrais opérateurs',
          summary:
            'Interfaces et outils internes qui transforment des flux d’ingénierie denses en logiciel utilisable sans friction inutile.',
          outcome:
            'Pertinent pour des calculateurs, simulations, tableaux de bord opérationnels et automatisations de flux dans des contextes techniques.',
          tags: ['Modélisation métier', 'UI orientée données', 'Ingénierie appliquée'],
          linkLabel: 'Demander une visite'
        },
        {
          title: 'Plateformes internes pour des décisions plus claires',
          summary:
            'Applications web pour le reporting, les opérations et l’aide à la décision où la lisibilité compte plus que l’habillage.',
          outcome:
            'L’accent est mis sur des flux fiables, des données compréhensibles et des interfaces que les équipes peuvent prolonger.',
          tags: ['Angular', 'Intégration API', 'Architecture maintenable'],
          linkLabel: 'Parler de plateformes'
        },
        {
          title: 'Livraison pluridisciplinaire de bout en bout',
          summary:
            'Des projets qui bénéficient à la fois du cadrage d’ingénierie et de l’exécution logicielle, du problème jusqu’à la production.',
          outcome:
            'C’est la zone où la connaissance métier change la qualité du produit, pas seulement la vitesse d’implémentation.',
          tags: ['Pensée système', 'Communication technique', 'Responsabilité de bout en bout'],
          linkLabel: 'Démarrer un échange projet'
        }
      ]
    },
    skills: {
      eyebrow: 'Compétences',
      title: 'Des outils et des habitudes qui gardent la livraison ancrée.',
      stack: [
        'Angular 21',
        'TypeScript',
        'SCSS',
        'C# / .NET',
        'APIs',
        'Visualisation de données',
        'Interfaces responsives',
        'Accessibilité',
        'GitHub Actions'
      ],
      principles: [
        {
          title: 'Ingénierie d’abord',
          description:
            'Je commence par comprendre le procédé, les contraintes et les modes de défaillance avant de choisir la forme de la solution.'
        },
        {
          title: 'Logiciel clair',
          description:
            'Je préfère des interfaces et des bases de code qui s’expliquent vite et évoluent sans accumuler de bruit.'
        },
        {
          title: 'Livraison pragmatique',
          description:
            'L’objectif est une livraison fiable : un logiciel qui résout un vrai problème et reste soutenable après son lancement.'
        }
      ]
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Si le problème se situe entre opérations, systèmes et produit, cela m’intéresse.',
      body:
        'GitHub est l’archive publique du code, des expérimentations et du travail en cours. C’est le meilleur point d’entrée pour voir comment je construis et ouvrir un échange.',
      form: {
        nameLabel: 'Nom',
        namePlaceholder: 'Votre nom',
        emailLabel: 'Email',
        emailPlaceholder: 'vous@exemple.com',
        messageLabel: 'Projet ou question',
        messagePlaceholder: 'Que cherchez-vous à construire, corriger ou améliorer ?',
        submitLabel: 'Envoyer',
        note: ''
      },
      links: [
        { label: 'GitHub' },
        { label: 'LinkedIn' }
      ]
    }
  },
  da: {
    header: {
      languageLabel: 'Sprog',
      themeLight: 'Lys',
      themeDark: 'Mørk',
      themeToggleAria: 'Skift mørk tilstand'
    },
    nav: ['Om', 'Projekter', 'Kompetencer', 'Kontakt'],
    hero: {
      eyebrow: 'Kemisk ingeniør der bygger software',
      title: 'Klar software til tekniske problemer.',
      body:
        'Jeg arbejder der, hvor procestænkning, produktlevering og drift mødes. Målet er enkelt: at gøre komplekse systemer lettere at bruge, forklare og levere.',
      primaryAction: 'Se udvalgt arbejde',
      secondaryAction: 'Start en samtale',
      panelLabel: 'Nuværende fokus',
      panelNote:
        'Interfaces, interne værktøjer og produkter med tung domænelogik, styret af procestænkning.',
      stats: [
        {
          value: 'Tekniske domæner',
          label: 'industrielle workflows, drift, beregninger og rapportering'
        },
        {
          value: 'Leveringsstack',
          label: 'Angular, TypeScript, .NET og API-integration'
        },
        {
          value: 'Arbejdsform',
          label: 'struktureret discovery, læsbar UI og levering med produktion i fokus'
        }
      ]
    },
    about: {
      eyebrow: 'Om',
      title: 'Ingeniørdisciplin former måden, jeg bygger software på.',
      body:
        'Kemiteknik lærte mig at kortlægge variabler, begrænsninger og fejlsituationer, før jeg vælger en løsning. I software bliver det til roligere arkitektur, klarere interfaces og færre overraskelser, når produktet bruges i virkeligheden.',
      quote:
        '"Mit bedste arbejde opstår, når domænekompleksitet stadig skal kunne rummes i en brugbar produktflade."'
    },
    projects: {
      eyebrow: 'Projekter',
      title: 'Udvalgte retninger, med beviser i stedet for facade.',
      cards: [
        {
          title: 'Processoftware til rigtige operatører',
          summary:
            'Brugerflader og interne værktøjer, der omsætter tætte ingeniørflows til software, som mennesker faktisk kan bruge uden unødigt friktion.',
          outcome:
            'Passer godt til beregnere, simuleringer, operationelle dashboards og workflow-automation i tekniske miljøer.',
          tags: ['Domænemodellering', 'Datatung UI', 'Anvendt ingeniørarbejde'],
          linkLabel: 'Bed om gennemgang'
        },
        {
          title: 'Interne platforme med klarere beslutninger',
          summary:
            'Webapplikationer til rapportering, drift og beslutningsstøtte, hvor læsbarhed betyder mere end pynt.',
          outcome:
            'Fokus er på pålidelige flows, forståelige data og interfaces, som teams kan fortsætte med at udvikle.',
          tags: ['Angular', 'API-integration', 'Vedligeholdelig arkitektur'],
          linkLabel: 'Tal om platforme'
        },
        {
          title: 'Tværfaglig levering fra start til slut',
          summary:
            'Projekter der drager fordel af både ingeniørmæssig framing og softwareeksekvering, fra problemdefinition til produktion.',
          outcome:
            'Det er her domæneviden ændrer produktkvaliteten, ikke kun implementeringshastigheden.',
          tags: ['Systemtænkning', 'Teknisk kommunikation', 'Helhedsansvar'],
          linkLabel: 'Start en projektsamtale'
        }
      ]
    },
    skills: {
      eyebrow: 'Kompetencer',
      title: 'Værktøjer og vaner der holder leveringen jordnær.',
      stack: [
        'Angular 21',
        'TypeScript',
        'SCSS',
        'C# / .NET',
        'APIer',
        'Datavisualisering',
        'Responsive layouts',
        'Tilgængelighed',
        'GitHub Actions'
      ],
      principles: [
        {
          title: 'Ingeniørfagligt først',
          description:
            'Jeg starter med at forstå proces, begrænsninger og fejlsituationer, før jeg vælger løsningens form.'
        },
        {
          title: 'Klar software',
          description:
            'Jeg foretrækker interfaces og kodebaser, der forklarer sig selv hurtigt og kan udvikles videre uden unødigt støj.'
        },
        {
          title: 'Praktisk levering',
          description:
            'Målet er stabil levering: software der løser et reelt problem og forbliver vedligeholdeligt efter lancering.'
        }
      ]
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Hvis problemet ligger mellem drift, systemer og produkt, er jeg interesseret.',
      body:
        'GitHub er det offentlige arkiv for kode, eksperimenter og løbende arbejde. Det er det bedste sted at se, hvordan jeg bygger, og starte en samtale.',
      form: {
        nameLabel: 'Navn',
        namePlaceholder: 'Dit navn',
        emailLabel: 'Email',
        emailPlaceholder: 'dig@eksempel.com',
        messageLabel: 'Projekt eller spørgsmål',
        messagePlaceholder: 'Hvad vil du bygge, rette eller forbedre?',
        submitLabel: 'Send',
        note: ''
      },
      links: [
        { label: 'GitHub' },
        { label: 'LinkedIn' }
      ]
    }
  }
} as const satisfies Record<PortfolioLanguage, unknown>;
