import React from 'react';
import type { NavTab } from '../types';
import { 
  ArrowRight,
  GraduationCap,
  Users,
  ShieldCheck,
  HeartHandshake
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
      icon: HeartHandshake,
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
      icon: ShieldCheck,
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
      icon: Users,
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
      icon: GraduationCap,
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
            <h1 className="section-title" style={{ color: 'var(--white)' }}>Community Workshops & Educational Drives</h1>
            <p className="section-subtitle" style={{ color: '#d6cee3' }}>
              We conduct participatory legal awareness sessions, ODR primers, and youth constitutional dialogues in collaboration with community groups, universities, and resident associations across India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Workshop Modules */}
      <section className="section" style={{ background: 'var(--cream-50)' }}>
        <div className="container">
          {/* Transparent Explanatory Note */}
          <div style={{
            backgroundColor: 'var(--white)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-md)',
            padding: '1.75rem 2rem',
            marginBottom: '3rem',
            boxShadow: 'var(--shadow-xs)'
          }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--plum-900)', marginBottom: '0.4rem' }}>
              Collaborative Community Outreach
            </h3>
            <p style={{ margin: 0, fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
              All our educational sessions and workshops are non-commercial and completely free of charge. 
              We schedule drives directly in partnership with student bodies, resident welfare groups, and community organizers. 
              Review our core educational modules below, or invite our team to conduct a tailored session for your group.
            </p>
          </div>

          {/* Workshop Modules Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {workshopModules.map((mod) => {
              const IconComp = mod.icon;
              return (
                <div 
                  key={mod.id}
                  style={{
                    backgroundColor: 'var(--white)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    padding: '2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div className="card-icon-wrapper" style={{ backgroundColor: 'var(--terracotta-50)', color: 'var(--terracotta-600)' }}>
                      <IconComp size={22} />
                    </div>
                    <span className="badge-pill badge-active">
                      {mod.format}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: 'var(--plum-900)', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                    {mod.title}
                  </h3>

                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <span>Duration: <strong>{mod.duration}</strong></span>
                    <span>For: <strong>{mod.audience}</strong></span>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {mod.summary}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--plum-900)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Key Learning Areas:
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.85rem', color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {mod.topics.map((t, idx) => (
                        <li key={idx}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Invitation Banner */}
          <div style={{
            marginTop: '3.5rem',
            backgroundColor: 'var(--white)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-md)',
            padding: '3rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--plum-900)', marginBottom: '0.75rem' }}>
              Host a Free Legal Literacy Session With Us
            </h3>
            <p style={{ color: 'var(--text-body)', maxWidth: '640px', margin: '0 auto 2rem auto', fontSize: '1rem', lineHeight: 1.65 }}>
              Are you a college dean, youth society lead, community organizer, or resident association representative? 
              Connect with our outreach team to schedule an accessible, non-commercial legal awareness workshop.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                className="btn btn-primary btn-md"
                onClick={() => setActiveTab('contact')}
              >
                <span>Submit Workshop Request</span>
                <ArrowRight size={16} />
              </button>
              <button 
                className="btn btn-secondary btn-md"
                onClick={() => setActiveTab('get-involved')}
              >
                <span>Volunteer as a Campus Lead</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
