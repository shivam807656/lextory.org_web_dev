import React from 'react';
import type { NavTab } from '../types';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  CheckCircle2
} from 'lucide-react';

interface EventsViewProps {
  onSelectEvent?: (event: any) => void;
  setActiveTab: (tab: NavTab) => void;
}

export const EventsView: React.FC<EventsViewProps> = ({ setActiveTab }) => {
  const workshopModules = [
    {
      id: 'mod-odr',
      title: 'Demystifying Online Dispute Resolution & Mediation',
      format: 'Interactive Workshop / Hybrid',
      duration: '60 – 90 Minutes',
      audience: 'Colleges, Youth Groups, Small Businesses, RWAs',
      summary: 'A compassionate, plain-language walkthrough of how digital mediation works in India, how it preserves relationships, and when consensual dispute resolution is suitable.',
      topics: [
        'Consensual mediation vs court battles',
        'Practical walkthrough of Indian ODR portals',
        'Confidentiality and enforceability of settlements',
        'Open Q&A on real-world dispute examples'
      ]
    },
    {
      id: 'mod-legal-aid',
      title: 'Free Statutory Legal Aid under NALSA',
      format: 'Grassroots Community Camp / In-Person',
      duration: '90 Minutes',
      audience: 'Community Residents, Informal Workers, Women & Youth',
      summary: 'Empowering marginalized and economically vulnerable citizens with the legal knowledge to claim state-funded legal aid representation under Section 12 of the Legal Services Authorities Act.',
      topics: [
        'Constitutional right to free legal representation (Article 39A)',
        'Qualifying criteria under Section 12',
        'Navigating District Legal Services Authority (DLSA) desks',
        'Resolving compoundable disputes through Lok Adalats'
      ]
    },
    {
      id: 'mod-cyber-fraud',
      title: 'Everyday Cyber Safety & Financial Scam Reporting',
      format: 'Practical Clinic / Virtual or In-Person',
      duration: '60 Minutes',
      audience: 'General Public, Senior Citizens, Students',
      summary: 'Actionable guidance on modern digital payment fraud, unauthorized banking transactions, and exercising rights under the National Cybercrime Reporting Helpline 1930.',
      topics: [
        'Golden Hour reporting protocols for financial scams',
        'Filing verified complaints on cybercrime.gov.in',
        'RBI circulars on zero liability for unauthorized transactions',
        'Household cyber hygiene checklist'
      ]
    },
    {
      id: 'mod-youth-dialogue',
      title: 'Youth Constitutional Circle & Everyday Rights',
      format: 'Participatory Dialogue / Campus Hall',
      duration: '75 Minutes',
      audience: 'Law Students, University Scholars, Civic Volunteers',
      summary: 'An open dialogue on fundamental rights, citizen dignity under Article 21, and how young students can volunteer their knowledge to translate complex statutes into plain vernacular language.',
      topics: [
        'Fundamental rights and constitutional literacy',
        'Democratizing access to legal knowledge',
        'Volunteering as a legal literacy ambassador',
        'Student-led community dispute resolution'
      ]
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="section-dark" style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="section-header-left">
            <div className="editorial-tag tag-dark">
              <span>Civic Education & Dialogue</span>
            </div>
            <h1 className="section-title" style={{ color: 'var(--text-light)' }}>Community Workshops & Educational Drives</h1>
            <p className="section-subtitle">
              We conduct participatory legal awareness sessions, ODR primers, and youth constitutional dialogues in collaboration with community groups, universities, and resident associations across India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Workshop Modules (DE-BOXED Open Editorial Rows) */}
      <section className="section" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          {/* Transparent Explanatory Note */}
          <div style={{
            borderLeft: '3px solid var(--accent-gold)',
            paddingLeft: '1.5rem',
            marginBottom: '3.5rem',
            maxWidth: '820px'
          }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)' }}>
              Collaborative Community Outreach
            </h3>
            <p style={{ margin: 0, fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
              All our educational sessions and workshops are non-commercial and completely free of charge. 
              We schedule drives directly in partnership with student bodies, resident welfare groups, and community organizers. 
              Review our core educational modules below, or invite our team to conduct a tailored session for your group.
            </p>
          </div>

          {/* Open Workshop Modules List */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {workshopModules.map((mod, idx) => (
              <div 
                key={mod.id}
                style={{
                  padding: '2.5rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '3.5rem',
                  alignItems: 'start'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span className="badge-pill badge-active">
                      Module 0{idx + 1} • {mod.format}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                    {mod.title}
                  </h3>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '1rem', display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Clock size={13} color="var(--accent-gold)" />
                      Duration: <strong>{mod.duration}</strong>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Users size={13} color="var(--accent-gold)" />
                      Audience: <strong>{mod.audience}</strong>
                    </span>
                  </div>
                  <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: 1.68, margin: 0 }}>
                    {mod.summary}
                  </p>
                </div>

                <div style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '2.5rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-gold-hover)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Key Learning Areas Covered:
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.9rem', color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: 1.6 }}>
                    {mod.topics.map((t, topicIdx) => (
                      <li key={topicIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle2 size={15} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '4px' }} />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Invitation Callout */}
          <div style={{
            marginTop: '4rem',
            borderTop: '1px solid var(--border-medium)',
            paddingTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.65rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                Host a Free Legal Literacy Session With Us
              </h3>
              <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: 0, fontSize: '0.98rem', lineHeight: 1.65 }}>
                Are you a college dean, youth society lead, community organizer, or resident association representative? 
                Connect with our outreach team to schedule an accessible, non-commercial legal awareness workshop.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                className="btn btn-primary btn-md"
                onClick={() => setActiveTab('contact')}
              >
                <span>Request Workshop</span>
                <ArrowRight size={16} />
              </button>
              <button 
                className="btn btn-secondary btn-md"
                onClick={() => setActiveTab('get-involved')}
              >
                <span>Volunteer as Campus Lead</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
