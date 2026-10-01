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
  ExternalLink,
  Info
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
            <span className="section-badge section-badge-dark">Civic Communications & Office Registry</span>
            <h1 className="section-title" style={{ color: '#ffffff' }}>Contact Our Outreach Desk</h1>
            <p className="section-subtitle" style={{ color: '#cbd5e1' }}>
              Connect directly with our team for civic literacy workshops, institutional collaborations, and public inquiries. Online web forms are disabled. Please reach out directly via email or mobile.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="section" style={{ background: '#f8fafc', padding: '4rem 0' }}>
        <div className="container">

          {/* Policy Notice Box */}
          <div style={{
            background: 'linear-gradient(135deg, #eff6ff 0%, #f0fdfa 100%)',
            border: '1px solid #bfdbfe',
            borderRadius: '16px',
            padding: '1.5rem 1.75rem',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
          }}>
            <div style={{
              background: '#3b82f6',
              color: '#ffffff',
              borderRadius: '10px',
              padding: '0.6rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Info size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '0.35rem' }}>
                Direct Communication Policy
              </h3>
              <p style={{ color: '#1e40af', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
                To ensure authentic, direct, and swift engagement with citizens and educational institutions, we do not use web inquiry forms. All enquiries must be directed through our <strong>official email</strong> or <strong>direct mobile line (+91 9315900385)</strong>.
              </p>
            </div>
          </div>

          {/* Primary Channels Grid (Email & Mobile) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem'
          }}>
            {/* Email Card */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '18px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    background: '#f0fdfa',
                    color: '#0d9488',
                    padding: '0.85rem',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Mail size={28} />
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#0d9488',
                    background: '#ccfbf1',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px'
                  }}>
                    Official Email
                  </span>
                </div>

                <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Direct Outreach Email
                </div>
                <div style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--plum-900)',
                  wordBreak: 'break-all',
                  marginTop: '0.35rem',
                  marginBottom: '0.85rem'
                }}>
                  contact@lextoryfoundation.org
                </div>

                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Ideal for detailed inquiries, institutional MoU requests, legal literacy workshop proposals, and editorial feedback on our civic guides.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="mailto:contact@lextoryfoundation.org?subject=Civic%20Enquiry%20-%20Lextory%20Foundation"
                  className="btn btn-primary"
                  style={{ flex: 1, minWidth: '150px', justifyContent: 'center', textDecoration: 'none' }}
                >
                  <Mail size={16} />
                  <span>Send Email</span>
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => handleCopy('contact@lextoryfoundation.org', 'email')}
                  style={{ minWidth: '120px', justifyContent: 'center' }}
                >
                  {copiedField === 'email' ? <Check size={16} color="#059669" /> : <Copy size={16} />}
                  <span>{copiedField === 'email' ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Mobile / Telephone Card */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '18px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    background: '#fff7ed',
                    color: '#ea580c',
                    padding: '0.85rem',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <PhoneCall size={28} />
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#c2410c',
                    background: '#ffedd5',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px'
                  }}>
                    Direct Helpline & Mobile
                  </span>
                </div>

                <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Enquiries & Citizen Desk Number
                </div>
                <div style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: 'var(--plum-900)',
                  marginTop: '0.35rem',
                  marginBottom: '0.25rem'
                }}>
                  +91 9315900385
                </div>
                <div style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '0.85rem' }}>
                  (Direct Calling & WhatsApp: <strong>+931 9315900385</strong> / <strong>+91 9315900385</strong>)
                </div>

                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Call directly for urgent enquiries, community dialogue sessions, or connect with our desk coordinator over WhatsApp.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="tel:+919315900385"
                  className="btn btn-primary"
                  style={{ flex: 1, minWidth: '140px', justifyContent: 'center', textDecoration: 'none', background: '#0f766e', borderColor: '#0f766e' }}
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919315900385?text=Hello%20Lextory%20Foundation%20team,%20I%20have%20an%20enquiry:"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, minWidth: '140px', justifyContent: 'center', textDecoration: 'none', borderColor: '#22c55e', color: '#15803d' }}
                >
                  <MessageCircle size={16} color="#16a34a" />
                  <span>WhatsApp</span>
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => handleCopy('+919315900385', 'phone')}
                  style={{ minWidth: '100px', justifyContent: 'center' }}
                >
                  {copiedField === 'phone' ? <Check size={16} color="#059669" /> : <Copy size={16} />}
                  <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Office Addresses Section */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
              <span className="section-badge">Physical Presence</span>
              <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '0.75rem' }}>
                Our Office Addresses
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
                Lextory Foundation maintains designated offices in Gautam Buddha Nagar and Ghaziabad for administrative affairs, civic curriculum coordination, and community outreach.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem'
            }}>
              {/* Office 1: Gautam Buddha Nagar */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '18px',
                padding: '2.25rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{
                      background: 'rgba(42, 23, 59, 0.08)',
                      color: 'var(--plum-900)',
                      padding: '0.85rem',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Building2 size={26} />
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--plum-900)',
                      background: '#f3e8ff',
                      padding: '0.3rem 0.85rem',
                      borderRadius: '999px'
                    }}>
                      Office 1 • Gautam Buddha Nagar
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Gautam Buddha Nagar Office
                  </h3>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0d9488', marginBottom: '1.25rem' }}>
                    Administrative & Civic Literacy Coordination
                  </div>

                  {/* Address Box */}
                  <div style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem'
                  }}>
                    <MapPin size={22} color="#0d9488" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.5 }}>
                        C/1-132, Sector-55,
                      </div>
                      <div style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.5 }}>
                        Gautam Buddha Nagar,
                      </div>
                      <div style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.5 }}>
                        Uttar Pradesh - <strong>201307</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=C%2F1-132%2C+Sector-55%2C+Gautam+Buddha+Nagar%2C+Uttar+Pradesh%2C+201307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ flex: 1, justifyContent: 'center', textDecoration: 'none' }}
                  >
                    <ExternalLink size={15} />
                    <span>View on Maps</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleCopy('C/1-132, Sector-55, Gautam Buddha Nagar, Uttar Pradesh, 201307', 'addr1')}
                  >
                    {copiedField === 'addr1' ? <Check size={16} color="#059669" /> : <Copy size={16} />}
                    <span>{copiedField === 'addr1' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Office 2: Ghaziabad */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '18px',
                padding: '2.25rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{
                      background: 'rgba(234, 88, 12, 0.08)',
                      color: '#ea580c',
                      padding: '0.85rem',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Building2 size={26} />
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#c2410c',
                      background: '#ffedd5',
                      padding: '0.3rem 0.85rem',
                      borderRadius: '999px'
                    }}>
                      Office 2 • Ghaziabad
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Ghaziabad Outreach Office
                  </h3>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#ea580c', marginBottom: '1.25rem' }}>
                    Community Clinics & Grassroots Outreach Desk
                  </div>

                  {/* Address Box */}
                  <div style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem'
                  }}>
                    <MapPin size={22} color="#ea580c" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.5 }}>
                        62A/5/DT-17-7944K Matrika Vihar,
                      </div>
                      <div style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.5 }}>
                        Khora Colony, Ghaziabad,
                      </div>
                      <div style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.5 }}>
                        Uttar Pradesh - <strong>201020</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=62A%2F5%2FDT-17-7944K+Matrika+Vihar%2C+Khora+Colony%2C+Ghaziabad%2C+Uttar+Pradesh+-+201020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ flex: 1, justifyContent: 'center', textDecoration: 'none' }}
                  >
                    <ExternalLink size={15} />
                    <span>View on Maps</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleCopy('62A/5/DT-17-7944K Matrika Vihar, Khora Colony, Ghaziabad, Uttar Pradesh - 201020', 'addr2')}
                  >
                    {copiedField === 'addr2' ? <Check size={16} color="#059669" /> : <Copy size={16} />}
                    <span>{copiedField === 'addr2' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours & Citizen Guidelines */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem'
          }}>
            {/* Hours Card */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '1.75rem',
              display: 'flex',
              gap: '1.25rem'
            }}>
              <div style={{
                background: '#f0fdfa',
                color: '#0d9488',
                borderRadius: '12px',
                padding: '0.85rem',
                height: 'fit-content'
              }}>
                <Clock size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Desk Operating Hours
                </h4>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--plum-900)', marginBottom: '0.25rem' }}>
                  Monday to Saturday: 10:00 AM to 6:00 PM IST
                </div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                  Email inquiries received outside operating hours will be addressed on the following business day.
                </p>
              </div>
            </div>

            {/* Email Guidelines Card */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '1.75rem',
              display: 'flex',
              gap: '1.25rem'
            }}>
              <div style={{
                background: '#fdf4ff',
                color: 'var(--plum-900)',
                borderRadius: '12px',
                padding: '0.85rem',
                height: 'fit-content'
              }}>
                <Info size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Enquiry Submission Checklist
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                  When emailing or calling our desk, please specify: <strong>(1)</strong> Your Name & Organization (if any), <strong>(2)</strong> Purpose of Enquiry, and <strong>(3)</strong> Preferred callback details.
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Statutory Helplines Card */}
          <div style={{
            background: '#fff1f2',
            border: '1px solid #fecdd3',
            borderRadius: '18px',
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#9f1239', fontWeight: 800, marginBottom: '0.65rem' }}>
              <ShieldAlert size={22} />
              <span style={{ fontSize: '1.15rem' }}>Immediate Citizen Emergency & Statutory Helplines</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#881337', margin: 0, lineHeight: 1.6 }}>
              Lextory Foundation is an independent civic and educational literacy effort. We do not provide courtroom representation, emergency rescue, or crisis intervention services. For immediate government or statutory assistance, please dial:
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.25rem', flexWrap: 'wrap', fontSize: '0.9rem', fontWeight: 700, color: '#9f1239' }}>
              <div style={{ background: '#ffffff', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #fda4af' }}>
                National Emergency: <strong style={{ color: '#be123c' }}>112</strong>
              </div>
              <div style={{ background: '#ffffff', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #fda4af' }}>
                NALSA Free Legal Aid: <strong style={{ color: '#be123c' }}>15100</strong>
              </div>
              <div style={{ background: '#ffffff', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #fda4af' }}>
                Cyber Crime Fraud: <strong style={{ color: '#be123c' }}>1930</strong>
              </div>
              <div style={{ background: '#ffffff', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #fda4af' }}>
                Women Safety Helpline: <strong style={{ color: '#be123c' }}>1091</strong>
              </div>
              <div style={{ background: '#ffffff', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #fda4af' }}>
                Consumer Helpline: <strong style={{ color: '#be123c' }}>1915</strong>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
