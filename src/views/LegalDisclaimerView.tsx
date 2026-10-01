import React from 'react';
import type { NavTab } from '../types';
import { Shield, Lock, Scale, Mail, Phone, MapPin } from 'lucide-react';

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
            <div className="editorial-tag tag-dark">
              <span>Public Disclosures</span>
            </div>
            <h1 className="section-title" style={{ color: 'var(--text-light)' }}>Legal Disclaimer & Privacy Notice</h1>
            <p className="section-subtitle">
              Clear statements on our educational nature, non-advocate status, and data handling practices for transparent civic accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ background: 'var(--bg-page)' }}>
        <div className="container-narrow">
          {/* Important Notice */}
          <div style={{
            borderLeft: '3px solid var(--accent-gold)',
            paddingLeft: '1.5rem',
            marginBottom: '3.5rem'
          }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)' }}>
              Summary Notice for All Visitors
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-body)', margin: 0, lineHeight: 1.7 }}>
              Lextory Foundation is an independent public-interest educational organization. Information on this website is intended solely for general legal literacy and awareness. It does not constitute formal legal counsel, legal advice, or legal representation, nor does it create a lawyer-client or advocate-client relationship.
            </p>
          </div>

          {/* Section 1: Non-Advocate Disclosure */}
          <div style={{ paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Scale size={20} color="var(--accent-gold)" />
              <span>1. Educational Nature & No Advocate-Client Relationship</span>
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '0.98rem', marginBottom: '1rem' }}>
              The materials, guides, articles, checklists, infographics, and frequently asked questions published on this website are compiled strictly for public educational purposes. They are designed to assist citizens in understanding fundamental rights, general statutory frameworks, and alternate dispute resolution avenues such as Online Dispute Resolution (ODR).
            </p>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '0.98rem', marginBottom: '1rem' }}>
              Accessing, reading, downloading, or transmitting information through this website or its communication forms does not establish an advocate-client relationship between you and Lextory Foundation, its contributors, or its volunteers.
            </p>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '0.98rem', margin: 0 }}>
              No information here should be construed as legal advice tailored to specific factual circumstances. Laws, statutory rules, and judicial precedents are subject to continuous evolution and state-specific amendments. For case-specific disputes, you must consult an enrolled advocate or approach your nearest District Legal Services Authority (DLSA).
            </p>
          </div>

          {/* Section 2: No Outcome Guarantees */}
          <div style={{ paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Shield size={20} color="var(--accent-gold)" />
              <span>2. No Guarantee of Dispute Outcomes or Third-Party Services</span>
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '0.98rem', marginBottom: '1rem' }}>
              While Lextory Foundation educates the public regarding Online Dispute Resolution (ODR), mediation, conciliation, and arbitration, we do not operate a commercial dispute resolution institution. We do not adjudicate claims, render arbitral awards, or guarantee the outcome, speed, or resolution of any dispute.
            </p>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '0.98rem', margin: 0 }}>
              Any references to statutory portals (such as cybercrime.gov.in, NALSA 15100, or the National Consumer Helpline 1915) are provided purely for public convenience and civic orientation. Lextory Foundation does not control, supervise, or represent any governmental or judicial agency.
            </p>
          </div>

          {/* Section 3: Privacy & Data Handling */}
          <div style={{ paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Lock size={20} color="var(--accent-gold)" />
              <span>3. Privacy Policy & Handling of Personal Information</span>
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '0.98rem', marginBottom: '1.25rem' }}>
              We value the privacy of our visitors and community contributors. This section outlines how information submitted through our forms is managed:
            </p>

            <ul style={{ margin: '0 0 1.25rem 1.5rem', color: 'var(--text-body)', fontSize: '0.94rem', lineHeight: 1.75 }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Volunteer Expressions of Interest:</strong> Name, contact details, academic/professional background, and city/state are collected exclusively to coordinate civic volunteering, research assignments, and community camp logistics.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Event RSVPs:</strong> Attendee name and email are used solely to transmit session links, educational slides, and schedule updates.</li>
              <li><strong>General Inquiries:</strong> Communications submitted via our contact desk are used only to respond to the specific inquiry.</li>
            </ul>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem', margin: 0 }}>
              <strong>Non-Commercial Stance:</strong> We do not sell, rent, monetize, or trade visitor contact details with commercial marketing entities, data brokers, or advertisers. Information is retained only as long as necessary to fulfill the civic or volunteer coordination purpose for which it was provided.
            </p>
          </div>

          {/* Section 4: Content Accuracy & Sourcing */}
          <div style={{ paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
              4. Accuracy, Currency & Source Attributions
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '0.98rem', margin: 0 }}>
              Every effort is made to ensure that public explainers reflect accurate statutory provisions, verified helpline numbers, and recent legislative developments. If you discover an outdated reference or error in any of our civic guides, please notify us via email at <strong>contact@lextoryfoundation.org</strong> or call/WhatsApp at <strong>+91 9315900385</strong> so our editorial team can address it promptly.
            </p>
          </div>

          {/* Section 5: Grievances & Contact */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            padding: '2rem'
          }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={18} color="var(--accent-gold)" />
              <span>Privacy & Legal Inquiries</span>
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              For questions concerning this disclaimer, data handling, or official communication, please reach out to our desks:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-body)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} color="var(--accent-gold)" />
                <span><strong>Email:</strong> <a href="mailto:contact@lextoryfoundation.org" style={{ color: 'var(--text-main)' }}>contact@lextoryfoundation.org</a></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} color="var(--accent-gold)" />
                <span><strong>Phone / WhatsApp:</strong> <a href="tel:+919315900385" style={{ color: 'var(--text-main)' }}>+91 9315900385</a></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.25rem' }}>
                <MapPin size={15} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Office 1 (Noida):</strong> C/1-132, Sector-55, Gautam Buddha Nagar, Uttar Pradesh, 201307</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={15} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Office 2 (Ghaziabad):</strong> 62A/5/DT-17-7944K Matrika Vihar, Khora Colony, Ghaziabad, Uttar Pradesh - 201020</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
