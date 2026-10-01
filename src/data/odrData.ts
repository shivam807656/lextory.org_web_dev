import type { ComparisonDimension, ADRMethod, FAQItem } from '../types';

export const ODR_VS_LITIGATION: ComparisonDimension[] = [
  {
    dimension: 'Forum & Location',
    courtLitigation: 'Physical courtrooms requiring in-person attendance, travel, and adherence to court schedules.',
    onlineDisputeResolution: 'Secure digital platforms accessible from anywhere via smartphone or computer, eliminating travel hurdles.',
    keyDistinction: 'Physical presence vs. remote digital accessibility.'
  },
  {
    dimension: 'Timeline & Speed',
    courtLitigation: 'Often takes months to years due to heavy procedural dockets, adjournments, and multiple appeals.',
    onlineDisputeResolution: 'Typically structured in weeks or days, with swift asynchronous document exchange and flexible scheduling.',
    keyDistinction: 'Years of docket waiting vs. structured weeks of focused dialogue.'
  },
  {
    dimension: 'Cost & Financial Burden',
    courtLitigation: 'High cumulative costs including recurring legal appearance fees, travel, physical filings, and opportunity cost of lost work days.',
    onlineDisputeResolution: 'Substantially lower procedural costs, minimal transit expenses, and predictable timeline.',
    keyDistinction: 'Uncapped escalating expenses vs. economical, proportionate cost structure.'
  },
  {
    dimension: 'Control Over Outcome',
    courtLitigation: 'An adversarial third party (the judge) imposes a binary win-lose verdict based strictly on contested rules of evidence.',
    onlineDisputeResolution: 'In mediation & conciliation, parties retain full autonomy to craft custom, mutually agreeable win-win solutions.',
    keyDistinction: 'Imposed adversarial decision vs. collaborative consensus.'
  },
  {
    dimension: 'Relationship Preservation',
    courtLitigation: 'Adversarial atmosphere often permanently damages commercial, interpersonal, or neighbourhood relationships.',
    onlineDisputeResolution: 'Facilitated communication helps preserve ongoing commercial ties, familial rapport, or community goodwill.',
    keyDistinction: 'Combative standoff vs. constructive problem-solving.'
  },
  {
    dimension: 'Formality & Procedural Rigidity',
    courtLitigation: 'Strictly governed by procedural codes (CPC, CrPC/BNSS, Indian Evidence Act/BSA) with formal legal ceremonies.',
    onlineDisputeResolution: 'Party-centric, flexible, and informal atmosphere guided by principles of natural justice and fairness.',
    keyDistinction: 'Strict technical procedure vs. accessible, guided negotiation.'
  },
  {
    dimension: 'Privacy & Confidentiality',
    courtLitigation: 'Court hearings and judicial records are generally public proceedings open to public scrutiny.',
    onlineDisputeResolution: 'Proceedings are typically confidential and private between the disputing parties and the neutral.',
    keyDistinction: 'Open public record vs. protected confidential forum.'
  }
];

export const ADR_METHODS: ADRMethod[] = [
  {
    name: 'Online Mediation',
    role: 'A neutral, trained third party (Mediator) acts as a skilled facilitator without imposing any decision.',
    bindingNature: 'Non-binding unless both parties reach and sign a formal Settlement Agreement, which then becomes legally binding.',
    bestFor: 'Consumer complaints, small business payment disputes, workplace disagreements, co-founder disputes, and interpersonal conflicts where relationship preservation matters.',
    process: 'Joint video sessions and private digital breakout rooms (caucuses) where the mediator helps parties explore common interests.'
  },
  {
    name: 'Online Conciliation',
    role: 'A neutral Conciliator who not only facilitates dialogue but can also actively suggest and formulate terms of a reasonable settlement.',
    bindingNature: 'Voluntary until the parties accept and sign the settlement, which under Section 74 of the Arbitration and Conciliation Act, 1996 has the status of a court decree.',
    bestFor: 'Commercial contracts, tenancy disagreements, vendor payment deadlocks, and insurance claim disputes.',
    process: 'Parties submit statements and documentation; the conciliator prepares draft settlement terms for party review and adjustment.'
  },
  {
    name: 'Online Arbitration',
    role: 'A neutral, qualified Arbitrator acts as a private judge who reviews documentary submissions and renders a decisive ruling (Arbitral Award).',
    bindingNature: 'Legally binding and final on both parties, enforceable through courts under the Arbitration and Conciliation Act, 1996.',
    bestFor: 'Contractual disputes with an explicit arbitration agreement, commercial debts, B2B supplier claims, and defined intellectual property disputes.',
    process: 'Digital submission of claims, digital statement of defense, virtual evidentiary hearings if needed, followed by an enforceable written award.'
  }
];

