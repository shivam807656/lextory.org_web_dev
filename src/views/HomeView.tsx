import React from 'react';
import type { NavTab, Initiative, ResourceItem } from '../types';
import { RESOURCES_DATA } from '../data/resourcesData';
import { 
  ArrowRight, 
  BookOpen, 
  HeartHandshake, 
  Heart,
  Flame,
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
          Hero Section (GodsGrace Editorial Warm Cream & Monument Aesthetic)
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
                <Sparkles size={15} color="#d85d38" />
                <span>An independent, non-commercial public interest effort by Lextory Foundation.</span>
              </div>
            </div>

            {/* Right Visual Art Composition (Terracotta Sun Disc + Grid + Monument) */}
            <div className="hero-art-wrapper" aria-hidden="true">
              {/* Sun Disc */}
              <div className="hero-sun-disc"></div>
              
              {/* Perspective Grid Accent */}
              <div className="hero-grid-accent"></div>

              {/* Classical Monument Artwork */}
              <div className="hero-monument-frame">
                <img 
                  src="/images/hero_monument.jpg" 
                  alt="Classical architecture representing sanctuary and dignified justice" 
                  className="hero-monument-img"
                />
              </div>

              {/* Floating Quote */}
              <div className="hero-floating-quote">
                <p>"Where dignity meets understanding."</p>
                <span>Community Sanctuary</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Mid-Section: Signature Deep Plum Sanctuary Block
          (Matching GodsGrace center row with diamond ornament)
          ========================================================================= */}
      <section className="sanctuary-block" aria-label="Sanctuary Vision">
        {/* Subtle grid in background corners */}
        <div className="grid-wireframe-dark" style={{ top: 0, left: 0, width: '220px', height: '100%' }}></div>
        <div className="grid-wireframe-dark" style={{ bottom: 0, right: 0, width: '220px', height: '100%' }}></div>

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
          Pillars of Care & Empathy
          (Matching GodsGrace 4 warm minimalist icon pillars)
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

            {/* Right Four Minimalist Icon Pillars */}
            <div className="four-icons-grid">
              {/* Pillar 1: Our Conviction */}
              <div className="icon-pillar-item">
                <div className="icon-pillar-symbol symbol-terracotta">
                  <BookOpen size={22} />
                </div>
                <h3 className="icon-pillar-title">Our Conviction</h3>
                <p className="icon-pillar-desc">
                  The law exists to protect human lives, not to intimidate them. True justice begins with open, plain-language knowledge for every citizen.
                </p>
              </div>

              {/* Pillar 2: Walk Beside Others */}
              <div className="icon-pillar-item">
                <div className="icon-pillar-symbol symbol-peach">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="icon-pillar-title">Walk Beside Others</h3>
                <p className="icon-pillar-desc">
                  Standing beside families, workers, and youth to help them understand statutory protections and free legal aid without feeling alone.
                </p>
              </div>

              {/* Pillar 3: Peaceful Resolution */}
              <div className="icon-pillar-item">
                <div className="icon-pillar-symbol symbol-plum">
                  <Flame size={22} />
                </div>
                <h3 className="icon-pillar-title">Peaceful Resolution</h3>
                <p className="icon-pillar-desc">
                  Championing consensual mediation and ODR so disputes are settled fairly, preserving relationships and saving emotional exhaustion.
                </p>
              </div>

              {/* Pillar 4: Open Compassion */}
              <div className="icon-pillar-item">
                <div className="icon-pillar-symbol symbol-rose">
                  <Heart size={22} />
                </div>
                <h3 className="icon-pillar-title">Open Compassion</h3>
                <p className="icon-pillar-desc">
                  Free public resources, vernacular guides, and voluntary community service with zero commercial fees or barriers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Dedicated Past Initiatives & Completed Chapters Showcase
          (Specifically requested: "make icon for our past initiatives to put things there")
          ========================================================================= */}
      <section className="past-initiatives-section" id="past-initiatives" aria-label="Past Initiatives Archive">
        <div className="container">
          <div className="past-initiatives-card">
            {/* Header with designated Past Initiatives Icon */}
            <div className="past-initiatives-header">
              <div className="past-initiatives-icon-badge" title="Past Initiatives & Community Archive">
                <Archive size={32} />
              </div>

              <div className="past-initiatives-title-group">
                <div className="past-status-pill">
                  <span>Community Fieldwork in Preparation</span>
                </div>
                <h2 className="past-initiatives-title">Past Initiatives & Completed Chapters</h2>
                <p className="past-initiatives-intro">
                  Every meaningful tree begins with quiet roots. We are currently laying our foundational fieldwork 
                  with community volunteers and student fellows. As each legal literacy clinic, ODR workshop, 
                  and grassroots outreach drive concludes, its documented story, citizen voices, and photo archive will be preserved here.
                </p>
              </div>
            </div>

            {/* Designated Slots for Upcoming & Documented Initiatives */}
            <div className="initiative-slots-grid">
              {/* Slot 1 */}
              <div className="initiative-slot-box">
                <div className="slot-tag">Upcoming Chapter • Legal Literacy Clinic</div>
                <h3 className="slot-title">Community Legal Literacy Camp</h3>
                <p className="slot-desc">
                  Reserved for field documentation, attendee reflections, and statutory legal aid referrals from our inaugural community clinic.
                </p>
              </div>

              {/* Slot 2 */}
              <div className="initiative-slot-box">
                <div className="slot-tag">Upcoming Chapter • Youth Dialogue</div>
                <h3 className="slot-title">Campus Youth ODR & Mediation Dialogue</h3>
                <p className="slot-desc">
                  Reserved for university workshop case studies, student mediator training records, and youth dispute resolution insights.
                </p>
              </div>
            </div>

            {/* Footer action for the past initiatives archive */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Have an initiative idea or want to co-host a drive in your neighborhood?
              </span>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => setActiveTab('contact')}
              >
                <span>Propose an Initiative</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          Minimalist Open Knowledge & Statutory Help
          (Very less text, high emotional comfort)
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }} aria-label="Statutory Legal Knowledge">
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Guide 1: NALSA Free Legal Aid */}
            <div className="resource-card" style={{ borderLeft: '3px solid var(--terracotta-500)' }}>
              <div className="resource-meta-row">
                <span className="resource-category-tag">Statutory Protection</span>
                <span>4 min read</span>
              </div>
              <h3 className="resource-title">Do You Know You May Qualify for Free Legal Aid?</h3>
              <p className="resource-summary">
                Under Section 12 of the Legal Services Authorities Act, women, children, workers, and citizens with limited income are entitled to state-funded legal representation.
              </p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--plum-900)' }}>
                  NALSA Toll-Free: <strong>15100</strong>
                </span>
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
            <div className="resource-card" style={{ borderLeft: '3px solid var(--peach-500)' }}>
              <div className="resource-meta-row">
                <span className="resource-category-tag">Everyday Protection</span>
                <span>5 min read</span>
              </div>
              <h3 className="resource-title">Resolving Consumer Grievances Without Fear</h3>
              <p className="resource-summary">
                How ordinary buyers and service users can submit claims through the National Consumer Helpline and online mediation portals with zero courtroom anxiety.
              </p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--plum-900)' }}>
                  Consumer Helpline: <strong>1915</strong>
                </span>
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

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
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
          Quiet Invitation to Walk Together
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: 'var(--cream-50)' }} aria-label="Join Us">
        <div className="container">
          <div style={{
            backgroundColor: 'var(--plum-800)',
            borderRadius: 'var(--radius-lg)',
            padding: '3.5rem',
            color: 'var(--white)',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3rem',
            alignItems: 'center',
            boxShadow: 'var(--shadow-plum)'
          }}>
            <div>
              <div className="editorial-tag tag-dark">
                <span>Join Our Circle</span>
              </div>
              <h2 style={{ fontSize: '2.1rem', color: 'var(--white)', marginBottom: '1rem', lineHeight: 1.25 }}>
                Be the Voice of Understanding in Your Neighborhood.
              </h2>
              <p style={{ color: '#d6cee3', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
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
                  className="btn btn-outline-white btn-lg"
                  onClick={() => setActiveTab('contact')}
                >
                  <span>Contact Our Desk</span>
                </button>
              </div>
            </div>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem'
            }}>
              <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--peach-300)', fontWeight: 600, marginBottom: '0.75rem' }}>
                Statutory Citizen Assistance
              </div>
              <div style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--white)', marginBottom: '0.75rem' }}>
                Need Immediate Public Legal Guidance?
              </div>
              <p style={{ fontSize: '0.88rem', color: '#c4b9d5', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Free legal advice is provided nationally by the National Legal Services Authority (NALSA) 24 hours a day, 7 days a week.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--peach-400)', fontWeight: 700, fontSize: '1.1rem' }}>
                <PhoneCall size={18} />
                <span>Dial 15100 (Toll-Free)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
