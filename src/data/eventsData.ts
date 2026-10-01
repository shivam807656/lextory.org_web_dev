import type { CampaignEvent } from '../types';

export const CAMPAIGNS_EVENTS_DATA: CampaignEvent[] = [
  {
    id: 'ev-odr-webinar-oct',
    title: 'Public Webinar: Demystifying Online Dispute Resolution (ODR) for Everyday Disagreements',
    type: 'Webinar',
    format: 'Virtual (Online)',
    date: 'Saturday, October 24, 2026',
    time: '4:00 PM – 5:30 PM IST',
    location: 'Open Access Virtual Room (Link provided upon registration)',
    audience: 'Citizens, Small Business Owners, Law Students, Consumers',
    summary: 'An introductory educational webinar breaking down how online mediation and conciliation work in India, how they differ from court litigation, and how citizens can assess whether a dispute is suitable for digital resolution.',
    topicsCovered: [
      'Overview of Online Dispute Resolution (ODR) fundamentals',
      'Mediation vs. Arbitration vs. Conciliation: Choosing the right avenue',
      'The Mediation Act, 2023: What it means for ordinary citizens',
      'Q&A on procedural safeguards, confidentiality, and consent'
    ],
    status: 'Registration Open'
  },
  {
    id: 'ev-cyber-safety-workshop',
    title: 'Workshop: Cybercrime Awareness & Reporting Financial Scams via Helpline 1930',
    type: 'Campus Workshop',
    format: 'Hybrid',
    date: 'Wednesday, November 11, 2026',
    time: '2:30 PM – 4:00 PM IST',
    location: 'Community Hall / Hybrid Livestream',
    audience: 'Students, Youth, Senior Citizens, Community Volunteers',
    summary: 'An interactive session on identifying modern financial fraud, understanding the "Golden Hour" freeze protocol under I4C, and filing complaints properly on cybercrime.gov.in.',
    topicsCovered: [
      'Deconstructing modern phishing, loan apps, and UPI fraud patterns',
      'Step-by-step reporting walkthrough on the National Cybercrime Portal',
      'RBI zero-liability rules for unauthorized banking transactions',
      'Interactive fraud-detection checklist for households'
    ],
    status: 'Registration Open'
  },
  {
    id: 'ev-nalsa-dlsa-camp',
    title: 'Community Legal Literacy Camp: Understanding Free Legal Aid & Lok Adalats',
    type: 'Community Camp',
    format: 'In-Person (Community Venue)',
    date: 'Sunday, November 29, 2026',
    time: '10:30 AM – 1:30 PM IST',
    location: 'Grassroots Community Centre, New Delhi (Local venue details shared with registered volunteers)',
    audience: 'Unorganized workers, domestic staff, community residents',
    summary: 'A grassroots, plain-language workshop designed to familiarize community members with statutory free legal aid entitlements under Section 12 of the Legal Services Authorities Act, 1987.',
    topicsCovered: [
      'Eligibility criteria for state-funded legal aid advocates',
      'How to approach District Legal Services Authority (DLSA) front desks',
      'Settling pending compoundable disputes at upcoming National Lok Adalats',
      'Distribution of vernacular rights pamphlets and Q&A'
    ],
    status: 'Registration Open'
  },
  {
    id: 'ev-constitution-circle-dec',
    title: 'Youth Constitutional Circle: Privacy, Dignity & Digital Rights in Modern India',
    type: 'Public Dialogue',
    format: 'Virtual (Online)',
    date: 'Saturday, December 12, 2026',
    time: '5:00 PM – 6:30 PM IST',
    location: 'Virtual Interactive Forum',
    audience: 'University Students, Civic Researchers, Young Professionals',
    summary: 'A participatory dialogue exploring constitutional protections under Article 21, the evolution of digital privacy, and how young citizens can champion legal literacy in their local communities.',
    topicsCovered: [
      'Puttaswamy judgment and the constitutional right to privacy',
      'Everyday digital rights and algorithmic consent',
      'How law students can volunteer in translating legal knowledge into plain vernacular languages',
      'Open floor discussion and community action planning'
    ],
    status: 'Pilot Planning'
  }
];
