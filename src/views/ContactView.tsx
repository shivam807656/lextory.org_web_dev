import React, { useState } from 'react';
import type { NavTab } from '../types';
import { 
  Mail, 
  MapPin, 
  Phone, 
  PhoneCall, 
  MessageCircle, 
  Building2, 
  Clock, 
  ShieldAlert, 
  Copy, 
  Check, 
  ExternalLink
} from 'lucide-react';

interface ContactViewProps {
  setActiveTab?: (tab: NavTab) => void;
}

export const ContactView: React.FC<ContactViewProps> = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <div>
      {/* Header */}
      <section className="section-dark" style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="section-header-left">
            <div className="editorial-tag tag-dark">
              <span>Civic Communications & Office Registry</span>
            </div>
            <h1 className="section-title" style={{ color: 'var(--text-light)' }}>Contact Our Outreach Desk</h1>
            <p className="section-subtitle">
              Connect directly with our team for civic literacy workshops, institutional collaborations, and public inquiries. Online web forms are disabled. Please reach out directly via email or mobile.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section (DE-BOXED Open 2-Column Editorial Registry) */}
      <section className="section" style={{ background: 'var(--bg-page)', padding: '5rem 0' }}>
        <div className="container">
          
          {/* Policy Intro Note */}
          <div style={{
            borderLeft: '3px solid var(--accent-gold)',
            paddingLeft: '1.5rem',
            marginBottom: '4rem',
            maxWidth: '820px'
          }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)' }}>
              Direct Communication Policy
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.98rem', margin: 0, lineHeight: 1.7 }}>
              To ensure authentic, direct, and swift engagement with citizens and educational institutions, we do not use web inquiry forms. All enquiries must be directed through our <strong>official email</strong> or <strong>direct mobile line (+91 9315900385)</strong>.
            </p>
          </div>

          {/* Main 2-Column Split: Direct Channels vs Physical Offices */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '4.5rem',
            alignItems: 'start'
          }}>
            
            {/* Column 1: Direct Channels */}
            <div>
              <div className="editorial-tag">
                <span>Direct Communications</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', color: 'var(--text-main)', marginBottom: '2rem' }}>
                Reach Our Team Directly
              </h2>

              {/* Email Entry */}
              <div style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-gold-hover)', marginBottom: '0.5rem' }}>
                  <Mail size={16} />
                  <span>Official Email Address</span>
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  contact@lextoryfoundation.org
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  For general queries, college workshop invitations, institutional partnerships, and editorial feedback.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href="mailto:contact@lextoryfoundation.org?subject=Civic%20Enquiry%20-%20Lextory%20Foundation"
                    className="btn btn-primary btn-sm"
                  >
                    <Mail size={14} />
                    <span>Send Email</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleCopy('contact@lextoryfoundation.org', 'email')}
                  >
                    {copiedField === 'email' ? <Check size={14} color="var(--accent-gold)" /> : <Copy size={14} />}
                    <span>{copiedField === 'email' ? 'Copied' : 'Copy Email'}</span>
                  </button>
                </div>
              </div>

              {/* Telephone & WhatsApp Entry */}
              <div style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-gold-hover)', marginBottom: '0.5rem' }}>
                  <PhoneCall size={16} />
                  <span>Direct Desk Mobile & WhatsApp</span>
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                  +91 9315900385
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  (Calling & WhatsApp: <strong>+931 9315900385</strong> / <strong>+91 9315900385</strong>)
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Call directly for urgent enquiries, community dialogue sessions, or connect with our desk coordinator over WhatsApp.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href="tel:+919315900385"
                    className="btn btn-primary btn-sm"
                  >
                    <Phone size={14} />
                    <span>Call Desk</span>
                  </a>
                  <a
                    href="https://wa.me/919315900385?text=Hello%20Lextory%20Foundation%20team,%20I%20have%20an%20enquiry:"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleCopy('+919315900385', 'phone')}
                  >
                    {copiedField === 'phone' ? <Check size={14} color="var(--accent-gold)" /> : <Copy size={14} />}
                    <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Operating Hours */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  <Clock size={15} color="var(--accent-gold)" />
                  <span>Desk Operating Hours</span>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', margin: 0, lineHeight: 1.6 }}>
                  Monday to Saturday: 10:00 AM to 6:00 PM IST.<br />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Inquiries received on Sundays or public holidays are addressed on the next business day.
                  </span>
                </p>
              </div>
            </div>

            {/* Column 2: Physical Office Registry */}
            <div style={{
              borderLeft: '1px solid var(--border-subtle)',
              paddingLeft: '3.5rem'
            }}>
              <div className="editorial-tag">
                <span>Physical Registry</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', color: 'var(--text-main)', marginBottom: '2rem' }}>
                Office Addresses
              </h2>

              {/* Office 1: Gautam Buddha Nagar */}
              <div style={{ paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-gold-hover)', marginBottom: '0.5rem' }}>
                  <Building2 size={16} />
                  <span>Office 1 • Gautam Buddha Nagar</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Gautam Buddha Nagar Office
                </h3>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                  Administrative & Civic Literacy Coordination
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    C/1-132, Sector-55,<br />
                    Gautam Buddha Nagar,<br />
                    Uttar Pradesh - <strong>201307</strong>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=C%2F1-132%2C+Sector-55%2C+Gautam+Buddha+Nagar%2C+Uttar+Pradesh%2C+201307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <ExternalLink size={14} />
                    <span>View on Maps</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleCopy('C/1-132, Sector-55, Gautam Buddha Nagar, Uttar Pradesh, 201307', 'addr1')}
                  >
                    {copiedField === 'addr1' ? <Check size={14} color="var(--accent-gold)" /> : <Copy size={14} />}
                    <span>{copiedField === 'addr1' ? 'Copied' : 'Copy Address'}</span>
                  </button>
                </div>
              </div>

              {/* Office 2: Ghaziabad */}
              <div style={{ paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-gold-hover)', marginBottom: '0.5rem' }}>
                  <Building2 size={16} />
                  <span>Office 2 • Ghaziabad</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Ghaziabad Outreach Office
                </h3>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                  Community Clinics & Grassroots Outreach Desk
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    62A/5/DT-17-7944K Matrika Vihar,<br />
                    Khora Colony, Ghaziabad,<br />
                    Uttar Pradesh - <strong>201020</strong>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=62A%2F5%2FDT-17-7944K+Matrika+Vihar%2C+Khora+Colony%2C+Ghaziabad%2C+Uttar+Pradesh+-+201020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <ExternalLink size={14} />
                    <span>View on Maps</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleCopy('62A/5/DT-17-7944K Matrika Vihar, Khora Colony, Ghaziabad, Uttar Pradesh - 201020', 'addr2')}
                  >
                    {copiedField === 'addr2' ? <Check size={14} color="var(--accent-gold)" /> : <Copy size={14} />}
                    <span>{copiedField === 'addr2' ? 'Copied' : 'Copy Address'}</span>
                  </button>
                </div>
              </div>

              {/* Statutory Helplines Direct Reference */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-gold-hover)', marginBottom: '0.5rem' }}>
                  <ShieldAlert size={15} />
                  <span>Immediate Public Assistance</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 0.75rem 0' }}>
                  For immediate government legal aid or crisis response:
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                  <span>NALSA Legal Aid: <strong>15100</strong></span>
                  <span>•</span>
                  <span>Cyber Fraud: <strong>1930</strong></span>
                  <span>•</span>
                  <span>Women Helpline: <strong>1091</strong></span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
