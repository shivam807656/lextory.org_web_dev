import type { Initiative } from '../types';

export const INITIATIVES_DATA: Initiative[] = [
  {
    id: 'legal-literacy',
    title: 'Legal Awareness and Everyday Rights',
    shortTitle: 'Everyday Legal Literacy',
    category: 'literacy',
    badge: 'Active Outreach',
    summary: 'Demystifying fundamental rights, statutory protections, civil remedies, and routine procedural laws into accessible, multilingual public resources.',
    objectives: [
      'Empower ordinary citizens with actionable knowledge of fundamental constitutional rights and duties.',
      'Demystify everyday legal procedures such as filing an FIR, approaching consumer forums, and resolving civil disputes.',
      'Bridge the language barrier by breaking down complex statutory jargon into clear, straightforward language.'
    ],
    beneficiaries: [
      'First-time litigants and common citizens unfamiliar with judicial procedures',
      'School and university students learning constitutional foundations',
      'Small business owners and self-employed individuals'
    ],
    proposedActivities: [
      'Developing beginner-friendly illustrated guides on everyday legal topics.',
      'Conducting interactive constitutional awareness sessions in schools and colleges.',
      'Publishing procedural explainers on how to approach consumer commissions, revenue authorities, and civil forums.'
    ],
    potentialOutcomes: [
      'Increased citizen confidence in recognizing rights violations early.',
      'Reduction in procedural errors when citizens seek administrative remedies.',
      'Greater civic literacy across communities.'
    ]
  },
  {
    id: 'odr-awareness',
    title: 'Online Dispute Resolution (ODR) Awareness',
    shortTitle: 'ODR Awareness & Education',
    category: 'dispute',
    badge: 'Active Outreach',
    flagship: true,
    summary: 'A flagship civic education effort to introduce citizens, micro-enterprises, and students to technology-enabled mediation, conciliation, and arbitration.',
    objectives: [
      'Foster a nuanced public understanding of Online Dispute Resolution (ODR) and its procedural foundations.',
      'Articulate clear distinctions between court litigation, online mediation, conciliation, and arbitration.',
      'Provide balanced guidance on both the immense convenience and the real-world limitations (such as digital exclusion) of ODR mechanisms.'
    ],
    beneficiaries: [
      'Consumers facing e-commerce, digital payment, or service grievances',
      'Micro, Small, and Medium Enterprises (MSMEs) seeking affordable dispute resolution options',
      'Law students, young practitioners, and civic educators'
    ],
    proposedActivities: [
      'Hosting non-commercial interactive webinars explaining what ODR is and how digital hearings work.',
      'Publishing open-access comparative matrixes: Court vs. Mediation vs. Arbitration vs. Conciliation.',
      'Developing community suitability checklists to help people distinguish disputes suited for ODR from those requiring formal court intervention.'
    ],
    potentialOutcomes: [
      'Citizens make informed choices regarding alternative avenues for resolving everyday disagreements.',
      'Broader awareness of collaborative problem-solving, reducing docket pressure on formal courts.',
      'Demystification of dispute resolution technologies for non-technical users.'
    ]
  },
  {
    id: 'access-to-justice',
    title: 'Access to Justice & Legal Aid Awareness',
    shortTitle: 'Legal Aid & NALSA Awareness',
    category: 'justice',
    badge: 'Active Outreach',
    summary: 'Spreading public awareness regarding statutory legal aid frameworks under the Legal Services Authorities Act, 1987, and institutional mechanisms like Lok Adalats.',
    objectives: [
      'Educate underserved populations about statutory entitlements to free legal aid under Section 12 of the Legal Services Authorities Act.',
      'Clarify the functioning and jurisdiction of National, State, and District Legal Services Authorities (NALSA, SLSA, DLSA).',
      'Explain how Lok Adalats and front-office legal clinics operate for amicable, zero-court-fee settlements.'
    ],
    beneficiaries: [
      'Marginalized and low-income individuals eligible for statutory free legal aid',
      'Persons in custodial detention, industrial workmen, women, and children',
      'Rural community groups lacking access to institutional legal networks'
    ],
    proposedActivities: [
      'Creating visual workflow infographics explaining how to approach a District Legal Services Authority front office.',
      'Conducting orientation workshops on how Lok Adalats function and how awards achieve finality.',
      'Publishing directories of statutory legal helpline numbers (NALSA Helpline 15100).'
    ],
    potentialOutcomes: [
      'Enhanced utilization of constitutionally guaranteed free legal aid services.',
      'Greater awareness of amicable dispute settlement through regular and National Lok Adalats.',
      'Dismantling economic barriers that prevent citizens from seeking legitimate redress.'
    ]
  },
  {
    id: 'youth-empowerment',
    title: 'Education and Youth Empowerment',
    shortTitle: 'Youth & Civic Education',
    category: 'youth',
    badge: 'Community Driven',
    summary: 'Engaging student communities and youth networks to build a culture of constitutional consciousness, ethical responsibility, and public service.',
    objectives: [
      'Nurture constitutional values, civic responsibility, and legal literacy among secondary and tertiary students.',
      'Provide structured volunteer opportunities for law students to translate research into accessible community materials.',
      'Organize educational discussions and essay initiatives on socio-legal challenges in modern India.'
    ],
    beneficiaries: [
      'Undergraduate students across law, humanities, and social sciences',
      'School students seeking foundation-level understanding of democratic rights',
      'Youth-led community clubs and social development circles'
    ],
    proposedActivities: [
      'Conducting campus legal awareness circles and constitution day workshops.',
      'Mentoring student volunteers in drafting accessible civic explainers.',
      'Hosting student-led policy discussions on modern access to justice barriers.'
    ],
    potentialOutcomes: [
      'A dedicated network of informed youth volunteers active in grassroots literacy.',
      'Increased understanding of constitutional ethics among future professionals.',
      'Meaningful experiential learning for budding legal scholars in public interest communication.'
    ]
  },
  {
    id: 'community-outreach',
    title: 'Community Outreach and Social Awareness',
    shortTitle: 'Grassroots Community Camps',
    category: 'community',
    badge: 'Pilot Initiative',
    summary: 'Taking legal literacy beyond internet screens into grassroots community centres, workers’ collectives, and peri-urban neighborhoods.',
    objectives: [
      'Bridge the digital divide by distributing printed, accessible vernacular awareness materials.',
      'Address everyday legal friction experienced by unorganized sector workers and local self-help groups.',
      'Partner with grassroots community workers to identify localized legal awareness deficits.'
    ],
    beneficiaries: [
      'Informal sector workers, daily-wage earners, and domestic help',
      'Residents of peri-urban settlements with limited internet connectivity',
      'Grassroots social workers and community organizers'
    ],
    proposedActivities: [
      'Organizing community legal literacy camps in community centres.',
      'Conducting interactive Q&A sessions on wage documentation, tenancy awareness, and identity card issuance.',
      'Disseminating vernacular pamphlets on official social security and welfare schemes.'
    ],
    potentialOutcomes: [
      'Direct, grounded reach to citizens outside formal digital ecosystems.',
      'Better understanding of statutory entitlements and social security measures.',
      'Strengthened civic resilience at the neighbourhood level.'
    ]
  },
  {
    id: 'women-and-child',
    title: "Women's Rights and Child Protection",
    shortTitle: 'Women & Child Protections',
    category: 'rights',
    badge: 'Active Outreach',
    summary: 'Promoting clear awareness of protective statutes, statutory helplines, workplace safeguards, and child rights under Indian law.',
    objectives: [
      'Disseminate information on protections under the Protection of Women from Domestic Violence Act and related civil remedies.',
      'Educate workplaces and employees on the mandates of the POSH Act (Prevention of Sexual Harassment at Workplace).',
      'Raise awareness on the POCSO Act (Protection of Children from Sexual Offences) and statutory reporting safeguards.'
    ],
    beneficiaries: [
      'Women seeking clarity on protective legal mechanisms and support networks',
      'Working professionals and internal complaints committee members',
      'Parents, educators, and guardians responsible for child welfare'
    ],
    proposedActivities: [
      'Publishing structured guides on the role of Protection Officers and Service Providers.',
      'Delivering educational modules on the rights of aggrieved women in corporate and institutional workplaces.',
      'Highlighting national 24/7 emergency helplines (Women Helpline 1091, Childline 1098, Emergency 112).'
    ],
    potentialOutcomes: [
      'Higher awareness of non-adversarial protective remedies such as residence orders and maintenance provisions.',
      'Encouragement of safe, compliant institutional environments.',
      'Rapid awareness of emergency reporting channels.'
    ]
  },
  {
    id: 'cyber-rights',
    title: 'Digital Rights and Cyber Fraud Awareness',
    shortTitle: 'Cyber Safety & Digital Rights',
    category: 'digital',
    badge: 'Active Outreach',
    summary: 'Equipping citizens with practical knowledge to prevent digital fraud, protect personal privacy, and navigate official reporting portals.',
    objectives: [
      'Educate citizens on prevalent online scams, UPI frauds, loan app extortions, and phishing techniques.',
      'Demystify official reporting procedures via the National Cybercrime Reporting Portal (cybercrime.gov.in) and Helpline 1930.',
      'Promote awareness of data privacy fundamentals and digital footprints among first-time internet users.'
    ],
    beneficiaries: [
      'Senior citizens vulnerable to financial social engineering',
      'Students and young adults engaging with digital commerce and social media',
      'General smartphone users across urban and rural demographics'
    ],
    proposedActivities: [
      'Step-by-step pictorial guides on reporting financial fraud within the "golden hour" to freeze fraudulent transactions.',
      'Awareness campaigns on cyberbullying, non-consensual content sharing, and digital harassment redressal.',
      'Interactive quizzes on identifying scam URLs, fake job offers, and impersonation attempts.'
    ],
    potentialOutcomes: [
      'Quicker reporting of financial cybercrimes, increasing chances of fund recovery.',
      'Decreased vulnerability to extortionate digital loan and blackmail schemes.',
      'Promotion of responsible and informed digital citizenship.'
    ]
  },
  {
    id: 'research-and-policy',
    title: 'Research, Policy Awareness & Public Legal Education',
    shortTitle: 'Public Legal Research',
    category: 'policy',
    badge: 'Pilot Initiative',
    summary: 'Translating judicial decisions, policy blueprints, and procedural reforms into digestible summaries for the wider public.',
    objectives: [
      'Synthesize landmark Supreme Court and High Court rulings impacting citizen rights into non-technical language.',
      'Analyze policy papers relating to justice access, court digitization, and ODR frameworks in India.',
      'Provide open educational toolkits for schools, colleges, and civic discussion groups.'
    ],
    beneficiaries: [
      'Educators, policy students, and civil society advocates',
      'Journalists and public-interest communicators',
      'Citizens eager to understand the legal context behind major public issues'
    ],
    proposedActivities: [
      'Publishing regular "Judgment in Plain Language" summaries of rights-based rulings.',
      'Authoring non-partisan discussion papers on procedural justice and digital court initiatives.',
      'Hosting academic-community roundtables on reducing pendency and improving judicial accessibility.'
    ],
    potentialOutcomes: [
      'A better-informed electorate capable of understanding legal discourse without bias or sensation.',
      'Accessible archival resources for civic educators.',
      'Constructive feedback and community perspective feeding into policy dialogues.'
    ]
  }
];
