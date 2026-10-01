import React from 'react';
import type { NavTab, Initiative, ResourceItem } from '../types';
import { RESOURCES_DATA } from '../data/resourcesData';
import { 
  ArrowRight, 
  Archive,
  PhoneCall,
  Sparkles
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: NavTab) => void;
  onSelectInitiative: (init: Initiative) => void;
  onSelectResource: (res: ResourceItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ 
  setActiveTab, 
  onSelectResource 
}) => {
  return (
    <div>
      {/* =========================================================================
          Hero Section (Dignified Editorial Warm Linen & Logo Palette)
          ========================================================================= */}
      <section className="hero-section" aria-label="Introduction">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content">
              <div className="editorial-tag">
                <span>We Simply Believe in Dignified Justice</span>
              </div>

              <h1 className="hero-title">
                A Gentle Hand For <em>Everyday Justice.</em>
              </h1>

              <p className="hero-description">
                When people encounter legal hardship, they often feel small, unheard, and overwhelmed. 
                We are a community-led circle walking beside ordinary citizens to bring calm understanding, 
                quiet dignity, and peaceful dispute resolution to all.
              </p>

              <div className="hero-actions">
                <button 
                  className="btn btn-primary btn-lg" 
                  onClick={() => setActiveTab('about')}
                >
                  <span>About Our Purpose</span>
                  <ArrowRight size={17} />
                </button>

                <button 
                  className="btn btn-secondary btn-lg"
                  onClick={() => setActiveTab('initiatives')}
                >
                  <span>Explore Initiatives</span>
                </button>
              </div>

              <div className="hero-notice">
                <Sparkles size={15} color="var(--accent-gold)" />
                <span>An independent, non-commercial public interest effort by Lextory Foundation.</span>
              </div>
            </div>

            {/* Right Visual Photographic Composition (Clean, Human & Free of Gimmicks) */}
            <div className="hero-art-wrapper" aria-hidden="true">
              <div className="hero-monument-frame">
                <img 
                  src="/images/hero_monument.jpg" 
                  alt="Classical architecture representing sanctuary and dignified justice" 
                  className="hero-monument-img"
                />
              </div>
              <div className="hero-caption-note">
                <span>✦ Community sanctuary dedicated to peaceful dialogue & everyday justice.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Mid-Section: Structural Sanctuary Vision (Deep Charcoal & Logo Gold)
          ========================================================================= */}
      <section className="sanctuary-block" aria-label="Sanctuary Vision">
        <div className="container">
          <div className="sanctuary-inner">
            <div className="editorial-tag tag-dark">
              <span>Peaceful dialogue & human healing</span>
            </div>

            <h2 className="sanctuary-headline">
              We believe justice is not a battlefield, but a quiet path to <em>peace, dignity, and being heard.</em>
            </h2>

            <p className="sanctuary-text">
              Every dispute carries human heartache. Through Online Dispute Resolution (ODR) and compassionate mediation, 
              we help citizens, families, and small creators resolve differences respectfully without bitter battles or crushing expenses.
            </p>

            <div>
              <button 
                className="btn btn-cream btn-lg"
                onClick={() => setActiveTab('odr-centre')}
              >
                <span>Visit ODR Awareness Centre</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Pillars of Care & Empathy (DE-BOXED: Open Editorial Numbered Flow)
          ========================================================================= */}
      <section className="pillars-section" aria-label="Our Guiding Values">
        <div className="container">
          <div className="pillars-grid-layout">
            {/* Left Headline Column */}
            <div className="pillars-headline-col">
              <div className="editorial-tag">
                <span>Growing Together in Empathy</span>
              </div>
              <h2 className="pillars-title">
                Helping you find clarity and inner peace.
              </h2>
              <p className="pillars-subtitle">
                A community sanctuary dedicated to demystifying the law, standing beside the vulnerable, 
                and replacing procedural anxiety with informed confidence.
              </p>
            </div>

            {/* Right Open Numbered Flow (Breathable, No Boxes) */}
            <div className="editorial-flow-list">
              {/* 01: Our Conviction */}
              <div className="editorial-flow-item">
                <span className="editorial-flow-number">01</span>
                <div>
                  <h3 className="editorial-flow-title">Our Conviction</h3>
                  <p className="editorial-flow-desc">
                    The law exists to protect human lives, not to intimidate them. True justice begins with open, plain-language knowledge for every citizen.
                  </p>
                </div>
              </div>

              {/* 02: Walk Beside Others */}
              <div className="editorial-flow-item">
                <span className="editorial-flow-number">02</span>
                <div>
                  <h3 className="editorial-flow-title">Walk Beside Others</h3>
                  <p className="editorial-flow-desc">
                    Standing beside families, workers, and youth to help them understand statutory protections and free legal aid without feeling alone.
                  </p>
                </div>
              </div>

              {/* 03: Peaceful Resolution */}
              <div className="editorial-flow-item">
                <span className="editorial-flow-number">03</span>
                <div>
                  <h3 className="editorial-flow-title">Peaceful Resolution</h3>
                  <p className="editorial-flow-desc">
                    Championing consensual mediation and ODR so disputes are settled fairly, preserving relationships and saving emotional exhaustion.
                  </p>
                </div>
              </div>

              {/* 04: Open Compassion */}
              <div className="editorial-flow-item">
                <span className="editorial-flow-number">04</span>
                <div>
                  <h3 className="editorial-flow-title">Open Compassion</h3>
                  <p className="editorial-flow-desc">
                    Free public resources, vernacular guides, and voluntary community service with zero commercial fees or barriers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Dedicated Past Initiatives Archive (DE-BOXED: Open Editorial Timeline)
          ========================================================================= */}
      <section className="past-initiatives-section" id="past-initiatives" aria-label="Past Initiatives Archive">
        <div className="container">
          <div className="past-initiatives-open-layout">
            {/* Left Header Column */}
            <div>
              <div className="past-archive-badge">
                <Archive size={16} />
                <span>Fieldwork in Preparation</span>
              </div>
              <h2 className="past-archive-title">Past Initiatives & Completed Chapters</h2>
              <p className="past-archive-intro">
                Every meaningful tree begins with quiet roots. We are currently laying our foundational fieldwork 
                with community volunteers and student fellows. As each legal literacy clinic, ODR workshop, 
                and grassroots outreach drive concludes, its documented story, citizen voices, and photo archive will be preserved here.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => setActiveTab('contact')}
                >
                  <span>Propose an Initiative</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right Open Timeline Entries */}
            <div className="past-chapters-timeline">
              <div className="past-chapter-entry">
                <div className="past-chapter-status">Upcoming Chapter • Legal Literacy Clinic</div>
                <h3 className="past-chapter-title">Community Legal Literacy Camp</h3>
                <p className="past-chapter-desc">
                  Reserved for field documentation, attendee reflections, and statutory legal aid referrals from our inaugural community clinic.
                </p>
              </div>

              <div className="past-chapter-entry">
                <div className="past-chapter-status">Upcoming Chapter • Youth Dialogue</div>
                <h3 className="past-chapter-title">Campus Youth ODR & Mediation Dialogue</h3>
                <p className="past-chapter-desc">
                  Reserved for university workshop case studies, student mediator training records, and youth dispute resolution insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Minimalist Open Knowledge & Plain-Language Explainers (DE-BOXED)
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }} aria-label="Statutory Legal Knowledge">
        <div className="container">
          <div className="section-header">
            <div className="editorial-tag">
              <span>Open Civic Guidance</span>
            </div>
            <h2 className="section-title">Knowledge For Your Peace of Mind</h2>
            <p className="section-subtitle">
              Simple, plain-language guides to help you understand your basic rights under Indian law.
            </p>
          </div>

          <div className="editorial-articles-list">
            {/* Guide 1: NALSA Free Legal Aid */}
            <div className="editorial-article-row">
              <div>
                <div className="editorial-article-meta">
                  <span className="editorial-article-category">Statutory Protection</span>
                  <span>•</span>
                  <span>4 min read</span>
                  <span>•</span>
                  <span>NALSA Toll-Free: <strong>15100</strong></span>
                </div>
                <h3 className="editorial-article-title">Do You Know You May Qualify for Free Legal Aid?</h3>
                <p className="editorial-article-summary">
                  Under Section 12 of the Legal Services Authorities Act, women, children, workers, and citizens with limited income are entitled to state-funded legal representation.
                </p>
              </div>
              <div>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    const legalAidRes = RESOURCES_DATA.find((r) => r.id === 'res-nalsa-free-legal-aid');
                    if (legalAidRes) onSelectResource(legalAidRes);
                    else setActiveTab('resources');
                  }}
                >
                  <span>Read Guide</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Guide 2: Consumer Dispute Resolution */}
            <div className="editorial-article-row">
              <div>
                <div className="editorial-article-meta">
                  <span className="editorial-article-category">Everyday Protection</span>
                  <span>•</span>
                  <span>5 min read</span>
                  <span>•</span>
                  <span>Consumer Helpline: <strong>1915</strong></span>
                </div>
                <h3 className="editorial-article-title">Resolving Consumer Grievances Without Fear</h3>
                <p className="editorial-article-summary">
                  How ordinary buyers and service users can submit claims through the National Consumer Helpline and online mediation portals with zero courtroom anxiety.
                </p>
              </div>
              <div>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    const consumerRes = RESOURCES_DATA.find((r) => r.id === 'res-consumer-redressal-portal');
                    if (consumerRes) onSelectResource(consumerRes);
                    else setActiveTab('resources');
                  }}
                >
                  <span>Read Guide</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button 
              className="btn btn-primary btn-md"
              onClick={() => setActiveTab('resources')}
            >
              <span>Explore All Plain-Language Explainers</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Quiet Invitation to Walk Together (DE-BOXED Open Sanctuary)
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-subtle)' }} aria-label="Join Us">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <div className="editorial-tag">
                <span>Join Our Circle</span>
              </div>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: 1.2 }}>
                Be the Voice of Understanding in Your Neighborhood.
              </h2>
              <p style={{ color: 'var(--text-body)', fontSize: '1.08rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Whether you are a law student eager to translate confusing statutes into simple language, 
                an empathetic advocate, or an active citizen, your compassion can bring peace of mind to someone facing hardship.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-accent btn-lg"
                  onClick={() => setActiveTab('get-involved')}
                >
                  <span>Join as Volunteer</span>
                  <ArrowRight size={17} />
                </button>
                <button 
                  className="btn btn-secondary btn-lg"
                  onClick={() => setActiveTab('contact')}
                >
                  <span>Contact Our Desk</span>
                </button>
              </div>
            </div>

            <div style={{
              borderLeft: '1px solid var(--border-medium)',
              paddingLeft: '2.5rem'
            }}>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-gold-hover)', fontWeight: 600, marginBottom: '0.5rem' }}>
                Statutory Citizen Assistance
              </div>
              <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--text-main)', marginBottom: '0.75rem', fontWeight: 600 }}>
                Need Immediate Public Legal Guidance?
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                Free legal advice is provided nationally by the National Legal Services Authority (NALSA) 24 hours a day, 7 days a week.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontWeight: 700, fontSize: '1.15rem' }}>
                <PhoneCall size={18} color="var(--accent-gold)" />
                <span>Dial 15100 (Toll-Free)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
