import React from 'react';
import type { NavTab } from '../types';
import { Shield, AlertCircle, Lock, Scale, Mail, Phone, MapPin } from 'lucide-react';

interface LegalDisclaimerViewProps {
  setActiveTab?: (tab: NavTab) => void;
}

export const LegalDisclaimerView: React.FC<LegalDisclaimerViewProps> = () => {
  return (
    <div>
      {/* Header */}
      <section className="section-dark" style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="section-header-left">
            <span className="section-badge section-badge-dark">Public Disclosures</span>
            <h1 className="section-title" style={{ color: '#ffffff' }}>Legal Disclaimer & Privacy Notice</h1>
            <p className="section-subtitle" style={{ color: '#cbd5e1' }}>
              Clear statements on our educational nature, non-advocate status, and data handling practices for transparent civic accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container-narrow">
          {/* Important Alert Box */}
          <div style={{
            background: '#fffbeb',
            border: '1px solid #fde68a',
            borderRadius: '16px',
            padding: '1.75rem',
            marginBottom: '3rem',
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start'
          }}>
            <AlertCircle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#92400e', marginBottom: '0.4rem' }}>
                Summary Notice for All Visitors
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#78350f', margin: 0, lineHeight: 1.55 }}>
                Lextory Foundation is an independent public-interest educational organization. Information on this website is intended solely for general legal literacy and awareness. It does not constitute formal legal counsel, legal advice, or legal representation, nor does it create a lawyer-client or advocate-client relationship.
              </p>
            </div>
          </div>

          {/* Section 1: Non-Advocate Disclosure */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Scale size={20} color="#0d9488" />
              <span>1. Educational Nature & No Advocate-Client Relationship</span>
            </h2>
            <p style={{ color: '#334155', lineHeight: 1.7 }}>
              The materials, guides, articles, checklists, infographics, and frequently asked questions published on this website are compiled strictly for public educational purposes. They are designed to assist citizens in understanding fundamental rights, general statutory frameworks, and alternate dispute resolution avenues such as Online Dispute Resolution (ODR).
            </p>
            <p style={{ color: '#334155', lineHeight: 1.7 }}>
              Accessing, reading, downloading, or transmitting information through this website or its communication forms does not establish an advocate-client relationship between you and Lextory Foundation, its contributors, or its volunteers.
            </p>
            <p style={{ color: '#334155', lineHeight: 1.7 }}>
              No information here should be construed as legal advice tailored to specific factual circumstances. Laws, statutory rules, and judicial precedents are subject to continuous evolution and state-specific amendments. For case-specific disputes, you must consult an enrolled advocate or approach your nearest District Legal Services Authority (DLSA).
            </p>
          </div>

          {/* Section 2: No Outcome Guarantees */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={20} color="#0d9488" />
              <span>2. No Guarantee of Dispute Outcomes or Third-Party Services</span>
            </h2>
            <p style={{ color: '#334155', lineHeight: 1.7 }}>
              While Lextory Foundation educates the public regarding Online Dispute Resolution (ODR), mediation, conciliation, and arbitration, we do not operate a commercial dispute resolution institution. We do not adjudicate claims, render arbitral awards, or guarantee the outcome, speed, or resolution of any dispute.
            </p>
            <p style={{ color: '#334155', lineHeight: 1.7 }}>
              Any references to statutory portals (such as cybercrime.gov.in, NALSA 15100, or the National Consumer Helpline 1915) are provided purely for public convenience and civic orientation. Lextory Foundation does not control, supervise, or represent any governmental or judicial agency.
            </p>
          </div>

          {/* Section 3: Privacy & Data Handling */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Lock size={20} color="#0d9488" />
              <span>3. Privacy Policy & Handling of Personal Information</span>
            </h2>
            <p style={{ color: '#334155', lineHeight: 1.7 }}>
              We value the privacy of our visitors and community contributors. This section outlines how information submitted through our forms is managed:
            </p>

            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.5rem',
              margin: '1.25rem 0'
            }}>
              <h4 style={{ fontSize: '1.05rem', color: '#0f172a', marginBottom: '0.75rem' }}>
                Information We Collect & Purpose of Use
              </h4>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#475569', fontSize: '0.925rem', lineHeight: 1.6 }}>
                <li><strong>Volunteer Expressions of Interest:</strong> Name, contact details, academic/professional background, and city/state are collected exclusively to coordinate civic volunteering, research assignments, and community camp logistics.</li>
                <li><strong>Event RSVPs:</strong> Attendee name and email are used solely to transmit session links, educational slides, and schedule updates.</li>
                <li><strong>General Inquiries:</strong> Communications submitted via our contact desk are used only to respond to the specific inquiry.</li>
              </ul>
            </div>

            <p style={{ color: '#334155', lineHeight: 1.7 }}>
              <strong>Non-Commercial Stance:</strong> We do not sell, rent, monetize, or trade visitor contact details with commercial marketing entities, data brokers, or advertisers. Information is retained only as long as necessary to fulfill the civic or volunteer coordination purpose for which it was provided.
            </p>
          </div>

          {/* Section 4: Content Accuracy & Sourcing */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '1rem' }}>
              4. Accuracy, Currency & Source Attributions
            </h2>
            <p style={{ color: '#334155', lineHeight: 1.7 }}>
              Every effort is made to ensure that public explainers reflect accurate statutory provisions, verified helpline numbers, and recent legislative developments. However, statutory amendments or procedural modifications may occur before website updates are deployed.
            </p>
            <p style={{ color: '#334155', lineHeight: 1.7 }}>
              If you discover an outdated reference or error in any of our civic guides, we encourage you to notify us via email at <strong>contact@lextoryfoundation.org</strong> or call/WhatsApp at <strong>+91 9315900385</strong> so our editorial team can address it promptly.
            </p>
          </div>

          {/* Section 5: Grievances & Contact */}
          <div style={{
            background: '#f0fdfa',
            border: '1px solid #99f6e4',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h3 style={{ fontSize: '1.2rem', color: '#0f766e', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={18} />
              <span>Privacy & Legal Inquiries</span>
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#134e4a', lineHeight: 1.6, margin: 0 }}>
              For questions concerning this disclaimer, data handling, or official communication, please reach out to our desks:
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} color="#0f766e" />
                <span><strong>Email:</strong> <a href="mailto:contact@lextoryfoundation.org" style={{ color: 'var(--plum-900)' }}>contact@lextoryfoundation.org</a> (Attn: Civic Privacy & Editorial Desk)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} color="#0f766e" />
                <span><strong>Phone / Mobile:</strong> <a href="tel:+919315900385" style={{ color: 'var(--plum-900)' }}>+91 9315900385</a> (Direct Calling & WhatsApp: +931 9315900385)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.25rem', color: '#334155' }}>
                <MapPin size={15} color="#0f766e" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Office 1:</strong> C/1-132, Sector-55, Gautam Buddha Nagar, Uttar Pradesh, 201307</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#334155' }}>
                <MapPin size={15} color="#0f766e" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Office 2:</strong> 62A/5/DT-17-7944K Matrika Vihar, Khora Colony, Ghaziabad, Uttar Pradesh - 201020</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