export const ODR_STEPS = [
  {
    step: '01',
    title: 'Dispute Intake & Notice',
    description: 'The initiating party outlines the grievance, submits supporting records (bills, chats, contracts), and an invitation is dispatched to the responding party.'
  },
  {
    step: '02',
    title: 'Mutual Consent & Platform Onboarding',
    description: 'The responding party reviews the request. For voluntary processes like mediation, informed mutual consent to engage online is confirmed.'
  },
  {
    step: '03',
    title: 'Neutral Assignment',
    description: 'An independent, impartial neutral (mediator, conciliator, or arbitrator) with relevant domain familiarity is assigned to guide the matter.'
  },
  {
    step: '04',
    title: 'Facilitated Digital Dialogue',
    description: 'Parties engage through asynchronous messaging, structured digital exchanges, or secure video conferencing to identify core needs.'
  },
  {
    step: '05',
    title: 'Resolution & Enforceable Agreement',
    description: 'Upon consensus, a digitally signed settlement deed is formalized, giving parties a clear, legally recognized path forward.'
  }
];

export const ODR_BENEFITS = [
  {
    title: 'Geographic Inclusivity',
    desc: 'Parties residing across different cities, states, or remote areas resolve matters without spending days traveling.'
  },
  {
    title: 'Time & Energy Conservation',
    desc: 'Eliminates endless courtroom postponements and physical queueing, respecting working citizens’ time.'
  },
  {
    title: 'Financial Proportionality',
    desc: 'Prevents the dispute resolution cost from outstripping the actual financial value of the claim itself.'
  },
  {
    title: 'Dignified & Less Stressful',
    desc: 'Replaces intimidating courtroom formality with a calm, privacy-protected conversational setting.'
  }
];

export const ODR_LIMITATIONS = [
  {
    title: 'The Digital Divide',
    desc: 'Citizens without stable internet, smartphones, or digital literacy can face barriers unless community assistance desks exist.'
  },
  {
    title: 'Requirement of Free Consent',
    desc: 'Parties cannot be coerced into private mediation or conciliation; voluntary participation is a foundational pillar.'
  },
  {
    title: 'Unsuitability for Serious Crimes',
    desc: 'ODR is not suited for non-compoundable criminal offences, constitutional questions, or matters demanding judicial inquiry.'
  },
  {
    title: 'Data Security & Confidentiality',
    desc: 'Platforms must uphold strict data privacy, end-to-end security, and clear data protection safeguards.'
  }
];

export const ODR_FAQS: FAQItem[] = [
  {
    id: 'odr-1',
    category: 'ODR Basics',
    question: 'Is Online Dispute Resolution recognized under Indian law?',
    answer: 'Yes. Indian jurisprudence strongly recognizes Alternate Dispute Resolution (ADR) under Section 89 of the Code of Civil Procedure, 1908, the Arbitration and Conciliation Act, 1996, and the Mediation Act, 2023. Courts, NITI Aayog, and statutory bodies actively encourage technology-enabled dispute resolution for appropriate civil, commercial, and consumer matters.',
    legalContext: 'Recognized under Mediation Act 2023, Arbitration & Conciliation Act 1996, and CPC Sec 89.'
  },
  {
    id: 'odr-2',
    category: 'ODR Basics',
    question: 'Does ODR replace traditional courts?',
    answer: 'No, absolutely not. ODR does not replace the judiciary or extinguish your constitutional right to approach regular courts. Rather, it serves as a complementary, accessible pre-litigation avenue that helps resolve eligible disagreements early, preserving judicial resources for complex constitutional and criminal matters.',
    legalContext: 'ODR acts as an alternative, non-exclusive path for eligible civil and commercial matters.'
  },
  {
    id: 'odr-3',
    category: 'ODR Basics',
    question: 'What types of disputes are generally best suited for ODR?',
    answer: 'Matters well suited for ODR include consumer grievances (damaged products, service defaults, delivery delays), small business unpaid invoices, freelance service contracts, digital payment disputes, landlord-tenant security deposit disagreements, and neighborhood disputes. Non-compoundable criminal offenses, child custody matters without statutory safeguards, and constitutional challenges are not appropriate for private ODR.',
    legalContext: 'Suitable for compoundable civil, consumer, and commercial disputes.'
  },
  {
    id: 'odr-4',
    category: 'ODR Basics',
    question: 'Is an online mediation settlement legally binding?',
    answer: 'When parties reach an agreement through online mediation and execute a formal Settlement Agreement, it has the effect of a binding contract. Under modern legislation such as the Mediation Act, 2023, mediated settlement agreements can be enforced in the same manner as a judgment or decree of a civil court.',
    legalContext: 'Mediation Act 2023 Section 27 confers enforceability equivalent to civil decrees.'
  },
  {
    id: 'odr-5',
    category: 'ODR Basics',
    question: 'What happens if the other party refuses to join an ODR session?',
    answer: 'Voluntary mediation and conciliation require both parties’ consent. If the respondent refuses to participate, the process cannot be forced upon them. In such instances, the aggrieved citizen may explore other legal remedies, such as filing a complaint before the Consumer Commission, approaching a Legal Services Authority, or initiating court proceedings.',
    legalContext: 'Consent is vital; non-participation leaves standard statutory and judicial remedies intact.'
  }
];
