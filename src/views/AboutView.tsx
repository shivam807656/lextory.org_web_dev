import React from 'react';
import type { NavTab } from '../types';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Eye,
  Target
} from 'lucide-react';

interface AboutViewProps {
  setActiveTab: (tab: NavTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab }) => {
  return (
    <div>
      {/* Page Header */}
      <section className="section-dark" style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="section-header-left">
            <div className="editorial-tag tag-dark">
              <span>Independent Public Interest Foundation</span>
            </div>
            <h1 className="section-title" style={{ color: 'var(--white)' }}>About Lextory Foundation</h1>
            <p className="section-subtitle" style={{ color: '#d6cee3' }}>
              We are an independent civic circle dedicated to bridging the gap between everyday citizens and the institutions of justice 
              through open legal awareness, accessible dispute resolution, and community empathy.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are & Independent Character */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div className="editorial-tag">
                <span>Our Guiding Conviction</span>
              </div>
              <h2 style={{ fontSize: '2.1rem', color: 'var(--plum-900)', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                A Grassroots Mission for Everyday Legal Clarity
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, fontSize: '1.02rem', marginBottom: '1rem' }}>
                In a country of over 1.4 billion people, laws touch every aspect of life, from digital payments and consumer purchases to employment, tenancy, and family dignity. Yet, for millions of ordinary citizens, legal systems feel intimidating, adversarial, and out of reach.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, fontSize: '1.02rem', marginBottom: '1.5rem' }}>
                Lextory Foundation was conceived as an independent, non-commercial public-interest foundation. We do not operate as a commercial law firm, nor do we sell legal products. Our sole purpose is community welfare: making rights understandable, educating citizens on alternative avenues like Online Dispute Resolution (ODR), and helping marginalized groups access statutory legal aid.
              </p>

              <div style={{
                background: 'var(--cream-100)',
                borderLeft: '4px solid var(--terracotta-500)',
                padding: '1rem 1.25rem',
                borderRadius: '0 8px 8px 0',
                fontSize: '0.9rem',
                color: 'var(--plum-900)'
              }}>
                <strong>Civic Commitment:</strong> Legal literacy is not a luxury for lawyers, but a fundamental civic right for every citizen.
              </div>
            </div>

            <div style={{
              background: 'var(--cream-50)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-md)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-light)' }}>
                <img 
                  src="/images/logo-horizontal.png" 
                  alt="Lextory Foundation" 
                  style={{ height: '44px', width: 'auto', display: 'block' }} 
                />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--plum-900)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} color="var(--terracotta-500)" />
                <span>Lextory Foundation Charter</span>
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem', color: 'var(--text-body)' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="var(--terracotta-500)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>100% Free & Open:</strong> All educational guides, explainers, and workshops are free for the public.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="var(--terracotta-500)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Non-Commercial Focus:</strong> No sales funnels, paid legal representation, or commercial product promotions.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="var(--terracotta-500)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Empirical & Objective:</strong> We present legal remedies and dispute resolution mechanisms with balanced clarity.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="var(--terracotta-500)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Community Centred:</strong> Designed to serve students, informal workers, consumers, and underserved populations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section" style={{ background: 'var(--cream-50)' }}>
        <div className="container">
          <div className="section-header">
            <div className="editorial-tag">
              <span>Direction & Purpose</span>
            </div>
            <h2 className="section-title">Mission and Vision</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-medium)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--terracotta-600)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                <Target size={18} />
                <span>Our Mission</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--plum-900)', marginBottom: '1rem' }}>To Bridge the Gap Between People and Justice</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, fontSize: '0.96rem' }}>
                To bridge the gap between people and justice by promoting legal awareness, accessible dispute resolution, education, and community empowerment.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, fontSize: '0.96rem', marginTop: '0.75rem' }}>
                We aim to ensure that individuals, regardless of their financial or social circumstances, can better understand their legal rights, available remedies, and the institutions through which justice may be pursued with peace of mind.
              </p>
            </div>

            <div style={{ background: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-medium)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--plum-700)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                <Eye size={18} />
                <span>Our Vision</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--plum-900)', marginBottom: '1rem' }}>A Legally Empowered & Harmonious Society</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, fontSize: '0.96rem' }}>
                To build a society where legal awareness is widespread, justice is accessible, disputes can be resolved through informed and appropriate processes, and every individual has the knowledge and confidence to understand and exercise their rights.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, fontSize: '0.96rem', marginTop: '0.75rem' }}>
                We envision communities equipped with peaceful conflict-resolution skills, where courts are relieved of avoidable burdens, and where justice is experienced as a living human dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our 5 Guiding Values */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="editorial-tag tag-dark">
              <span>Ethical Foundation</span>
            </div>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Our Core Values</h2>
            <p className="section-subtitle" style={{ color: '#d6cee3' }}>
              The fundamental principles that guide every article, workshop, and community outreach initiative we develop.
            </p>
          </div>

          <div className="cards-grid-3">
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem'
            }}>
              <div style={{ color: 'var(--peach-400)', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                01. Accessibility
              </div>
              <h4 style={{ color: 'var(--white)', fontSize: '1.15rem', marginBottom: '0.75rem' }}>Plain Language First</h4>
              <p style={{ color: '#d1c8de', fontSize: '0.9rem', lineHeight: 1.6 }}>
                We translate complex judicial rulings, statutory provisions, and procedural rules into straightforward, digestible language.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem'
            }}>
              <div style={{ color: 'var(--peach-400)', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                02. Inclusivity
              </div>
              <h4 style={{ color: 'var(--white)', fontSize: '1.15rem', marginBottom: '0.75rem' }}>Reaching the Underserved</h4>
              <p style={{ color: '#d1c8de', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Active consideration of citizens experiencing economic hurdles, linguistic barriers, and the digital divide through vernacular outreach.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem'
            }}>
              <div style={{ color: 'var(--peach-400)', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                03. Integrity
              </div>
              <h4 style={{ color: 'var(--white)', fontSize: '1.15rem', marginBottom: '0.75rem' }}>Neutral & Responsible</h4>
              <p style={{ color: '#d1c8de', fontSize: '0.9rem', lineHeight: 1.6 }}>
                We do not sensationalize or make false promises. We provide verified, dated, and legally grounded information.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem'
            }}>
              <div style={{ color: 'var(--peach-400)', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                04. Transparency
              </div>
              <h4 style={{ color: 'var(--white)', fontSize: '1.15rem', marginBottom: '0.75rem' }}>Clear Disclosures</h4>
              <p style={{ color: '#d1c8de', fontSize: '0.9rem', lineHeight: 1.6 }}>
                We openly communicate our civic nature, distinguishing educational material from case-specific legal counsel.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem'
            }}>
              <div style={{ color: 'var(--peach-400)', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                05. Public Welfare
              </div>
              <h4 style={{ color: 'var(--white)', fontSize: '1.15rem', marginBottom: '0.75rem' }}>Common Good Focus</h4>
              <p style={{ color: '#d1c8de', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Every programme is designed for social empowerment and public benefit rather than commercial or proprietary interest.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <h4 style={{ color: 'var(--white)', fontSize: '1.15rem', marginBottom: '0.75rem' }}>
                Collaborate With Us
              </h4>
              <p style={{ color: '#d1c8de', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                Are you an educator, student, or community organizer? Join our civic network.
              </p>
              <button 
                className="btn btn-accent btn-sm"
                onClick={() => setActiveTab('get-involved')}
              >
                Volunteer With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community-Centred Commitment */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="editorial-tag">
            <span>Our Social Pledge</span>
          </div>
          <h2 className="section-title">Rooted in People, Guided by Justice</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-body)', marginBottom: '2rem' }}>
            We measure our success not by commercial indices, but by the number of students who understand their fundamental rights, the consumers who resolve grievances without despair, and the families who learn that dispute resolution can be a peaceful, collaborative journey.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              className="btn btn-primary btn-md"
              onClick={() => setActiveTab('initiatives')}
            >
              <span>Explore Our Focus Initiatives</span>
              <ArrowRight size={16} />
            </button>
            <button 
              className="btn btn-secondary btn-md"
              onClick={() => setActiveTab('contact')}
            >
              <span>Contact Our Outreach Desk</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
