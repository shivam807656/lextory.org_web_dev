import React from 'react';
import type { NavTab } from '../types';
import { Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNav = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand & Mission Column */}
          <div className="footer-brand-col">
            <div className="site-logo footer-logo" style={{ cursor: 'pointer' }} onClick={() => handleNav('home')}>
              <img 
                src="/images/logo-horizontal-white.png" 
                alt="Lextory Foundation" 
                className="site-logo-img footer-logo-img" 
              />
            </div>
            
            <p>
              An independent community foundation dedicated to bringing quiet dignity, open legal clarity, and peaceful dispute resolution to ordinary citizens across India.
            </p>

            <div className="footer-badge">
              ✦ Lextory Foundation • Public Welfare Effort
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4>Initiatives & Work</h4>
            <ul className="footer-links">
              <li>
                <button className="footer-link-btn" onClick={() => handleNav('initiatives')}>
                  Our 8 Focus Initiatives
                </button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => handleNav('initiatives')}>
                  Past Initiatives Archive
                </button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => handleNav('odr-centre')}>
                  ODR Awareness Centre
                </button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => handleNav('initiatives')}>
                  Free Legal Aid Under NALSA
                </button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => handleNav('initiatives')}>
                  Women & Child Protections
                </button>
              </li>
            </ul>
          </div>

          {/* Community & Knowledge */}
          <div className="footer-col">
            <h4>Community Sanctuary</h4>
            <ul className="footer-links">
              <li>
                <button className="footer-link-btn" onClick={() => handleNav('about')}>
                  Our Purpose & Values
                </button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => handleNav('resources')}>
                  Plain-Language Knowledge
                </button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => handleNav('campaigns')}>
                  Workshops & Dialogues
                </button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => handleNav('get-involved')}>
                  Volunteer With Us
                </button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => handleNav('disclaimer')}>
                  Legal Disclaimer & Privacy
                </button>
              </li>
            </ul>
          </div>

          {/* Statutory Helplines Directory */}
          <div className="footer-col">
            <h4>Citizen Helplines</h4>
            <div className="footer-emergency-box">
              <div className="emergency-item">
                <span>NALSA Free Legal Aid</span>
                <strong>15100</strong>
              </div>
              <div className="emergency-item">
                <span>Cyber Fraud Helpline</span>
                <strong>1930</strong>
              </div>
              <div className="emergency-item">
                <span>Women's Safety</span>
                <strong>1091</strong>
              </div>
              <div className="emergency-item">
                <span>Childline Support</span>
                <strong>1098</strong>
              </div>
              <div className="emergency-item">
                <span>Consumer Helpline</span>
                <strong>1915</strong>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: '#c4b9d5', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} color="var(--peach-400)" style={{ flexShrink: 0 }} />
                <a href="mailto:contact@lextoryfoundation.org" style={{ color: '#ffffff', textDecoration: 'none' }}>
                  contact@lextoryfoundation.org
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} color="var(--peach-400)" style={{ flexShrink: 0 }} />
                <a href="tel:+919315900385" style={{ color: '#ffffff', textDecoration: 'none' }}>
                  +91 9315900385
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.2rem' }}>
                <MapPin size={14} color="var(--peach-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ lineHeight: 1.35 }}>
                  <span style={{ color: '#ffffff', fontWeight: 600, display: 'block', fontSize: '0.78rem' }}>Office 1 (Noida):</span>
                  C/1-132, Sector-55, Gautam Buddha Nagar, UP - 201307
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={14} color="var(--peach-400)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ lineHeight: 1.35 }}>
                  <span style={{ color: '#ffffff', fontWeight: 600, display: 'block', fontSize: '0.78rem' }}>Office 2 (Ghaziabad):</span>
                  62A/5/DT-17-7944K Matrika Vihar, Khora Colony, Ghaziabad, UP - 201020
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="footer-disclaimer-note">
          <p>
            <strong>Public Interest & Civic Notice:</strong> Lextory Foundation is an independent public-interest effort promoting open legal literacy and peaceful dispute resolution. Information provided on this platform is for general educational and awareness purposes only. It does not constitute formal legal representation, create an advocate-client relationship, or substitute professional legal advice from an enrolled advocate. We do not charge fees for educational materials or public helplines.
          </p>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; 2026 Lextory Foundation. Dedicated to peace, dignity, and accessible justice.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button className="footer-link-btn" onClick={() => handleNav('disclaimer')}>
              Privacy Policy
            </button>
            <button className="footer-link-btn" onClick={() => handleNav('disclaimer')}>
              Terms & Disclaimers
            </button>
            <button className="footer-link-btn" onClick={() => handleNav('contact')}>
              Contact Outreach Desk
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
