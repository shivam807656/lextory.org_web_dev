import React, { useState } from 'react';
import type { NavTab, Initiative } from '../types';
import { INITIATIVES_DATA } from '../data/initiativesData';
import { 
  Target, 
  Users, 
  ListCheck, 
  Award, 
  ArrowRight,
  Filter,
  Sparkles,
  Archive,
  Compass
} from 'lucide-react';

interface InitiativesViewProps {
  setActiveTab: (tab: NavTab) => void;
  onSelectInitiative: (init: Initiative) => void;
}

export const InitiativesView: React.FC<InitiativesViewProps> = ({ 
  setActiveTab, 
  onSelectInitiative 
}) => {
  const [viewMode, setViewMode] = useState<'current' | 'past'>('current');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Initiatives (8)' },
    { id: 'literacy', label: 'Everyday Literacy' },
    { id: 'dispute', label: 'ODR & Dispute Resolution' },
    { id: 'justice', label: 'Legal Aid & NALSA' },
    { id: 'youth', label: 'Youth & Education' },
    { id: 'community', label: 'Community Camps' },
    { id: 'rights', label: 'Women & Child Rights' },
    { id: 'digital', label: 'Cyber & Digital Rights' },
    { id: 'policy', label: 'Research & Policy' }
  ];

  const filteredInitiatives = filterCategory === 'all' 
    ? INITIATIVES_DATA 
    : INITIATIVES_DATA.filter((item) => item.category === filterCategory);

  return (
    <div>
      {/* Header */}
      <section className="section-dark" style={{ padding: '4.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="section-header-left">
            <div className="editorial-tag tag-dark">
              <span>Civic Action & Community Circles</span>
            </div>
            <h1 className="section-title" style={{ color: 'var(--text-light)' }}>
              Our Initiatives & Action Roadmap
            </h1>
            <p className="section-subtitle">
              Structured civic programs designed to bring legal clarity, promote non-adversarial Online Dispute Resolution, 
              and stand beside underserved citizens across India.
            </p>

            {/* Top View Mode Switcher: Active vs Past Initiatives */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setViewMode('current')}
                className={`btn ${viewMode === 'current' ? 'btn-accent' : 'btn-outline-white'} btn-sm`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Compass size={15} />
                <span>8 Foundational Initiatives</span>
              </button>

              <button
                onClick={() => setViewMode('past')}
                className={`btn ${viewMode === 'past' ? 'btn-accent' : 'btn-outline-white'} btn-sm`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Archive size={15} />
                <span>Past Initiatives & Archive</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="section" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          {/* =========================================================================
              VIEW MODE: PAST INITIATIVES ARCHIVE (DE-BOXED)
              ========================================================================= */}
          {viewMode === 'past' ? (
            <div className="past-initiatives-open-layout">
              {/* Left Column */}
              <div>
                <div className="past-archive-badge">
                  <Archive size={16} />
                  <span>Fieldwork in Active Preparation</span>
                </div>
                <h2 className="past-archive-title">Past Initiatives & Field Archive</h2>
                <p className="past-archive-intro">
                  We maintain complete transparency in our public-interest work. Currently, our inaugural 
                  grassroots legal literacy clinics, youth workshops, and mediation camps are in active preparation.
                  As each chapter completes its journey, its documented story, attendee feedback, field photographs, 
                  and community impact will be preserved here.
                </p>
                <div style={{ marginTop: '2.5rem' }}>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setActiveTab('contact')}
                  >
                    <span>Connect with Our Outreach Team</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Right Open Timeline */}
              <div className="past-chapters-timeline">
                <div className="past-chapter-entry">
                  <div className="past-chapter-status">Upcoming Chapter • Rural Legal Aid</div>
                  <h3 className="past-chapter-title">Rural Legal Literacy Clinic</h3>
                  <p className="past-chapter-desc">
                    Reserved for photographic field documentation, village attendee logs, and NALSA legal aid referrals upon completion.
                  </p>
                </div>

                <div className="past-chapter-entry">
                  <div className="past-chapter-status">Upcoming Chapter • Youth Dispute Resolution</div>
                  <h3 className="past-chapter-title">Campus Dispute Resolution Circle</h3>
                  <p className="past-chapter-desc">
                    Reserved for student mediation case studies, feedback summaries, and youth constitutional awareness outcomes.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* =========================================================================
               VIEW MODE: CURRENT 8 INITIATIVES (DE-BOXED Open Editorial Rows)
               ========================================================================= */
            <div>
              {/* Category Filter Pills */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.84rem', fontWeight: 600 }}>
                  <Filter size={15} />
                  <span>Filter by Focus Domain:</span>
                </div>
                <div className="category-pills">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFilterCategory(cat.id)}
                      className={`pill-filter-btn ${filterCategory === cat.id ? 'active' : ''}`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Open Editorial Initiatives List */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {filteredInitiatives.map((init) => (
                  <div 
                    key={init.id}
                    style={{
                      padding: '2.5rem 0',
                      borderBottom: '1px solid var(--border-subtle)',
                      position: 'relative'
                    }}
                  >
                    {/* Header row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.25rem' }}>
                      <div>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem', alignItems: 'center' }}>
                          <span className={`badge-pill ${
                            init.badge === 'Active Outreach' ? 'badge-active' :
                            init.badge === 'Pilot Initiative' ? 'badge-pilot' : 'badge-community'
                          }`}>
                            {init.badge}
                          </span>
                          {init.flagship && (
                            <span className="badge-pill" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold-hover)', border: '1px solid var(--accent-gold-border)' }}>
                              <Sparkles size={12} /> Flagship Focus
                            </span>
                          )}
                        </div>
                        <h2 style={{ fontSize: '1.65rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.25 }}>
                          {init.title}
                        </h2>
                      </div>

                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        {init.id === 'odr-awareness' && (
                          <button 
                            className="btn btn-primary btn-sm"
                            onClick={() => setActiveTab('odr-centre')}
                          >
                            <span>ODR Centre</span>
                            <ArrowRight size={14} />
                          </button>
                        )}
                        <button 
                          className="btn btn-secondary btn-sm"
                          onClick={() => onSelectInitiative(init)}
                        >
                          <span>Examine Full Plan</span>
                        </button>
                      </div>
                    </div>

                    {/* Summary */}
                    <p style={{ fontSize: '1.02rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '880px' }}>
                      {init.summary}
                    </p>

                    {/* 4 Quadrants: Objectives, Beneficiaries, Activities, Outcomes */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '2rem',
                      paddingTop: '1.5rem',
                      borderTop: '1px solid var(--border-subtle)'
                    }}>
                      {/* Objectives */}
                      <div>
                        <h3 style={{ fontSize: '0.85rem', color: 'var(--accent-gold-hover)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem', fontFamily: 'var(--font-sans)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          <Target size={14} /> Core Objectives
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                          {init.objectives.map((obj, i) => (
                            <li key={i} style={{ marginBottom: '0.35rem' }}>{obj}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Beneficiaries */}
                      <div>
                        <h3 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem', fontFamily: 'var(--font-sans)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          <Users size={14} /> Intended Beneficiaries
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                          {init.beneficiaries.map((b, i) => (
                            <li key={i} style={{ marginBottom: '0.35rem' }}>{b}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Proposed Activities */}
                      <div>
                        <h3 style={{ fontSize: '0.85rem', color: 'var(--accent-gold-hover)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem', fontFamily: 'var(--font-sans)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          <ListCheck size={14} /> Proposed Activities
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                          {init.proposedActivities.map((act, i) => (
                            <li key={i} style={{ marginBottom: '0.35rem' }}>{act}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Potential Outcomes */}
                      <div>
                        <h3 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem', fontFamily: 'var(--font-sans)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          <Award size={14} /> Anticipated Outcomes
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                          {init.potentialOutcomes.map((out, i) => (
                            <li key={i} style={{ marginBottom: '0.35rem' }}>{out}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                      <button 
                        className="btn btn-secondary btn-sm"
                        onClick={() => setActiveTab('get-involved')}
                      >
                        <span>Volunteer for this Focus Area</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status Transparency Notice */}
              <div style={{
                marginTop: '3.5rem',
                borderTop: '1px solid var(--border-medium)',
                paddingTop: '1.5rem',
                fontSize: '0.88rem',
                color: 'var(--text-muted)'
              }}>
                <strong style={{ color: 'var(--text-main)' }}>Civic Transparency Note:</strong> We distinguish between active educational outreach and pilot initiatives currently undergoing community volunteer training. We believe in honest impact without exaggeration.
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
