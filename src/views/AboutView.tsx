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
            <h1 className="section-title" style={{ color: 'var(--text-light)' }}>About Lextory Foundation</h1>
            <p className="section-subtitle">
              We are an independent civic circle dedicated to bridging the gap between everyday citizens and the institutions of justice 
              through open legal awareness, accessible dispute resolution, and community empathy.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are & Independent Character (DE-BOXED Open Columns) */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4.5rem', alignItems: 'start' }}>
            <div>
              <div className="editorial-tag">
                <span>Our Guiding Conviction</span>
              </div>
              <h2 style={{ fontSize: '2.3rem', color: 'var(--text-main)', marginBottom: '1.25rem', lineHeight: 1.25 }}>
                A Grassroots Mission for Everyday Legal Clarity
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                In a country of over 1.4 billion people, laws touch every aspect of life, from digital payments and consumer purchases to employment, tenancy, and family dignity. Yet, for millions of ordinary citizens, legal systems feel intimidating, adversarial, and out of reach.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                Lextory Foundation was conceived as an independent, non-commercial public-interest foundation. We do not operate as a commercial law firm, nor do we sell legal products. Our sole purpose is community welfare: making rights understandable, educating citizens on alternative avenues like Online Dispute Resolution (ODR), and helping marginalized groups access statutory legal aid.
              </p>

              <div style={{
                borderLeft: '3px solid var(--accent-gold)',
                paddingLeft: '1.25rem',
                fontSize: '0.95rem',
                color: 'var(--text-main)',
                fontStyle: 'italic'
              }}>
                "Legal literacy is not a luxury for lawyers, but a fundamental civic foundation for every citizen."
              </div>
            </div>

            {/* Charter Column (Open List, No Heavy Box) */}
            <div style={{
              borderLeft: '1px solid var(--border-subtle)',
              paddingLeft: '3rem'
            }}>
              <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <img 
                  src="/images/logo-horizontal.png" 
                  alt="Lextory Foundation" 
                  style={{ height: '42px', width: 'auto', display: 'block' }} 
                />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} color="var(--accent-gold)" />
                <span>Lextory Foundation Charter</span>
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.94rem', color: 'var(--text-body)' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>100% Free & Open:</strong> All educational guides, explainers, and community workshops are accessible to the public without paywalls.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Non-Commercial Focus:</strong> No sales funnels, paid legal representation, or commercial product promotions.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Empirical & Objective:</strong> We present statutory remedies and dispute resolution mechanisms with balanced clarity.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Community Centred:</strong> Designed to serve students, informal workers, consumers, and underserved populations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section (DE-BOXED Open Grid) */}
      <section className="section" style={{ background: 'var(--bg-page)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <div className="editorial-tag">
              <span>Direction & Purpose</span>
            </div>
            <h2 className="section-title">Mission and Vision</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
            {/* Mission */}
            <div style={{ borderTop: '2px solid var(--accent-gold)', paddingTop: '2rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold-hover)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                <Target size={16} />
                <span>Our Mission</span>
              </div>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--text-main)', marginBottom: '1rem' }}>To Bridge the Gap Between People and Justice</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '0.98rem' }}>
                To bridge the gap between people and justice by promoting legal awareness, accessible dispute resolution, education, and community empowerment.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '0.98rem', marginTop: '0.75rem' }}>
                We aim to ensure that individuals, regardless of their financial or social circumstances, can better understand their legal rights, available remedies, and the institutions through which justice may be pursued with peace of mind.
              </p>
            </div>

            {/* Vision */}
            <div style={{ borderTop: '2px solid var(--structural-dark)', paddingTop: '2rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                <Eye size={16} />
                <span>Our Vision</span>
              </div>
              <h3 style={{ fontSize: '1.45rem', color: 'var(--text-main)', marginBottom: '1rem' }}>A Legally Empowered & Harmonious Society</h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '0.98rem' }}>
                To build a society where legal awareness is widespread, justice is accessible, disputes can be resolved through informed and appropriate processes, and every individual has the knowledge and confidence to understand and exercise their rights.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.75, fontSize: '0.98rem', marginTop: '0.75rem' }}>
                We envision communities equipped with peaceful conflict-resolution skills, where courts are relieved of avoidable burdens, and where justice is experienced as a living human dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our 5 Guiding Values (DE-BOXED Open Editorial Manifesto) */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <div className="editorial-tag">
              <span>Ethical Foundation</span>
            </div>
            <h2 className="section-title">Our Five Core Values</h2>
            <p className="section-subtitle">
              The fundamental principles that guide every article, workshop, and community outreach initiative we develop.
            </p>
          </div>

          <div className="editorial-flow-list" style={{ maxWidth: '880px', margin: '0 auto' }}>
            {/* Value 1 */}
            <div className="editorial-flow-item">
              <span className="editorial-flow-number">01</span>
              <div>
                <h3 className="editorial-flow-title">Accessibility — Plain Language First</h3>
                <p className="editorial-flow-desc">
                  We translate complex judicial rulings, statutory provisions, and procedural rules into straightforward, digestible vernacular language so any citizen can understand their rights.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="editorial-flow-item">
              <span className="editorial-flow-number">02</span>
              <div>
                <h3 className="editorial-flow-title">Inclusivity — Reaching the Underserved</h3>
                <p className="editorial-flow-desc">
                  Active consideration of citizens experiencing economic hurdles, linguistic barriers, and the digital divide through grassroots community drives and localized legal aid referrals.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="editorial-flow-item">
              <span className="editorial-flow-number">03</span>
              <div>
                <h3 className="editorial-flow-title">Integrity — Neutral & Responsible</h3>
                <p className="editorial-flow-desc">
                  We do not sensationalize or make false promises. We provide verified, dated, and legally grounded information that citizens and institutions can trust without ambiguity.
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="editorial-flow-item">
              <span className="editorial-flow-number">04</span>
              <div>
                <h3 className="editorial-flow-title">Transparency — Clear Disclosures</h3>
                <p className="editorial-flow-desc">
                  We openly communicate our civic nature, distinguishing educational material from case-specific legal counsel, and never monetizing citizen vulnerability.
                </p>
              </div>
            </div>

            {/* Value 5 */}
            <div className="editorial-flow-item">
              <span className="editorial-flow-number">05</span>
              <div>
                <h3 className="editorial-flow-title">Public Welfare — Common Good Focus</h3>
                <p className="editorial-flow-desc">
                  Every programme is designed for social empowerment and public benefit rather than commercial or proprietary interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community-Centred Commitment */}
      <section className="section" style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="editorial-tag">
            <span>Our Social Pledge</span>
          </div>
          <h2 className="section-title">Rooted in People, Guided by Justice</h2>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.75, color: 'var(--text-body)', marginBottom: '2rem' }}>
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
