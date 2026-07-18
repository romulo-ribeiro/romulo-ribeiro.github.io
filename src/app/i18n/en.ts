import { Translation } from './translation';

export const en: Translation = {
  languageLabel: 'Language',
  navLabel: 'Primary navigation',
  skipToContent: 'Skip to main content',
  languageNames: { en: 'English', es: 'Spanish', pt: 'Portuguese' },
  nav: [
    { href: '#about', label: 'About' },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#projects', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ],
  hero: {
    eyebrow: 'Chemical & software engineer',
    titleBefore: 'Full-stack software for',
    titleAccent: 'industrial operations.',
    text: 'I build full-stack systems for complex operations, with 6+ years of experience across manufacturing, warehousing, logistics, AI, cloud applications, and financial services.',
    primaryAction: 'Explore experience areas',
    secondaryAction: 'About my approach',
    profile: 'Profile',
    profileSummary:
      'Primary focus on .NET and Angular, supported by a chemical engineering background in process analysis and operational constraints.',
    profilePhoto: 'Romulo Barbosa Ribeiro working at a software engineering workstation',
    stats: [
      { value: '6+ years', label: 'enterprise and industrial software' },
      { value: 'Senior engineer', label: 'full-stack and AI platforms' },
      { value: 'Chemical engineer', label: 'systems thinking and process analysis' },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Areas of expertise.',
    items: [
      {
        title: 'Business web applications',
        description:
          'Internal platforms, client portals, and workflows that support daily business operations.',
        tags: ['Angular', 'Next.js', '.NET'],
      },
      {
        title: 'Systems integration',
        description:
          'Connections to ERPs, banks, invoicing, tax systems, and external APIs, with logging and error handling built in.',
        tags: ['REST APIs', 'ERP', 'Payments'],
      },
      {
        title: 'Real-time dashboards',
        description: 'Dashboards for telemetry, maps, alerts, and historical data.',
        tags: ['MQTT', 'SignalR', 'TimescaleDB'],
      },
      {
        title: 'AI integration',
        description:
          'AI-powered product features, computer vision, language search, and intelligent workflows connected to operational systems.',
        tags: ['AI', 'Computer vision', 'NLP'],
      },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'A software engineering career grounded in chemical engineering.',
    bio: 'I am Romulo Barbosa Ribeiro, a senior software engineer with 6+ years of experience building enterprise, industrial, logistics, IoT, AI, and cloud-based applications. I started through a technology formation program, worked on MES platforms and enterprise systems, and now develop AI-powered security products. My main stack includes .NET, Angular, React, Next.js, SQL Server, PostgreSQL, Azure, AWS, and Docker.',
    contextPhoto: 'Work in context',
    portraitPhoto: 'Romulo Barbosa Ribeiro on a modern industrial factory floor',
    method:
      'My training in chemical engineering established a process-oriented approach to software development. I examine the workflow, constraints, and failure modes before defining the solution. This method has supported work on ERP integrations, payment systems, and industrial telemetry.',
    quote:
      'I favor traceable code, clear interfaces, and technical decisions that can be explained and maintained.',
  },
  projects: {
    eyebrow: 'Experience areas',
    title: 'Systems, tools, and technologies.',
    overview:
      'A concise view of the domains and technologies I use to design, build, integrate, and operate software.',
    viewLabel: 'Experience view',
    filterLabel: 'Filter experience areas',
    filters: {
      all: 'All',
      industrial: 'Industrial',
      enterprise: 'Enterprise',
      logistics: 'Logistics',
      ai: 'AI',
      product: 'Web & mobile',
    },
    views: { projects: 'Projects', experience: 'Experience areas' },
    projectType: 'Project',
    experienceType: 'Consolidated experience',
    projectResults: 'projects shown',
    experienceResults: 'experience areas shown',
    missingImage: 'Image space reserved',
    confidentiality:
      'Project names, visuals, and operational details are generalized where necessary to protect client and employer confidentiality.',
    outcomeLabel: 'Outcome',
  },
  caseStudy: {
    eyebrow: 'Concept case study',
    title: 'Predictive maintenance for a continuous industrial process',
    lead: 'A proposed monitoring and machine-learning platform for a multivariable process where small changes in temperature, pressure, flow, and composition can precede equipment or product-quality failures.',
    imageAlt: 'Industrial process monitoring dashboard with predictive maintenance indicators',
    roleLabel: 'Your role',
    validationLabel: 'Validation',
    facts: [
      {
        label: 'Problem',
        text: 'Operators relied on alarms and periodic inspections, which could identify abnormal conditions only after process variables had already drifted.',
      },
      {
        label: 'Approach',
        text: 'MQTT carried sensor readings to .NET orchestration services, while Python models detected anomalies, estimated failure risk, and exposed maintenance signals to Angular.',
      },
      {
        label: 'Expected value',
        text: 'Earlier warnings could help teams investigate emerging failures, schedule maintenance windows, and reduce avoidable interruptions without replacing operator judgment.',
      },
    ],
    flow: [
      { label: 'Process sensors', detail: 'Temperature, pressure, flow, composition' },
      { label: 'MQTT telemetry', detail: 'Timestamped readings and equipment state' },
      { label: '.NET orchestration', detail: 'Validation, storage, APIs, alert routing' },
      { label: 'Python ML service', detail: 'Anomaly detection and failure-risk scoring' },
      { label: 'Angular operations', detail: 'Trends, alerts, explanations, maintenance view' },
    ],
    technical: [
      {
        label: 'Modeling focus',
        text: 'A baseline model would learn normal multivariable behavior, flag deviations, and combine recent trends with operating context to estimate the likelihood of an upcoming failure.',
      },
      {
        label: 'Preventive maintenance',
        text: 'Risk scores would be shown alongside the contributing variables, recent events, and recommended investigation window so maintenance decisions remain traceable and reviewable.',
      },
    ],
    architectureLabel: 'Predictive maintenance architecture',
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Tools I use in production.',
    principles: [
      {
        title: 'Process before implementation',
        description:
          'Each project begins with an analysis of the workflow, its constraints, and its failure modes.',
      },
      {
        title: 'Maintainable systems',
        description:
          'Interfaces and code should remain clear to the developers responsible for extending them.',
      },
      {
        title: 'Operational continuity',
        description:
          'A delivered system should remain understandable to its users and practical for the team maintaining it.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Professional profiles.',
    text: 'Public code is available on GitHub. Professional experience and contact information are available through LinkedIn.',
  },
};
