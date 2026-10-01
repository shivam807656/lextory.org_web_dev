export type NavTab = 
  | 'home' 
  | 'about' 
  | 'initiatives' 
  | 'odr-centre' 
  | 'resources' 
  | 'campaigns' 
  | 'get-involved' 
  | 'contact' 
  | 'disclaimer';

export interface Initiative {
  id: string;
  title: string;
  shortTitle: string;
  category: 'literacy' | 'dispute' | 'justice' | 'youth' | 'community' | 'rights' | 'digital' | 'policy';
  badge: 'Active Outreach' | 'Pilot Initiative' | 'Community Driven';
  summary: string;
  objectives: string[];
  beneficiaries: string[];
  proposedActivities: string[];
  potentialOutcomes: string[];
  flagship?: boolean;
}

export interface ComparisonDimension {
  dimension: string;
  courtLitigation: string;
  onlineDisputeResolution: string;
  keyDistinction: string;
}

export interface ADRMethod {
  name: string;
  role: string;
  bindingNature: string;
  bestFor: string;
  process: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Legal Explainer' | 'ODR Guide' | 'Citizen Rights' | 'Women & Child Safety' | 'Cyber Awareness' | 'Constitutional Literacy';
  audience: 'General Citizens' | 'Students & Youth' | 'Small Businesses' | 'Community Workers';
  readingTime: string;
  date: string;
  summary: string;
  keyPoints: string[];
  fullMarkdown: string;
  officialHelplineOrPortal?: string;
  tags: string[];
}

export interface CampaignEvent {
  id: string;
  title: string;
  type: 'Webinar' | 'Community Camp' | 'Campus Workshop' | 'Public Dialogue';
  format: 'Virtual (Online)' | 'In-Person (Community Venue)' | 'Hybrid';
  date: string;
  time: string;
  location: string;
  audience: string;
  summary: string;
  topicsCovered: string[];
  status: 'Registration Open' | 'Upcoming' | 'Pilot Planning';
}

export interface FAQItem {
  id: string;
  category: 'ODR Basics' | 'Access to Justice & Legal Aid' | 'Citizen Rights' | 'Volunteering';
  question: string;
  answer: string;
  legalContext?: string;
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  cityState: string;
  roleInterest: string;
  weeklyHours: string;
  relevantExperience: string;
  statementOfMotivation: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  message: string;
}
